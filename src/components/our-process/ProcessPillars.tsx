"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Clock, ShieldCheck, Users, ChevronDown, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function ProcessPillars() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const pillars = [
    {
      icon: DollarSign,
      title: "TRANSPARENT PRICING",
      subtitle: "Zero surprise costs",
      description: "Detailed itemized proposals with zero hidden fees, locked-in scope, and transparent material breakdowns.",
      details: [
        "Fixed-price contract commitment",
        "Itemized labor & materials list",
        "No unapproved change orders"
      ]
    },
    {
      icon: Clock,
      title: "ON-TIME DELIVERY",
      subtitle: "Milestone-driven schedule",
      description: "Rigorous milestone scheduling to ensure your commercial space opens on schedule without delayed revenue.",
      details: [
        "Critical path Gantt schedule",
        "Sub-trade penalty clauses",
        "Weekly milestone tracking"
      ]
    },
    {
      icon: ShieldCheck,
      title: "SAFETY & QUALITY GUARANTEE",
      subtitle: "Code compliance guaranteed",
      description: "100% building code compliance, municipal inspection sign-offs, and uncompromising structural craftsmanship.",
      details: [
        "Surrey & BC building code certified",
        "Comprehensive site safety protocol",
        "Structural & finish warranty"
      ]
    },
    {
      icon: Users,
      title: "SINGLE POINT ACCOUNTABILITY",
      subtitle: "Dedicated Project Director",
      description: "Dedicated senior project manager overseeing every trade, municipal permit, and architectural update.",
      details: [
        "Daily site logs & updates",
        "Single point of client contact",
        "Direct trade coordination"
      ]
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <Container size="wide">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-brand-teal uppercase block mb-1">
            THE STEELAGE ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight uppercase">
            BUILT ON RELIABILITY & TRANSPARENCY
          </h2>
          <p className="text-xs text-brand-muted max-w-lg mx-auto mt-2">
            Click on any pillar below to inspect our guaranteed quality controls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isExpanded = expandedIndex === i;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className={`cursor-pointer p-6 border transition-all duration-300 ${
                  isExpanded
                    ? "bg-brand-dark text-white border-brand-teal shadow-xl ring-2 ring-brand-teal/40"
                    : "bg-brand-light text-brand-dark border-slate-200 border-t-4 border-t-brand-teal hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-none ${isExpanded ? "bg-brand-teal text-white" : "bg-white text-brand-teal border border-slate-200 shadow-sm"}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-brand-teal" : "text-brand-muted"
                    }`}
                  />
                </div>

                <h3 className={`text-xs font-extrabold uppercase tracking-wider mb-1 ${isExpanded ? "text-white" : "text-brand-dark"}`}>
                  {pillar.title}
                </h3>
                <span className={`text-[10px] font-bold block mb-3 uppercase ${isExpanded ? "text-brand-teal" : "text-brand-muted"}`}>
                  {pillar.subtitle}
                </span>

                <p className={`text-xs leading-relaxed mb-4 ${isExpanded ? "text-slate-300" : "text-brand-muted"}`}>
                  {pillar.description}
                </p>

                {/* Expandable Key Details Checklist */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="pt-4 border-t border-white/10 space-y-2"
                  >
                    {pillar.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center space-x-2 text-[11px] text-slate-200">
                        <Check className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
