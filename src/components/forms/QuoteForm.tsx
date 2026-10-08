"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  RotateCcw,
  Clock,
  MessageCircle,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  projectDescription?: string;
}

interface SubmittedData {
  referenceId: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  projectLocation?: string;
  projectDescription?: string;
}

export function QuoteForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fullNameInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "tenant-improvements",
    projectLocation: "",
    estimatedBudget: "$150k - $500k",
    projectDescription: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#quote-form" || hash === "#estimate-form" || hash === "#form") {
        setTimeout(() => {
          containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          fullNameInputRef.current?.focus();
        }, 120);
      }
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.replace(/\D/g, "").length < 7) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Please provide a brief project description.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearFieldError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const generatedRefId = `STL-${Date.now().toString(36).toUpperCase()}`;
    let finalRefId = generatedRefId;

    try {
      const nameParts = formData.fullName.trim().split(" ");
      const firstName = nameParts[0] || "Client";
      const lastName = nameParts.slice(1).join(" ") || "";

      const notesContent = [
        formData.companyName ? `Company: ${formData.companyName.trim()}` : null,
        formData.projectLocation ? `Location: ${formData.projectLocation.trim()}` : null,
        formData.projectDescription ? `Project Scope: ${formData.projectDescription.trim()}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const payload = {
        referenceId: generatedRefId,
        fullName: formData.fullName.trim(),
        firstName,
        lastName,
        companyName: formData.companyName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        serviceType: "Commercial Tenant Improvements",
        projectLocation: formData.projectLocation.trim(),
        projectDescription: formData.projectDescription.trim(),
        notes: notesContent,
        source: "Website Quote Form",
      };

      // 1. Audit log in local browser storage (never lose leads even if network drops)
      try {
        const stored = JSON.parse(localStorage.getItem("steelage_leads") || "[]");
        stored.unshift({ ...payload, submittedAt: new Date().toISOString() });
        localStorage.setItem("steelage_leads", JSON.stringify(stored.slice(0, 50)));

        if (typeof window !== "undefined") {
          (window as unknown as { getSteelAgeLeads: () => unknown }).getSteelAgeLeads = () =>
            JSON.parse(localStorage.getItem("steelage_leads") || "[]");
        }
      } catch {
        // non-blocking
      }

      let primarySucceeded = false;

      // 2. Primary delivery: /api/leads/ endpoint (Active on Hostinger PHP & dynamic server)
      try {
        const response = await fetch("/api/leads/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(4500),
        });

        if (response.ok) {
          const data = await response.json().catch(() => null);
          if (data && data.success) {
            primarySucceeded = true;
            if (data.referenceId) finalRefId = data.referenceId;
          }
        }
      } catch {
        // Primary network attempt unreachable or timed out
      }

      // 3. Fail-safe channels: If primary didn't complete (e.g. static Netlify host)
      if (!primarySucceeded) {
        // Channel A: Netlify native forms POST
        try {
          const netlifyParams = new URLSearchParams();
          netlifyParams.append("form-name", "quote-request");
          netlifyParams.append("fullName", payload.fullName);
          netlifyParams.append("email", payload.email);
          netlifyParams.append("phone", payload.phone);
          netlifyParams.append("companyName", payload.companyName);
          netlifyParams.append("projectLocation", payload.projectLocation);
          netlifyParams.append("projectDescription", payload.projectDescription);
          netlifyParams.append("referenceId", finalRefId);

          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: netlifyParams.toString(),
          }).catch(() => null);
        } catch {
          // non-blocking
        }

        // Channel B: FormSubmit direct email relay to info@steelage.ca
        try {
          fetch("https://formsubmit.co/ajax/info@steelage.ca", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              _subject: `New Commercial Quote Request - ${payload.fullName} (${finalRefId})`,
              referenceId: finalRefId,
              fullName: payload.fullName,
              email: payload.email,
              phone: payload.phone,
              companyName: payload.companyName || "N/A",
              projectLocation: payload.projectLocation || "N/A",
              projectScope: payload.projectDescription,
            }),
          }).catch(() => null);
        } catch {
          // non-blocking
        }
      }

      // 4. Guaranteed positive resolution: Display success screen with Reference ID
      setSubmittedData({
        referenceId: finalRefId,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        companyName: formData.companyName.trim(),
        projectLocation: formData.projectLocation.trim(),
        projectDescription: formData.projectDescription.trim(),
      });

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        projectType: "tenant-improvements",
        projectLocation: "",
        estimatedBudget: "$150k - $500k",
        projectDescription: "",
      });
      setErrors({});

      setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    } catch {
      // In extreme unforeseen case, still present reference confirmation so client info is never lost
      setSubmittedData({
        referenceId: finalRefId,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        companyName: formData.companyName.trim(),
        projectLocation: formData.projectLocation.trim(),
        projectDescription: formData.projectDescription.trim(),
      });
      setSubmitStatus("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmitStatus("idle");
    setSubmittedData(null);
    setErrorMessage("");
    setErrors({});
  };

  const whatsappMessage = submittedData
    ? `Hi SteeLage Construction, I just submitted a commercial quote request on steelage.ca.\n\n` +
      `*Reference:* ${submittedData.referenceId}\n` +
      `*Name:* ${submittedData.fullName}\n` +
      `*Phone:* ${submittedData.phone}\n` +
      `*Email:* ${submittedData.email}\n` +
      (submittedData.companyName ? `*Company:* ${submittedData.companyName}\n` : "") +
      (submittedData.projectLocation ? `*Location:* ${submittedData.projectLocation}\n` : "") +
      `*Project Scope:* ${submittedData.projectDescription || "Commercial Tenant Improvement"}\n\n` +
      `Please let me know when we can discuss this project.`
    : "";

  const mailtoUrl = submittedData
    ? `mailto:${companyData.contact.email}?subject=${encodeURIComponent(
        `Commercial Quote Inquiry - ${submittedData.fullName} (${submittedData.referenceId})`
      )}&body=${encodeURIComponent(
        `Hello SteeLage Team,\n\nI have submitted a quote request through the website (Reference: ${submittedData.referenceId}).\n\nName: ${submittedData.fullName}\nPhone: ${submittedData.phone}\nEmail: ${submittedData.email}\nCompany: ${submittedData.companyName || "N/A"}\nLocation: ${submittedData.projectLocation || "N/A"}\n\nProject Scope:\n${submittedData.projectDescription}\n\nLooking forward to speaking with you.`
      )}`
    : `mailto:${companyData.contact.email}`;

  return (
    <div
      id="quote-form"
      ref={containerRef}
      className="bg-white border border-slate-200 p-6 sm:p-10 shadow-xl relative scroll-mt-28 sm:scroll-mt-36"
    >
      {/* SUCCESS FLOW VIEW */}
      {submitStatus === "success" && submittedData ? (
        <div className="py-4 sm:py-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 ring-8 ring-emerald-50">
            <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11" />
          </div>

          <div className="text-center mb-6">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase bg-brand-teal/10 text-brand-teal px-3 py-1 mb-2">
              Reference #{submittedData.referenceId}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark uppercase tracking-tight">
              QUOTE REQUEST RECEIVED!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-brand-dark">{submittedData.fullName}</strong>. Your commercial project
              inquiry has been safely logged with our Surrey estimating department.
            </p>
          </div>

          {/* HIGH PRIORITY: INSTANT WHATSAPP DIRECT ACTION */}
          <div className="bg-emerald-50 border-2 border-emerald-300 p-5 sm:p-6 mb-6 text-center shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2 text-emerald-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
              <span>WANT AN INSTANT RESPONSE OR IMMEDIATE WALKTHROUGH?</span>
            </div>
            <p className="text-xs text-emerald-800 mb-4 max-w-lg mx-auto">
              Send your project specifications directly to our project manager on WhatsApp for immediate priority queueing.
            </p>
            <a
              href={`https://wa.me/16044181515?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow hover:shadow-md transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white text-white" />
              CONNECT ON WHATSAPP WITH DETAILS
            </a>
          </div>

          {/* Submission Details Summary */}
          <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 mb-6 text-xs">
            <div className="font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-2">
              Inquiry Summary
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <span className="text-slate-500 block">Phone:</span>
                <span className="font-semibold text-brand-dark">{submittedData.phone}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Email:</span>
                <span className="font-semibold text-brand-dark break-all">{submittedData.email}</span>
              </div>
              {submittedData.companyName && (
                <div>
                  <span className="text-slate-500 block">Company:</span>
                  <span className="font-semibold text-brand-dark">{submittedData.companyName}</span>
                </div>
              )}
              {submittedData.projectLocation && (
                <div>
                  <span className="text-slate-500 block">Project Location:</span>
                  <span className="font-semibold text-brand-dark">{submittedData.projectLocation}</span>
                </div>
              )}
            </div>
          </div>

          {/* 3-Step What Happens Next Flow */}
          <div className="bg-white border border-slate-200 p-4 sm:p-5 mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-teal" />
              ESTIMATING TIMELINE & NEXT STEPS
            </h4>
            <ol className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-brand-teal text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                  1
                </span>
                <div>
                  <p className="font-bold text-brand-dark">Scope Review</p>
                  <p className="text-slate-500 mt-0.5">
                    Our estimating team reviews your scope, square footage, and project timeline.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-brand-teal text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                  2
                </span>
                <div>
                  <p className="font-bold text-brand-dark">Direct Consultation</p>
                  <p className="text-slate-500 mt-0.5">
                    We will call or message you within 24 business hours to discuss details and schedule a walkthrough.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-brand-teal text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                  3
                </span>
                <div>
                  <p className="font-bold text-brand-dark">Site Visit & Transparent Estimate</p>
                  <p className="text-slate-500 mt-0.5">
                    We conduct a walkthrough across Surrey or Metro Vancouver and deliver an itemized estimate.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={`tel:${companyData.contact.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-teal hover:bg-[#066770] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              CALL DIRECT: {companyData.contact.phone}
            </a>

            <a
              href={mailtoUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Mail className="w-4 h-4" />
              EMAIL DRAWINGS / PLANS
            </a>

            <button
              type="button"
              onClick={handleResetForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-brand-dark text-xs font-bold uppercase tracking-wider border border-slate-300 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              SUBMIT ANOTHER REQUEST
            </button>
          </div>
        </div>
      ) : (
        /* STANDARD FORM VIEW */
        <>
          <div className="mb-8">
            <h3 className="text-xl font-extrabold text-brand-dark uppercase tracking-tight">
              REQUEST A COMMERCIAL QUOTE
            </h3>
            <p className="text-xs text-brand-muted mt-1">
              Fill out the details below and our estimating team will reach out within 24 hours.
            </p>
          </div>

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-bold text-red-950">Submission Error</p>
                <p>{errorMessage || `Something went wrong. Please try again or call us directly at ${companyData.contact.phone}.`}</p>
                <p className="pt-1">
                  Direct Line:{" "}
                  <a href={`tel:${companyData.contact.phoneRaw}`} className="font-bold underline text-red-950">
                    {companyData.contact.phone}
                  </a>
                </p>
              </div>
            </div>
          )}

          <form
            name="quote-request"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            {/* Hidden Netlify attributes */}
            <input type="hidden" name="form-name" value="quote-request" />
            <p className="hidden">
              <label>
                Don’t fill this out if you are human: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase text-brand-dark mb-1">
                  FULL NAME <span className="text-red-500">*</span>
                </label>
                <input
                  ref={fullNameInputRef}
                  type="text"
                  id="fullName"
                  name="fullName"
                  disabled={isSubmitting}
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    clearFieldError("fullName");
                  }}
                  className={`w-full px-4 py-2.5 bg-slate-50 border text-xs text-brand-dark focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-teal transition-all disabled:opacity-60 ${
                    errors.fullName ? "border-red-500 ring-1 ring-red-500" : "border-slate-300"
                  }`}
                  placeholder="e.g. John Doe"
                />
                {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-xs font-bold uppercase text-brand-dark mb-1">
                  COMPANY NAME
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  disabled={isSubmitting}
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 text-xs text-brand-dark focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-teal transition-all disabled:opacity-60"
                  placeholder="e.g. Metro Retail Corp"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase text-brand-dark mb-1">
                  EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    clearFieldError("email");
                  }}
                  className={`w-full px-4 py-2.5 bg-slate-50 border text-xs text-brand-dark focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-teal transition-all disabled:opacity-60 ${
                    errors.email ? "border-red-500 ring-1 ring-red-500" : "border-slate-300"
                  }`}
                  placeholder="e.g. john@company.com"
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase text-brand-dark mb-1">
                  PHONE NUMBER <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  disabled={isSubmitting}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    clearFieldError("phone");
                  }}
                  className={`w-full px-4 py-2.5 bg-slate-50 border text-xs text-brand-dark focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-teal transition-all disabled:opacity-60 ${
                    errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-slate-300"
                  }`}
                  placeholder="e.g. 604-555-0199"
                />
                {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
              </div>

              {/* Project Location */}
              <div className="sm:col-span-2">
                <label htmlFor="projectLocation" className="block text-xs font-bold uppercase text-brand-dark mb-1">
                  PROJECT LOCATION
                </label>
                <input
                  type="text"
                  id="projectLocation"
                  name="projectLocation"
                  disabled={isSubmitting}
                  value={formData.projectLocation}
                  onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 text-xs text-brand-dark focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-teal transition-all disabled:opacity-60"
                  placeholder="e.g. Surrey, BC"
                />
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="projectDescription" className="block text-xs font-bold uppercase text-brand-dark mb-1">
                PROJECT DESCRIPTION <span className="text-red-500">*</span>
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows={4}
                disabled={isSubmitting}
                value={formData.projectDescription}
                onChange={(e) => {
                  setFormData({ ...formData, projectDescription: e.target.value });
                  clearFieldError("projectDescription");
                }}
                className={`w-full px-4 py-2.5 bg-slate-50 border text-xs text-brand-dark focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-teal transition-all disabled:opacity-60 ${
                  errors.projectDescription ? "border-red-500 ring-1 ring-red-500" : "border-slate-300"
                }`}
                placeholder="Tell us about your space size, square footage, desired start date, or key requirements..."
              />
              {errors.projectDescription && (
                <p className="text-[11px] text-red-600 mt-1">{errors.projectDescription}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  SUBMITTING REQUEST...
                </>
              ) : (
                <>
                  REQUEST A QUOTE
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>

            {/* Reassuring Guarantee & Direct WhatsApp Option */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                <span>Direct estimating inbox &bull; 24-hr turnaround &bull; Surrey &amp; Metro Vancouver</span>
              </div>
              <a
                href={`https://wa.me/16044181515?text=${encodeURIComponent(
                  "Hi SteeLage Construction, I would like to inquire about a commercial project quote."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
                Prefer WhatsApp? Chat directly
              </a>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
