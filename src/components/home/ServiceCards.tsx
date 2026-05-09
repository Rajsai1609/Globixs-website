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
    title: "AI-Powered IT Staffing",
    tagline: "Staffing at AI speed. Talent matched by intelligence, not inboxes.",
    desc: "Staffing, but the matching, sourcing, screening, and placement pipeline is run by AI agents. Faster time-to-submit, higher quality matches, lower cost-per-hire.",
    subLinks: [
      { label: "AI-driven candidate sourcing",   href: "/services" },
      { label: "Resume-to-JD semantic matching", href: "/services" },
      { label: "Automated screening agents",     href: "/services" },
      { label: "H1B / visa intelligence",        href: "/services" },
      { label: "Predictive fit scoring",         href: "/services" },
      { label: "VMS submission automation",      href: "/services" },
    ],
    ctaLabel: "How AI-powered staffing works →",
    ctaHref: "/services",
  },
  {
    num: "(02)",
    title: "AI-Focused Services",
    tagline: "We don't just staff AI engineers — we build the AI.",
    desc: "Production AI systems for enterprise. Senior consultants and engineers do the work; AI agents handle the scale. 2-to-8-week sprints, monitoring built in, KPIs tied to outcomes.",
    subLinks: [
      { label: "AI Agents & Automation",     href: "/consulting" },
      { label: "LLM Integration",            href: "/consulting" },
      { label: "Custom AI Applications",     href: "/consulting" },
      { label: "AI Strategy & Architecture", href: "/consulting" },
      { label: "Managed AI Operations",      href: "/consulting" },
    ],
    ctaLabel: "Explore AI services →",
    ctaHref: "/consulting",
  },
];

export function ServiceCards() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="TWO OFFERINGS. ONE AI-NATIVE PARTNER."
            title="Staffing at AI speed. Services that ship."
            description="Whether you need AI-matched talent in 7–10 days or a production AI system in an 8-week sprint, we're built for one thing: outcomes you can measure."
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
