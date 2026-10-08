"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Utensils, Coffee, Sparkles, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-safety text-white border-t border-amber-500/20">
      
      {/* Subtle organic architectural background overlay */}
      <div className="absolute inset-0 bg-arch-grid opacity-15 pointer-events-none z-0" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      <Container size="wide" className="relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-amber-400 mb-5 shadow-sm">
                <Utensils className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-black tracking-[0.2em] uppercase">
                  ABOUT US — CULINARY CRAFTSMANSHIP & AMBIENCE
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-5 font-serif">
                Crafting spaces where{" "}
                <span className="text-amber-400 italic block sm:inline font-normal">
                  culinary passion meets ambience.
                </span>
              </h2>

              {/* Tagline */}
              <p className="text-lg sm:text-xl font-medium text-emerald-100/90 mb-6 tracking-wide">
                Warm. Inviting. Built for exceptional dining.
              </p>

              {/* Paragraph */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                At <strong className="text-amber-400 font-semibold">Steelage Construction Ltd.</strong>, we specialize in transforming restaurant and café visions into vibrant culinary destinations. From bespoke dining room interiors and ambient architectural lighting to commercial kitchen infrastructure, we craft warm, memorable spaces that keep guests returning.
              </p>

              {/* 3 Core Pillars Cards */}
              <div className="space-y-4 mb-8 border-t border-amber-500/20 pt-6">
                {/* Ambience & Millwork */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-amber-500/20 transition-all hover:border-amber-500/40 shadow-md">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 shadow-sm">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-wider text-amber-400 uppercase mb-1">
                      AMBIENCE & CRAFTSMANSHIP
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Tailored architectural finishes, custom millwork, and warm lighting engineered for unforgettable moments.
                    </p>
                  </div>
                </div>

                {/* Kitchen & Hospitality Infrastructure */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-amber-500/20 transition-all hover:border-amber-500/40 shadow-md">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 shadow-sm">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-wider text-amber-400 uppercase mb-1">
                      HOSPITALITY INFRASTRUCTURE
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Optimized commercial kitchen workflows, code-compliant ventilation, and durable service stations.
                    </p>
                  </div>
                </div>

                {/* Exceptional Guest Experience */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-amber-500/20 transition-all hover:border-amber-500/40 shadow-md">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-wider text-amber-400 uppercase mb-1">
                      UNFORGETTABLE EXPERIENCES
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Inviting atmospheres designed to reflect your brand identity and delight guests from coffee to late dining.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Motto */}
            <div className="border-t border-amber-500/20 pt-5 mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black tracking-[0.2em] text-slate-300 uppercase">
                  CRAFTING UNFORGETTABLE DINING SPACES.
                </p>
                <p className="text-xs font-black tracking-[0.2em] text-amber-400 uppercase">
                  ELEVATING HOSPITALITY ACROSS BC.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Restaurant/Café Interior Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-950 p-3 sm:p-4">
              
              {/* Photo Frame Container */}
              <div className="relative w-full h-[480px] sm:h-[540px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/projects/mucho-burrito-interior.jpg"
                  alt="SteeLage Construction - Modern restaurant and dining room interior build-out in Surrey BC"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  loading="lazy"
                />
                
                {/* Natural Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                {/* Floating Authenticity Badge */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-500/40 flex items-center gap-2 shadow-lg">
                  <Utensils className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-extrabold text-amber-300 uppercase tracking-widest">
                    PREMIUM DINING DESIGN
                  </span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-amber-500/30 shadow-xl">
                  <p className="text-xs font-black text-amber-400 uppercase tracking-wider mb-1">
                    WHERE CULINARY PASSION MEETS EXCEPTIONAL AMBIENCE.
                  </p>
                  <p className="text-xs text-slate-300">
                    Bespoke restaurant, café, and dining room build-outs by Steelage Commercial Contractors.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
