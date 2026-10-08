import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";

const TESTIMONIALS = [
  {
    quote:
      "SteeLage delivered our restaurant on time and the quality is outstanding. They understood our brand standards and handled everything from permits to final inspection.",
    role: "FRANCHISE OWNER",
    client: "Boston Pizza",
  },
  {
    quote:
      "Professional, organized and great to work with. They made the daycare construction process smooth and stress-free.",
    role: "DAYCARE OPERATOR",
    client: "Coquitlam, BC",
  },
  {
    quote:
      "We're thrilled with our new dental clinic. The SteeLage team was knowledgeable, responsive and committed to getting it right.",
    role: "DENTAL PRACTICE OWNER",
    client: "Surrey, BC",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#08171A] py-20 sm:py-28 border-t border-white/10 relative overflow-hidden">
      {/* Background Architectural Dark Grid Image Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <Image
          src="/images/bg-blueprint-dark.png"
          alt="Architectural grid pattern"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08171A] via-transparent to-[#08171A] opacity-80" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Eyebrow */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-px bg-[#C89552]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#D3A15D] uppercase">
              WHAT OUR CLIENTS SAY
            </span>
            <span className="w-8 h-px bg-[#C89552]" />
          </div>
        </div>

        {/* 3 Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0B2025]/90 backdrop-blur-sm p-7 sm:p-8 border border-white/10 hover:border-[#C89552]/70 shadow-xl transition-all duration-300"
            >
              <div>
                {/* Gold Quote Mark */}
                <Quote className="w-8 h-8 text-[#D3A15D] rotate-180 mb-4 fill-[#D3A15D]/20" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-extrabold text-white tracking-wider uppercase">
                  {item.role}
                </p>
                <p className="text-xs text-[#D3A15D] font-semibold mt-0.5">
                  {item.client}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
