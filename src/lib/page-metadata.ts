import type { Metadata } from "next";
import { companyData } from "@/data/company";

interface PageMetadataOptions {
  title: string;
  description: string;
  url: string;
}

export function createPageMetadata({ title, description, url }: PageMetadataOptions): Metadata {
  const shareTitle = `${title} | ${companyData.name}`;
  const image = "/images/projects/mucho-burrito-interior.jpg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_CA",
      siteName: companyData.name,
      title: shareTitle,
      description,
      url,
      images: [{ url: image, alt: "Commercial interior with seating and a timber service counter" }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [{ url: image, alt: "Commercial interior with seating and a timber service counter" }],
    },
  };
}
