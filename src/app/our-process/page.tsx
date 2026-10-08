import { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Process } from "@/components/home/Process";
import { ProcessPillars } from "@/components/our-process/ProcessPillars";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQSection } from "@/components/common/FAQSection";
import { processFAQs } from "@/data/faqs";

export const metadata: Metadata = createPageMetadata({
  title: "Our Commercial Process",
  description:
    "Learn about our 5-step commercial construction process in Surrey, BC: Consult, Plan, Permit, Build, and Handover with transparency and quality.",
  url: "https://steelage.ca/our-process",
});

export default function ProcessPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Header Banner */}
      <section className="bg-brand-dark text-white py-16 border-b border-white/10 bg-arch-grid">
        <Container size="wide">
          <SectionHeading
            as="h1"
            eyebrow="METHODOLOGY & TIMELINE"
            title="OUR COMMERCIAL PROCESS"
            description="Proven pre-construction, planning, and build management framework built to eliminate delays and deliver exceptional commercial interiors."
            darkBackground
          />
        </Container>
      </section>

      {/* 5-Step Interactive Process Section */}
      <Process />

      {/* Process Pillars Section */}
      <ProcessPillars />

      {/* Commercial Process FAQs */}
      <FAQSection
        title="COMMERCIAL CONSTRUCTION PROCESS FAQS"
        eyebrow="METHODOLOGY & TIMELINE"
        description="Direct answers on budgeting, feasibility reviews, municipal inspection scheduling, and handover milestones."
        faqs={processFAQs}
      />

      <FinalCTA />
    </div>
  );
}
