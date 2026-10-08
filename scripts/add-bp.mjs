import fs from "node:fs";

let code = fs.readFileSync("src/data/projects.ts", "utf8");

const newEntry = `  {
    slug: "boston-pizza-surrey",
    title: "BOSTON PIZZA — BRITISH COLUMBIA",
    brand: "Boston Pizza",
    location: "British Columbia",
    type: "Full Commercial Restaurant & Sports Lounge Build",
    year: "",
    scope: "Complete standalone restaurant construction with signature red architectural BP tower, exterior stone masonry, full glazing, licensed outdoor patio with perimeter enclosure, commercial kitchen, dining room and sports lounge fit-out.",
    completionTime: "",
    area: "",
    summary: "Freestanding Boston Pizza restaurant and sports lounge featuring modern stone masonry, architectural brand tower, and enclosed outdoor patio.",
    challenge: "Managing extensive MEP systems, commercial kitchen hoods, audio-visual sports bar infrastructure, and franchise brand compliance.",
    solution: "SteeLage coordinated structural, civil, mechanical, and architectural millwork trades to deliver a turnkey opening.",
    results: [
      "Freestanding architectural facade with red BP entrance portal",
      "Full stone veneer and commercial glazing installation",
      "Dedicated outdoor dining patio with umbrellas and railings",
      "Passed all health authority and municipal building inspections",
    ],
    image: "/images/projects/boston-pizza.jpg",
    gallery: [
      "/images/projects/boston-pizza.jpg",
      "/images/projects/boston-pizza-exterior.jpg",
    ],
    relatedServiceSlug: "tenant-improvements",
  },
`;

if (!code.includes("boston-pizza-surrey")) {
  if (code.includes("const projectEntries: Project[] = [\r\n")) {
    code = code.replace("const projectEntries: Project[] = [\r\n", "const projectEntries: Project[] = [\r\n" + newEntry);
  } else {
    code = code.replace("const projectEntries: Project[] = [\n", "const projectEntries: Project[] = [\n" + newEntry);
  }
  fs.writeFileSync("src/data/projects.ts", code, "utf8");
  console.log("Added Boston Pizza successfully!");
} else {
  console.log("Already present");
}
