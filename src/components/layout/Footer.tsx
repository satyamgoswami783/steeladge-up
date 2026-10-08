import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Share2, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-[#08171A] text-white border-t border-white/10 relative overflow-hidden">
      {/* Decorative top architectural gold line */}
      <div className="h-[2px] bg-gradient-to-r from-[#C89552] via-[#E8BE78] to-[#C89552]" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: Brand Info & Accreditation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" />
            
            <p className="text-slate-300 text-xs sm:text-sm max-w-sm leading-relaxed mt-4 font-normal">
              Commercial construction and turnkey tenant improvements across British Columbia. Specialized in franchise restaurants, licensed daycares, and medical &amp; dental clinics.
            </p>

            {/* License / Accreditation Pill */}
            <div className="inline-flex items-center gap-2 bg-[#0B2025] border border-white/15 px-3.5 py-2 text-[11px] font-semibold text-[#D3A15D] tracking-wider uppercase shadow-md">
              <ShieldCheck className="w-4 h-4 text-[#C89552] shrink-0" />
              <span>Licensed &amp; Insured Commercial Contractor</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={companyData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#0B2025] hover:bg-[#C89552] border border-white/15 hover:border-[#C89552] flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm cursor-pointer"
                aria-label="LinkedIn"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#0B2025] hover:bg-[#C89552] border border-white/15 hover:border-[#C89552] flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm cursor-pointer"
                aria-label="Instagram"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={companyData.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#0B2025] hover:bg-[#25D366] border border-white/15 hover:border-[#25D366] flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm cursor-pointer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Commercial Sectors (3 cols) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-0.5 bg-[#C89552]" />
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#D3A15D]">
                COMMERCIAL SECTORS
              </h3>
            </div>
            
            <ul className="space-y-2.5 text-xs font-medium uppercase tracking-wider text-slate-300">
              <li>
                <Link href="/services/restaurant-construction/" className="hover:text-[#D3A15D] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[#C89552] text-[10px] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Restaurant &amp; Hospitality</span>
                </Link>
              </li>
              <li>
                <Link href="/services/franchise-construction/" className="hover:text-[#D3A15D] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[#C89552] text-[10px] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Franchise Builds</span>
                </Link>
              </li>
              <li>
                <Link href="/services/tenant-improvements/" className="hover:text-[#D3A15D] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[#C89552] text-[10px] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Commercial Tenant Improvements</span>
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-construction/" className="hover:text-[#D3A15D] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[#C89552] text-[10px] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Turnkey General Contracting</span>
                </Link>
              </li>
              <li>
                <Link href="/services/" className="hover:text-[#D3A15D] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[#C89552] text-[10px] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>View All Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-0.5 bg-[#C89552]" />
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#D3A15D]">
                NAVIGATION
              </h3>
            </div>

            <ul className="space-y-2.5 text-xs font-medium uppercase tracking-wider text-slate-300">
              <li>
                <Link href="/projects/" className="hover:text-[#D3A15D] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[#C89552] text-[10px] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Selected Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/our-process/" className="hover:text-[#D3A15D] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[#C89552] text-[10px] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Our 5-Step Process</span>
                </Link>
              </li>
              <li>
                <Link href="/service-area/" className="hover:text-[#D3A15D] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[#C89552] text-[10px] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Service Area</span>
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-[#D3A15D] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[#C89552] text-[10px] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>About SteeLage</span>
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-[#D3A15D] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[#C89552] text-[10px] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Surrey HQ & Action Panel (3 cols) */}
          <div className="lg:col-span-3 bg-[#0B2025] border border-white/15 p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D3A15D]" />
              <span className="text-xs font-bold tracking-widest uppercase text-white">
                SURREY HEADQUARTERS
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C89552] shrink-0" />
                <a href={`tel:${companyData.contact.phoneRaw}`} className="text-white font-bold hover:text-[#D3A15D] transition-colors">
                  {companyData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C89552] shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#D3A15D] transition-colors break-all">
                  {companyData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[11px] pt-1 border-t border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#C89552] shrink-0" />
                <span>Mon – Fri: 7:00 AM – 5:30 PM</span>
              </div>
            </div>

            <Button
              href="/contact/"
              variant="primary"
              size="lg"
              className="w-full bg-gradient-to-r from-[#C89552] to-[#B8803D] hover:from-[#D3A15D] hover:to-[#C89552] border-none text-white py-3.5 font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              START A PROJECT
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div>
            &copy; 2026 SteeLage Construction Ltd. All rights reserved. &bull; Surrey, BC
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-400">
            <Link href="/contact/" className="hover:text-[#D3A15D] transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/service-area/" className="hover:text-[#D3A15D] transition-colors">
              Service Areas
            </Link>
            <span>&bull;</span>
            <Link href="/sitemap.xml" className="hover:text-[#D3A15D] transition-colors">
              Sitemap
            </Link>
            <span>&bull;</span>
            <a href={companyData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#D3A15D] transition-colors">
              LinkedIn
            </a>
            <span>&bull;</span>
            <a href={companyData.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#D3A15D] transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
