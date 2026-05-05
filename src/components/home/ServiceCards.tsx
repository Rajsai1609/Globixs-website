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
    tagline: "Senior engineers, placed in 14 days",
    desc: "Pre-vetted IT engineers across cloud, data, and AI. Senior recruiters handle sourcing. AI agents handle the scale. 90-day placement guarantee.",
    subLinks: [
      { label: "Cloud Engineers (AWS/GCP/Azure)", href: "/services" },
      { label: "Data Engineers",                  href: "/services" },
      { label: "AI/ML Engineers",                 href: "/services" },
      { label: "DevOps & SRE",                    href: "/services" },
      { label: "Full-Stack Developers",            href: "/services" },
    ],
    ctaLabel: "See staffing details →",
    ctaHref: "/services",
  },
  {
    num: "(02)",
    title: "AI Consulting",
    tagline: "Strategy, architecture, and implementation",
    desc: "We help enterprises identify AI opportunities, architect multi-agent systems, and ship production-grade workflows. Sense → Reason → Orchestrate → Optimize.",
    subLinks: [
      { label: "AI Readiness Assessment",   href: "/consulting" },
      { label: "Multi-Agent Architecture",  href: "/consulting" },
      { label: "LLM Integration",           href: "/consulting" },
      { label: "Workflow Automation",       href: "/consulting" },
    ],
    ctaLabel: "Explore consulting →",
    ctaHref: "/consulting",
  },
  {
    num: "(03)",
    title: "AI Products",
    tagline: "Built. Shipped. Live in production.",
    desc: "Vertical AI products built by Globixs and deployed for real customers. Restaurant ops, real estate, immigration, career intelligence, and more.",
    subLinks: [
      { label: "MCT PathAI (Career Intelligence)", href: "https://mctpathai.com", external: true },
      { label: "MCT Resto (Restaurant Ops)",       href: "/ai-products" },
      { label: "MCT Realty (Real Estate)",         href: "/ai-products" },
      { label: "MCT ImmigrationAI",               href: "/ai-products" },
    ],
    ctaLabel: "View AI products →",
    ctaHref: "/ai-products",
  },
  {
    num: "(04)",
    title: "Custom AI Builds",
    tagline: "Your problem, our agents",
    desc: "When off-the-shelf doesn't fit. We design and ship custom multi-agent systems for enterprise workflows — from intake to fulfillment to reporting.",
    subLinks: [
      { label: "Discovery & Scoping",       href: "/contact" },
      { label: "Architecture Design",       href: "/contact" },
      { label: "Production Deployment",     href: "/contact" },
      { label: "Ongoing Optimization",      href: "/contact" },
    ],
    ctaLabel: "Start a custom build →",
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
            title="Four ways Globixs helps you ship"
            description="From senior engineers placed in 14 days to custom AI systems shipped to production — pick the engagement that fits your stage."
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
