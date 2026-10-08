import Link from "next/link";
import { SteelageLogoExact } from "@/components/ui/SteelageLogoExact";

interface LogoProps {
  variant?: "light" | "dark" | "badge";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  clickable?: boolean;
  useBadge?: boolean;
}

export function Logo({
  variant = "light",
  size = "md",
  className = "",
  clickable = true,
  useBadge = false,
}: LogoProps) {
  // Height configurations for SVG
  const sizeHeightMap = {
    sm: "h-10 sm:h-12",
    md: "h-14 sm:h-16 md:h-18",
    lg: "h-20 sm:h-24 md:h-28",
    xl: "h-28 sm:h-32 md:h-40",
  };

  const currentHeight = sizeHeightMap[size] || sizeHeightMap.md;

  const logoSvg = (
    <SteelageLogoExact
      variant={useBadge ? "badge" : variant}
      height="100%"
      width="auto"
      className="h-full w-auto max-h-full"
    />
  );

  const content = useBadge ? (
    <div
      className={`bg-white px-3 py-1.5 rounded-md shadow-md border border-slate-200/80 hover:shadow-lg transition-all duration-300 flex items-center justify-center ${currentHeight} ${className}`}
    >
      {logoSvg}
    </div>
  ) : (
    <div className={`flex items-center justify-center ${currentHeight} ${className}`}>
      {logoSvg}
    </div>
  );

  if (clickable) {
    return (
      <Link
        href="/"
        prefetch={true}
        className="inline-flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-md cursor-pointer"
        aria-label="Steelage Construction Ltd Home"
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className="inline-flex items-center shrink-0 select-none"
      aria-label="Steelage Construction Ltd"
    >
      {content}
    </div>
  );
}
