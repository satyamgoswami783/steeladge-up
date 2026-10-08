export interface FAQItem {
  question: string;
  answer: string;
  projectProof?: {
    text: string;
    href: string;
  };
}

// 1. Homepage FAQs (Focus: Commercial Contractor & Tenant Improvements Surrey BC)
export const homeFAQs: FAQItem[] = [
  {
    question: "What commercial construction and tenant improvement services does Steelage provide in Surrey, BC?",
    answer: "Steelage Construction is a commercial construction, renovation, and tenant improvement contractor serving Surrey, Vancouver, and communities across the Lower Mainland. Operating since 2010, we provide ground-up commercial builds, tenant improvements, interior build-outs, structural reconfiguration, steel-stud framing, T-bar ceilings, commercial finishes, and complete construction project management.",
    projectProof: {
      text: "Explore Our Commercial Capabilities",
      href: "/services/",
    },
  },
  {
    question: "Which Lower Mainland and BC communities does Steelage Construction serve?",
    answer: "Steelage is based in Surrey, British Columbia and serves commercial clients throughout Surrey, Vancouver, Burnaby, Richmond, Langley, Delta, Coquitlam, Port Coquitlam, Abbotsford, Chilliwack, Maple Ridge, and surrounding Lower Mainland communities.",
    projectProof: {
      text: "View Regional Service Coverage",
      href: "/service-area/",
    },
  },
  {
    question: "What construction capabilities are included in a Steelage commercial interior build-out?",
    answer: "Depending on the project scope, our construction capabilities include spatial layout modifications, interior partition walls, structural reconfiguration, steel-stud framing, T-bar acoustic ceilings, mechanical, electrical, and plumbing (MEP) integration, commercial finishes, cabinetry, and custom millwork.",
    projectProof: {
      text: "View Completed Projects Portfolio",
      href: "/projects/",
    },
  },
  {
    question: "What experience does Steelage have with restaurant, café, and franchise build-outs?",
    answer: "Steelage has extensive experience with full-service restaurants, quick-service restaurants (QSR), cafes, and franchise build-outs (including Boston Pizza, Dairy Queen, Mucho Burrito, and Oakberry Açaí). We coordinate kitchen layouts, dining service areas, commercial finishes, exhaust hoods, grease interceptors, custom millwork, and health authority sign-offs.",
    projectProof: {
      text: "Explore Restaurant Case Studies",
      href: "/projects/boston-pizza-surrey/",
    },
  },
  {
    question: "Does Steelage construct daycare and early learning childcare facilities?",
    answer: "Yes. Daycare construction requires careful consideration of safety, functionality, durability, and accessibility. We construct practical educational environments featuring child-conscious layouts, durable finishes, impact flooring, protected electrical systems, secure access areas, and custom millwork built to BC ministry and health standards.",
    projectProof: {
      text: "View Daycare Showcase Project",
      href: "/projects/daycare-early-learning-surrey/",
    },
  },
  {
    question: "How does Steelage manage commercial projects from planning through completion?",
    answer: "Our project approach combines pre-construction planning, architectural and permit coordination, trade management, schedule tracking, and rigorous quality control to ensure projects are delivered safely, on schedule, and ready for municipal occupancy sign-off.",
    projectProof: {
      text: "Learn About Our 5-Step Delivery Process",
      href: "/our-process/",
    },
  },
  {
    question: "How do I start a commercial construction or renovation project with Steelage?",
    answer: "Starting a project begins with an initial consultation and on-site evaluation. We review your operational requirements, preliminary plans, location parameters, and schedule to deliver a transparent scope and estimate.",
    projectProof: {
      text: "Request a Consultation",
      href: "/contact/",
    },
  },
];

