/** Canonical origin for metadata, sitemap and robots. No trailing slash. */
export const SITE_URL = "https://www.globixs.com";

/**
 * Where every "Book a consultation" / "free 20-minute call" CTA sends people.
 * Internal path today (the contact form captures the referring page as the
 * lead source); swap to a calendar URL here if booking moves off-site again.
 */
export const BOOKING_URL = "/contact";

export const company = {
  name: "Globixs Technology Solutions",
  phone: "+1 (425) 666-8998",
  email: "connect@globixs.com",
  address: "Seattle, WA",
  locationTagline:
    "Seattle-based, working nationwide · AI automation, digital marketing and technology consulting",
  /** Company page on LinkedIn — the only social profile the company runs. */
  linkedinUrl: "https://www.linkedin.com/company/globixs/",
  /** Short display form of linkedinUrl for inline links. */
  linkedinHandle: "linkedin.com/company/globixs",
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
