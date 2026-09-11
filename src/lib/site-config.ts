export const company = {
  name: "Globixs Technology Solutions",
  phone: "+1 (425) 666-8998",
  email: "connect@globixs.com",
  address: "Seattle, WA",
  locationTagline:
    "Seattle, WA · AI automation, digital marketing and technology consulting for growing businesses",
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

// Order is the founder's: Services first (AI automation, digital marketing,
// technology consulting), then Results, then the two secondary lines.
// "Results" is hidden by the navbar until a customer result is published.
export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/for-employees", label: "Job Marketing" },
  { href: "/staffing", label: "Staffing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
