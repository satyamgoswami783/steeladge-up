import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { companyData } from "@/data/company";

export function FinalCTA() {
  return (
    <section className="bg-brand-dark py-16 text-white border-t border-white/10 relative overflow-hidden bg-arch-grid">
      <Container size="wide">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight">
              READY TO BUILD YOUR VISION?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
              Let&apos;s create a space that works for your business.
            </p>
          </div>

          {/* Center Action Button */}
          <div>
            <Button href="/contact/#quote-form" variant="primary" size="lg" className="shadow-2xl">
              GET A QUOTE TODAY
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Right Direct Contact Info */}
          <div className="flex flex-col gap-2.5 text-xs text-slate-300 border-t sm:border-t-0 lg:border-l border-white/15 pt-4 sm:pt-0 lg:pl-8">
            <a
              href={`tel:${companyData.contact.phoneRaw}`}
              className="flex items-center gap-2 hover:text-brand-accent transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-accent opacity-80 shrink-0" />
              <span className="font-semibold">{companyData.contact.phone}</span>
            </a>
            <a
              href={`tel:${companyData.contact.secondaryPhoneRaw}`}
              className="flex items-center gap-2 hover:text-brand-accent transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-accent opacity-80 shrink-0" />
              <span className="font-semibold">{companyData.contact.secondaryPhone}</span>
            </a>
            <a
              href={`tel:${companyData.contact.tertiaryPhoneRaw}`}
              className="flex items-center gap-2 hover:text-brand-accent transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-accent opacity-80 shrink-0" />
              <span className="font-semibold">{companyData.contact.tertiaryPhone}</span>
            </a>
            <a
              href={`mailto:${companyData.contact.email}`}
              className="flex items-center gap-2 hover:text-brand-accent transition-colors"
            >
              <Mail className="w-4 h-4 text-brand-accent shrink-0" />
              <span className="font-semibold">{companyData.contact.email}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
