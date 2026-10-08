"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { 
  Leaf, 
  Recycle, 
  Zap, 
  Droplets, 
  Globe, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Leaf;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  stat: string;
  statLabel: string;
}

const SUSTAINABILITY_PILLARS: Pillar[] = [
  {
    id: "materials",
    title: "Sustainable Materials",
    subtitle: "ECO-FRIENDLY SOURCING",
    icon: Leaf,
    shortDesc: "We source sustainable and eco-friendly materials to reduce environmental impact.",
    fullDesc: "Steelage prioritizes low-embodied carbon materials, sustainably harvested timber, recycled steel structural components, and non-toxic low-VOC finishes to ensure indoor air quality and structural sustainability.",
    highlights: [
      "Low-embodied carbon structural steel & concrete",
      "Non-toxic, Zero-VOC paints, adhesives & sealants",
      "Responsibly harvested FSC-certified timber",
      "Long-lifecycle durable exterior cladding"
    ],
    stat: "100%",
    statLabel: "Vetted Eco-Compliant Suppliers"
  },
  {
    id: "waste",
    title: "Reduce Waste",
    subtitle: "CIRCULAR PRACTICE & RECYCLING",
    icon: Recycle,
    shortDesc: "Efficient planning and responsible practices that minimize waste.",
    fullDesc: "We implement rigid waste management protocols across every construction phase—sorting, recycling, and re-purposing materials to divert maximum tonnage away from regional landfills.",
    highlights: [
      "Jobsite waste segregation & material sorting",
      "Direct recycling of scrap metals, masonry & cardboard",
      "Modular off-site pre-cutting to minimize material scrap",
      "Zero-waste target milestones for commercial fit-outs"
    ],
    stat: "85%+",
    statLabel: "Waste Diverted from Landfills"
  },
  {
    id: "energy",
    title: "Energy Efficient",
    subtitle: "SMART BUILDING SOLUTIONS",
    icon: Zap,
    shortDesc: "We build with energy-efficient solutions for a greener future.",
    fullDesc: "Integrating smart thermal insulation envelopes, LED smart automation, high-efficiency HVAC equipment, and solar-ready roof infrastructures to optimize long-term energy consumption.",
    highlights: [
      "High-R insulation & thermal-broken envelope designs",
      "Smart occupancy sensors & LED energy management",
      "VRF & high-efficiency HVAC climate controls",
      "Solar array readiness & sub-metering infrastructure"
    ],
    stat: "40%",
    statLabel: "Average Energy Cost Reduction"
  },
  {
    id: "water",
    title: "Water Conservation",
    subtitle: "ECO-SYSTEM PROTECTING TECH",
    icon: Droplets,
    shortDesc: "Smart systems and technologies that support clean and responsible water use.",
    fullDesc: "Deploying low-flow plumbing fixtures, sensor taps, and rainwater harvesting retention systems designed to reduce municipal water reliance and protect local hydrology.",
    highlights: [
      "Low-consumption commercial sensor faucets & toilets",
      "Stormwater retention & sediment filtration systems",
      "Greywater recycling compatibility for large projects",
      "Real-time leak detection & flow monitoring tech"
    ],
    stat: "35%",
    statLabel: "Water Consumption Savings"
  },
  {
    id: "tomorrow",
    title: "Better Tomorrow",
    subtitle: "ENVIRONMENTAL STEWARDSHIP",
    icon: Globe,
    shortDesc: "Building today with care, for a healthier planet and stronger communities tomorrow.",
    fullDesc: "Our environmental pledge ensures that every project built by Steelage leaves a positive impact on the surrounding community, natural ecosystem, and future generations.",
    highlights: [
      "LEED & Green Building Standard alignment",
      "Urban heat island reduction with green roofs & pavers",
      "Healthy indoor environment certified design",
      "Long-term structural resilience against climate shifts"
    ],
    stat: "100%",
    statLabel: "Commitment to Future Generations"
  }
];

