import { Metadata } from "next";
import Image from "next/image";
import { createPageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/home/ServiceCard";
import { servicesData } from "@/data/services";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQSection } from "@/components/common/FAQSection";
import { servicesListingFAQs } from "@/data/faqs";

export const metadata: Metadata = createPageMetadata({
  title: "Commercial Construction Services",
  description:
    "Commercial general contracting in Surrey, BC: tenant improvements, project management, interior build-outs, and ground-up builds.",
  url: "https://steelage.ca/services",
});

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <section className="bg-brand-dark text-white py-16 border-b border-white/10 bg-arch-grid">
        <Container size="wide">
          <SectionHeading
            as="h1"
            eyebrow="OUR EXPERTISE"
            title="COMMERCIAL CONSTRUCTION SERVICES"
            description="Comprehensive general contracting, tenant improvements, and high-end interior solutions tailored for commercial enterprises across Surrey & Lower Mainland."
            darkBackground
          />
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-light">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Service Highlights */}
      <section className="py-16 bg-white border-y border-slate-200">
        <Container size="wide">
          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-teal uppercase">
                    SERVICE OVERVIEW
                  </span>
                  <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {service.longDescription}
                  </p>
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-bold text-brand-dark uppercase">Key Capabilities:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Link
                      href={`/services/${service.slug}/`}
                      prefetch={true}
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white bg-brand-teal px-6 py-3 uppercase hover:bg-brand-accent transition-colors"
                    >
                      EXPLORE {service.shortTitle}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-900 border border-slate-200 p-2 shadow-lg">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Commercial Services FAQs */}
      <FAQSection
        title="COMMERCIAL SERVICES FAQS"
        eyebrow="COMMERCIAL EXPERTISE & FAQS"
        description="Key information regarding commercial construction delivery models, permit expediting, and service scopes across Surrey and Metro Vancouver."
        faqs={servicesListingFAQs}
      />

      <FinalCTA />
    </div>
  );
}
