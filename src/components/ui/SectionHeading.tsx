import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  darkBackground?: boolean;
  className?: string;
  children?: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  darkBackground = false,
  className = "",
  children,
  as = "h2",
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const HeadingTag = as;

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} ${className}`}>
      {eyebrow && (
        <span
          className={`text-xs sm:text-sm tracking-[0.2em] font-semibold uppercase mb-2 ${
            darkBackground ? "text-brand-accent" : "text-brand-teal"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <HeadingTag
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase leading-tight ${
          darkBackground ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </HeadingTag>
      {description && (
        <p
          className={`mt-3 text-sm sm:text-base max-w-2xl font-normal leading-relaxed ${
            darkBackground ? "text-slate-300" : "text-brand-muted"
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
