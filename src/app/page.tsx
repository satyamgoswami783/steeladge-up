import { Hero } from "@/components/home/Hero";
import { TrustBrands } from "@/components/home/TrustBrands";
import { GeoHomeSection } from "@/components/home/GeoHomeSection";
import { SectorShowcase } from "@/components/home/SectorShowcase";
import { ProcessShowcase } from "@/components/home/ProcessShowcase";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { LeaseReviewBanner } from "@/components/home/LeaseReviewBanner";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceArea } from "@/components/home/ServiceArea";
import { FAQSection } from "@/components/common/FAQSection";
import { homeFAQs } from "@/data/faqs";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: BUILT FOR BUSINESS. DESIGNED FOR WHAT'S NEXT */}
      <Hero />

      {/* 2. Trusted Brands Bar: Boston Pizza, DQ, Panago, Marble Slab, Oakberry, Mucho Burrito */}
      <TrustBrands />

      {/* 3. GEO Commercial Construction & Tenant Improvements in Surrey, BC */}
      <GeoHomeSection />

      {/* 4. 3-Column Sector Showcase: Franchise Restaurant, Daycare, Medical & Dental */}
      <SectorShowcase />

      {/* 4. Our Process: ONE TEAM. FROM EMPTY SPACE TO OPENING DAY (5-step sequence) */}
      <ProcessShowcase />

      {/* 5. Selected Work: Interactive Filter (All, Restaurant, Daycare, Healthcare) */}
      <FeaturedProjects />

      {/* 6. Plan with Confidence: HAVE A LOCATION IN MIND? */}
      <LeaseReviewBanner />

      {/* 7. Client Reviews: WHAT OUR CLIENTS SAY */}
      <Testimonials />

      {/* 8. Regional Coverage Across Surrey & Lower Mainland */}
      <ServiceArea />

      {/* 9. Commercial Construction FAQs */}
      <FAQSection
        title="COMMERCIAL CONSTRUCTION FAQS"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        description="Clear, authoritative answers to common commercial construction, general contracting, and municipal building permit questions in Surrey, Vancouver, and the Lower Mainland."
        faqs={homeFAQs}
      />
    </>
  );
}
