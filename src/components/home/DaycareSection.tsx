"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { 
  ShieldCheck, 
  Sparkles, 
  Leaf, 
  HardHat, 
  Handshake, 
  CheckCircle2, 
  Heart,
  Baby,
  ChevronRight
} from "lucide-react";

interface DaycarePillar {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof ShieldCheck;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
}

const DAYCARE_PILLARS: DaycarePillar[] = [
  {
    id: "safety",
    title: "Safe & Secure Environments",
    subtitle: "CHILD-FIRST SAFETY",
    icon: ShieldCheck,
    shortDesc: "We prioritize safety standards and child-friendly design in every project.",
    fullDesc: "Every daycare built by Steelage incorporates strict physical safety protocols—impact-absorbing flooring, shatterproof safety glass, finger-pinch protection on doors, and tamper-resistant electrical outlets.",
    highlights: [
      "Tamper-proof outlets & concealed wiring",
      "Soft-impact rubber flooring & non-slip surfaces",
      "Finger-pinch door guards & soft-close cabinetry",
      "Secured access-controlled entry foyers"
    ]
  },
  {
    id: "design",
    title: "Child-Friendly Ergonomics",
    subtitle: "INSPIRING CREATIVITY",
    icon: Sparkles,
    shortDesc: "Bright, engaging and functional spaces that inspire creativity and learning.",
    fullDesc: "We design layouts tailored to early childhood development—custom low-height washroom fixtures, natural light harvesting, acoustically dampened quiet zones, and vibrant collaborative play zones.",
    highlights: [
      "Child-height handwashing basins & restrooms",
      "Acoustic wall panels to reduce noise reverberation",
      "Abundant natural daylighting & glare-free LEDs",
      "Flexible activity partitions & open play sightlines"
    ]
  },
  {
    id: "health",
    title: "Sustainable & Healthy Spaces",
    subtitle: "CLEAN INDOOR AIR",
    icon: Leaf,
    shortDesc: "We use eco-friendly materials and finishes for a healthier planet and brighter future.",
    fullDesc: "Protecting little lungs and growing immune systems by exclusively specifying Zero-VOC paints, formaldehyde-free cabinetry, antimicrobial flooring, and HEPA-filtered HVAC ventilation.",
    highlights: [
      "Zero-VOC paints, sealants & anti-bacterial surfaces",
      "Dedicated HEPA filtration & continuous air turnover",
      "Hypoallergenic flooring materials (no VOC carpet)",
      "Natural non-toxic wooden accents & play features"
    ]
  },
  {
    id: "quality",
    title: "Quality Precision Construction",
    subtitle: "HEAVY-DUTY DURABILITY",
    icon: HardHat,
    shortDesc: "Built with precision, durability and attention to every detail that lasts for years.",
    fullDesc: "Commercial daycare environments endure high daily foot traffic. We use heavy-duty commercial wall protection, scuff-resistant coatings, and reinforced structural frames for decades of trouble-free operation.",
    highlights: [
      "High-impact resistant drywall & corner guards",
      "Washable commercial wall finishes & epoxy flooring",
      "Heavy-duty commercial hardware & hinges",
      "Strict compliance with BC Child Care Licensing Regulations"
    ]
  },
  {
    id: "schedule",
    title: "On Time & On Budget",
    subtitle: "LICENSING-READY DELIVERY",
    icon: Handshake,
    shortDesc: "Reliable project delivery with clear communication and complete transparency.",
    fullDesc: "Opening a daycare requires precise coordination with health authorities and licensing inspectors. We manage turn-key approvals to ensure your doors open on target without surprise budget overruns.",
    highlights: [
      "Fixed-price transparent cost estimates",
      "Strict schedule adherence for licensing inspection",
      "Complete occupancy permit coordination",
      "Post-turnover warranty & maintenance support"
    ]
  }
];

export function DaycareSection() {
  const [activeTab, setActiveTab] = useState<string>("safety");

  const activePillar = DAYCARE_PILLARS.find((p) => p.id === activeTab) || DAYCARE_PILLARS[0];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-brand-dark text-white border-t border-white/10">
      
      {/* Subtle architectural background */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none z-0" />

      {/* Warm Ambient Glow Pods */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none z-0" />

      <Container size="wide" className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4 shadow-lg backdrop-blur-md">
            <Baby className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-black tracking-[0.25em] uppercase">
              EDUCATIONAL & DAY CARE FACILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Day Care{" "}
            <span className="text-amber-400 font-serif italic">
              Projects
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Spaces where children grow, learn & thrive. We design and construct day care environments that are safe, functional, inspiring, and built for little minds.
          </p>
        </div>

        {/* ─── INTERACTIVE DAYCARE PILLAR SHOWCASE ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Left Column: Pillar Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="text-xs font-bold text-amber-400 tracking-[0.2em] uppercase mb-1 flex items-center gap-2">
              <Heart className="w-4 h-4 text-amber-400" />
              <span>Child-Centric Construction Standards</span>
            </div>

            {DAYCARE_PILLARS.map((pillar) => {
              const IconComponent = pillar.icon;
              const isActive = pillar.id === activeTab;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 group cursor-pointer ${
                    isActive
                      ? "bg-slate-900/90 border border-amber-500/50 shadow-xl text-white translate-x-1"
                      : "bg-slate-900/50 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-500/30"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                    isActive 
                      ? "bg-amber-500/20 text-amber-300 border border-amber-400/40" 
                      : "bg-slate-800/60 text-slate-400 group-hover:text-amber-400"
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-extrabold uppercase tracking-wider truncate">
                        {pillar.title}
                      </h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${
                        isActive ? "bg-amber-500/20 text-amber-300" : "bg-slate-800/80 text-slate-400"
                      }`}>
                        {pillar.subtitle}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {pillar.shortDesc}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                    isActive ? "text-amber-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Pillar Interactive Card */}
          <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            
            {/* Background Decorative Icon */}
            <div className="absolute -bottom-10 -right-10 w-72 h-72 text-amber-500/5 pointer-events-none">
              <Baby className="w-full h-full" />
            </div>

            <div>
              {/* Active Tab Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="p-3.5 bg-amber-500/20 border border-amber-400/40 rounded-2xl text-amber-300">
                  {(() => {
                    const Icon = activePillar.icon;
                    return <Icon className="w-8 h-8" />;
                  })()}
                </div>
                <div>
                  <span className="text-xs font-black text-amber-400 tracking-[0.2em] uppercase block mb-1">
                    {activePillar.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {activePillar.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                {activePillar.fullDesc}
              </p>

              {/* Highlights Checklist */}
              <div className="mb-8">
                <h5 className="text-xs font-extrabold text-amber-400 uppercase tracking-wider mb-3">
                  Safety & Facility Highlights:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-amber-500/20">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  COMMERCIAL DAYCARE CONSTRUCTION
                </p>
                <p className="text-[11px] text-amber-300/80">
                  Fully aligned with BC Child Care Licensing Regulations
                </p>
              </div>

              <Link
                href="/contact/"
                prefetch={true}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Consult On Daycare Project</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Tagline Banner */}
        <div className="bg-slate-900/60 border border-amber-500/20 p-6 rounded-2xl text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-black tracking-[0.2em] text-amber-400 uppercase block mb-1">
              BUILDING SOLID FUTURE FOR LITTLE MINDS
            </span>
            <p className="text-xs text-slate-300">
              Safe. Secure. Code-compliant educational environments built for British Columbia families.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact/"
              prefetch={true}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-amber-500/25"
            >
              <span>Plan Daycare Project</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </Container>
    </section>
  );
}
