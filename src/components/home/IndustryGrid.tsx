import Link from "next/link";
import { Phone, Landmark, Truck, HeartPulse, ShoppingBag, type LucideIcon } from "lucide-react";
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
    Icon: Phone,
    title: "TELECOM",
    tagline: "Scale. Modernize. Automate.",
    description: "AI-powered staffing and AI service delivery for telecom carriers and infrastructure teams.",
    href: "/contact",
  },
  {
    Icon: Landmark,
    title: "FINANCIAL SERVICES",
    tagline: "Compliance. Speed. Trust.",
    description: "Senior engineering talent and AI systems for banks, fintechs, and capital markets — built for regulated environments.",
    href: "/contact",
  },
  {
    Icon: Truck,
    title: "LOGISTICS & SUPPLY CHAIN",
    tagline: "Track. Predict. Optimize.",
    description: "Pre-vetted engineers and AI automation for logistics, freight, and supply-chain operations.",
    href: "/contact",
  },
  {
    Icon: HeartPulse,
    title: "HEALTHCARE & LIFE SCIENCES",
    tagline: "Patient. Provider. Payer.",
    description: "Engineering teams and AI systems for healthcare networks, payers, and digital health platforms.",
    href: "/contact",
  },
  {
    Icon: ShoppingBag,
    title: "RETAIL & CPG",
    tagline: "Demand. Channels. Margins.",
    description: "Talent and AI automation for retail tech teams, e-commerce, and consumer brands at scale.",
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
            title="Built for enterprise and mid-market teams in the industries we know best."
            description="We don't claim to serve every industry. These are the verticals where our placed engineers and AI products run deepest — for enterprises with mature stacks and mid-market teams that can't afford a full in-house technical bench."
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
              <article className="brochure-card flex h-full flex-col p-6">
                <industry.Icon size={32} className="text-brand" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-heading">
                  {industry.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand">{industry.tagline}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
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
