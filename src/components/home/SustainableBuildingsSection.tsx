import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Leaf, Trees, RotateCcw, Globe, Quote, ShieldCheck } from "lucide-react";

export function SustainableBuildingsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden border-t border-slate-800">
      <Container size="wide">
        <div className="relative bg-[#061814] rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[600px]">
            
            {/* Left Column: Sustainable Buildings Narrative */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between z-10 bg-[#061814]">
              <div>
                {/* Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 mb-4 border-b-2 border-amber-500 pb-1">
                  <span className="text-xs font-black tracking-[0.25em] text-amber-400 uppercase">
                    SUSTAINABLE BUILDINGS
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3 tracking-tight">
                  BUILDING A{" "}
                  <span className="text-amber-400 font-serif italic block">
                    BETTER FUTURE
                  </span>
                </h2>

                {/* Tagline */}
                <p className="text-sm sm:text-base font-bold text-amber-400/90 mb-6 tracking-widest uppercase">
                  SUSTAINABLE. RESPONSIBLE. ENDURING.
                </p>

                {/* Paragraph */}
                <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-xl">
                  At <strong className="text-amber-400 font-semibold">Steelage Construction Ltd.</strong>, we believe that strong structures and a healthy environment go hand in hand. Our commitment to sustainable practices drives every project we build—today for a better tomorrow.
                </p>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 border-t border-amber-500/20 pt-6">
                  {/* Pillar 1: Environmental Stewardship */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black tracking-wider text-amber-400 uppercase mb-0.5">
                        ENVIRONMENTAL STEWARDSHIP
                      </h4>
                      <p className="text-xs text-slate-300">
                        We minimize our environmental impact through responsible design, efficient resource use, and waste reduction.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2: Sustainable Design */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                      <Trees className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black tracking-wider text-amber-400 uppercase mb-0.5">
                        SUSTAINABLE DESIGN
                      </h4>
                      <p className="text-xs text-slate-300">
                        We integrate green building principles to create energy-efficient, resilient and future-ready structures.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3: Resource Efficiency */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                      <RotateCcw className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black tracking-wider text-amber-400 uppercase mb-0.5">
                        RESOURCE EFFICIENCY
                      </h4>
                      <p className="text-xs text-slate-300">
                        We prioritize sustainable materials, smart construction methods, and long-term performance.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 4: A Greener Tomorrow */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black tracking-wider text-amber-400 uppercase mb-0.5">
                        A GREENER TOMORROW
                      </h4>
                      <p className="text-xs text-slate-300">
                        We build with purpose—creating spaces that support communities and preserve our planet for generations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quote Card */}
                <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-start gap-3 mb-6">
                  <Quote className="w-6 h-6 text-amber-400 shrink-0 mt-0.5 rotate-180" />
                  <p className="text-sm font-serif italic text-amber-100">
                    &ldquo;Great buildings are not just built for today, but for the world we leave behind.&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Motto */}
              <div className="border-t border-amber-500/20 pt-4 mt-2">
                <p className="text-xs font-black tracking-[0.2em] text-amber-400 uppercase">
                  STRONG STRUCTURES. SUSTAINABLE FUTURES.
                </p>
              </div>
            </div>

            {/* Right Column: Native Photography Asset Composition */}
            <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-full bg-slate-950 p-4 lg:p-6 flex items-center justify-center">
              <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl group">
                <Image
                  src="/images/projects/oakberry-main.jpg"
                  alt="Building a Better Future - Sustainable Timber & Commercial Interior Craftsmanship by SteeLage Construction"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  loading="lazy"
                />
                
                {/* Gradient Overlay & Glass Accent Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-500/40 flex items-center gap-2 shadow-lg">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-extrabold text-amber-300 uppercase tracking-widest">
                    SUSTAINABLE ENGINEERING
                  </span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-amber-500/30 shadow-xl">
                  <p className="text-xs font-black text-amber-400 uppercase tracking-wider mb-1">
                    BUILDING RESPONSIBLY. BUILDING BETTER.
                  </p>
                  <p className="text-xs text-slate-300">
                    Sustainable materials, energy-efficient envelopes, and zero-waste construction across British Columbia.
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
