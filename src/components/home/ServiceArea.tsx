import Image from "next/image";
import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ServiceArea() {
  const cities = [
    { name: "VICTORIA & NANAIMO", x: 17, y: 75 },
    { name: "VANCOUVER", x: 28, y: 35 },
    { name: "BURNABY", x: 44, y: 40 },
    { name: "NEW WESTMINSTER", x: 42, y: 55 },
    { name: "SURREY", x: 62, y: 62, primary: true },
    { name: "LANGLEY", x: 78, y: 45 },
    { name: "ABBOTSFORD", x: 88, y: 68 },
    { name: "WHITE ROCK", x: 70, y: 82 },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F9F7F2] relative text-slate-900 overflow-hidden border-t border-[#E8E2D5]">
      {/* Light Architectural Drafting Blueprint Background Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle geometric architectural drafting grid */}
        <div 
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(200, 149, 82, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(200, 149, 82, 0.08) 1px, transparent 1px),
              linear-gradient(to right, rgba(14, 32, 38, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14, 32, 38, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 80px 80px, 20px 20px, 20px 20px"
          }}
        />

        {/* Ambient Warm Architectural Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,149,82,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,32,37,0.05),transparent_60%)]" />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Premium Light Content Panel */}
          <div className="lg:col-span-5 bg-white/95 border border-[#E2D8C7] p-8 sm:p-10 shadow-[0_16px_50px_rgba(20,14,10,0.07)] relative backdrop-blur-sm">
            <div className="w-12 h-12 bg-[#C89552]/15 border border-[#C89552]/50 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-[#A66C2E]" />
            </div>

            <span className="text-xs font-extrabold tracking-[0.2em] text-[#A66C2E] uppercase block mb-2">
              LOWER MAINLAND & FRASER VALLEY
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase leading-tight mb-4 text-[#0B2025]">
              PROUDLY SERVING <br />
              SURREY AND BEYOND
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              Delivering exceptional commercial spaces, tenant improvements, and retail build-outs across Surrey, Metro Vancouver, the Fraser Valley, and Vancouver Island.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                href="/service-area/"
                variant="primary"
                size="md"
                className="bg-[#C89552] hover:bg-[#B8803D] border-[#C89552] text-white font-bold text-xs uppercase shadow-md hover:shadow-lg transition-all"
              >
                OUR SERVICE AREA
              </Button>
              <Button
                href="/contact/"
                variant="outline"
                size="md"
                className="border-slate-300 text-slate-800 hover:border-[#C89552] hover:text-[#A66C2E] hover:bg-[#FAF6F0] font-bold text-xs uppercase transition-all"
              >
                GET A QUOTE
              </Button>
            </div>
          </div>

          {/* Right Stylized Architectural Map Vector */}
          <div className="lg:col-span-7 relative bg-white/90 border border-[#E2D8C7] p-6 sm:p-8 min-h-[380px] flex items-center justify-center overflow-hidden shadow-[0_16px_50px_rgba(20,14,10,0.07)] backdrop-blur-sm">
            {/* Topographical Grid Pattern inside Map Canvas */}
            <div 
              className="absolute inset-0 opacity-[0.35] pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(200, 149, 82, 0.15) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(200, 149, 82, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px"
              }}
            />

            {/* SVG Topographical & Coastline Outline */}
            <div className="relative w-full h-[320px] sm:h-[380px]">
              <svg
                viewBox="0 0 800 400"
                className="w-full h-full text-[#C89552]/30 stroke-current fill-none"
              >
                {/* Simplified Coastline & River vectors for Lower Mainland */}
                <path
                  d="M50 100 Q 150 120 250 80 T 450 110 T 650 130 T 780 150"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  stroke="#94A3B8"
                  strokeOpacity="0.45"
                />
                {/* Fraser River Branch */}
                <path
                  d="M100 220 C 200 200 300 230 420 210 C 520 190 620 230 750 220"
                  stroke="#C89552"
                  strokeWidth="3.5"
                  strokeOpacity="0.55"
                />
                <path
                  d="M420 210 C 460 250 500 280 580 320"
                  stroke="#C89552"
                  strokeWidth="2.5"
                  strokeOpacity="0.45"
                />

                {/* Vancouver Island Coastline / Strait on Left */}
                <path
                  d="M40 180 Q 80 250 110 320 T 150 370"
                  stroke="#C89552"
                  strokeWidth="2.5"
                  strokeOpacity="0.45"
                />

                {/* Dotted Connection Lines between Surrey and Cities */}
                <line x1="496" y1="248" x2="136" y2="300" stroke="#C89552" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
                <line x1="496" y1="248" x2="224" y2="140" stroke="#C89552" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
                <line x1="496" y1="248" x2="352" y2="160" stroke="#C89552" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
                <line x1="496" y1="248" x2="336" y2="220" stroke="#C89552" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
                <line x1="496" y1="248" x2="624" y2="180" stroke="#C89552" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
                <line x1="496" y1="248" x2="704" y2="272" stroke="#C89552" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
                <line x1="496" y1="248" x2="560" y2="328" stroke="#C89552" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" />
              </svg>

              {/* City Markers */}
              {cities.map((city) => (
                <Link
                  key={city.name}
                  href="/service-area/"
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 group cursor-pointer"
                  title={`View SteeLage commercial services in ${city.name}`}
                >
                  {city.primary ? (
                    // SURREY Primary Highlighted Badge
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-24 h-24 bg-[#C89552]/25 rounded-full animate-ping pointer-events-none" />
                      <div className="w-16 h-16 rounded-full bg-[#C89552]/30 backdrop-blur-sm border border-[#C89552] flex items-center justify-center shadow-xl p-1">
                        <div className="bg-[#0B2025] text-white px-3.5 py-1.5 rounded-full border-2 border-[#C89552] flex items-center gap-1.5 shadow-lg">
                          <MapPin className="w-4 h-4 text-[#D3A15D] fill-[#D3A15D]" />
                          <span className="font-extrabold text-xs tracking-wider text-[#D3A15D] uppercase">
                            SURREY
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Secondary Cities
                    <div className="bg-white/95 text-slate-800 border border-[#D5CEBE] px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase group-hover:border-[#C89552] group-hover:text-[#A66C2E] group-hover:bg-[#FAF6F0] transition-all shadow-md flex items-center gap-1 whitespace-nowrap">
                      <Navigation className="w-2.5 h-2.5 text-[#C89552]" />
                      <span>{city.name}</span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
