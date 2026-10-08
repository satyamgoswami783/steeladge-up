"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface SelectedProject {
  id: string;
  category: "RESTAURANT" | "FRANCHISE";
  brand: string;
  location: string;
  scope: string;
  image: string;
  link: string;
}

const PROJECTS: SelectedProject[] = [
  {
    id: "boston-pizza",
    category: "RESTAURANT",
    brand: "BOSTON PIZZA",
    location: "British Columbia",
    scope: "Restaurant & Lounge / Full Commercial Build",
    image: "/images/projects/boston-pizza.jpg",
    link: "/projects/boston-pizza-surrey/",
  },
  {
    id: "dairy-queen",
    category: "FRANCHISE",
    brand: "DAIRY QUEEN GRILL & CHILL",
    location: "Surrey, BC",
    scope: "Standalone QSR Restaurant Build & Patio",
    image: "/images/projects/dq-grill-chill.jpg",
    link: "/projects/dq-grill-chill-surrey/",
  },
  {
    id: "oakberry",
    category: "RESTAURANT",
    brand: "OAKBERRY AÇAÍ",
    location: "Surrey, BC",
    scope: "Restaurant / Full Tenant Improvement",
    image: "/images/projects/oakberry-main.jpg",
    link: "/projects/oakberry-acai-surrey/",
  },
  {
    id: "mucho-burrito",
    category: "FRANCHISE",
    brand: "MUCHO BURRITO",
    location: "Surrey, BC",
    scope: "Franchise Restaurant / Turnkey Build",
    image: "/images/projects/mucho-burrito-interior.jpg",
    link: "/projects/mucho-burrito-surrey/",
  },
];

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<"ALL" | "RESTAURANT" | "FRANCHISE">("ALL");

  const filtered = activeCategory === "ALL" 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-[#08171A] py-20 sm:py-28 border-t border-white/10 relative overflow-hidden">
      {/* Background Architectural Dark Grid Image Layer */}
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
        {/* Header row with Selected Work & Filter Tabs */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 pb-4 border-b border-white/10 gap-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-widest uppercase">
              SELECTED WORK
            </h2>
            <span className="w-10 sm:w-16 h-px bg-[#C89552]" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-bold tracking-widest uppercase">
            {(["ALL", "RESTAURANT", "FRANCHISE"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "text-[#D3A15D] border-b-2 border-[#C89552]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Project Cards Grid — Photography clearly visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((proj) => (
            <Link
              key={proj.id}
              href={proj.link}
              className="group block bg-[#0B2025]/90 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#C89552]/80 hover:shadow-[0_8px_30px_rgba(200,149,82,0.22)] shadow-xl"
            >
              {/* Photo with subtle overlay preserving daylight detail */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
                <Image
                  src={proj.image}
                  alt={`${proj.brand} - ${proj.scope} in ${proj.location}`}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Minimal subtle gradient at bottom only for clean transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2025]/90 via-transparent to-transparent opacity-50 pointer-events-none" />
              </div>

              {/* Info Container */}
              <div className="p-5 flex items-end justify-between gap-3">
                <div>
                  <h3 className="text-sm font-extrabold text-white uppercase tracking-wider group-hover:text-[#D3A15D] transition-colors">
                    {proj.brand}
                  </h3>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">
                    {proj.location}
                  </p>
                  <p className="text-[11px] text-slate-400 font-normal mt-1">
                    {proj.scope}
                  </p>
                </div>

                <div className="text-slate-400 group-hover:text-[#D3A15D] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
