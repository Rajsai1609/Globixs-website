import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type SubLink = { label: string; href: string; external?: boolean };

type ServiceCard = {
  num: string;
  title: string;
  tagline: string;
  desc: string;
  subLinks: SubLink[];
  ctaLabel: string;
  ctaHref: string;
};

const cards: ServiceCard[] = [
  {
    num: "(01)",
    title: "IT Staffing",
    tagline: "Engineers for growing teams",
    desc: "Need to hire a developer but don't have time to screen 50 resumes? We send you pre-vetted engineers who fit your stack and your budget. Contract, contract-to-hire, or full-time. No 12-month minimums.",
    subLinks: [
      { label: "Full-Stack Developers", href: "/services" },
      { label: "Frontend Engineers",    href: "/services" },
      { label: "Backend Engineers",     href: "/services" },
      { label: "DevOps & Cloud",        href: "/services" },
      { label: "AI/ML Engineers",       href: "/services" },
    ],
    ctaLabel: "See how staffing works →",
    ctaHref: "/services",
  },
  {
    num: "(02)",
    title: "AI Consulting",
    tagline: "AI that actually fits your business",
    desc: "Most AI advice is built for Fortune 500 problems. We work with growing businesses to find the one or two AI use cases that will actually save you time and money — then we build them. No lengthy assessments. No 100-page strategy decks.",
    subLinks: [
      { label: "AI Opportunity Audit",        href: "/consulting" },
      { label: "Workflow Automation",         href: "/consulting" },
      { label: "Customer-Facing AI Tools",    href: "/consulting" },
      { label: "Internal Productivity AI",    href: "/consulting" },
    ],
    ctaLabel: "Explore AI consulting →",
    ctaHref: "/consulting",
  },
  {
    num: "(03)",
    title: "AI Products",
    tagline: "AI tools built for your industry",
    desc: "Off-the-shelf software made for industries we know. Used every day by independent restaurants, real estate agents, students, and staffing teams. Setup in days, not months.",
    subLinks: [
      { label: "PathAI (Career Intelligence)",    href: "https://mctpathai.com", external: true },
      { label: "Resto (Restaurant Ops)",          href: "/ai-products" },
      { label: "Realty (Real Estate)",            href: "/ai-products" },
      { label: "SignalFeed (Sales Intelligence)", href: "/ai-products" },
    ],
    ctaLabel: "View AI products →",
    ctaHref: "/ai-products",
  },
  {
    num: "(04)",
    title: "Custom AI Builds",
    tagline: "Custom AI for your specific workflow",
    desc: "When your business has a process that off-the-shelf software can't handle, we build it. Lead intake, customer onboarding, reporting, inventory — whatever's eating your team's time. Fixed-price scoping, then we ship.",
    subLinks: [
      { label: "Discovery Call",       href: "/contact" },
      { label: "Fixed-Price Scoping",  href: "/contact" },
      { label: "Build & Ship",         href: "/contact" },
      { label: "Ongoing Support",      href: "/contact" },
    ],
    ctaLabel: "Start with a discovery call →",
    ctaHref: "/contact",
  },
];

export function ServiceCards() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="WHAT WE DO"
            title="Four ways Globixs helps you grow"
            description="From pre-vetted engineers to custom AI tools — pick the engagement that fits where your business is right now."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {cards.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg lg:p-10">
                <p className="font-mono text-sm tracking-[0.1em] text-red-600">{card.num}</p>
                <h3 className="mt-3 text-2xl font-bold text-heading lg:text-3xl">{card.title}</h3>
                <p className="mt-1 text-lg text-gray-600">{card.tagline}</p>
                <p className="mt-4 text-base leading-relaxed text-gray-700">{card.desc}</p>

                <ul className="mt-5 space-y-1.5 text-sm text-foreground">
                  {card.subLinks.map((sub) =>
                    sub.external ? (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          → {sub.label}
                        </a>
                      </li>
                    ) : (
                      <li key={sub.label}>
                        <Link href={sub.href} className="hover:underline">
                          → {sub.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>

                <div className="mt-auto pt-6">
                  <Link
                    href={card.ctaHref}
                    className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                  >
                    {card.ctaLabel}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