// 2. Services Listing Page FAQs (/services)
export const servicesListingFAQs: FAQItem[] = [
  {
    question: "What commercial construction sectors does Steelage Construction specialize in?",
    answer: "We specialize in four core sectors: General Commercial Construction & Ground-Up Builds, Commercial Tenant Improvements & Leasehold Fit-Outs, Restaurant & Hospitality Builds (including commercial kitchens and bars), and Multi-Unit Franchise Restaurant & Retail Builds.",
    projectProof: {
      text: "View All Featured Projects",
      href: "/projects/",
    },
  },
  {
    question: "How does Steelage Construction manage municipal building permits across Lower Mainland cities?",
    answer: "We handle complete municipal permitting workflows, including building permits, development permits, change-of-use applications, plumbing and electrical permits, and final occupancy inspections across the City of Surrey, City of Vancouver, City of Burnaby, and adjacent municipalities.",
  },
  {
    question: "What is the difference between turnkey general contracting and construction management?",
    answer: "Under turnkey general contracting, Steelage takes single-source responsibility for the entire project from groundbreaking to occupancy permit for a stipulated price. Under construction management, we act as the client's advisor managing trade procurement, budget auditing, and schedule oversight.",
  },
  {
    question: "How are commercial construction costs and timelines calculated?",
    answer: "Cost and duration depend on square footage, mechanical/electrical/plumbing (MEP) complexity, structural modifications, specialized equipment (such as commercial kitchen hoods or dental lines), and municipal permit turnaround times in the local jurisdiction.",
    projectProof: {
      text: "Request a Detailed Project Estimate",
      href: "/contact/",
    },
  },
];

