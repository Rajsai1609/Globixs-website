/** Canonical origin for metadata, sitemap and robots. No trailing slash. */
export const SITE_URL = "https://www.globixs.com";

export const company = {
  name: "Globixs Technology Solutions",
  phone: "+1 (425) 666-8998",
  email: "connect@globixs.com",
  address: "Seattle, WA",
  locationTagline:
    "Seattle-based, working nationwide · AI automation, digital marketing and technology consulting",
};

export type NavChild = {
  href: string;
  label: string;
  external?: boolean;
};

export type NavLink = {
  href: string;
  label: string;
  dropdown?: boolean;
  children?: NavChild[];
};

/** Single source for the AI pillar's label (nav, footer, pillar card, CTAs, page title). */
export const AI_PILLAR_LABEL = "AI Services";

// Exactly six items, in the founder's order. The footer mirrors this list.
export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/ai-services", label: AI_PILLAR_LABEL },
  { href: "/digital-marketing", label: "Digital Marketing" },
  { href: "/technology-consulting", label: "Technology Consulting" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks: NavChild[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms of Service" },
];
