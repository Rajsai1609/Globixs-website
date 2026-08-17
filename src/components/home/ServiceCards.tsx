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
  /* Set for targets outside the App Router (e.g. /register rewrites to the
     static public/register.html) — renders a plain anchor instead of next/link. */
  ctaStatic?: boolean;
};

const cards: ServiceCard[] = [
  {
    num: "(01)",
    title: "IT Staffing for Companies",
    tagline: "Contract and full-time technical hires, pre-vetted and delivered in days.",
    desc: "Pre-vetted engineers across cloud, data, AI/ML, cybersecurity, and software — placed with enterprise and mid-market teams on contract, contract-to-hire, or full-time terms. Sourcing, screening, and matching run on our own AI stack, so first submissions land in 7–10 days, not 4 weeks.",
    subLinks: [
      { label: "Cloud & DevOps engineers",     href: "/services" },
      { label: "Data & AI/ML engineers",       href: "/services" },
      { label: "Cybersecurity specialists",    href: "/services" },
      { label: "Software & full-stack talent", href: "/services" },
    ],
    ctaLabel: "See how staffing works →",
    ctaHref: "/services",
  },
  {
    num: "(02)",
    title: "Job Marketing for Candidates",
    tagline: "A dedicated recruiter delivering 25–35 tailored applications a day.",
    desc: "For job seekers ready to move. You get a dedicated recruiter, a resume rewritten for every target role, and 25–35 tailored applications submitted daily on your behalf — across our core technology tracks and an unsaturated roles track with faster interviews and less competition.",
    subLinks: [
      { label: "Dedicated recruiter",              href: "/for-employees" },
      { label: "Tailored resumes per application", href: "/for-employees" },
      { label: "25–35 applications per day",       href: "/for-employees" },
      { label: "Core + unsaturated role tracks",   href: "/for-employees" },
    ],
    ctaLabel: "See how job marketing works →",
    ctaHref: "/register",
    ctaStatic: true,
  },
  {
    num: "(03)",
    title: "AI Services for Businesses",
    tagline: "AI receptionists, lead generation, automation, websites, and more — we build it and run it.",
    desc: "Done-for-you AI and digital growth systems for businesses that need results, not a research project. We answer the calls you're missing, fill your pipeline, automate the busywork, protect your reputation, and build the website that converts — then we keep it running.",
    subLinks: [
      { label: "AI receptionists & missed-call recovery", href: "/ai-products" },
      { label: "AI chatbots for support & sales",         href: "/ai-products" },
      { label: "Lead generation systems",                 href: "/ai-products" },
      { label: "Workflow automation",                     href: "/ai-products" },
      { label: "Websites + local SEO",                    href: "/ai-products" },
      { label: "Dashboards, reviews & design",            href: "/ai-products" },
    ],
    ctaLabel: "Explore AI services →",
    ctaHref: "/ai-products",
  },
];

export function ServiceCards() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="WHAT WE DO"
            title="Three service lines. One technology partner."
            description="Businesses come to us to hire engineers or to build AI-powered solutions. Job seekers come to us to get marketed into their next role. Each line stands on its own — and reinforces the others."
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
                  {card.ctaStatic ? (
                    <a
                      href={card.ctaHref}
                      className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                    >
                      {card.ctaLabel}
                    </a>
                  ) : (
                    <Link
                      href={card.ctaHref}
                      className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                    >
                      {card.ctaLabel}
                    </Link>
                  )}
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