// 3. Service-Specific Detail FAQs (/services/[slug])
export const serviceFAQs: Record<string, FAQItem[]> = {
  "commercial-construction": [
    {
      question: "What is commercial construction?",
      answer: "Commercial construction involves building, expanding, or structurally modifying properties designed for business operations, including retail strip plazas, office buildings, light industrial facilities, and freestanding commercial structures.",
    },
    {
      question: "Does Steelage Construction provide ground-up commercial construction?",
      answer: "Yes. Steelage Construction provides ground-up commercial building construction, engineered concrete foundations, structural steel framing, and building envelope cladding across Surrey and Metro Vancouver.",
      projectProof: {
        text: "View BMPP Commercial Exterior Project",
        href: "/projects/bmpp-commercial-exterior/",
      },
    },
    {
      question: "What does Steelage's commercial construction service include?",
      answer: "Our capabilities include pre-construction site evaluation, civil excavation, structural steel framing, building envelope systems, commercial roofing, heavy MEP infrastructure, interior finishings, and City of Surrey occupancy certification.",
    },
    {
      question: "Does Steelage manage commercial construction projects from start to finish?",
      answer: "Yes. We offer complete turnkey execution, managing architectural coordination, municipal zoning permits, sub-trade procurement, daily site safety, quality assurance, and final turnover.",
      projectProof: {
        text: "Learn About Our 5-Step Process",
        href: "/our-process/",
      },
    },
    {
      question: "What areas does Steelage serve for commercial construction?",
      answer: "Steelage is based in Surrey, BC and provides commercial construction services across Surrey, Vancouver, Burnaby, Richmond, Langley, Delta, Coquitlam, Port Coquitlam, Abbotsford, Chilliwack, and Maple Ridge.",
      projectProof: {
        text: "Check Our Service Area Coverage",
        href: "/service-area/",
      },
    },
    {
      question: "What does commercial construction project management include?",
      answer: "Our project management coordinates critical path scheduling, transparent cost reporting, rigorous quality control, sub-trade oversight, WorkSafeBC safety compliance, and municipal inspection milestones.",
    },
  ],
  "tenant-improvements": [
    {
      question: "What is a commercial tenant improvement?",
      answer: "A commercial tenant improvement (TI) involves customizing an existing commercial shell or retrofitting an operational unit to meet the specific branding, layout, and operational requirements of an incoming business.",
    },
    {
      question: "What does a tenant improvement contractor do?",
      answer: "A TI contractor manages interior demolition, acoustic framing, mechanical/electrical/plumbing updates, architectural millwork, flooring, code-mandated accessibility enhancements, municipal permits, and landlord approvals.",
    },
    {
      question: "Does Steelage Construction provide tenant improvements in Surrey, BC?",
      answer: "Yes. Steelage Construction provides comprehensive commercial tenant improvement services throughout Surrey, Vancouver, and the Lower Mainland for restaurants, retail stores, corporate offices, and clinics.",
      projectProof: {
        text: "View Mucho Burrito Tenant Improvement",
        href: "/projects/mucho-burrito-surrey/",
      },
    },
    {
      question: "Can Steelage renovate an existing retail or office space?",
      answer: "Yes. Steelage specializes in retrofitting occupied or vacant retail storefronts and corporate offices, upgrading layouts, power grids, lighting, partitions, and customer service counters.",
      projectProof: {
        text: "View Oakberry Açaí Commercial Fit-Out",
        href: "/projects/oakberry-acai-surrey/",
      },
    },
    {
      question: "Can Steelage help with permits for tenant improvements?",
      answer: "Yes. We prepare and submit all permit packages—including architectural drawings, structural engineering reviews, plumbing, and electrical plans—and coordinate all City of Surrey and regional municipal inspections.",
    },
    {
      question: "How does Steelage minimize disruption during tenant improvement projects?",
      answer: "We utilize phased scheduling, after-hours construction shifts, dedicated dust containment barriers, and proactive property management coordination to protect neighbouring tenants and ongoing business operations.",
    },
    {
      question: "Does Steelage Construction build daycare and healthcare tenant improvements?",
      answer: "Yes. We deliver code-compliant tenant improvements for daycare centres (with child-safe ergonomics, secure access, impact flooring) and medical/dental clinics (with lead shielding, medical gas routing, and Fraser Health standards).",
    },
  ],
  "restaurant-construction": [
    {
      question: "Does Steelage Construction build restaurants in Surrey, BC?",
      answer: "Yes. Steelage Construction is a leading commercial restaurant general contractor in Surrey and Metro Vancouver, specializing in full-service dining establishments, sports lounges, quick-service restaurants (QSR), and cafes.",
      projectProof: {
        text: "View Boston Pizza Surrey Project",
        href: "/projects/boston-pizza-surrey/",
      },
    },
    {
      question: "What is included in a commercial restaurant build-out?",
      answer: "A restaurant build-out includes commercial kitchen flooring, stainless steel cook lines, grease interceptors, high-CFM exhaust hoods, NFPA 96 fire suppression systems, custom bars, architectural dining millwork, and POS infrastructure.",
    },
    {
      question: "Does Steelage work on franchise and QSR restaurant projects?",
      answer: "Yes. We have completed flagship builds and renovations for major franchise brands including Boston Pizza, Dairy Queen Grill & Chill, Mucho Burrito, and Oakberry Açaí.",
      projectProof: {
        text: "View Dairy Queen Grill & Chill Build",
        href: "/projects/dq-grill-chill-surrey/",
      },
    },
    {
      question: "How does Steelage ensure Fraser Health and Vancouver Coastal Health compliance?",
      answer: "We ensure 100% compliance with regional health authority standards by designing washable non-porous wall/floor surfaces, dedicated commercial handwashing stations, correct grease trap sizing, and backflow prevention.",
    },
    {
      question: "Does Steelage provide custom millwork for restaurants?",
      answer: "Yes. Our interior carpentry capabilities include custom bar tops, host stands, banquette seating, acoustic wall panelling, drink rails, and franchise-specified service counters.",
      projectProof: {
        text: "View Oakberry Açaí Custom Millwork",
        href: "/projects/oakberry-acai-surrey/",
      },
    },
  ],
  "franchise-construction": [
    {
      question: "Does Steelage Construction work with national and regional franchise brands?",
      answer: "Yes. Steelage Construction is an approved general contractor trusted by top brands including Boston Pizza, Dairy Queen Grill & Chill, Mucho Burrito, and Oakberry Açaí across British Columbia.",
      projectProof: {
        text: "View Dairy Queen Franchise Project",
        href: "/projects/dq-grill-chill-surrey/",
      },
    },
    {
      question: "How does Steelage ensure strict franchise brand compliance?",
      answer: "We build strictly to franchisor architectural brand guidelines, procuring specified materials, modular counters, colour-matched finishes, lighting packages, and drive-thru communication equipment.",
      projectProof: {
        text: "View Boston Pizza Case Study",
        href: "/projects/boston-pizza-surrey/",
      },
    },
    {
      question: "Can Steelage manage multi-unit franchise rollouts across BC?",
      answer: "Yes. We provide scalable construction management and procurement for multi-location franchise expansions across Surrey, Vancouver, the Fraser Valley, and Vancouver Island.",
    },
    {
      question: "What is the typical timeline for a franchise QSR build-out?",
      answer: "A standard franchise restaurant build-out takes between 6 to 12 weeks once municipal permits are issued, depending on kitchen size, structural modifications, and drive-thru civil requirements.",
      projectProof: {
        text: "Contact Our Franchise Estimator",
        href: "/contact/",
      },
    },
  ],
};

