/**
 * Service and product imagery lives in /public/services and /public/tracks.
 * See public/IMAGE-ATTRIBUTIONS.txt for Unsplash license and credit guidance.
 */

export type HeroSlide = {
  src: string;
  alt: string;
  headline: string;
  subline: string;
};

export const staffingHeroSlides: HeroSlide[] = [
  {
    src: "/services/staff-augmentation.jpg",
    alt: "Software team collaborating at a shared table with laptops and code on screen",
    headline: "Staff Augmentation",
    subline: "Embed pre-vetted engineers and analysts alongside your team.",
  },
  {
    src: "/services/it-consulting.jpg",
    alt: "Facilitated workshop in a conference room with presentation screen and laptops",
    headline: "IT Consulting",
    subline: "Architecture, modernization, and delivery models that scale.",
  },
  {
    src: "/services/managed-services.jpg",
    alt: "Server racks with structured cabling and status lights in a data center",
    headline: "Managed Services",
    subline: "Stabilize IAM, security, networks, and day-to-day IT operations.",
  },
  {
    src: "/services/data-analytics.jpg",
    alt: "Laptop showing a web analytics dashboard with charts and KPIs",
    headline: "Data & Analytics",
    subline: "BI, analytics engineering, and decision-ready reporting.",
  },
  {
    src: "/services/release-engineering.jpg",
    alt: "GitHub Octocat figurine on a laptop with a blurred profile on the display",
    headline: "Release Engineering",
    subline: "CI/CD, test automation, and dependable production releases.",
  },
  {
    src: "/services/enterprise-reach.jpg",
    alt: "Earth from orbit illustrating global connectivity and scale",
    headline: "Enterprise Reach",
    subline: "Staffing, products, and academy programs aligned to how you operate.",
  },
];

export type ServiceCardVisual = { src: string; alt: string };

const staffingCardVisuals: Record<string, ServiceCardVisual> = {
  "staff-augmentation": {
    src: "/services/staff-augmentation.jpg",
    alt: "Software team collaborating at a shared table with laptops and code on screen",
  },
  "it-consulting": {
    src: "/services/it-consulting.jpg",
    alt: "Facilitated workshop in a conference room with presentation screen and laptops",
  },
  "managed-services": {
    src: "/services/managed-services.jpg",
    alt: "Server racks with structured cabling and status lights in a data center",
  },
  "data-services": {
    src: "/services/data-analytics.jpg",
    alt: "Laptop showing a web analytics dashboard with charts and KPIs",
  },
  "release-engineering": {
    src: "/services/release-engineering.jpg",
    alt: "GitHub Octocat figurine on a laptop with a blurred profile on the display",
  },
};

const defaultCardVisual: ServiceCardVisual = {
  src: "/services/enterprise-reach.jpg",
  alt: "Earth from orbit illustrating global connectivity and scale",
};

export function getStaffingCardVisual(slug: string): ServiceCardVisual {
  return staffingCardVisuals[slug] ?? defaultCardVisual;
}

export type ProductTrackVisual = {
  src: string;
  alt: string;
};

export const productTrackVisuals: Record<string, ProductTrackVisual> = {
  resto: {
    src: "/tracks/restaurant.jpg",
    alt: "Restaurant dining room with guests and warm lighting",
  },
  health: {
    src: "/tracks/healthcare.jpg",
    alt: "Healthcare professional with patient in a clinical setting",
  },
  home: {
    src: "/tracks/home-services.jpg",
    alt: "Field technician in a hard hat with electrical equipment on site",
  },
  realty: {
    src: "/tracks/real-estate.jpg",
    alt: "Hands exchanging house keys in front of a home",
  },
};

export const homeCtaVisual: ServiceCardVisual = {
  src: "/services/it-consulting.jpg",
  alt: "Facilitated workshop in a conference room with presentation screen and laptops",
};
