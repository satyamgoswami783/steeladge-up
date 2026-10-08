import fs from "node:fs";

let code = fs.readFileSync("src/data/projects.ts", "utf8");

const newEntry = `  {
    slug: "dq-grill-chill-surrey",
    title: "DAIRY QUEEN GRILL & CHILL — SURREY, BC",
    brand: "Dairy Queen",
    location: "Surrey, BC",
    type: "Ground-Up QSR Commercial Build",
    year: "",
    scope: "Complete standalone quick-service restaurant build featuring modern architectural facade with red DQ brand tower, covered steel patio with outdoor dining, drive-thru lanes, landscaped perimeter and turnkey interior fit-out.",
    completionTime: "",
    area: "",
    summary: "Modern freestanding Dairy Queen Grill & Chill restaurant with covered exterior patio pergola, drive-thru lane, and complete turnkey commercial construction.",
    challenge: "Constructing a ground-up franchise restaurant with high-traffic drive-thru logistics, exterior pergola steelwork, and exacting brand architectural standards.",
    solution: "SteeLage managed complete civil, structural, facade and interior construction ensuring seamless franchisor compliance and handover.",
    results: [
      "Freestanding architectural facade with illuminated brand tower",
      "Steel-framed outdoor patio with dedicated pergola seating",
      "Full drive-thru lane integration and perimeter landscaping",
      "Complete health-inspected commercial kitchen & dining room",
    ],
    image: "/images/projects/dq-grill-chill.jpg",
    gallery: [
      "/images/projects/dq-grill-chill.jpg",
      "/images/projects/dq-hastings.jpg",
      "/images/projects/dq-cloverdale.jpg",
      "/images/projects/dq-powell-river.jpg",
      "/images/projects/dq-surrey-counter.jpg",
    ],
    relatedServiceSlug: "tenant-improvements",
  },
`;

if (!code.includes("dq-grill-chill-surrey")) {
  if (code.includes("const projectEntries: Project[] = [\r\n")) {
    code = code.replace("const projectEntries: Project[] = [\r\n", "const projectEntries: Project[] = [\r\n" + newEntry);
  } else {
    code = code.replace("const projectEntries: Project[] = [\n", "const projectEntries: Project[] = [\n" + newEntry);
  }
  fs.writeFileSync("src/data/projects.ts", code, "utf8");
  console.log("Added successfully!");
} else {
  console.log("Already present");
}
