import type { ImageLoaderProps } from "next/image";

// These files are created by scripts/optimize-images.mjs before dev and build.
export default function staticImageLoader({ src, width }: ImageLoaderProps): string {
  if (!src.startsWith("/images/") || !/\.(jpe?g|png)$/i.test(src)) return src;
  return `/optimized${src}-${width}.webp`;
}
