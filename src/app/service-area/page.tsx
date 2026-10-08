import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/page-metadata";
import {
  MapPin,
  Building2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  FileCheck2,
  Truck,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";
import { FAQSection } from "@/components/common/FAQSection";
import { serviceAreaFAQs } from "@/data/faqs";

export const metadata: Metadata = createPageMetadata({
  title: "Commercial Service Areas | Surrey & Lower Mainland BC",
  description:
    "SteeLage Construction delivers commercial construction, tenant improvements, and restaurant build-outs across Surrey, Vancouver, Burnaby, Langley, Abbotsford, and the Lower Mainland, BC.",
  url: "https://steelage.ca/service-area",
});

interface ServiceRegion {
  name: string;
  badge: string;
  isPrimary?: boolean;
  headline: string;
  description: string;
  keyDistricts: string[];
  capabilities: string[];
  responseGuarantee: string;
}

const serviceRegions: ServiceRegion[] = [
  {
    name: "Surrey & White Rock",
    badge: "HEADQUARTERS & PRIMARY HUB",
    isPrimary: true,
    headline: "Commercial Contractor & General Contracting Surrey BC",
    description:
      "Our Surrey headquarters provides immediate, same-day site visits and full-lifecycle commercial general contracting, tenant improvements, and restaurant build-outs across all Surrey town centres and White Rock.",
    keyDistricts: [
      "Surrey City Centre & Central",
      "Guildford & 152nd St Corridor",
      "Cloverdale & Campbell Heights",
      "Newton & King George Corridor",
      "South Surrey & Grandview Corners",
      "Fleetwood & Fraser Highway",
      "White Rock Uptown & Marine Drive",
    ],
    capabilities: [
      "Commercial Contractor & Construction Company Surrey BC",
      "Commercial General Contractor & Builder Surrey BC",
      "Tenant Improvement Contractor & Fit-Outs Surrey",
      "Commercial Renovation Contractor Surrey BC",
      "Restaurant, Daycare & Medical Clinic Build-Outs",
    ],
    responseGuarantee: "Same-day or next-day on-site consultations",
  },
  {
    name: "Vancouver Core & Metro",
    badge: "HIGH-DENSITY COMMERCIAL",
    headline: "Commercial General Contractor & Tenant Improvements Vancouver",
    description:
      "Executing high-spec commercial tenant improvements, retail flagships, daycare facilities, and modern restaurant build-outs with seamless navigation of City of Vancouver building codes and heritage bylaws.",
    keyDistricts: [
      "Downtown Vancouver & Financial Core",
      "Broadway Corridor & Medical Precinct",
      "Mount Pleasant & Tech District",
      "Kitsilano & West 4th Avenue",
      "Gastown & Yaletown Historic Zones",
      "East Vancouver Commercial Hubs",
    ],
    capabilities: [
      "Commercial Contractor & Builder Vancouver BC",
      "Tenant Improvement Contractor Vancouver",
      "Commercial Renovation Contractor & Interior Fit-Out Vancouver",
      "Restaurant Construction & Build Out Contractor Vancouver",
      "Medical, Dental Clinic & Daycare Construction Vancouver",
    ],
    responseGuarantee: "24-hour estimate response & rapid site evaluation",
  },
  {
    name: "Burnaby & New Westminster",
    badge: "RAPID TRANSIT CORRIDORS",
    headline: "Retail Plazas, Corporate Offices & Mall Tenant Improvements",
    description:
      "Specializing in retail and office renovations in high-traffic commercial nodes, including major regional shopping centres, SkyTrain-oriented developments, and healthcare clinics.",
    keyDistricts: [
      "Metrotown Commercial District",
      "The Amazing Brentwood Node",
      "Lougheed Town Centre Corridor",
      "Edmonds & Kingsway Commercial Strip",
      "Uptown & Downtown New Westminster",
      "Sapperton Commercial & Health District",
    ],
    capabilities: [
      "Commercial Contractor Burnaby BC",
      "Tenant Improvement Contractor Burnaby",
      "Commercial Renovation Contractor Burnaby",
      "Restaurant Contractor Burnaby & QSR Build-Outs",
      "Mall Tenant Improvements & Landlord Criteria Compliance",
    ],
    responseGuarantee: "24-hour preliminary project assessment",
  },
  {
    name: "Richmond & Delta",
    badge: "LOGISTICS & FOOD SERVICE",
    headline: "Culinary Venues, Corporate Logistics & Commercial Retail",
    description:
      "Experienced in commercial kitchen construction, specialty franchise dining, retail plazas, and light industrial commercial tenant improvements across Richmond, Delta, Ladner, and Tsawwassen.",
    keyDistricts: [
      "Richmond City Centre (No. 3 Road)",
      "Bridgeport Commercial & Retail Hubs",
      "Crestwood Corporate & Industrial Park",
      "Delta (Tilbury & Annacis Island)",
      "Ladner & Tsawwassen Mills Corridor",
    ],
    capabilities: [
      "Commercial Contractor Richmond BC & Delta BC",
      "Tenant Improvement Contractor Richmond & Delta",
      "Commercial Renovation Contractor Richmond & Delta",
      "Restaurant Contractor Richmond & Commercial Kitchens",
      "Commercial Showrooms, Warehouse Offices & Fit-Outs",
    ],
    responseGuarantee: "Guaranteed 24-hour proposal turnaround",
  },
  {
    name: "Langley (City & Township)",
    badge: "EXPANDING COMMERCIAL CORRIDOR",
    headline: "High-Growth Retail, Showrooms & Commercial Construction",
    description:
      "Supporting businesses expanding along the 200th Street corridor, Willowbrook, and Gloucester with comprehensive design-build and general contracting services.",
    keyDistricts: [
      "200th Street Commercial Corridor",
      "Willowbrook Commercial District",
      "Langley City Downtown Core",
      "Walnut Grove Professional Centres",
      "Gloucester Industrial Estate Showrooms",
      "Aldergrove Commercial Corridors",
    ],
    capabilities: [
      "Commercial Contractor Langley BC",
      "Tenant Improvement Contractor Langley",
      "Commercial Renovation Contractor Langley",
      "Restaurant Contractor Langley",
      "Large-Format Retail Build-Outs & Showrooms",
    ],
    responseGuarantee: "Next-day site visit from Surrey headquarters",
  },
  {
    name: "Abbotsford & Chilliwack",
    badge: "FRASER VALLEY COMMERCIAL HUB",
    headline: "Healthcare Clinics, Agricultural Commercial & Franchise Fit-Outs",
    description:
      "Providing complete commercial project management and construction expertise throughout Abbotsford, Chilliwack, Mission, and surrounding Fraser Valley communities.",
    keyDistricts: [
      "South Fraser Way Commercial Core (Abbotsford)",
      "Highstreet Shopping Centre Vicinity",
      "Sumas Way Retail Corridor",
      "Chilliwack Downtown & Vedder Crossing",
      "Eagle Landing & Fraser Valley Commercial Nodes",
    ],
    capabilities: [
      "Commercial Contractor Abbotsford BC & Chilliwack BC",
      "Tenant Improvement Contractor Abbotsford",
      "Commercial Renovation Contractor Abbotsford",
      "Restaurant Contractor Abbotsford & Franchise Fit-Outs",
      "Medical, Dental Clinics & Daycare Renovation",
    ],
    responseGuarantee: "24-hour consultation scheduling",
  },
  {
    name: "Coquitlam, Port Coquitlam & Maple Ridge",
    badge: "TRI-CITIES & MAPLE RIDGE",
    headline: "Suburban Commercial, Retail Plazas & Fitness Studios",
    description:
      "Delivering commercial improvements for service providers, daycares, restaurants, and growing retail plazas throughout Coquitlam, Port Coquitlam, Port Moody, and Maple Ridge.",
    keyDistricts: [
      "Coquitlam Centre & Pinetree Corridor",
      "Fremont & Dominion Commercial Hub (Port Coquitlam)",
      "Downtown Port Coquitlam",
      "Maple Ridge Downtown Core & 224th Street",
      "Port Moody Brewer's Row & Waterfront",
    ],
    capabilities: [
      "Commercial Contractor Coquitlam BC & Port Coquitlam BC",
      "Commercial Contractor Maple Ridge BC",
      "Tenant Improvement Contractor Coquitlam",
      "Commercial Renovation Contractor Coquitlam",
      "Restaurant Contractor Coquitlam & Retail Fit-Outs",
    ],
    responseGuarantee: "Comprehensive estimate within 24-48 hours",
  },
  {
    name: "Victoria & Vancouver Island",
    badge: "ISLAND COMMERCIAL SERVICES",
    headline: "Commercial General Contracting & Franchise Expansion",
    description:
      "Bringing SteeLage's premier commercial construction, franchise fit-outs, and tenant improvements across Victoria, Nanaimo, and Vancouver Island commercial markets.",
    keyDistricts: [
      "Downtown Victoria & Inner Harbour",
      "Langford & Westshore Commercial Hub",
      "Saanich Plaza & Uptown District",
      "Nanaimo Commercial Corridors",
      "Mid-Island Retail Developments",
    ],
    capabilities: [
      "Franchise Restaurant & Hospitality Construction",
      "Commercial Tenant Improvements Victoria",
      "Medical & Dental Clinic Build-Outs",
      "Retail Plazas & Corporate Office Renovations",
      "Full Project Management & Permitting Coordination",
    ],
    responseGuarantee: "Dedicated Island project mobilization team",
  },
];

const coverageStats = [
  { value: "15+", label: "Years in Lower Mainland", note: "Trusted local commercial contractor" },
  { value: "250+", label: "Completed Projects", note: "Across 8 BC municipalities" },
  { value: "24h", label: "Estimate Response", note: "Fast site consultation guarantee" },
  { value: "100%", label: "Code & Permit Compliance", note: "Surrey, Vancouver, Burnaby, Richmond" },
];

export default function ServiceAreaPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Hero Banner */}
      <section className="bg-brand-dark text-white py-16 sm:py-20 border-b border-white/10 bg-arch-grid relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

        <Container size="wide">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase bg-white/5 border border-white/10 px-3 py-1 mb-4">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              LOWER MAINLAND & FRASER VALLEY COVERAGE
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight text-white mb-6">
              COMMERCIAL SERVICE AREAS <br />
              <span className="text-brand-accent">ACROSS BRITISH COLUMBIA</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8">
              Headquartered at 152 Street & 56 Avenue in Surrey, SteeLage Construction provides turnkey commercial general
              contracting, high-spec tenant improvements, retail builds, and restaurant fit-outs throughout Greater
              Vancouver and the Fraser Valley.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact/" variant="primary" size="lg">
                REQUEST A LOCAL ESTIMATE
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <a
                href={`tel:${companyData.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                CALL HQ: {companyData.contact.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-navy border-b border-white/10 py-8 text-white">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {coverageStats.map((stat, idx) => (
              <div key={idx} className="p-4 border border-white/10 bg-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-accent">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white mt-1">{stat.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{stat.note}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Service Regions Section */}
      <section className="py-20 bg-brand-light">
        <Container size="wide">
          <div className="mb-12">
            <SectionHeading
              eyebrow="REGIONAL CONTRACTING HUBS"
              title="CITIES & MUNICIPALITIES WE ACTIVELY SERVICE"
              description="Our mobile commercial teams operate across British Columbia's fastest-growing business districts. Select your region below to view local capabilities and project turnaround."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceRegions.map((region, idx) => (
              <div
                key={idx}
                className={`bg-white border transition-all duration-300 shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col justify-between relative ${
                  region.isPrimary
                    ? "border-brand-teal ring-2 ring-brand-teal/20"
                    : "border-slate-200 hover:border-brand-teal"
                }`}
              >
                {region.isPrimary && (
                  <div className="absolute top-0 right-0 bg-brand-teal text-white text-[10px] font-black uppercase tracking-widest px-4 py-1">
                    PRIMARY HUB
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-brand-teal" />
                    <span className="text-[11px] font-bold tracking-widest uppercase text-brand-teal">
                      {region.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-brand-dark mb-2">
                    {region.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-brand-teal mb-3">
                    {region.headline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {region.description}
                  </p>

                  {/* Key Districts Grid */}
                  <div className="mb-5 bg-slate-50 border border-slate-200 p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Key Business Districts & Town Centres:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {region.keyDistricts.map((district, dIdx) => (
                        <span
                          key={dIdx}
                          className="inline-block text-[11px] bg-white border border-slate-300 text-slate-700 px-2.5 py-0.5 font-medium"
                        >
                          {district}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities List */}
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                      Core Commercial Capabilities in {region.name}:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {region.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>{region.responseGuarantee}</span>
                  </div>

                  <Link
                    href={`/contact/?location=${encodeURIComponent(region.name)}`}
                    prefetch={true}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-teal hover:text-brand-dark transition-colors"
                  >
                    <span>Get Quote for {region.name.split(" ")[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Permitting & Municipal Knowledge Section */}
      <section className="py-20 bg-brand-dark text-white bg-arch-grid border-y border-white/10">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase block mb-2">
                REGULATORY MASTERY
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase leading-tight text-white mb-5">
                WHY LOCAL EXPERTISE <br />
                <span className="text-brand-accent">MAKES OR BREAKS TIMELINES</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Commercial construction in British Columbia requires strict compliance with individual municipal
                bylaws, architectural review boards, health authority regulations (Fraser Health & Vancouver Coastal
                Health), and the BC Building Code.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                SteeLage Construction works directly with municipal planning desks across Surrey, Vancouver, Burnaby,
                and Langley to prevent permit bottlenecks and keep your opening schedule on track.
              </p>
              <Button href="/contact/" variant="primary" size="md">
                DISCUSS YOUR PROJECT SCOPE
              </Button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 space-y-3">
                <FileCheck2 className="w-7 h-7 text-brand-accent" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Permit Expediting & Drawings
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Coordination with architects, structural engineers, and mechanical consultants to secure Building &
                  Plumbing permits without costly revisions.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 space-y-3">
                <ShieldCheck className="w-7 h-7 text-brand-accent" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Health & Life Safety Standards
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Flawless compliance with Fraser Health requirements for commercial food facilities, daycares, medical
                  offices, and accessibility standards.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 space-y-3">
                <Truck className="w-7 h-7 text-brand-accent" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Lower Mainland Logistics
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Established local supplier accounts across drywall, steel framing, electrical, HVAC, and architectural
                  finishes to avoid supply chain delays.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 space-y-3">
                <Layers className="w-7 h-7 text-brand-accent" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Landlord & Strata Liaison
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Direct management of base-building requirements, work-hour bylaws, insurance certificates, and strata
                  approvals in premium retail centers.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Regional Service Area FAQs */}
      <FAQSection
        title="REGIONAL SERVICE AREA FAQS"
        eyebrow="REGIONAL COVERAGE & FAQS"
        description="Key information regarding municipal permits, rapid site evaluations, and regional sub-trade deployment across Surrey and Metro Vancouver."
        faqs={serviceAreaFAQs}
      />

      {/* Bottom CTA */}
      <section className="py-20 bg-brand-teal text-white">
        <Container size="wide">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              PLANNING A COMMERCIAL BUILD IN SURREY OR METRO VANCOUVER?
            </h2>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Get an accurate, transparent commercial quote and schedule an on-site visit with our estimating team.
              We respond to all project inquiries within 24 business hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button href="/contact/" variant="dark" size="lg">
                GET A COMMERCIAL QUOTE
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <a
                href={`tel:${companyData.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-dark hover:bg-slate-100 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
                CALL DIRECT: {companyData.contact.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
