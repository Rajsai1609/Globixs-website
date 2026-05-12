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
  { href: "/academy", label: "Train" },
  { href: "/services", label: "Place" },
  { href: "/ai-products", label: "Build" },
  { href: "/for-employees", label: "Employees" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
