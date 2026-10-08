import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";

export function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: companyData.name,
    description: companyData.fullDescription,
    url: "https://steelage.ca",
    telephone: companyData.contact.phoneRaw,
    email: companyData.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address.street,
      addressLocality: companyData.address.city,
      addressRegion: companyData.address.province,
      postalCode: companyData.address.postalCode,
      addressCountry: companyData.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.1913,
      longitude: -122.8490,
    },
    areaServed: companyData.areasServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area}, BC`,
    })),
    openingHours: "Mo-Fr 07:00-17:00",
    priceRange: "$$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Construction Services",
      itemListElement: servicesData.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `https://steelage.ca/services/${service.slug}/`,
        },
      })),
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.name,
    url: "https://steelage.ca",
    logo: "https://steelage.ca/images/assets/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyData.contact.phoneRaw,
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: "en",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
