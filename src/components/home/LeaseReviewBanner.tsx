import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function LeaseReviewBanner() {
  return (
    <section className="bg-[#FAF7F2] py-20 sm:py-24 border-t border-[#E5DFD4] relative overflow-hidden">
      {/* Background Architectural Construction Photography Layer with soft light fade */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <Image
          src="/images/services/tenant-improvements.jpg"
          alt="SteeLage commercial space and lease review"
          fill
          sizes="100vw"
          className="object-cover opacity-12 saturate-50 object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-[#FAF7F2]/60" />
      </div>

      {/* Background Technical Grid Aesthetics with warm subtle glow */}
      <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none z-0" />
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-gradient-to-l from-[#EBE3D5]/40 to-transparent pointer-events-none z-0" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] text-[#9E743F] uppercase">
                PLAN WITH CONFIDENCE
              </span>
              <span className="w-12 h-px bg-[#C89552]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17120E] tracking-tight uppercase leading-[1.08] mb-3">
              HAVE A LOCATION IN MIND?
            </h2>

            <p className="text-base sm:text-lg font-bold text-[#3D3126] mb-4">
              Before you commit to a lease, let us review the space.
            </p>

            <p className="text-xs sm:text-sm text-[#5C5045] max-w-2xl leading-relaxed mb-8 font-medium">
              We can identify potential construction, mechanical, electrical, and permitting issues before they become expensive surprises.
            </p>

            <div>
              <Button
                href="/contact/"
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-[#C89552] to-[#B8803D] hover:from-[#D3A15D] hover:to-[#C89552] border-none text-white shadow-[0_4px_20px_rgba(200,149,82,0.3)] font-bold text-xs uppercase tracking-wider px-8 py-4"
              >
                REQUEST A SITE REVIEW
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Column: Clean Sector Tabs */}
          <div className="lg:col-span-4 flex flex-col justify-center border-l lg:border-l-2 border-[#DFCFC0] lg:pl-10">
            <div className="space-y-6">
              {[
                { label: "RESTAURANT", desc: "Kitchen hoods, grease traps, & gas loads" },
                { label: "DAYCARE", desc: "Outdoor play space, egress, & licensing" },
                { label: "MEDICAL", desc: "Plumbing, radiology shielding, & acoustics" },
              ].map((item, idx) => (
                <div key={idx} className="pb-5 border-b border-[#E5DFD4] last:border-b-0 last:pb-0">
                  <span className="text-base sm:text-lg font-black text-[#17120E] tracking-widest uppercase block">
                    {item.label}
                  </span>
                  <span className="text-[12px] text-[#6E5D4F] tracking-wide mt-1 block font-medium">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