// 4. Projects Listing Page FAQs (/projects)
export const projectsListingFAQs: FAQItem[] = [
  {
    question: "What types of commercial projects are featured in Steelage Construction's portfolio?",
    answer: "Our portfolio features completed commercial builds including full-service restaurants, quick-service franchises, retail tenant fit-outs, corporate offices, daycare centres, and commercial exterior modernizations.",
  },
  {
    question: "Can prospective commercial clients tour completed Steelage project locations in Surrey?",
    answer: "Yes. Many of our completed projects are public commercial establishments (such as Boston Pizza, Dairy Queen, Mucho Burrito, and Oakberry Açaí) in Surrey and surrounding Lower Mainland communities that clients can visit.",
    projectProof: {
      text: "Explore Individual Case Studies",
      href: "/projects/boston-pizza-surrey/",
    },
  },
  {
    question: "How does Steelage Construction document project challenges and outcomes?",
    answer: "Each project case study details the scope of work, technical engineering solutions implemented (such as HVAC and grease interceptor routing), brand compliance standards met, and on-time handover outcomes.",
  },
];

// 5. Service Area Page FAQs (/service-area)
export const serviceAreaFAQs: FAQItem[] = [
  {
    question: "Which cities and regions does Steelage Construction serve in British Columbia?",
    answer: "We provide commercial general contracting and tenant improvements across Surrey, Vancouver, Burnaby, Richmond, Langley, Delta, Coquitlam, Port Coquitlam, Abbotsford, Chilliwack, Maple Ridge, and Victoria / Vancouver Island.",
    projectProof: {
      text: "View Regional Coverage Details",
      href: "/service-area/",
    },
  },
  {
    question: "Does Steelage have local municipal permit expertise across different BC municipalities?",
    answer: "Yes. We have over 15 years of direct experience coordinating with municipal planning and building inspection departments across the City of Surrey, City of Vancouver, City of Burnaby, Township of Langley, and City of Richmond.",
  },
  {
    question: "Can Steelage handle multi-city commercial rollouts in the Lower Mainland and Fraser Valley?",
    answer: "Yes. Our centralized Surrey project management hub deploys dedicated site supervisors and coordinated sub-trades across multiple municipal jurisdictions simultaneously.",
    projectProof: {
      text: "Plan a Multi-Location Build",
      href: "/contact/",
    },
  },
  {
    question: "How quickly can Steelage perform an on-site commercial consultation in Surrey or Vancouver?",
    answer: "Because our headquarters and field teams are based in Surrey, we typically conduct on-site project evaluations within 24 to 48 hours of initial inquiry.",
  },
];

