import { Metadata } from "next";
import Image from "next/image";
import { createPageMetadata } from "@/lib/page-metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsGridWithFilters } from "@/components/projects/ProjectsGridWithFilters";
import { projectsData } from "@/data/projects";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQSection } from "@/components/common/FAQSection";
import { projectsListingFAQs } from "@/data/faqs";

export const metadata: Metadata = createPageMetadata({
  title: "Featured Commercial Projects",
  description:
    "View commercial projects completed across Surrey & Lower Mainland, BC, including Boston Pizza, Dairy Queen, Oakberry Açaí, Mucho Burrito, and Marble Slab Creamery build-outs.",
  url: "https://steelage.ca/projects",
});

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-16 bg-[#08171A]">
      {/* Header Banner */}
      <section className="text-white py-16 border-b border-white/10 relative overflow-hidden">
        {/* Background Dark Blueprint Grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <Image
            src="/images/bg-blueprint-dark.png"
            alt="Architectural grid pattern"
            fill
            sizes="100vw"
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08171A] via-transparent to-[#08171A] opacity-80" />
        </div>

        <Container size="wide" className="relative z-10">
          <SectionHeading
            as="h1"
            eyebrow="COMMERCIAL PORTFOLIO"
            title="FEATURED PROJECTS"
            description="A showcase of retail renovations, restaurant build-outs, tenant improvements, and corporate commercial spaces completed across Surrey and the Lower Mainland, BC."
            darkBackground
          />
        </Container>
      </section>

      {/* Projects Grid with Interactive Category Tabs */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <Image
            src="/images/bg-blueprint-dark.png"
            alt="Architectural grid pattern"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08171A] via-transparent to-[#08171A] opacity-80" />
        </div>

        <Container size="wide" className="relative z-10">
          <ProjectsGridWithFilters projects={projectsData} />
        </Container>
      </section>

      {/* Commercial Portfolio FAQs */}
      <FAQSection
        title="COMMERCIAL PORTFOLIO FAQS"
        eyebrow="PORTFOLIO & PROJECT FAQS"
        description="Learn more about our completed commercial builds, client walkthroughs, and quality execution standards across Metro Vancouver."
        faqs={projectsListingFAQs}
        dark
      />

      <FinalCTA />
    </div>
  );
}
