import { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { CheckCircle2, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyData } from "@/data/company";
import { AboutSection } from "@/components/home/AboutSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQSection } from "@/components/common/FAQSection";
import { aboutFAQs } from "@/data/faqs";

export const metadata: Metadata = createPageMetadata({
  title: "About Us | Surrey Commercial Contractor",
  description:
    "SteeLage Construction is a leading commercial general contractor in Surrey, BC, delivering high-end tenant improvements and renovations.",
  url: "https://steelage.ca/about",
});

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Header Banner */}
      <section className="bg-brand-dark text-white py-16 border-b border-white/10 bg-arch-grid">
        <Container size="wide">
          <SectionHeading
            as="h1"
            eyebrow="ABOUT STEELAGE"
            title="COMMERCIAL CONSTRUCTION BUILT ON TRUST"
            description="Based in Surrey, BC, SteeLage Construction delivers architectural-grade tenant improvements, restaurant builds, retail spaces, and office renovations."
            darkBackground
          />
        </Container>
      </section>

      {/* Family Safety & Peace of Mind Showcase */}
      <AboutSection />

      {/* Main Story & Stats */}
      <section className="py-20 bg-white">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-teal uppercase">
                OUR MISSION & STANDARDS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight uppercase leading-tight">
                ELEVATING COMMERCIAL SPACES ACROSS THE LOWER MAINLAND
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed">
                Founded with a commitment to architectural excellence and transparent client partnership, SteeLage Construction has earned a reputation as one of Surrey&apos;s most reliable commercial general contractors.
              </p>
              <p className="text-sm text-brand-muted leading-relaxed">
                We understand that commercial construction is not just about drywall and steel—it&apos;s about creating functional, impressive environments that elevate business operations, attract customers, and maximize commercial property value.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Surrey & Lower Mainland Local Expertise</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Licensed, Bonded & Fully Insured</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Rigid Quality Control Standards</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs font-semibold text-brand-dark">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Rapid Municipal Permitting</span>
                </div>
              </div>
            </div>

            {/* Stats Card Stack */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {companyData.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-brand-light p-6 border border-slate-200 text-center border-t-4 border-t-brand-teal shadow-sm"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-bold text-brand-teal uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Head Office & Service Area */}
      <section className="py-16 bg-brand-light border-y border-slate-200">
        <Container size="wide">
          <div className="bg-brand-dark text-white p-8 sm:p-12 border border-white/15 shadow-2xl bg-arch-grid">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-brand-accent text-xs font-bold tracking-widest uppercase">
                  <MapPin className="w-4 h-4" />
                  <span>HEAD OFFICE & SERVICE RADIUS</span>
                </div>
                <h3 className="text-2xl font-extrabold uppercase">
                  BASED IN SURREY, BC — SERVING THE LOWER MAINLAND
                </h3>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  Our headquarters in Surrey positions us perfectly to serve commercial clients across Vancouver, Burnaby, New Westminster, Langley, Abbotsford, and White Rock.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <div className="p-4 bg-brand-teal/20 border border-brand-teal text-center">
                  <span className="text-xs font-bold text-brand-accent uppercase block">Call Head Office</span>
                  <a href={`tel:${companyData.contact.phoneRaw}`} className="text-lg font-extrabold text-white hover:underline">
                    {companyData.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About SteeLage FAQs */}
      <FAQSection
        title="ABOUT STEELAGE CONSTRUCTION FAQS"
        eyebrow="ABOUT OUR COMPANY"
        description="Key information regarding SteeLage Construction's commercial licensing, WorkSafeBC coverage, Surrey headquarters, and team expertise."
        faqs={aboutFAQs}
      />

      <FinalCTA />
    </div>
  );
}
