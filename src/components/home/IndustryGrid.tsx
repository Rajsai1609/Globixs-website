import Link from "next/link";
import { UtensilsCrossed, Home, Briefcase, Users, Code, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Industry = {
  Icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  href: string;
};

const industries: Industry[] = [
  {
    Icon: UtensilsCrossed,
    title: "RESTAURANTS",
    tagline: "Order. Serve. Grow.",
    description:
      "Catering automation, online ordering ops, and customer communication for independent restaurants.",
    href: "/contact",
  },
  {
    Icon: Home,
    title: "REAL ESTATE",
    tagline: "List. Qualify. Close.",
    description:
      "Lead generation, qualification, and follow-up automation for real estate agents and brokerages.",
    href: "/contact",
  },
  {
    Icon: Briefcase,
    title: "PROFESSIONAL SERVICES",
    tagline: "Intake. Deliver. Bill.",
    description:
      "AI workflows for law firms, accounting practices, and consultancies — from client intake to project delivery.",
    href: "/contact",
  },
  {
    Icon: Users,
    title: "STAFFING & RECRUITING",
    tagline: "Source. Vet. Place.",
    description:
      "Sales intelligence and candidate matching tools for boutique staffing firms and recruiting agencies.",
    href: "/contact",
  },
  {
    Icon: Code,
    title: "SMALL TECH TEAMS",
    tagline: "Build. Ship. Scale.",
    description:
      "Engineering augmentation and AI tooling for product teams at growing startups.",
    href: "/contact",
  },
];

export function IndustryGrid() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="INDUSTRIES WE SERVE"
            title="Built for the businesses we work with every day"
            description="We don't claim to serve every industry. These are the ones where we've shipped real products and placed real engineers."
          />
        </Reveal>

        {/*
          5 cards: xl:grid-cols-5 (all in one row), lg:grid-cols-4 (5th card on second row,
          centered via col-start-2), sm:grid-cols-2, default 1-col.
        */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {industries.map((industry, idx) => (
            <Reveal
              key={industry.title}
              delay={idx * 70}
              className={
                idx === 4
                  ? "sm:col-span-2 sm:max-w-sm sm:mx-auto lg:col-span-1 lg:col-start-2 lg:max-w-none lg:mx-0 xl:col-start-auto"
                  : ""
              }
            >
              <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <industry.Icon size={32} className="text-red-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-heading">
                  {industry.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand">{industry.tagline}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {industry.description}
                </p>
                <Link
                  href={industry.href}
                  className="mt-4 text-sm font-semibold text-accent transition hover:underline"
                >
                  Learn more →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
