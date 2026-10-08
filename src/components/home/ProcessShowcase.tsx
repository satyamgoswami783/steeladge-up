import Image from "next/image";
import { MapPin, Compass, FileText, HardHat, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "SITE / LEASE REVIEW",
    description: "We review the location before major construction decisions are made.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "DESIGN + ENGINEERING",
    description: "Architecture, Mechanical, Electrical, Structural and equipment coordination.",
    icon: Compass,
  },
  {
    number: "03",
    title: "PERMITS + APPROVALS",
    description: "Municipality, landlord, health authority, consultants and permit revisions.",
    icon: FileText,
  },
  {
    number: "04",
    title: "CONSTRUCTION",
    description: "Demolition, framing, MEP, finishes, millwork and equipment coordination.",
    icon: HardHat,
  },
  {
    number: "05",
    title: "INSPECTIONS + TURNOVER",
    description: "Trade inspections, final inspections and occupancy/opening coordination.",
    icon: CheckCircle2,
  },
];

export function ProcessShowcase() {
  return (
    <section className="bg-[#F7F5F0] py-20 sm:py-28 border-y border-[#E5DFD4] relative overflow-hidden">
      {/* Background Architectural Framing Photography Layer with light fade */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <Image
          src="/images/services/interior-build-outs.jpg"
          alt="SteeLage commercial tenant fit-out and construction"
          fill
          sizes="100vw"
          className="object-cover opacity-15 saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5F0] via-[#F7F5F0]/85 to-[#F7F5F0]" />
      </div>

      {/* Background subtle light pattern */}
      <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none z-0" />

      <Container size="wide" className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#C89552]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#9E743F] uppercase">
              OUR PROCESS
            </span>
            <span className="w-8 h-px bg-[#C89552]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17120E] tracking-tight uppercase leading-[1.1] mb-4">
            ONE TEAM. FROM EMPTY SPACE TO OPENING DAY.
          </h2>

          <p className="text-sm sm:text-base text-[#5C5248] font-medium leading-relaxed">
            Design. Permits. Construction. Opening. A single partner for the entire journey.
          </p>
        </div>

        {/* 5-Step Horizontal Sequence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-5 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === PROCESS_STEPS.length - 1;

            return (
              <div
                key={step.number}
                className="relative flex flex-col items-start bg-white p-6 sm:p-7 border border-[#E5DFD4] shadow-[0_4px_20px_rgba(30,20,10,0.04)] hover:shadow-[0_8px_30px_rgba(200,149,82,0.15)] hover:border-[#C89552]/60 transition-all duration-300 group"
              >
                {/* Step Top: Number and Icon with arrow connector */}
                <div className="w-full flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#B8803D]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#DFCFC0] flex items-center justify-center text-[#B8803D] shadow-sm group-hover:border-[#C89552] group-hover:bg-[#C89552] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Horizontal Arrow on desktop */}
                  {!isLast && (
                    <div className="hidden lg:block text-[#C5B7A5] pr-1">
                      <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-sm font-extrabold text-[#17120E] tracking-wider uppercase mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#63574B] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