// 6. About Page FAQs (/about)
export const aboutFAQs: FAQItem[] = [
  {
    question: "Who is Steelage Construction Ltd and where do you operate?",
    answer: "Steelage Construction is a commercial construction company serving Surrey, Vancouver, and the Lower Mainland of British Columbia. Operating since 2010, Steelage provides commercial construction, tenant improvements, interior build-outs, commercial renovations, and construction project management services across Surrey, Vancouver, Burnaby, Richmond, Langley, Delta, Coquitlam, and surrounding Lower Mainland communities.",
    projectProof: {
      text: "Review Our Commercial Track Record",
      href: "/projects/",
    },
  },
  {
    question: "What is Steelage's approach to commercial construction and trade coordination?",
    answer: "Our approach combines project planning, construction coordination, trade management, and commercial interior construction to help clients build, renovate, or reconfigure spaces around their operational requirements—spanning restaurants, retail, offices, daycare facilities, and other commercial properties.",
  },
  {
    question: "Is Steelage Construction licensed, bonded, and insured in British Columbia?",
    answer: "Yes. Steelage Construction is fully licensed in British Columbia, bonded, carries comprehensive commercial general liability insurance, and maintains 100% active WorkSafeBC good-standing coverage.",
    projectProof: {
      text: "Explore Our Quality Standards",
      href: "/our-process/",
    },
  },
  {
    question: "What is Steelage Construction's approach to safety and quality control?",
    answer: "We enforce strict on-site safety protocols adhering to WorkSafeBC regulations, execute multi-stage quality control audits at every construction milestone, and maintain transparent client communication throughout.",
  },
  {
    question: "How much commercial experience does Steelage Construction have?",
    answer: "Our leadership and site management team bring over 15+ years of hands-on commercial construction, structural engineering, and tenant improvement experience across the Lower Mainland.",
  },
];

// 7. Our Process Page FAQs (/our-process)
export const processFAQs: FAQItem[] = [
  {
    question: "What are the stages in Steelage Construction's commercial delivery framework?",
    answer: "Our delivery process follows 5 structured steps: 1) Initial Consultation & Site Feasibility, 2) Estimating & Architectural Budget Review, 3) Municipal Permit Expediting, 4) Active Construction & Trade Coordination, and 5) Quality Handover & Occupancy Certification.",
    projectProof: {
      text: "See How We Build",
      href: "/our-process/",
    },
  },
  {
    question: "How does Steelage prevent commercial budget overruns?",
    answer: "We utilize comprehensive pre-construction estimating, detailed line-item budget forecasting, transparent trade bids, and value engineering to resolve potential cost discrepancies before construction begins.",
  },
  {
    question: "How are project timelines tracked and communicated during construction?",
    answer: "We build critical-path construction schedules, conduct weekly trade milestone reviews, and provide regular photographic progress updates to business owners and franchise stakeholders.",
  },
  {
    question: "What happens during the final handover and occupancy phase?",
    answer: "We complete all municipal building, health, and fire inspection sign-offs, assemble comprehensive warranty packages and equipment manuals, and conduct a detailed client walkthrough to ensure zero outstanding punch-list items.",
  },
];

// 8. Contact Page FAQs (/contact)
export const contactFAQs: FAQItem[] = [
  {
    question: "How do I request a commercial construction quote from Steelage?",
    answer: "You can submit your project details using our online estimate form, email us directly at info@steelage.ca, or call our estimator hotline at (604) 418-1515.",
    projectProof: {
      text: "Submit Your Project Details",
      href: "/contact/#estimate-form",
    },
  },
  {
    question: "What information should I have ready when contacting Steelage for an estimate?",
    answer: "Having your commercial space address, approximate square footage, intended business use, preliminary architectural drawings (if available), target opening date, and lease handover schedule helps us provide an accurate estimate.",
  },
  {
    question: "How quickly does Steelage respond to commercial estimating inquiries?",
    answer: "Our estimating team responds to all online inquiries and phone calls within 1 business day to schedule a phone consultation or on-site evaluation.",
  },
  {
    question: "Can Steelage review a potential commercial lease space before I sign?",
    answer: "Yes. We offer pre-lease site inspections to evaluate existing electrical capacity, plumbing/grease interceptor access, HVAC adequacy, and structural suitability before you commit to a commercial lease.",
  },
];
