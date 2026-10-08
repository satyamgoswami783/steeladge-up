"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { getProjectImageAlt } from "@/data/project-images";

interface ProjectGalleryProps {
  title: string;
  images: string[];
}

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingId = useId();
  const dialogHeadingId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (images.length === 0) return null;

  function openPhoto(index: number) {
    setActiveIndex(index);
    dialogRef.current?.showModal();
    setIsOpen(true);
  }

  function movePhoto(direction: number) {
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  }

  return (
    <section aria-labelledby={headingId}>
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 id={headingId} className="text-xl font-bold text-brand-dark uppercase tracking-tight">
          Project Gallery
        </h2>
        <span className="text-xs text-brand-muted whitespace-nowrap">{images.length} photos</span>
      </div>
      <p className="text-sm text-brand-muted mb-5">Explore the project. Select any photo to view it full size.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            aria-label={`Open photo ${index + 1} of ${images.length}: ${getProjectImageAlt(src, title)}`}
            aria-haspopup="dialog"
            onClick={() => openPhoto(index)}
            className={`group relative block w-full aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal ${index === 0 ? "sm:col-span-2" : ""}`}
          >
            <Image
              src={src}
              alt={getProjectImageAlt(src, title)}
              fill
              sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
              preload={index === 0}
              className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
            />
            <span className="absolute bottom-3 right-3 flex items-center gap-2 bg-brand-dark/90 text-white px-3 py-2 text-xs">
              <Expand className="w-4 h-4" aria-hidden="true" />
              View photo
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={dialogHeadingId}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            movePhoto(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        className="fixed inset-0 m-auto w-[calc(100%_-_2rem)] max-w-6xl max-h-[calc(100dvh_-_2rem)] overflow-y-auto bg-brand-dark text-white p-0 border border-white/20 shadow-2xl backdrop:bg-black/85"
      >
        <div className="flex items-center justify-between gap-4 p-4 border-b border-white/15">
          <h2 id={dialogHeadingId} className="text-sm font-bold uppercase">{title}</h2>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close gallery"
            className="shrink-0 p-3 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        {isOpen && (
          <div className="relative h-[60dvh] min-h-48 bg-black">
            <Image
              src={images[activeIndex]}
              alt={getProjectImageAlt(images[activeIndex], title)}
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-contain"
            />
          </div>
        )}
        <div className="flex items-center justify-between gap-4 p-4 border-t border-white/15">
          <button
            type="button"
            onClick={() => movePhoto(-1)}
            disabled={images.length < 2}
            aria-label="Previous photo"
            className="p-3 border border-white/30 hover:bg-white/10 disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-white"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <p aria-live="polite" aria-atomic="true" className="text-sm">
            Photo {activeIndex + 1} of {images.length}
          </p>
          <button
            type="button"
            onClick={() => movePhoto(1)}
            disabled={images.length < 2}
            aria-label="Next photo"
            className="p-3 border border-white/30 hover:bg-white/10 disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-white"
          >
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </dialog>
    </section>
  );
}
