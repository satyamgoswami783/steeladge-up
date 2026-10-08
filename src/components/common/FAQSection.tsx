import Link from "next/link";
import { ArrowRight, HelpCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FAQItem } from "@/data/faqs";

interface FAQSectionProps {
  title?: string;
  eyebrow?: string;
  description?: string;
  faqs: FAQItem[];
  className?: string;
  dark?: boolean;
  id?: string;
}

export function FAQSection({
  title = "Commercial Construction FAQs",
  eyebrow = "FREQUENTLY ASKED QUESTIONS",
  description = "Get clear, direct answers to common questions about commercial construction, tenant improvements, municipal permits, and project budgeting in Surrey and Metro Vancouver.",
  faqs,
  className = "",
  dark = false,
  id = "faqs",
}: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 relative overflow-hidden border-t ${
        dark
          ? "bg-[#08171A] text-white border-white/10"
          : "bg-white text-slate-900 border-[#E8E2D5]"
      } ${className}`}
    >
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#C89552]" />
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#C89552] uppercase">
              {eyebrow}
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight ${
              dark ? "text-white" : "text-[#0B2025]"
            }`}
          >
            {title}
          </h2>

          <p
            className={`mt-4 text-sm sm:text-base leading-relaxed ${
              dark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        </div>

        {/* FAQ Grid / List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className={`p-6 sm:p-8 border transition-all duration-200 flex flex-col justify-between ${
                dark
                  ? "bg-[#0c1f24] border-white/10 hover:border-[#C89552]/60"
                  : "bg-[#FAF8F4] border-[#E8E2D5] hover:border-[#C89552] hover:shadow-md"
              }`}
            >
              <div>
                {/* Question as H3 heading */}
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-5 h-5 text-[#C89552] shrink-0 mt-0.5" />
                  <h3
                    className={`text-base sm:text-lg font-bold tracking-tight leading-snug ${
                      dark ? "text-white" : "text-[#0B2025]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                {/* Direct authoritative Answer */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed pl-8 font-normal ${
                    dark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>

              {/* Real Project Proof link if available */}
              {faq.projectProof && (
                <div className="mt-5 pt-4 pl-8 border-t border-[#EAE4D8]/80 dark:border-white/10 flex items-center justify-between">
                  <Link
                    href={faq.projectProof.href}
                    prefetch={true}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A66C2E] dark:text-[#D3A15D] hover:underline uppercase tracking-wider group"
                  >
                    <span>{faq.projectProof.text}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C89552]" />
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
