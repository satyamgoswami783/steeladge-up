import { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { companyData } from "@/data/company";
import { FAQSection } from "@/components/common/FAQSection";
import { contactFAQs } from "@/data/faqs";

export const metadata: Metadata = createPageMetadata({
  title: "Get A Quote | Surrey Commercial Contractor",
  description:
    "Request a commercial tenant improvement or construction quote in Surrey, BC. Call (604) 418-1515 or submit your project details online.",
  url: "https://steelage.ca/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* 1. Header Banner — Dark Blueprint Tone with Architectural Grid */}
      <section className="bg-[#08171A] text-white py-16 sm:py-20 border-b border-white/10 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,149,82,0.14),transparent_70%)]" />

        <Container size="wide" className="relative z-10">
          <SectionHeading
            as="h1"
            eyebrow="COMMERCIAL ESTIMATING"
            title="REQUEST A QUOTE & CONTACT US"
            description="Ready to discuss your commercial tenant improvement, retail build-out, or office renovation? Reach out to our Surrey construction team."
            darkBackground
          />
        </Container>
      </section>

      {/* 2. Main Content — Warm Luxury Light Sand Background */}
      <section className="py-16 sm:py-24 bg-[#F9F8F5] text-slate-900 relative overflow-hidden border-b border-[#E8E2D5]">
        {/* Architectural drafting grid on light background */}
        <div 
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(200, 149, 82, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(200, 149, 82, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Surrey Head Office & Guarantee */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Details Card */}
              <div className="bg-white p-8 sm:p-9 border border-[#E2D8C7] shadow-[0_12px_40px_rgba(20,14,10,0.06)] space-y-6">
                <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-4">
                  <h3 className="text-xs font-extrabold tracking-widest text-[#A66C2E] uppercase">
                    SURREY HEAD OFFICE
                  </h3>
                  <span className="w-8 h-0.5 bg-[#C89552]" />
                </div>

                <ul className="space-y-5 text-xs text-slate-600">
                  <li className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#C89552]/10 border border-[#C89552]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#A66C2E]" />
                    </div>
                    <div>
                      <span className="font-bold text-[#0B2025] text-sm block">Location</span>
                      <span className="text-slate-600 font-medium">{companyData.address.formatted}</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#C89552]/10 border border-[#C89552]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-[#A66C2E]" />
                    </div>
                    <div>
                      <span className="font-bold text-[#0B2025] text-sm block">Phone Numbers</span>
                      <div className="space-y-1.5 mt-1">
                        <div>
                          <span className="text-slate-500 font-medium">Direct BC: </span>
                          <a href={`tel:${companyData.contact.phoneRaw}`} className="text-[#0B2025] hover:text-[#A66C2E] font-bold transition-colors">
                            {companyData.contact.phone}
                          </a>
                        </div>
                        <div>
                          <span className="text-slate-500 font-medium">BC Office: </span>
                          <a href={`tel:${companyData.contact.secondaryPhoneRaw}`} className="text-[#0B2025] hover:text-[#A66C2E] font-semibold transition-colors">
                            {companyData.contact.secondaryPhone}
                          </a>
                        </div>
                        <div>
                          <span className="text-slate-500 font-medium">Alberta Office: </span>
                          <a href={`tel:${companyData.contact.tertiaryPhoneRaw}`} className="text-[#0B2025] hover:text-[#A66C2E] font-semibold transition-colors">
                            {companyData.contact.tertiaryPhone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#C89552]/10 border border-[#C89552]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-[#A66C2E]" />
                    </div>
                    <div>
                      <span className="font-bold text-[#0B2025] text-sm block">Email Enquiries</span>
                      <a href={`mailto:${companyData.contact.email}`} className="text-[#A66C2E] font-bold hover:underline break-all">
                        {companyData.contact.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#C89552]/10 border border-[#C89552]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-[#A66C2E]" />
                    </div>
                    <div>
                      <span className="font-bold text-[#0B2025] text-sm block">Hours of Operation</span>
                      <span className="text-slate-600 font-medium">Monday – Friday: 7:00 AM – 5:30 PM PST</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 24-Hour Guarantee Card */}
              <div className="bg-white p-6 border border-[#E2D8C7] shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#A66C2E]" />
                  <h4 className="text-xs font-bold text-[#0B2025] uppercase tracking-wider">
                    24-HOUR ESTIMATE RESPONSE
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  We review incoming commercial blueprints and space requirements promptly. Expect a preliminary consultation or site visit invitation within 1 business day.
                </p>
              </div>

              {/* Regional Coverage Checklist */}
              <div className="bg-[#FAF7F0] p-6 border border-[#E8E2D5] space-y-3">
                <h4 className="text-[11px] font-bold text-[#A66C2E] uppercase tracking-widest">
                  FASTEST SITE MOBILIZATION ACROSS:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#0B2025]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C89552]" />
                    <span>Surrey & White Rock</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C89552]" />
                    <span>Vancouver & Burnaby</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C89552]" />
                    <span>Langley & Abbotsford</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C89552]" />
                    <span>Richmond & Delta</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quote Form */}
            <div className="lg:col-span-7" id="estimate-form">
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Commercial Estimating & Contact FAQs */}
      <FAQSection
        title="COMMERCIAL ESTIMATING & INQUIRY FAQS"
        eyebrow="ESTIMATING GUIDANCE & FAQS"
        description="Direct answers regarding estimate requests, required architectural documents, turnaround times, and preliminary lease evaluations."
        faqs={contactFAQs}
      />
    </div>
  );
}