export function SustainabilitySection() {
  const [activeTab, setActiveTab] = useState<string>("materials");

  const activePillar = SUSTAINABILITY_PILLARS.find((p) => p.id === activeTab) || SUSTAINABILITY_PILLARS[0];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-slate-950 text-white border-t border-slate-800/80">
      
      {/* ─── DYNAMIC BACKGROUND SHADING: DARK BLUE TO DARK GREEN ─────────────── */}
      <div className="absolute inset-0 bg-gradient-blue-green-v opacity-98 pointer-events-none z-0" />
      
      {/* Top Shading In Overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#061A23] to-transparent pointer-events-none z-0" />
      
      {/* Bottom Shading Out Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#041F18] to-transparent pointer-events-none z-0" />

      {/* Ambient Radial Glow & Architectural Grid */}
      <div className="absolute inset-0 bg-radial-glow-eco pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none z-0" />

      {/* Background Lighting Pods */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none z-0" />

      <Container size="wide" className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 mb-4 shadow-lg backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-black tracking-[0.25em] uppercase">
              ENVIRONMENT & SUSTAINABILITY STEWARDSHIP
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Building a{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent font-serif italic">
              Greener & Sustainable
            </span>{" "}
            Future
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Committed to environmentally responsible construction. We balance structural excellence with ecological care—building responsibly today for a better tomorrow.
          </p>
        </div>

        {/* ─── METRICS HIGHLIGHT RIBBON ──────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="glass-card-eco p-5 rounded-2xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mb-1">
              85%+
            </div>
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Jobsite Waste Recycled
            </div>
            <div className="text-[11px] text-emerald-300/80 mt-1">Diverted from regional landfills</div>
          </div>

          <div className="glass-card-eco p-5 rounded-2xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-black text-teal-300 font-mono mb-1">
              100%
            </div>
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Low-VOC Eco Finishes
            </div>
            <div className="text-[11px] text-teal-300/80 mt-1">Healthy indoor air quality</div>
          </div>

          <div className="glass-card-eco p-5 rounded-2xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono mb-1">
              LEED
            </div>
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Certified Standards
            </div>
            <div className="text-[11px] text-cyan-300/80 mt-1">Energy-efficient construction</div>
          </div>

          <div className="glass-card-eco p-5 rounded-2xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-black text-lime-400 font-mono mb-1">
              0%
            </div>
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Toxic Material Usage
            </div>
            <div className="text-[11px] text-lime-300/80 mt-1">Safe for families & workers</div>
          </div>
        </div>

        {/* ─── INTERACTIVE PILLAR SHOWCASE ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Left Column: Interactive Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="text-xs font-bold text-emerald-400 tracking-[0.2em] uppercase mb-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>5 Core Pillars of Eco-Construction</span>
            </div>

            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const IconComponent = pillar.icon;
              const isActive = pillar.id === activeTab;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 group cursor-pointer ${
                    isActive
                      ? "glass-card-eco-active text-white translate-x-1"
                      : "glass-card-eco text-slate-300 hover:text-white hover:border-emerald-500/40"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                    isActive 
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40" 
                      : "bg-slate-800/60 text-slate-400 group-hover:text-emerald-400"
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-extrabold uppercase tracking-wider truncate">
                        {pillar.title}
                      </h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${
                        isActive ? "bg-emerald-500/30 text-emerald-300" : "bg-slate-800/80 text-slate-400"
                      }`}>
                        {pillar.subtitle}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {pillar.shortDesc}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                    isActive ? "text-emerald-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Pillar Detailed Interactive Panel */}
          <div className="lg:col-span-7 glass-card-eco-active rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Background Image (Sustainable Leaf/Eco Poster) */}
            <div 
              className="absolute inset-0 z-0 pointer-events-none opacity-80 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: "url('/leaf-logo.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-slate-950/40 z-0 pointer-events-none" />

            <div className="relative z-10">
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-500/20 border border-emerald-400/40 rounded-2xl text-emerald-300">
                    {(() => {
                      const Icon = activePillar.icon;
                      return <Icon className="w-7 h-7" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-emerald-400 tracking-[0.2em] uppercase block mb-0.5">
                      {activePillar.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {activePillar.title}
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                    {activePillar.stat}
                  </div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    {activePillar.statLabel}
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                {activePillar.fullDesc}
              </p>

              {/* Key Implementation Highlights */}
              <div className="mb-8">
                <h5 className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider mb-3">
                  Key Construction Standards:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-emerald-500/20">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="relative z-10 pt-6 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Official Brand Environmental Standards
                </p>
                <p className="text-[11px] text-emerald-300/80">
                  Engineered for long-term ecological balance in British Columbia
                </p>
              </div>

              <Link
                href="/contact/"
                prefetch={true}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Consult On Green Project</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Environmental Commitment Motto */}
        <div className="glass-card-eco p-6 rounded-2xl text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-black tracking-[0.2em] text-emerald-400 uppercase block mb-1">
              STRONG STRUCTURES. SUSTAINABLE FUTURES.
            </span>
            <p className="text-xs text-slate-300">
              Building responsibly. Building better. Engineered for long-term ecological balance.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact/"
              prefetch={true}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-emerald-500/25"
            >
              <span>Consult On Green Project</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </Container>

    </section>
  );
}
