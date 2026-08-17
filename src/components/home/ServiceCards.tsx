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
    title: "Train",
    tagline: "Globixs Academy — turn graduates into AI engineers.",
    desc: "We train US-based graduates in production AI engineering: agents, LLM integration, deployment, and the discipline to ship. Consultation-first admissions — we talk to every applicant before tuition, so we only train people we're confident we can place.",
    subLinks: [
      { label: "Production AI engineering curriculum", href: "/academy" },
      { label: "1:1 admissions consultation",          href: "/academy" },
      { label: "Mentored project portfolio",           href: "/academy" },
      { label: "Placement-track program",              href: "/academy" },
    ],
    ctaLabel: "Talk to admissions →",
    ctaHref: "/academy",
  },
  {
    num: "(02)",
    title: "Place",
    tagline: "AI-Powered IT Staffing. Talent matched by intelligence, not inboxes.",
    desc: "Pre-vetted AI and full-stack engineers placed with enterprise and mid-market teams that need AI systems but can't justify hiring a full in-house bench. Sourcing, screening, and matching is run by AI agents — first submissions in 7–10 days, not 4 weeks.",
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
    num: "(03)",
    title: "Build",
    tagline: "B2B AI products built by the engineers we train and place.",
    desc: "PathAI, Resto, Aigent, and SignalFeed are vertical AI products we ship to real customers — built and battle-tested by Globixs engineers between client engagements. The flywheel: every placement sharpens our products, every product proves what our talent can do.",
    subLinks: [
      { label: "PathAI (Career Intelligence)",    href: "https://mctpathai.com", external: true },
      { label: "Resto (Restaurant Ops)",          href: "/ai-products" },
      { label: "Aigent (Real Estate)",            href: "/ai-products" },
      { label: "SignalFeed (Sales Intelligence)", href: "/ai-products" },
    ],
    ctaLabel: "See the products →",
    ctaHref: "/ai-products",
  },
];

export function ServiceCards() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="THREE PILLARS. ONE FLYWHEEL."
            title="How Globixs delivers."
            description="Train graduates into production-ready AI engineers. Place them where they're needed. Build the AI products that prove the work. Each pillar makes the next one stronger."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
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

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                FULL-TIME JOB MARKETING
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                New: Unsaturated Roles track — Networks, Datacenters, IT Support, Embedded,
                Robotics. Faster interviews, less competition.
              </p>
            </div>
            {/* Static page (public/register.html) — plain anchor, not next/link */}
            <a href="/register" className="btn-primary shrink-0 whitespace-nowrap">
              Register Your Interest
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
