interface SteelageLogoExactProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  variant?: "light" | "dark" | "badge";
  withWhiteBg?: boolean;
}

export function SteelageLogoExact({
  className = "",
  width = "auto",
  height = "100%",
  variant = "dark",
  withWhiteBg = false,
}: SteelageLogoExactProps) {
  // Determine src based on variant
  // "light" variant (for dark header/footer) uses logo-transparent-light.png (white text/lines)
  // "dark" variant (for white/light background) uses logo-transparent.png (black text/lines)
  const isLightVariant = variant === "light" && !withWhiteBg;
  const logoSrc = isLightVariant ? "/logo-transparent-light.png" : "/logo-transparent.png";

  return (
    <div
      className={`relative inline-flex items-center justify-center ${withWhiteBg || variant === "badge" ? "bg-white p-2 rounded-md" : ""} ${className}`}
      style={{ width, height }}
    >
      <img
        src={logoSrc}
        alt="Steelage Construction Ltd Logo"
        className="h-full w-auto max-h-full object-contain"
        style={{ height: height === "auto" ? "100%" : height }}
      />
    </div>
  );
}

