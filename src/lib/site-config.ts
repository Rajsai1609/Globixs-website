export const company = {
  name: "Globixs Technology Solutions",
  phone: "+1 (425) 666-8998",
  email: "connect@globixs.com",
  address: "295 Durham Ave Suite D\nBothell, WA", // TODO: Confirm address with team before deploying
  locationTagline: "Seattle, WA · AI staffing and consulting for US enterprises",
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
  { href: "/services", label: "For Employers" },
  {
    href: "/for-employees",
    label: "For Employees",
    dropdown: true,
    children: [
      { href: "/for-employees", label: "For Employees" },
      { href: "https://mctpathai.com", label: "PathAI", external: true },
    ],
  },
  { href: "/ai-products", label: "AI Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
