export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNavItems: NavItem[] = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "EXPERTISE",
    href: "/services/",
    children: [
      {
        label: "VIEW ALL SERVICES →",
        href: "/services/",
        description: "Explore our complete commercial general contracting capabilities.",
      },
      {
        label: "Franchise & Restaurants",
        href: "/services/restaurant-construction/",
        description: "Commercial kitchens, dining lounges, bars & turnkey franchise builds.",
      },
      {
        label: "Commercial Tenant Improvements",
        href: "/services/tenant-improvements/",
        description: "Modern spatial redesigns, leasehold upgrades & retail fit-outs.",
      },
      {
        label: "Commercial Construction",
        href: "/services/commercial-construction/",
        description: "Turnkey commercial ground-up building & general contracting in Surrey & BC.",
      },
    ],
  },
  {
    label: "PROJECTS",
    href: "/projects/",
  },
  {
    label: "OUR PROCESS",
    href: "/our-process/",
  },
  {
    label: "ABOUT",
    href: "/about/",
  },
  {
    label: "SERVICE AREA",
    href: "/service-area/",
  },
  {
    label: "CONTACT",
    href: "/contact/",
  },
];
