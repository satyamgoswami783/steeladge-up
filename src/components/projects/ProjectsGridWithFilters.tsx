"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "@/components/home/ProjectCard";
import { Project } from "@/data/projects";

interface ProjectsGridWithFiltersProps {
  projects: Project[];
}

export function ProjectsGridWithFilters({ projects }: ProjectsGridWithFiltersProps) {
  const [activeTab, setActiveTab] = useState<"ALL" | "RESTAURANTS" | "DAYCARE" | "FAST CASUAL" | "COMMERCIAL">("ALL");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (activeTab === "ALL") return true;
      const titleLower = (p.title + " " + p.type + " " + p.brand + " " + p.scope).toLowerCase();

      if (activeTab === "RESTAURANTS") {
        return (
          titleLower.includes("pizza") ||
          titleLower.includes("restaurant") ||
          titleLower.includes("lounge") ||
          titleLower.includes("dairy queen") ||
          titleLower.includes("burrito")
        );
      }
      if (activeTab === "DAYCARE") {
        return (
          titleLower.includes("daycare") ||
          titleLower.includes("childcare") ||
          titleLower.includes("learning") ||
          titleLower.includes("scholar")
        );
      }
      if (activeTab === "FAST CASUAL") {
        return (
          titleLower.includes("oakberry") ||
          titleLower.includes("açaí") ||
          titleLower.includes("acai") ||
          titleLower.includes("marble slab") ||
          titleLower.includes("creamery") ||
          titleLower.includes("cafe") ||
          titleLower.includes("coffee")
        );
      }
      if (activeTab === "COMMERCIAL") {
        return (
          titleLower.includes("commercial") ||
          titleLower.includes("retail") ||
          titleLower.includes("tenant") ||
          titleLower.includes("storefront") ||
          titleLower.includes("office")
        );
      }
      return true;
    });
  }, [projects, activeTab]);

  return (
    <div>
      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {(
          [
            { id: "ALL", label: "ALL CLIENT PROJECTS" },
            { id: "RESTAURANTS", label: "RESTAURANTS" },
            { id: "DAYCARE", label: "DAYCARE & EARLY LEARNING" },
            { id: "FAST CASUAL", label: "FAST CASUAL & CAFES" },
            { id: "COMMERCIAL", label: "COMMERCIAL BUILDS" },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all cursor-pointer border ${
              activeTab === tab.id
                ? "bg-[#C89552] border-[#C89552] text-white shadow-lg"
                : "bg-[#0B2025]/80 border-white/10 text-slate-300 hover:text-white hover:border-[#C89552]/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Matching Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} priority={idx < 4} />
        ))}
      </div>
    </div>
  );
}
