import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Images } from "lucide-react";
import { Project } from "@/data/projects";
import { getProjectImageAlt } from "@/data/project-images";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export const ProjectCard = memo(function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      prefetch={true}
      className="group block bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal cursor-pointer active:scale-[0.99] transform-gpu will-change-transform"
    >
      {/* Project Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        <Image
          src={project.image}
          alt={getProjectImageAlt(project.image, project.title)}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          decoding="async"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover object-center transform-gpu transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end p-3 pointer-events-none">
          <div className="w-8 h-8 bg-brand-teal text-white flex items-center justify-center shadow-lg transform-gpu transition-transform duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 border-t border-slate-100 bg-white">
        <h3 className="text-xs sm:text-sm font-bold text-brand-dark tracking-tight uppercase group-hover:text-brand-teal transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-xs font-semibold text-brand-teal mt-1 tracking-wide">
          {project.type}
        </p>
        <p className="flex items-center gap-2 text-[11px] font-semibold text-brand-muted mt-3">
          <Images className="w-4 h-4 text-brand-teal/80" aria-hidden="true" />
          <span>VIEW GALLERY · {project.gallery?.length || 0} PHOTOS</span>
        </p>
      </div>
    </Link>
  );
});

