"use client";

import Link from "next/link";
import { 
  Building2, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Calendar,
  Grid,
  Hammer
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export function GeoHomeSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#08171A] relative text-white overflow-hidden border-t border-white/10">
      {/* Background Architectural Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(200, 149, 82, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(200, 149, 82, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#08171A]/70 to-[#08171A]" />
        <div className="absolute -top-32 right-0 w-96 h-96 bg-[#C89552]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C89552]/15 border border-[#C89552]/40 mb-5 shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-[#D3A15D]" />
              <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#D3A15D] uppercase">
                SURREY &amp; LOWER MAINLAND COMMERCIAL BUILDERS
              </span>
            </div>

            {/* Main GEO Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight uppercase leading-[1.18] mb-6">
              Commercial Construction &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D3A15D] via-[#F8DBA5] to-[#C89552]">
                Tenant Improvements in Surrey, BC
              </span>
            </h2>

            {/* Authority Introduction */}
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed mb-5">
              <strong className="text-white font-bold">Steelage Construction</strong> is a commercial construction, renovation, and tenant improvement contractor serving Surrey, Vancouver, and communities across the Lower Mainland.
            </p>

            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed mb-6 font-normal">
              Since 2010, Steelage has worked with businesses and commercial property stakeholders on projects involving commercial construction, tenant improvements, interior build-outs, renovations, and project management.
            </p>

            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed mb-8 font-normal">
              Our experience includes restaurants, retail spaces, offices, daycare facilities, and other commercial environments. Depending on the project scope, our construction capabilities include interior renovations, structural reconfiguration, steel-stud framing, T-bar ceilings, commercial finishes, and related construction work.
            </p>

            {/* Capabilities Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                { name: "Steel-Stud Framing", icon: Hammer },
                { name: "T-Bar Ceilings", icon: Grid },
                { name: "Interior Renovations", icon: Layers },
                { name: "Structural Reconfig", icon: Building2 },
                { name: "Commercial Finishes", icon: Sparkles },
                { name: "Project Management", icon: CheckCircle2 },
              ].map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div 
                    key={i} 
                    className="flex items-center gap-2.5 p-3 bg-[#0B2025]/90 border border-white/10 text-xs font-semibold text-slate-200"
                  >
                    <Icon className="w-4 h-4 text-[#D3A15D] shrink-0" />
                    <span>{cap.name}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 bg-[#C89552] hover:bg-[#B8803D] text-white font-bold text-xs uppercase px-6 py-3.5 tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <span>EXPLORE CAPABILITIES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-[#0B2025]/80 hover:bg-[#0B2025] border border-white/20 hover:border-[#C89552] text-white font-bold text-xs uppercase px-6 py-3.5 tracking-wider transition-all"
              >
                <span>REQUEST A QUOTE</span>
              </Link>
            </div>
          </div>

          {/* Right Highlight Box: Regional Footprint & Experience */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B2025] border border-white/15 p-7 sm:p-9 shadow-2xl relative">
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C89552] via-[#F8DBA5] to-[#C89552]" />

              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-[#D3A15D] uppercase block">ESTABLISHED</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4 text-[#D3A15D]" />
                    <span className="text-xl font-extrabold text-white">OPERATING SINCE 2010</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase block">HEADQUARTERS</span>
                  <span className="text-sm font-bold text-[#D3A15D] uppercase">SURREY, BC</span>
                </div>
              </div>

              <h3 className="text-sm font-extrabold text-white tracking-widest uppercase mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D3A15D]" />
                COMMUNITIES SERVED
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Steelage serves commercial clients across Surrey, Vancouver, Burnaby, Richmond, Langley, Delta, Coquitlam, and surrounding Lower Mainland communities.
              </p>

              {/* Service Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Surrey",
                  "Vancouver",
                  "Burnaby",
                  "Richmond",
                  "Langley",
                  "Delta",
                  "Coquitlam",
                  "Port Coquitlam",
                  "Abbotsford",
                  "Chilliwack",
                  "Maple Ridge",
                ].map((city) => (
                  <span 
                    key={city}
                    className="px-2.5 py-1 text-[11px] font-semibold bg-[#08171A] border border-white/10 text-slate-200"
                  >
                    {city}
                  </span>
                ))}
              </div>

              {/* Scope Checklist */}
              <div className="border-t border-white/10 pt-6 space-y-2.5">
                {[
                  "Commercial Interiors & Tenant Fit-Outs",
                  "Restaurant, QSR & Food-Service Builds",
                  "Daycare & Educational Environment Upgrades",
                  "Steel-Stud, T-Bar & Architectural Finishes",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D3A15D] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
