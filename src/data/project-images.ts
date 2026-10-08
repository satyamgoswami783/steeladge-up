const imageDescriptions: Record<string, string> = {
  "oakberry-main.jpg": "Open-plan interior with curved seating, round tables and a timber service counter",
  "oakberry-seating.jpg": "Curved bench seating and round tables beneath a botanical wall mural",
  "oakberry-counter.jpg": "Fluted timber service counter beside a botanical mural and glass display",
  "oakberry-front.jpg": "Front view of the timber order counter and digital menu screens",
  "oakberry-grabngo.jpg": "Purple grab-and-go display with a refrigerated drinks cabinet",
  "mucho-burrito-interior.jpg": "Restaurant dining area with timber ceiling slats and branded wall graphics",
  "mucho-burrito-wall.jpg": "Dining tables and upholstered benches beneath wall artwork and timber ceiling slats",
  "mucho-burrito-counter.jpg": "Food service counter with glass display, overhead menus and timber ceiling slats",
  "mucho-burrito-seating.jpg": "Window-side dining area with booth seating and a floral wall mural",
  "mucho-burrito-lights.jpg": "Cluster of pendant lights above a floral mural and restaurant seating",
  "bmpp-exterior.jpg": "Modern corner glass storefront with Big Mama's & Papa's Pizzeria illuminated signage",
  "bmpp-interior.jpg": "Pizzeria interior order counter, refrigerated beverage display and custom slice ceiling lamp",
  "bmpp-seating.jpg": "Customer dining tables with glass observation window overlooking pizza preparation area",
  "bmpp-mural.jpg": "Custom 3D Italian family cartoon feature wall mural with illuminated accent spotlights",
  "nonnas-pizza-counter.jpg": "Pizzeria display counter beside window seating and a circular ceiling sign",
  "nonnas-pizza-mural.jpg": "Illustrated pizzeria feature wall with family characters gathered around a pizza",
  "nonnas-pizza-dining.jpg": "Pizzeria window seating with wooden tables and colourful wall artwork",
  "nonnas-pizza.jpg": "Pizzeria interior with a glass display counter and window-side dining tables",
  "marbleslab-main.jpg": "Retail interior with pink bench seating, white tables and a striped display counter",
  "marbleslab-counter.jpg": "Blue-and-white striped service counter beneath digital menu screens",
  "marbleslab-seating.jpg": "Pink upholstered bench and white tables opposite a glass retail display counter",
  "marbleslab-display.jpg": "Product display shelves against a pink feature wall beside the service counter",
};

export function getProjectImageAlt(src: string, projectTitle: string): string {
  const filename = src.split("/").pop() ?? "";
  const description = imageDescriptions[filename];
  return description ? `${description} — ${projectTitle}` : `Interior view — ${projectTitle}`;
}
