"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquareText,
  FileText,
  HardHat,
  CheckSquare,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  ListCheck,
  ShieldCheck,
  Calculator,
  ArrowRight,
  UserCheck,
  Building,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProcessEstimatorModal } from "./ProcessEstimatorModal";

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "deliverables" | "roles">("overview");
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  const steps = [
    {
      number: "1",
      title: "CONSULT",
      subtitle: "Site Evaluation & Vision Alignment",
      duration: "1 - 2 Weeks",
      phaseBadge: "Pre-Construction Audit",
      description: "We listen to your commercial goals, evaluate your site condition, and establish preliminary budget expectations.",
      icon: MessageSquareText,
      keyActivities: [
        "In-depth architectural scope discussion",
        "On-site structural & mechanical walkthrough",
        "Zoning, land-use & code preliminary check",
        "Budget feasibility & preliminary estimate"
      ],
      deliverables: [
        "Initial Site Feasibility Report",
        "Preliminary Conceptual Layout",
        "Itemized Preliminary Budget Range"
      ],
      clientAction: "Provide site floorplan, lease agreements, & brand guidelines.",
      steelageAction: "Conduct site inspection, structural feasibility, & budget framing."
    },
    {
      number: "2",
      title: "PLAN",
      subtitle: "Detailed Design & Permit Filings",
      duration: "2 - 4 Weeks",
      phaseBadge: "Pre-Construction & Engineering",
      description: "We develop comprehensive architectural blueprints, submit municipal permits, and finalize fixed-price contract specs.",
      icon: FileText,
      keyActivities: [
        "Detailed CAD & 3D architectural drawings",
        "Sub-trade competitive tender & scheduling",
        "City permit application & engineering approvals",
        "Fixed-price commercial contract finalization"
      ],
      deliverables: [
        "Stamped Architectural & Engineering Drawings",
        "Approved Municipal Building & Trade Permits",
        "Guaranteed Fixed-Price Contract & Timeline"
      ],
      clientAction: "Review and approve final material finishes & layout blueprints.",
      steelageAction: "Manage city permits, engineer sign-offs, & sub-trade fixed bids."
    },
    {
      number: "3",
      title: "BUILD",
      subtitle: "Precision Execution & Quality Control",
      duration: "4 - 12+ Weeks",
      phaseBadge: "Active Construction Phase",
      description: "Our certified superintendents and master tradesmen execute the build with daily site logs and weekly progress reports.",
      icon: HardHat,
      keyActivities: [
        "Demolition, framing & mechanical rough-ins",
        "Drywall, ceiling grid & specialized finishes",
        "HVAC, electrical & fire suppression integration",
        "Regular city inspection check-offs"
      ],
      deliverables: [
        "Weekly Site Video & Photo Progress Updates",
        "Real-time Milestone Budget Tracking",
        "Certified City Framing & Mechanical Sign-Offs"
      ],
      clientAction: "Attend bi-weekly site walkthroughs & sign off on material samples.",
      steelageAction: "Full on-site project management, safety oversight, & trade coordination."
    },
    {
      number: "4",
      title: "COMPLETE",
      subtitle: "Final Inspections & Key Handover",
      duration: "1 - 2 Weeks",
      phaseBadge: "Occupancy & Handover",
      description: "We perform exhaustive quality audits, secure the municipal occupancy permit, and hand over a turnkey commercial space.",
      icon: CheckSquare,
      keyActivities: [
        "Detailed 100-point punch list walkthrough",
        "Final municipal building inspection & approval",
        "Deep commercial site cleanup & sanitation",
        "As-built documentation & equipment hand-off"
      ],
      deliverables: [
        "Official City Occupancy Certificate",
        "Comprehensive As-Built Blueprint Package",
        "Warranty Binder & Equipment Operations Manual"
      ],
      clientAction: "Perform final walkthrough sign-off & receive facility keys.",
      steelageAction: "Deliver warranty documentation, final municipal sign-off, & key turnover."
    },
  ];

  // Auto-play timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <section className="py-20 bg-brand-light border-t border-slate-200 relative bg-arch-grid-dark overflow-hidden">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#D3A15D] uppercase block mb-1">
              INTERACTIVE TIMELINE &amp; INSPECTOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight uppercase">
              4-PHASE EXECUTION FRAMEWORK
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted max-w-xl mt-1.5 leading-relaxed">
              Explore deliverables, timeframes, and trade responsibilities across each phase, or launch the estimator to calculate your project schedule.
            </p>
          </div>

          {/* Top Controls */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`inline-flex items-center space-x-2 px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-all ${
                isAutoPlaying
                  ? "bg-brand-teal text-white border-brand-teal shadow-md"
                  : "bg-white text-brand-dark border-slate-200 hover:border-brand-teal"
              }`}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 animate-pulse" />
                  <span>Pause Tour</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Auto-Play Tour</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsEstimatorOpen(true)}
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-brand-dark text-white hover:bg-brand-navy border border-brand-teal/40 transition-all shadow-md"
            >
              <Calculator className="w-3.5 h-3.5 text-brand-teal" />
              <span>Timeline Estimator</span>
            </button>
          </div>
        </div>

        {/* Step Navigation Bar / Stepper Header */}
        <div className="relative mb-10">
          {/* Background Connector Bar */}
          <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-[3px] bg-slate-200 z-0">
            <motion.div
              className="h-full bg-brand-teal"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={step.number}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`group relative flex flex-col items-center p-4 border text-center transition-all duration-300 ${
                    isActive
                      ? "bg-brand-dark text-white border-brand-teal shadow-xl scale-[1.03] ring-2 ring-brand-teal/50"
                      : isPassed
                      ? "bg-white text-brand-dark border-slate-300 hover:border-brand-teal/60"
                      : "bg-white text-brand-dark border-slate-200 opacity-80 hover:opacity-100"
                  }`}
                >
                  {/* Step Number Badge */}
                  <div
                    className={`w-12 h-12 rounded-full font-extrabold text-sm flex items-center justify-center transition-all duration-300 mb-3 ${
                      isActive
                        ? "bg-brand-teal text-white shadow-lg ring-4 ring-brand-teal/30 scale-110"
                        : isPassed
                        ? "bg-slate-800 text-white"
                        : "bg-slate-100 text-brand-dark border border-slate-300"
                    }`}
                  >
                    {step.number}
                  </div>

                  <span
                    className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                      isActive ? "text-brand-teal" : "text-brand-dark"
                    }`}
                  >
                    {step.title}
                  </span>

                  <span
                    className={`text-[10px] line-clamp-1 ${
                      isActive ? "text-slate-300" : "text-brand-muted"
                    }`}
                  >
                    {step.duration}
                  </span>

                  {/* Active Indicator Line at bottom */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-brand-teal"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Dynamic Inspector Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-slate-200 shadow-xl overflow-hidden"
          >
            {/* Inspector Header */}
            <div className="bg-brand-dark text-white p-6 sm:p-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-arch-grid">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-teal text-white rounded-none shrink-0 shadow-lg">
                  <StepIcon className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-2.5 py-1 border border-brand-teal/30">
                      STEP {currentStep.number}: {currentStep.phaseBadge}
                    </span>
                    <span className="text-xs text-slate-400 font-bold flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-brand-teal" />
                      <span>{currentStep.duration}</span>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                    {currentStep.title} — {currentStep.subtitle}
                  </h3>
                </div>
              </div>

              {/* Step Forward / Back arrows */}
              <div className="flex items-center space-x-2 shrink-0 self-end md:self-auto">
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
                    setIsAutoPlaying(false);
                  }}
                  className="p-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-slate-400 px-2">
                  {activeStep + 1} / {steps.length}
                </span>
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev + 1) % steps.length);
                    setIsAutoPlaying(false);
                  }}
                  className="p-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Sub-Tabs Selector inside Inspector */}
            <div className="bg-slate-100 border-b border-slate-200 px-6 flex space-x-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center space-x-2 ${
                  activeTab === "overview"
                    ? "border-brand-teal text-brand-dark bg-white shadow-sm"
                    : "border-transparent text-brand-muted hover:text-brand-dark"
                }`}
              >
                <ListCheck className="w-4 h-4 text-brand-teal" />
                <span>Phase Overview</span>
              </button>

              <button
                onClick={() => setActiveTab("deliverables")}
                className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center space-x-2 ${
                  activeTab === "deliverables"
                    ? "border-brand-teal text-brand-dark bg-white shadow-sm"
                    : "border-transparent text-brand-muted hover:text-brand-dark"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                <span>Key Deliverables</span>
              </button>

              <button
                onClick={() => setActiveTab("roles")}
                className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center space-x-2 ${
                  activeTab === "roles"
                    ? "border-brand-teal text-brand-dark bg-white shadow-sm"
                    : "border-transparent text-brand-muted hover:text-brand-dark"
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-brand-teal" />
                <span>Roles & Responsibilities</span>
              </button>
            </div>

            {/* Inspector Body Content */}
            <div className="p-6 sm:p-8">
              {activeTab === "overview" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-3">
                      STAGE SUMMARY
                    </h4>
                    <p className="text-sm text-brand-muted leading-relaxed mb-6">
                      {currentStep.description}
                    </p>

                    <div className="bg-brand-light p-4 border border-slate-200 border-l-4 border-l-brand-teal">
                      <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest block mb-1">
                        ESTIMATED STAGE DURATION
                      </span>
                      <div className="text-lg font-black text-brand-dark">
                        {currentStep.duration}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-3">
                      KEY ACTIVITIES & MILESTONES
                    </h4>
                    <ul className="space-y-3">
                      {currentStep.keyActivities.map((act, i) => (
                        <li key={i} className="flex items-start space-x-3 text-xs text-brand-dark">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          <span className="leading-snug">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "deliverables" && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-4">
                    OFFICIAL DELIVERABLES RECEIVED IN STEP {currentStep.number}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentStep.deliverables.map((deliv, i) => (
                      <div
                        key={i}
                        className="bg-brand-light p-5 border border-slate-200 border-t-4 border-t-brand-teal"
                      >
                        <div className="w-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-xs mb-3">
                          0{i + 1}
                        </div>
                        <h5 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                          {deliv}
                        </h5>
                        <p className="text-[11px] text-brand-muted leading-relaxed">
                          Verified, signed off, and presented in your client portal.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "roles" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Client Role */}
                  <div className="bg-slate-50 p-6 border border-slate-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-slate-200 text-brand-dark">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                        Client Focus
                      </h4>
                    </div>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {currentStep.clientAction}
                    </p>
                  </div>

                  {/* Steelage Role */}
                  <div className="bg-brand-dark text-white p-6 border border-brand-teal/30">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-brand-teal text-white">
                        <Building className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        SteeLage Management
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentStep.steelageAction}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Inspector Footer CTA */}
            <div className="bg-slate-50 p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                READY TO INITIATE STEP {currentStep.number} FOR YOUR SPACE?
              </span>

              <button
                onClick={() => setIsEstimatorOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-teal hover:bg-brand-accent text-white px-6 py-3 text-xs font-extrabold uppercase tracking-widest transition-all shadow-md"
              >
                <span>Calculate Your Project Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Estimator Modal */}
      <ProcessEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />
    </section>
  );
}
