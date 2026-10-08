import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Layers, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getProjectBySlug, projectAliases, projectsData } from "@/data/projects";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { FinalCTA } from "@/components/home/FinalCTA";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [...projectsData.map((project) => project.slug), ...Object.keys(projectAliases)]
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const desc = `${project.type} in ${project.location} by SteeLage Construction. ${project.summary}`.slice(0, 155);

  return {
    title: `${project.title} | Commercial Case Study`,
    description: desc,
    alternates: {
      canonical: `https://steelage.ca/projects/${project.slug}/`,
    },
    openGraph: {
      type: "website",
      locale: "en_CA",
      title: `${project.title} | Commercial Case Study`,
      description: desc,
      url: `https://steelage.ca/projects/${project.slug}/`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Commercial Case Study`,
      description: desc,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

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
        name: "Projects",
        item: "https://steelage.ca/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://steelage.ca/projects/${project.slug}/`,
      },
    ],
  };

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: `${project.title} — Commercial Case Study`,
    description: project.summary,
    image: `https://steelage.ca${project.image}`,
    author: {
      "@type": "GeneralContractor",
      name: "SteeLage Construction",
      url: "https://steelage.ca",
    },
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
    url: `https://steelage.ca/projects/${project.slug}/`,
  };

  const projectFaqs = [
    {
      question: `What was the construction scope for ${project.title}?`,
      answer: project.scope || project.summary,
    },
    {
      question: `What technical challenges were solved by SteeLage on this build?`,
      answer: `${project.challenge} Solution: ${project.solution}`,
    },
    {
      question: `What were the verified deliverables achieved for this project in ${project.location}?`,
      answer: `SteeLage completed: ${project.results.join("; ")}.`,
    },
    {
      question: `How can a commercial client start a similar build in ${project.location}?`,
      answer: `Contact SteeLage Construction's estimating team to review your commercial location, lease specifications, and architectural plans for a preliminary cost estimate.`,
    },
  ];

  const projectFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: projectFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="pt-28 pb-16">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectFaqSchema) }}
      />

      {/* Header Banner */}
      <section className="bg-brand-dark text-white py-16 border-b border-white/10 bg-arch-grid">
        <Container size="wide">
          <Link
            href="/projects/"
            prefetch={true}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-accent uppercase tracking-widest hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO PORTFOLIO
          </Link>
          <span className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase block mb-2">
            PROJECT CASE STUDY
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase leading-tight max-w-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-base font-semibold text-brand-accent uppercase">
            {project.type}
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Section */}
            <div className="lg:col-span-8 space-y-10">
              <ProjectGallery key={project.slug} title={project.title} images={project.gallery} />

              {/* Summary */}
              <div>
                <h2 className="text-xl font-bold text-brand-dark uppercase tracking-tight mb-3">
                  PROJECT OVERVIEW
                </h2>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 border border-slate-200">
                  <h3 className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                    THE CHALLENGE
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="p-6 bg-brand-light border border-slate-200 border-t-4 border-t-brand-teal">
                  <h3 className="text-xs font-bold text-brand-teal uppercase tracking-wider mb-2">
                    THE SOLUTION
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables / Results */}
              <div>
                <h3 className="text-lg font-bold text-brand-dark uppercase tracking-tight mb-4">
                  KEY RESULTS & DELIVERABLES
                </h3>
                <ul className="space-y-3 text-xs text-brand-text">
                  {project.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project-Specific Q&A Section */}
              <div className="pt-8 border-t border-slate-200 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-[#C89552]" />
                  <span className="text-xs font-bold text-[#A66C2E] uppercase tracking-widest">
                    CASE STUDY SPECIFICATIONS
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-brand-dark uppercase tracking-tight">
                  PROJECT EXECUTION & SPECIFICATIONS
                </h3>
                
                <div className="space-y-4">
                  {projectFaqs.map((faq, i) => (
                    <div key={i} className="p-5 bg-[#FAF8F4] border border-[#EAE4D8]">
                      <h4 className="text-sm font-bold text-brand-dark mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar Specs */}
            <div className="lg:col-span-4 space-y-8">
              {/* Project Meta Widget */}
              <div className="bg-brand-light p-6 border border-slate-200">
                <h3 className="text-xs font-bold tracking-widest text-brand-dark uppercase mb-6 pb-2 border-b border-slate-200">
                  PROJECT SPECIFICATIONS
                </h3>
                <dl className="space-y-4 text-xs">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-brand-teal shrink-0" />
                    <div>
                      <dt className="text-[10px] text-brand-muted uppercase">LOCATION</dt>
                      <dd className="font-bold text-brand-dark">{project.location}</dd>
                    </div>
                  </div>

                  {project.area && (
                    <div className="flex items-center gap-3">
                      <Layers className="w-4 h-4 text-brand-teal shrink-0" />
                      <div>
                        <dt className="text-[10px] text-brand-muted uppercase">SCOPE & SIZE</dt>
                        <dd className="font-bold text-brand-dark">{project.area}</dd>
                      </div>
                    </div>
                  )}

                  {project.completionTime && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-brand-teal shrink-0" />
                      <div>
                        <dt className="text-[10px] text-brand-muted uppercase">COMPLETION TIME</dt>
                        <dd className="font-bold text-brand-dark">{project.completionTime}</dd>
                      </div>
                    </div>
                  )}

                  {project.year && (
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-brand-teal shrink-0" />
                      <div>
                        <dt className="text-[10px] text-brand-muted uppercase">YEAR DELIVERED</dt>
                        <dd className="font-bold text-brand-dark">{project.year}</dd>
                      </div>
                    </div>
                  )}
                </dl>
              </div>

              {/* Related Service Link */}
              {project.relatedServiceSlug && (
                <div className="p-6 bg-white border border-[#E2D8C7] shadow-sm space-y-3">
                  <span className="text-[10px] font-bold text-[#A66C2E] uppercase tracking-wider block">
                    RELATED COMMERCIAL SERVICE
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Explore our specialized commercial contracting capabilities for this project type.
                  </p>
                  <Link
                    href={`/services/${project.relatedServiceSlug}/`}
                    prefetch={true}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A66C2E] hover:underline uppercase tracking-wider"
                  >
                    <span>VIEW RELATED SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C89552]" />
                  </Link>
                </div>
              )}

              {/* Quote CTA Widget */}
              <div className="bg-brand-dark text-white p-6 border border-white/15 shadow-xl bg-arch-grid">
                <h3 className="text-base font-extrabold uppercase mb-2">
                  HAVE A SIMILAR SPACE?
                </h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Let us bring the same precision, quality, and transparent management to your next commercial project.
                </p>
                <Button href="/contact/" variant="primary" size="md" className="w-full">
                  DISCUSS YOUR PROJECT
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  );
}
