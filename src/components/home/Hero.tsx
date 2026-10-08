import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#08171A] overflow-hidden pt-24 sm:pt-28 lg:pt-24 pb-14 sm:pb-16">
      {/* Background Daylight Photography with smooth Ken-Burns motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="relative w-full h-full animate-ken-burns">
          <Image
            src="/images/projects/dq-grill-chill.jpg"
            alt="Dairy Queen Grill & Chill commercial build completed by SteeLage Construction"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-100"
            style={{ objectPosition: "24% 45%" }}
          />
        </div>

        {/* Clean, solid-opacity gradient for left text readability without touching the building on the right */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,23,26,0.96) 0%, rgba(8,23,26,0.80) 30%, rgba(8,23,26,0.25) 48%, rgba(8,23,26,0.00) 66%)",
          }}
        />

        {/* Subtle top fade for navbar contrast */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#08171A]/95 via-[#08171A]/40 to-transparent pointer-events-none z-1" />

        {/* Subtle bottom soft shadow */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08171A]/60 via-[#08171A]/10 to-transparent pointer-events-none z-1" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left Column — constrained so it never overlaps the building on the right */}
        <div className="py-6 flex flex-col justify-center" style={{ maxWidth: "520px" }}>

          {/* Eyebrow badge with glowing pulsing gold beacon */}
          <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D3A15D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D3A15D] shadow-[0_0_8px_rgba(211,161,93,0.9)]" />
            </span>
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#D3A15D] uppercase">
              STEELAGE CONSTRUCTION LTD.
            </span>
            <span className="w-8 sm:w-14 h-px bg-gradient-to-r from-[#C89552] to-transparent" />
          </div>

          {/* Attractive, bold, compact headline with gold highlight — clean crisp typography */}
          <h1
            className="font-black text-white tracking-tight uppercase"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3.1rem)",
              lineHeight: 1.08,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            BUILT FOR BUSINESS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D3A15D] via-[#F8DBA5] to-[#C89552]">
              DESIGNED FOR WHAT&apos;S NEXT.
            </span>
          </h1>

          {/* Subtitles & Industry Focus */}
          <p
            className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed mb-3.5 sm:mb-4"
            style={{ maxWidth: "470px", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
          >
            Commercial construction from concept to opening across British Columbia.
          </p>

          <p 
            className="text-xs sm:text-[13px] font-bold tracking-[0.16em] text-[#D3A15D] uppercase mb-7 sm:mb-8"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
          >
            FRANCHISE RESTAURANTS • DAYCARES • MEDICAL &amp; DENTAL
          </p>

          {/* CTAs with hover animations */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-6">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#C89552] to-[#B8803D] hover:from-[#D3A15D] hover:to-[#C89552] text-white font-bold text-xs sm:text-sm uppercase px-7 sm:px-8 py-4 tracking-wider transition-all shadow-[0_4px_20px_rgba(200,149,82,0.4)] hover:shadow-[0_6px_28px_rgba(200,149,82,0.6)] hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/projects/"
              className="inline-flex items-center gap-2.5 bg-[#0B2025]/80 hover:bg-[#0B2025] border border-white/30 hover:border-[#C89552] text-white font-bold text-xs sm:text-sm uppercase px-7 sm:px-8 py-4 tracking-wider transition-all backdrop-blur-md hover:-translate-y-0.5 cursor-pointer shadow-lg"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>VIEW OUR WORK</span>
            </Link>
          </div>

          {/* Live Credibility Mini-Pill */}
          <div className="inline-flex items-center gap-2 text-xs text-slate-300 font-medium tracking-wide">
            <span className="text-[#D3A15D] font-bold">✓</span>
            <span>Turnkey MEP &bull; Permits &bull; City &amp; Health Inspected</span>
          </div>
        </div>
      </div>

      {/* Bottom-right Project Location Stamp with floating beacon */}
      <div className="hidden sm:flex flex-col items-end absolute bottom-8 right-6 lg:right-10 z-10 text-right pointer-events-none">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D3A15D] animate-ping" />
          <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-white" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.8)" }}>
            DQ GRILL &amp; CHILL
          </span>
        </div>
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#D3A15D]" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.8)" }}>
          SURREY, BC
        </span>
      </div>

      {/* Modern Center Scroll Indicator */}
      <div className="hidden md:flex flex-col items-center gap-1.5 absolute bottom-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-75">
        <span className="text-[9px] font-bold tracking-[0.25em] text-white/80 uppercase">SCROLL</span>
        <div className="w-4 h-7 border border-[#D3A15D]/60 rounded-full flex justify-center pt-1 shadow-sm">
          <div className="w-1 h-1.5 bg-[#D3A15D] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
