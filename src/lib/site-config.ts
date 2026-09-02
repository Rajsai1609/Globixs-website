export const company = {
  name: "Globixs Technology Solutions",
  phone: "+1 (425) 666-8998",
  email: "connect@globixs.com",
  address: "Seattle, WA",
  locationTagline: "Seattle, WA · AI-native staffing and AI services for enterprise",
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

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  // The three service lines, in order: staffing (businesses), job marketing
  // (candidates), AI services (businesses).
  { href: "/services", label: "Staffing" },
  { href: "/for-employees", label: "Job Marketing" },
  { href: "/results", label: "Results" },
  { href: "/ai-products", label: "AI Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
