import { Container } from "@/components/ui/Container";

export function TrustBrands() {
  const brands = [
    {
      name: "Freshii",
      logo: (
        /* Freshii Green Square & White Text Logo */
        <div className="flex items-center shrink-0">
          <svg viewBox="0 0 120 120" className="h-10 w-10 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="120" rx="8" fill="#007A3D" />
            <text x="60" y="82" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="42" fontWeight="300" letterSpacing="-1" textAnchor="middle">freshii</text>
          </svg>
        </div>
      ),
    },
    {
      name: "Fido Mobile",
      logo: (
        /* Fido Mobile Black Text & Yellow Doghouse Logo */
        <div className="flex items-center gap-2 shrink-0">
          <svg viewBox="0 0 200 80" className="h-9 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="55" fill="#000000" fontFamily="system-ui, -apple-system, sans-serif" fontSize="56" fontWeight="900" letterSpacing="-2">fido</text>
            <g transform="translate(140, 12)">
              <path d="M 25 5 L 48 28 L 42 55 L 8 55 L 2 28 Z" fill="#FFDC00" />
              <path d="M 2 28 L 25 5 L 48 28 M 8 28 L 8 55 L 42 55 L 42 28" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 18 55 L 18 40 C 18 32 32 32 32 40 L 32 55" stroke="#000000" strokeWidth="5" fill="none" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      name: "Donair Dude",
      logo: (
        /* Donair Dude Red Diamond & Kebab Skewer Logo */
        <div className="flex items-center gap-2 shrink-0">
          <svg viewBox="0 0 160 160" className="h-9 w-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="100" height="100" rx="12" fill="#E30613" transform="rotate(45 80 80)" />
            <line x1="105" y1="20" x2="55" y2="90" stroke="#4A1E1B" strokeWidth="6" strokeLinecap="round" />
            <path d="M 68 35 L 102 45 L 94 58 L 60 48 Z" fill="#8CC63F" />
            <path d="M 60 48 L 94 58 L 86 70 L 52 60 Z" fill="#009FE3" />
            <path d="M 52 60 L 86 70 L 78 80 L 44 70 Z" fill="#FFD100" />
            <text x="80" y="105" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="900" textAnchor="middle">Donair</text>
            <polygon points="122,86 124,91 129,91 125,94 126,99 122,96 118,99 119,94 115,91 120,91" fill="#FFFFFF" />
            <text x="80" y="132" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="900" letterSpacing="1" textAnchor="middle">DUDE</text>
          </svg>
          <span className="font-black text-sm tracking-wider text-[#E30613] uppercase shrink-0">
            DONAIR DUDE
          </span>
        </div>
      ),
    },
    {
      name: "Costco Wholesale",
      logo: (
        /* Costco Wholesale Red & Blue Logo */
        <div className="flex items-center shrink-0">
          <svg viewBox="0 0 220 75" className="h-9 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="45" fill="#E31837" fontFamily="Impact, 'Arial Black', sans-serif" fontSize="48" fontWeight="900" letterSpacing="0.5">COSTCO</text>
            <line x1="5" y1="53" x2="70" y2="53" stroke="#005DAA" strokeWidth="3.5" />
            <line x1="5" y1="59" x2="70" y2="59" stroke="#005DAA" strokeWidth="3.5" />
            <line x1="5" y1="65" x2="70" y2="65" stroke="#005DAA" strokeWidth="3.5" />
            <text x="76" y="67" fill="#005DAA" fontFamily="'Arial Black', sans-serif" fontSize="17" fontWeight="900" letterSpacing="0.5">WHOLESALE</text>
          </svg>
        </div>
      ),
    },
    {
      name: "Dairy Queen",
      logo: (
        /* Dairy Queen DQ Emblem & Red Text */
        <div className="flex items-center gap-2 shrink-0">
          <svg viewBox="0 0 180 110" className="h-9 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 55 Q 90 0 170 55 Q 90 110 10 55 Z" fill="#E2231A" />
            <path d="M 60 18 Q 120 10 155 35 Q 120 20 60 18 Z" fill="#FAA61A" />
            <path d="M 25 75 Q 70 95 125 92 Q 70 85 25 75 Z" fill="#0072CE" />
            <text x="90" y="72" fill="#FFFFFF" fontFamily="Impact, 'Arial Black', sans-serif" fontSize="56" fontWeight="900" fontStyle="italic" letterSpacing="1" textAnchor="middle">DQ</text>
          </svg>
          <span className="font-black text-sm tracking-wider text-[#E2231A] uppercase shrink-0">
            DAIRY QUEEN
          </span>
        </div>
      ),
    },
    {
      name: "Chatr Mobile",
      logo: (
        /* Chatr Mobile Logo */
        <div className="flex items-center shrink-0">
          <svg viewBox="0 0 160 70" className="h-10 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="44" fill="#582C83" fontFamily="system-ui, -apple-system, sans-serif" fontSize="44" fontWeight="800" letterSpacing="-1">chatr</text>
            <text x="7" y="62" fill="#F39200" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="700" letterSpacing="1.5">MOBILE</text>
          </svg>
        </div>
      ),
    },
    {
      name: "Boston Pizza",
      websiteUrl: "https://bostonpizza.com",
      logo: (
        /* Boston Pizza (BP) Official Emblem Logo */
        <div className="flex items-center shrink-0">
          <img
            src="/images/assets/boston-pizza-logo.png"
            alt="Boston Pizza Logo"
            loading="lazy"
            className="h-10 w-10 object-contain shrink-0"
          />
        </div>
      ),
    },
    {
      name: "Barcelos Flame Grilled Chicken",
      logo: (
        /* Barcelos Flame Grilled Chicken Logo */
        <div className="flex items-center shrink-0">
          <svg viewBox="0 0 310 68" className="h-10 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(2, 2)">
              <path d="M 28 10 C 16 0 0 10 8 24 C -4 34 0 54 16 62 C 28 70 48 66 52 50 C 56 38 52 22 40 14 Z" fill="#B81C2C" />
              <path d="M 36 20 C 38 17 43 18 41 22 C 39 25 35 24 36 20 Z" fill="#FFFFFF" />
              <circle cx="38" cy="20" r="1.5" fill="#000000" />
            </g>
            <text x="64" y="38" fill="#B81C2C" fontFamily="Georgia, 'Times New Roman', serif" fontSize="35" fontWeight="900" fontStyle="italic">Barcelos</text>
            <path d="M 64 45 Q 175 40 295 45" stroke="#2D6A4F" strokeWidth="2.5" fill="none" />
            <text x="180" y="59" fill="#2D6A4F" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fontWeight="900" letterSpacing="1.4" textAnchor="middle">FLAME GRILLED CHICKEN</text>
          </svg>
        </div>
      ),
    },
    {
      name: "Chipotle",
      logo: (
        /* Chipotle Mexican Grill Logo */
        <div className="flex items-center gap-2.5 shrink-0">
          <svg viewBox="0 0 200 200" className="h-11 w-11 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="98" fill="#A81B1E" />
            <circle cx="100" cy="100" r="62" fill="#471A11" stroke="#FFFFFF" strokeWidth="4" />
            <path id="chipotleTextPath2" d="M 25 100 A 75 75 0 1 1 175 100 A 75 75 0 1 1 25 100" fill="none" />
            <text fill="#FFFFFF" fontSize="21" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2">
              <textPath href="#chipotleTextPath2" startOffset="5%">CHIPOTLE • MEXICAN GRILL</textPath>
            </text>
            <path d="M 95 62 C 90 70 85 85 92 100 C 98 112 110 115 112 125 C 114 135 105 138 98 135 C 90 132 88 122 88 120 M 102 58 C 105 52 112 48 115 45" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" fill="none" />
          </svg>
          <span className="font-black text-sm tracking-wider text-red-900 uppercase shrink-0">
            CHIPOTLE
          </span>
        </div>
      ),
    },
    {
      name: "Marble Slab Creamery",
      logo: (
        /* Marble Slab Creamery Logo */
        <div className="flex items-center gap-2 shrink-0">
          <svg viewBox="0 0 140 140" className="h-10 w-10 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70" cy="70" r="65" fill="#FFF200" stroke="#000000" strokeWidth="3" />
            <circle cx="70" cy="70" r="45" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
            <polygon points="70,95 55,55 85,55" fill="#C59B27" stroke="#000000" strokeWidth="2" />
            <circle cx="70" cy="48" r="18" fill="#E6007E" />
          </svg>
          <span className="font-black text-sm tracking-wide text-[#E6007E] uppercase shrink-0">
            MARBLE SLAB CREAMERY
          </span>
        </div>
      ),
    },
    {
      name: "Gong Cha",
      logo: (
        /* Gong Cha Logo */
        <div className="flex items-center shrink-0">
          <svg viewBox="0 0 220 68" className="h-9 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="48" fill="#231F20" fontFamily="Georgia, 'Times New Roman', serif" fontSize="46" fontWeight="500">Gong cha</text>
            <rect x="190" y="10" width="22" height="48" rx="3" fill="#BC1924" />
            <text x="201" y="31" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="bold" textAnchor="middle">貢</text>
            <text x="201" y="49" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="bold" textAnchor="middle">茶</text>
          </svg>
        </div>
      ),
    },
    {
      name: "Panago Pizza",
      logo: (
        /* Panago Pizza Logo */
        <div className="flex items-center shrink-0">
          <img
            src="/images/assets/panago-logo.png"
            alt="Panago Pizza Logo"
            loading="lazy"
            className="h-9 w-auto object-contain shrink-0"
          />
        </div>
      ),
    },
    {
      name: "IHOP",
      logo: (
        /* IHOP Logo */
        <div className="flex items-center shrink-0">
          <svg viewBox="0 0 160 90" className="h-10 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="55" fill="#0072CE" fontFamily="system-ui, -apple-system, sans-serif" fontSize="56" fontWeight="900" letterSpacing="-1">IHOP</text>
            <path d="M 68 56 Q 115 90 155 56" stroke="#E2231A" strokeWidth="8" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      ),
    },
    {
      name: "Mucho Burrito",
      logo: (
        /* Mucho Burrito Logo */
        <div className="flex items-center shrink-0">
          <svg viewBox="0 0 280 65" className="h-10 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="38" fill="#748729" fontFamily="Georgia, 'Times New Roman', serif" fontSize="34" fontWeight="800" fontStyle="italic">mucho burrito</text>
            <path d="M 226 8 C 220 18 222 33 228 41 C 230 45 226 47 222 43 C 218 39 218 23 226 8 Z" fill="#E2231A" />
            <text x="135" y="56" fill="#748729" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fontWeight="700" letterSpacing="1" textAnchor="middle">fresh mexican grill</text>
          </svg>
        </div>
      ),
    },
    {
      name: "Big Mama's & Papa's Pizzeria",
      logo: (
        /* BMBP Pizzeria Logo */
        <div className="flex items-center shrink-0">
          <svg viewBox="0 0 280 70" className="h-10 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60" cy="35" rx="55" ry="31" fill="#222222" stroke="#F8B61A" strokeWidth="3" />
            <text x="60" y="18" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="6" fontWeight="800" textAnchor="middle">BIG MAMA&apos;S &amp; PAPA&apos;S PIZZA</text>
            <text x="60" y="42" fill="#F8B61A" fontFamily="Impact, 'Arial Black', sans-serif" fontSize="25" fontWeight="900" textAnchor="middle">BMBP</text>
            <text x="60" y="55" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="6" fontWeight="700" textAnchor="middle">Bigger Better Pizza</text>
            <text x="130" y="44" fill="#1D2A44" fontFamily="Impact, 'Arial Black', sans-serif" fontSize="25" fontWeight="900" letterSpacing="0.5">BMBP PIZZA</text>
          </svg>
        </div>
      ),
    },
    {
      name: "Rogers",
      logo: (
        /* Image 4: Rogers Red Swirl Logo */
        <div className="flex items-center gap-2 shrink-0">
          <svg viewBox="0 0 220 70" className="h-9 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 5)">
              <path d="M 30 5 C 45 5 55 18 55 30 C 55 42 42 55 30 55 C 18 55 5 42 5 30 C 5 18 18 5 30 5 Z" fill="none" stroke="#DA291C" strokeWidth="8" />
              <path d="M 30 5 C 48 10 50 35 30 55" fill="none" stroke="#FFFFFF" strokeWidth="6" />
            </g>
            <text x="75" y="46" fill="#DA291C" fontFamily="system-ui, -apple-system, sans-serif" fontSize="42" fontWeight="900" letterSpacing="1">ROGERS</text>
          </svg>
        </div>
      ),
    },
    {
      name: "The Brick",
      logo: (
        /* Image 5: The Brick Logo */
        <div className="flex items-center shrink-0">
          <svg viewBox="0 0 240 70" className="h-9 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="44" fill="#E31837" fontFamily="system-ui, -apple-system, sans-serif" fontSize="36" fontWeight="700">The</text>
            <text x="70" y="52" fill="#E31837" fontFamily="Impact, 'Arial Black', sans-serif" fontSize="58" fontWeight="900" letterSpacing="-1">BRICK.</text>
          </svg>
        </div>
      ),
    },
    {
      name: "Yogen Früz",
      logo: (
        /* Yogen Früz Blue & Pink Logo */
        <div className="flex items-center shrink-0">
          <svg viewBox="0 0 250 75" className="h-10 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="52" fill="#009FE3" fontFamily="system-ui, -apple-system, sans-serif" fontSize="46" fontWeight="300" letterSpacing="-0.5">
              yogen fr<tspan fill="#EC008C" fontWeight="400">ü</tspan>z
            </text>
          </svg>
        </div>
      ),
    },
    {
      name: "Church's Texas Chicken",
      logo: (
        /* Church's Texas Chicken Logo */
        <div className="flex items-center gap-2.5 shrink-0">
          <svg viewBox="0 0 140 140" className="h-11 w-11 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70" cy="70" r="64" stroke="#F8B61A" strokeWidth="10" fill="#FFFFFF" />
            <polygon points="70,22 73,30 81,30 74,35 77,43 70,38 63,43 66,35 59,30 67,30" fill="#F8B61A" />
            <text x="70" y="78" fill="#231F20" fontFamily="Impact, 'Arial Black', sans-serif" fontSize="26" fontWeight="900" textAnchor="middle">CHURCH&apos;S</text>
            <text x="70" y="98" fill="#231F20" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="900" letterSpacing="1" textAnchor="middle">TEXAS CHICKEN</text>
          </svg>
          <span className="font-black text-sm tracking-wider text-amber-900 uppercase shrink-0">
            CHURCH&apos;S
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[#F8F7F4] py-9 border-y border-[#E5E2DA] shadow-sm overflow-hidden">
      <Container size="wide">
        {/* Centered Eyebrow with gold accent rules */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-8 sm:w-12 h-px bg-[#B8864E]/60" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#8C6D46] uppercase">
              TRUSTED TO BUILD FOR LEADING BRANDS
            </span>
            <span className="w-8 sm:w-12 h-px bg-[#B8864E]/60" />
          </div>
        </div>

        {/* Continuous Scrolling Marquee */}
        <div className="relative w-full overflow-hidden py-1">
          {/* Left and Right Edge Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#F8F7F4] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F8F7F4] to-transparent z-10" />

          {/* Seamless Infinite Marquee Track */}
          <div className="flex w-max animate-marquee items-center">
            {/* Primary Sequence */}
            <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0">
              {brands.map((brand, idx) => {
                const logoContent = (
                  <div
                    className="flex items-center justify-center px-3 py-1.5 hover:scale-110 transition-transform duration-200 cursor-pointer shrink-0"
                    title={brand.name}
                  >
                    {brand.logo}
                  </div>
                );

                if ("websiteUrl" in brand && brand.websiteUrl) {
                  return (
                    <a
                      key={`b1-${idx}-${brand.name}`}
                      href={brand.websiteUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-teal rounded"
                      aria-label={`Visit official ${brand.name} website`}
                    >
                      {logoContent}
                    </a>
                  );
                }

                return (
                  <div key={`b1-${idx}-${brand.name}`} className="shrink-0">
                    {logoContent}
                  </div>
                );
              })}
            </div>

            {/* Duplicate Sequence (Seamless loop clone) */}
            <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0" aria-hidden="true">
              {brands.map((brand, idx) => {
                const logoContent = (
                  <div
                    className="flex items-center justify-center px-3 py-1.5 hover:scale-110 transition-transform duration-200 cursor-pointer shrink-0"
                    title={brand.name}
                  >
                    {brand.logo}
                  </div>
                );

                if ("websiteUrl" in brand && brand.websiteUrl) {
                  return (
                    <a
                      key={`b2-${idx}-${brand.name}`}
                      href={brand.websiteUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={-1}
                      className="shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-teal rounded"
                      aria-label={`Visit official ${brand.name} website`}
                    >
                      {logoContent}
                    </a>
                  );
                }

                return (
                  <div key={`b2-${idx}-${brand.name}`} className="shrink-0">
                    {logoContent}
                  </div>
                );
              })}
            </div>
          </div>
          </div>
        </Container>
      </section>
  );
}
