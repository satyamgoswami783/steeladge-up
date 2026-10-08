import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { JsonLd } from "@/components/layout/JsonLd";
import { SmoothNavigation } from "@/components/layout/SmoothNavigation";
import { companyData } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://steelage.ca"),

  // Google Search Console + Bing Webmaster Verification
  verification: {
    google: "Vv6yteZKY4HIAOURbCHvSFAnOjexAZlqZd9WWkUq4KI",
    other: {
      "msvalidate.01": "A01B18F900585FE52A3D5EA2B7AF883B",
    },
  },

  title: {
    default: "Commercial Contractor Surrey BC | SteeLage Construction",
    template: "%s | SteeLage Construction",
  },

  description:
    "Leading commercial contractor in Surrey BC & Vancouver. SteeLage Construction specializes in commercial general contracting, tenant improvements, restaurant builds, daycare construction & medical clinic fit-outs.",

  keywords: [
    "Commercial Contractor Surrey BC",
    "Commercial Construction Company Surrey BC",
    "Commercial General Contractor Surrey BC",
    "Tenant Improvement Contractor Surrey BC",
    "Tenant Improvement Contractor Vancouver",
    "Commercial Renovation Contractor Surrey BC",
    "Commercial Renovation Contractor Vancouver",
    "Restaurant Construction Contractor Vancouver",
    "Restaurant Construction Contractor Surrey BC",
    "Franchise Construction Contractor",
    "Daycare Construction Contractor Surrey BC",
    "Medical Clinic Construction",
    "Dental Clinic Construction",
    "Commercial Tenant Improvements",
    "Retail Construction Contractor",
    "Office Renovation Contractor",
  ],

  authors: [{ name: "SteeLage Construction" }],
  creator: "SteeLage Construction",
  publisher: "SteeLage Construction",

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://steelage.ca",
    siteName: companyData.name,
    title: "SteeLage Construction | Commercial Contractor Surrey BC",
    description:
      "Premier commercial contractor specializing in tenant improvements, restaurant builds, and retail construction across Surrey & Lower Mainland, BC.",
    images: [
      {
        url: "/images/projects/mucho-burrito-interior.jpg",
        width: 1200,
        height: 630,
        alt: "SteeLage Construction Commercial Interior",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SteeLage Construction | Commercial Contractor Surrey BC",
    description:
      "Commercial tenant improvements, renovations, and project management in Surrey and Lower Mainland, BC.",
    images: ["/images/projects/mucho-burrito-interior.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://steelage.ca",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-[#08171A] text-white" suppressHydrationWarning>
        <JsonLd />
        <Header />

        <main className="flex-grow flex flex-col">
          <SmoothNavigation>{children}</SmoothNavigation>
        </main>

        <Footer />
        <WhatsAppButton />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K3K2LTF1WE"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-K3K2LTF1WE');
          `}
        </Script>
      </body>
    </html>
  );
}