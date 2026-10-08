"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface SectorCard {
  number: string;
  title: string;
  titleLine2?: string;
  subtitle: string;
  image: string;
  alt: string;
  checklist: string[];
  linkHref: string;
  linkText: string;
}

const SECTORS: SectorCard[] = [
  {
    number: "01",
    title: "FRANCHISE +",
    titleLine2: "RESTAURANTS",
    subtitle: "From franchise drawings to full commercial kitchen & dining turnover.",
    image: "/images/projects/boston-pizza.jpg",
    alt: "SteeLage Construction Boston Pizza standalone commercial restaurant build",
    checklist: [
      "Commercial kitchens & bars",
      "Franchise brand millwork",
      "Turnkey MEP & grease traps",
      "Health & municipal approvals",
      "Outdoor patio enclosures",
    ],
    linkHref: "/projects/boston-pizza-surrey/",
    linkText: "VIEW RESTAURANT PROJECTS",
  },
  {
    number: "02",
    title: "DAYCARE +",
    titleLine2: "EARLY LEARNING",
    subtitle: "Turnkey licensed childcare centers built to Fraser Health & BC ministry codes.",
    image: "/images/sectors/daycare-showcase.jpg",
    alt: "SteeLage Construction turnkey daycare and early childhood learning facility build",
    checklist: [
      "Fraser Health licensing code sign-off",
      "Child-safe custom oak millwork",
      "Acoustic noise-dampened ceilings",
      "Dedicated infant & toddler zones",
      "Secure access & outdoor play areas",
    ],
    linkHref: "/projects/daycare-early-learning-surrey/",
    linkText: "VIEW DAYCARE PROJECTS",
  },
  {
    number: "03",
    title: "MEDICARE +",
    titleLine2: "HEALTHCARE CLINICS",
    subtitle: "High-spec clinical, dental & wellness fit-outs with strict hygiene and MEP standards.",
    image: "/images/sectors/medical-clinic-showcase.jpg",
    alt: "SteeLage Construction modern medicare, dental, and healthcare clinic build",
    checklist: [
      "Medical gas & dental vacuum lines",
      "Acoustic STC sound-isolated suites",
      "Lead-shielded X-ray operatory rooms",
      "Antimicrobial & sanitary finishes",
      "Barrier-free ADA compliant layouts",
    ],
    linkHref: "/projects/ascent-medical-dental-centre/",
    linkText: "VIEW MEDICARE BUILDS",
  },
];

export function SectorShowcase() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="bg-[#08171A] py-16 sm:py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background Architectural Dark Grid Image Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <Image
          src="/images/bg-blueprint-dark.png"
          alt="Architectural grid pattern"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08171A] via-[#08171A]/70 to-[#08171A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,149,82,0.14),transparent_70%)]" />
      </div>

      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-arch-grid opacity-15 pointer-events-none z-0" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SECTORS.map((sector, idx) => {
            const isActive = activeIdx === idx;
            return (
              <Link
                key={sector.number}
                href={sector.linkHref}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`group relative flex flex-col justify-between min-h-[580px] sm:min-h-[640px] rounded-none overflow-hidden p-7 sm:p-9 transition-all duration-300 block cursor-pointer ${
                  isActive
                    ? "border-2 border-[#C89552] shadow-[0_12px_40px_rgba(200,149,82,0.25)] bg-[#0B2025]/95"
                    : "border border-white/10 hover:border-[#C89552]/70 bg-[#091B1F]/85"
                }`}
              >
                {/* Clearly Visible Background Photography from Real Client Projects */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.alt}
                    fill
                    className={`object-cover object-center transition-transform duration-700 group-hover:scale-105 ${
                      isActive ? "opacity-90 scale-102" : "opacity-80 group-hover:opacity-90"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* High contrast gradient overlay for ultra-crisp text and vibrant photo preview */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061417]/95 via-[#081B1F]/60 to-[#081B1F]/30" />
                </div>

                {/* Card Top: Number, Title, Subtitle */}
                <div className="relative z-10">
                  {/* Number Badge with gold underline on active */}
                  <div className="mb-5 inline-block">
                    <span className="text-sm font-mono font-bold tracking-widest text-[#D3A15D] drop-shadow-sm">
                      {sector.number}
                    </span>
                    <div
                      className={`h-[2px] mt-2 transition-all duration-300 ${
                        isActive ? "w-6 bg-[#C89552]" : "w-0 bg-transparent"
                      }`}
                    />
                  </div>

                  {/* Main Sector Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase leading-tight mb-3 drop-shadow-md group-hover:text-[#D3A15D] transition-colors">
                    {sector.title}
                    {sector.titleLine2 && (
                      <>
                        <br />
                        {sector.titleLine2}
                      </>
                    )}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 font-medium drop-shadow-sm">
                    {sector.subtitle}
                  </p>

                  {/* Checklist with warm circular gold badges */}
                  <ul className="space-y-3 pt-2">
                    {sector.checklist.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center gap-3 text-xs sm:text-sm text-slate-100 drop-shadow-sm"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#C89552]/30 border border-[#C89552]/80 text-[#D3A15D] flex items-center justify-center shrink-0 shadow-sm">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span className="font-semibold tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom: Link Action */}
                <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D3A15D] group-hover:text-white transition-colors">
                    <span>{sector.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1.5 text-[#C89552]" />
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest bg-black/40 px-2 py-0.5 border border-white/10">
                    VIEW CASE STUDY
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
