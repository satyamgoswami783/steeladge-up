import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

function normalizeHref(url: string): string {
  if (!url || !url.startsWith("/") || url.startsWith("//")) return url;
  if (/\.[a-zA-Z0-9]+($|\?)/.test(url)) return url;
  const [urlWithoutHash, hash] = url.split("#");
  const [path, query] = urlWithoutHash.split("?");
  const normalizedPath = path.endsWith("/") ? path : `${path}/`;
  let result = normalizedPath;
  if (query) result += `?${query}`;
  if (hash) result += `#${hash}`;
  return result;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-wider transition-all duration-200 uppercase text-xs sm:text-sm rounded-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-xs sm:text-sm gap-2",
    lg: "px-8 py-4 text-sm sm:text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-brand-gold text-white hover:bg-brand-gold-hover shadow-md hover:shadow-lg border border-brand-gold",
    outline:
      "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10",
    dark:
      "bg-brand-dark text-white hover:bg-brand-navy border border-brand-dark",
    ghost:
      "bg-transparent text-brand-dark hover:bg-brand-teal/10 border border-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    const finalHref = normalizeHref(href);
    const isExternal = href.startsWith("http://") || href.startsWith("https://") || href.startsWith("tel:") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={finalHref}
          className={combinedClasses}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={finalHref}
        prefetch={true}
        className={combinedClasses}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
