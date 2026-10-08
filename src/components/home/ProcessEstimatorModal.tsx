"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calculator,
  Clock,
  Building2,
  Maximize2,
  Hammer,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

interface ProcessEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const spaceTypes = [
  { id: "office", label: "Corporate Office", icon: Building2, desc: "Open layouts, conference rooms & executive suites" },
  { id: "retail", label: "Retail & Boutique", icon: Maximize2, desc: "Showrooms, display walls & customer checkout areas" },
  { id: "restaurant", label: "Restaurant & Cafe", icon: Hammer, desc: "Commercial kitchen, dining room & ventilation systems" },
  { id: "medical", label: "Medical / Dental", icon: Sparkles, desc: "Specialized plumbing, sanitation & patient consultation rooms" },
];

const sizeRanges = [
  { id: "small", label: "< 2,500 sq ft", factor: 0.8 },
  { id: "medium", label: "2,500 - 5,000 sq ft", factor: 1.0 },
  { id: "large", label: "5,000 - 10,000 sq ft", factor: 1.3 },
  { id: "xlarge", label: "10,000+ sq ft", factor: 1.7 },
];

const scopeTypes = [
  { id: "fitout", label: "Full Interior Fit-Out", factor: 1.0 },
  { id: "renovation", label: "Renovation / Remodel", factor: 0.85 },
  { id: "shell", label: "Core & Shell Fit-Out", factor: 1.2 },
];

export function ProcessEstimatorModal({ isOpen, onClose }: ProcessEstimatorModalProps) {
  const [selectedSpace, setSelectedSpace] = useState("office");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedScope, setSelectedScope] = useState("fitout");

  if (!isOpen) return null;

  const sizeFactor = sizeRanges.find((s) => s.id === selectedSize)?.factor || 1.0;
  const scopeFactor = scopeTypes.find((s) => s.id === selectedScope)?.factor || 1.0;

  // Space complexity multiplier
  const spaceMultiplier = selectedSpace === "restaurant" ? 1.25 : selectedSpace === "medical" ? 1.3 : selectedSpace === "retail" ? 0.95 : 1.0;

  const baseWeeks = {
    consult: Math.round(1 * sizeFactor),
    plan: Math.round(2 * sizeFactor * spaceMultiplier),
    build: Math.round(6 * sizeFactor * scopeFactor * spaceMultiplier),
    complete: Math.round(1 * sizeFactor),
  };

  const totalWeeksMin = baseWeeks.consult + baseWeeks.plan + baseWeeks.build + baseWeeks.complete;
  const totalWeeksMax = Math.round(totalWeeksMin * 1.25);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-brand-dark text-white p-6 border-b border-white/10 flex items-center justify-between relative bg-arch-grid">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-brand-teal text-white rounded-none">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-teal uppercase block">
                  INTERACTIVE ESTIMATOR
                </span>
                <h3 className="text-xl font-extrabold uppercase tracking-tight text-white">
                  COMMERCIAL TIMELINE ESTIMATOR
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Step 1: Space Type Selection */}
            <div>
              <label className="text-xs font-bold text-brand-dark uppercase tracking-wider block mb-3">
                1. Select Space Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {spaceTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedSpace === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedSpace(type.id)}
                      className={`p-4 text-left border transition-all flex items-start space-x-3 ${
                        isSelected
                          ? "bg-brand-dark text-white border-brand-teal shadow-md"
                          : "bg-brand-light text-brand-dark border-slate-200 hover:border-brand-teal/50"
                      }`}
                    >
                      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${isSelected ? "text-brand-teal" : "text-brand-muted"}`} />
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider">{type.label}</div>
                        <div className={`text-[11px] mt-1 leading-snug ${isSelected ? "text-slate-300" : "text-brand-muted"}`}>
                          {type.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Size & Scope Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Size */}
              <div>
                <label className="text-xs font-bold text-brand-dark uppercase tracking-wider block mb-3">
                  2. Square Footage Area
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {sizeRanges.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`p-3 text-center text-xs font-bold uppercase tracking-wider border transition-all ${
                        selectedSize === size.id
                          ? "bg-brand-teal text-white border-brand-teal shadow"
                          : "bg-white text-brand-dark border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope */}
              <div>
                <label className="text-xs font-bold text-brand-dark uppercase tracking-wider block mb-3">
                  3. Project Scope
                </label>
                <div className="space-y-2">
                  {scopeTypes.map((scope) => (
                    <button
                      key={scope.id}
                      onClick={() => setSelectedScope(scope.id)}
                      className={`w-full p-2.5 text-left text-xs font-bold uppercase tracking-wider border transition-all flex items-center justify-between ${
                        selectedScope === scope.id
                          ? "bg-brand-teal text-white border-brand-teal shadow"
                          : "bg-white text-brand-dark border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <span>{scope.label}</span>
                      {selectedScope === scope.id && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Phase Breakdown Output */}
            <div className="bg-brand-dark text-white p-6 border-l-4 border-l-brand-teal shadow-inner">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-4 gap-2">
                <div>
                  <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest block">
                    PROJECT TIMELINE BREAKDOWN
                  </span>
                  <h4 className="text-lg font-extrabold uppercase">
                    ESTIMATED DURATION: {totalWeeksMin} - {totalWeeksMax} WEEKS
                  </h4>
                </div>
                <div className="flex items-center space-x-2 text-xs text-brand-teal font-bold bg-white/5 px-3 py-1.5 border border-brand-teal/30">
                  <Clock className="w-4 h-4" />
                  <span>Turnkey Execution</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="bg-white/5 p-3 border border-white/10">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">1. CONSULT</div>
                  <div className="text-lg font-black text-brand-teal mt-1">{baseWeeks.consult} Wk</div>
                  <div className="text-[9px] text-slate-400 mt-1">Audit & Scope</div>
                </div>

                <div className="bg-white/5 p-3 border border-white/10">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">2. PLAN</div>
                  <div className="text-lg font-black text-brand-teal mt-1">{baseWeeks.plan} Wks</div>
                  <div className="text-[9px] text-slate-400 mt-1">Permits & Budget</div>
                </div>

                <div className="bg-white/5 p-3 border border-white/10">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">3. BUILD</div>
                  <div className="text-lg font-black text-brand-teal mt-1">{baseWeeks.build} Wks</div>
                  <div className="text-[9px] text-slate-400 mt-1">Trades & Execution</div>
                </div>

                <div className="bg-white/5 p-3 border border-white/10">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">4. COMPLETE</div>
                  <div className="text-lg font-black text-brand-teal mt-1">{baseWeeks.complete} Wk</div>
                  <div className="text-[9px] text-slate-400 mt-1">Audit & Handover</div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-muted">
              *Estimates are based on standard Surrey/Metro Vancouver municipal approval & build timelines.
            </p>
            <Link
              href="/contact/"
              prefetch={true}
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-teal hover:bg-brand-accent text-white px-6 py-3 text-xs font-extrabold uppercase tracking-widest transition-all shadow-md"
            >
              <span>Get Precise Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
