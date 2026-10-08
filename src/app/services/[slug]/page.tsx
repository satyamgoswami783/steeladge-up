import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ArrowRight, Phone, Mail, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/data/services";
import { projectsData, getProjectsForService } from "@/data/projects";
import { companyData } from "@/data/company";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQSection } from "@/components/common/FAQSection";
import { serviceFAQs } from "@/data/faqs";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const pageTitle = service.metaTitle || `${service.shortTitle} | Commercial Contractor Surrey BC`;
  const pageDesc = service.metaDescription || service.description;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: service.primaryKeywords,
    alternates: {
      canonical: `https://steelage.ca/services/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_CA",
      title: `${pageTitle} | SteeLage Construction`,
      description: pageDesc,
      url: `https://steelage.ca/services/${slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | SteeLage Construction`,
      description: pageDesc,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related projects with smart fallback to ensure balanced 3-column rows (3 3 ke pairs)
  const serviceProjects = getProjectsForService(service.slug);
  const displayProjects = serviceProjects.length >= 3 
    ? (serviceProjects.length % 3 === 0 
        ? serviceProjects 
        : [...serviceProjects, ...projectsData.filter((p) => !serviceProjects.some((sp) => sp.slug === p.slug))].slice(0, Math.ceil(serviceProjects.length / 3) * 3))
    : [...serviceProjects, ...projectsData.filter((p) => !serviceProjects.some((sp) => sp.slug === p.slug))].slice(0, 6);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://steelage.ca",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://steelage.ca/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortTitle,
        item: `https://steelage.ca/services/${slug}/`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle,
    description: service.description,
    provider: {
      "@type": "GeneralContractor",
      name: companyData.name,
      url: "https://steelage.ca",
      telephone: companyData.contact.phoneRaw,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyData.address.street,
        addressLocality: companyData.address.city,
        addressRegion: companyData.address.province,
        postalCode: companyData.address.postalCode,
        addressCountry: companyData.address.country,
      },
    },
    areaServed: companyData.areasServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area}, BC`,
    })),
    url: `https://steelage.ca/services/${slug}/`,
    image: `https://steelage.ca${service.image}`,
  };

  return (
    <div className="pt-24 sm:pt-28">
      {/* Breadcrumb & Service JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. Hero Banner — Dark Blueprint Tone with Architectural Grid */}
      <section className="bg-[#08171A] text-white py-14 sm:py-18 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,149,82,0.14),transparent_70%)]" />

        <Container size="wide" className="relative z-10">
          <Link
            href="/services/"
            prefetch={true}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#D3A15D] uppercase tracking-widest hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO ALL SERVICES
          </Link>

          <span className="text-xs font-extrabold tracking-[0.2em] text-[#D3A15D] uppercase block mb-2">
            COMMERCIAL SERVICE
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-tight max-w-4xl text-white">
            {service.title}
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-normal">
            {service.description}
          </p>
        </Container>
      </section>

      {/* 2. Main Content Details — Warm Luxury Light Sand Background */}
      <section className="py-14 sm:py-20 bg-[#F9F8F5] text-slate-900 relative overflow-hidden border-b border-[#E8E2D5]">
        {/* Subtle Architectural Drafting Lines */}
        <div 
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(200, 149, 82, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(200, 149, 82, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Main Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured Service Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border border-[#E2D8C7] shadow-xl">
                <Image
                  src={service.image}
                  alt={`${service.title} - SteeLage Construction Surrey BC`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Service Scope Description */}
              <div className="bg-white p-7 sm:p-9 border border-[#E2D8C7] shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-[#E8E2D5] pb-3">
                  <span className="w-8 h-0.5 bg-[#C89552]" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2025] uppercase tracking-tight">
                    Service Overview &amp; Scope
                  </h2>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {service.longDescription}
                </p>
              </div>

              {/* Key Capabilities & Inclusions — Crisp Readable Light Theme */}
              <div className="p-7 sm:p-9 bg-white border border-[#E2D8C7] shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-4">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0B2025] uppercase tracking-tight">
                    Key Capabilities &amp; Inclusions
                  </h3>
                  <span className="text-xs font-bold text-[#A66C2E] uppercase tracking-widest">
                    SURREY &amp; METRO VANCOUVER
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-[#FAF8F4] border border-[#EAE4D8]">
                      <CheckCircle2 className="w-5 h-5 text-[#C89552] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-bold text-[#0B2025]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why SteeLage Construction — High-Contrast Gold-Accented Cards */}
              <div className="bg-white p-7 sm:p-9 border border-[#E2D8C7] shadow-sm space-y-5">
                <div className="flex items-center gap-3 border-b border-[#E8E2D5] pb-3">
                  <span className="w-8 h-0.5 bg-[#C89552]" />
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0B2025] uppercase tracking-tight">
                    Why SteeLage Construction for {service.shortTitle}
                  </h3>
                </div>

                <div className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <div 
                      key={i} 
                      className="p-4 sm:p-5 bg-[#FAF8F4] border border-[#EAE4D8] border-l-4 border-l-[#C89552] flex items-center justify-between shadow-xs"
                    >
                      <span className="text-xs sm:text-sm text-[#0B2025] font-bold leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar (4 cols) — Packed with zero dead space */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* 1. Primary Action & Proposal Card */}
              <div className="bg-[#08171A] text-white p-7 sm:p-8 border border-white/15 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-arch-grid opacity-15 pointer-events-none z-0" />
                
                <div className="relative z-10 space-y-5">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#D3A15D] block">
                    PROJECT ESTIMATING &amp; CONSULTATION
                  </span>

                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-white border-b border-white/10 pb-3">
                    PLAN YOUR {service.shortTitle.toUpperCase()}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Connect directly with our Surrey project managers for preliminary cost budgeting, architectural review, and municipal permit planning.
                  </p>

                  <Button 
                    href="/contact/" 
                    variant="primary" 
                    size="md" 
                    className="w-full bg-[#C89552] hover:bg-[#B8803D] border-[#C89552] text-white font-bold uppercase shadow-lg"
                  >
                    REQUEST A PROPOSAL
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>

                  <a
                    href={`https://wa.me/16044181515?text=${encodeURIComponent(
                      `Hi SteeLage Construction, I am interested in ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 font-bold text-xs tracking-wider uppercase transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* 2. Direct Estimator Phone & Office Contacts */}
              <div className="bg-white p-6 border border-[#E2D8C7] shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-[#E8E2D5] pb-3">
                  <Phone className="w-4 h-4 text-[#A66C2E]" />
                  <h4 className="text-xs font-bold text-[#0B2025] uppercase tracking-wider">
                    DIRECT ESTIMATOR HOTLINE
                  </h4>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-500 font-medium block">Direct Line:</span>
                    <a href={`tel:${companyData.contact.phoneRaw}`} className="text-sm font-extrabold text-[#0B2025] hover:text-[#A66C2E]">
                      {companyData.contact.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium block">Estimating Email:</span>
                    <a href={`mailto:${companyData.contact.email}`} className="font-semibold text-[#A66C2E] hover:underline break-all">
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E8E2D5] flex items-center gap-2 text-[11px] text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-[#C89552]" />
                  <span>Mon – Fri: 7:00 AM – 5:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Related Projects & Case Studies — 3-Column Grid (3 3 ke pairs) */}
      {displayProjects.length > 0 && (
        <section className="py-16 sm:py-24 bg-[#FAF8F4] border-t border-[#E8E2D5] relative overflow-hidden">
          <Container size="wide">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 pb-4 border-b border-[#E8E2D5] gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-0.5 bg-[#C89552]" />
                  <span className="text-xs font-extrabold tracking-[0.2em] text-[#A66C2E] uppercase">
                    PROVEN TRACK RECORD
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2025] uppercase tracking-tight">
                  FEATURED {service.shortTitle.toUpperCase()} PROJECTS
                </h2>
              </div>
              <Link
                href="/projects/"
                prefetch={true}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#A66C2E] hover:text-[#0B2025] uppercase tracking-widest transition-colors py-2 px-4 border border-[#E2D8C7] bg-white hover:border-[#C89552] shadow-xs"
              >
                <span>VIEW ALL PROJECTS</span>
                <ArrowRight className="w-4 h-4 text-[#C89552]" />
              </Link>
            </div>

            {/* Clean 3-Column Grid (3 3 ke pairs) — Fully Clickable Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {displayProjects.map((proj) => (
                <Link
                  key={proj.slug}
                  href={`/projects/${proj.slug}/`}
                  prefetch={true}
                  className="group relative flex flex-col justify-between bg-white border border-[#E2D8C7] overflow-hidden hover:border-[#C89552] hover:shadow-[0_12px_32px_rgba(200,149,82,0.18)] transition-all duration-300 cursor-pointer block z-10"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                    <Image
                      src={proj.image}
                      alt={`${proj.title} commercial project in ${proj.location}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    
                    {/* Location Badge */}
                    <div className="absolute top-3 left-3 bg-[#08171A]/90 backdrop-blur-xs text-[#D3A15D] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-white/10">
                      {proj.location || "British Columbia"}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[11px] font-extrabold text-[#A66C2E] uppercase tracking-wider block mb-1.5">
                        {proj.brand || "COMMERCIAL BUILD"}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0B2025] group-hover:text-[#A66C2E] uppercase transition-colors line-clamp-1 leading-snug">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-normal mt-2 line-clamp-2 leading-relaxed">
                        {proj.summary || proj.scope}
                      </p>
                    </div>

                    {/* Card Action Link */}
                    <div className="pt-4 border-t border-[#EAE4D8] flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-[#A66C2E] group-hover:text-[#0B2025] uppercase tracking-wider transition-colors">
                        <span>EXPLORE CASE STUDY</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C89552] transform transition-transform group-hover:translate-x-1.5" />
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-0.5">
                        CASE STUDY
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 4. Frequently Asked Questions */}
      {serviceFAQs[service.slug] && (
        <FAQSection
          title={`${service.shortTitle.toUpperCase()} FAQS`}
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          description={`Direct answers to common questions about ${service.title.toLowerCase()}, budget estimating, and municipal building codes in Surrey and Metro Vancouver.`}
          faqs={serviceFAQs[service.slug]}
        />
      )}

      <FinalCTA />
    </div>
  );
}
