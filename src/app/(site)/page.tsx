import Link from "next/link";
import Image from "next/image";
import { Users, Lightbulb, Clock, Filter, Layers, UserX, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { CTABanner } from "@/components/home/CTABanner";

// ─── Data ─────────────────────────────────────────────────────────────────────

type HeroPillar = {
  Icon: LucideIcon;
  title: string;
  description: string;
  subLinks: { label: string; href: string }[];
};

const heroPillars: HeroPillar[] = [
  {
    Icon: Users,
    title: "IT Staffing & Recruiting",
    description:
      "End-to-end technical recruiting powered by AI screening and senior recruiter judgment. We place cloud, data, ML/AI, full-stack, and DevOps engineers across contract and full-time roles.",
    subLinks: [
      { label: "For Employers →", href: "/services" },
      { label: "For Candidates →", href: "/get-hired" },
    ],
  },
  {
    Icon: Lightbulb,
    title: "Business Consulting Services",
    description:
      "AI strategy, automation advisory, and technology consulting for SMB and mid-market teams. Senior consultants ship production systems in 2-to-8-week sprints — not 12-month retainers.",
    subLinks: [
      { label: "Explore Consulting →", href: "/consulting" },
      { label: "Talk to Our Team →", href: "/contact" },
    ],
  },
];

const heroStats = [
  { value: "50+",     label: "Engineers Placed Across the US" },
  { value: "10",      label: "Dimensions in Our AI Screening" },
  { value: "90 days", label: "Placement Guarantee, Standard" },
  { value: "$0",      label: "Setup Fee on First Engagement" },
];

const solveCards: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: Clock,
    title: "Hiring takes too long",
    description:
      "Most agencies take 3–4 weeks just to send the first qualified candidate. We send 5 in days, not weeks.",
  },
  {
    Icon: Filter,
    title: "Generic matching wastes interviews",
    description:
      "Recruiters scan for keywords, not skills. We screen every candidate on 10 dimensions before you see a resume.",
  },
  {
    Icon: UserX,
    title: "Junior recruiters, technical roles",
    description:
      "Most agencies put juniors on senior searches. Our team is senior — backed by AI agents that handle the heavy lifting.",
  },
  {
    Icon: Layers,
    title: "AI projects stuck in slides",
    description:
      "Need AI alongside the talent? We ship deployed systems in 2–8 week sprints. No 12-month decks.",
  },
];

const steps = [
  {
    title: "1 - SENSE",
    desc: "We analyze staffing and operations workflows to identify the highest-impact AI opportunities.",
  },
  {
    title: "2 - REASON",
    desc: "Our AI agents learn your hiring criteria, business rules, and delivery goals.",
  },
  {
    title: "3 - ORCHESTRATE",
    desc: "AI + human teams execute sourcing, scoring, outreach, and reporting together.",
  },
  {
    title: "4 - OPTIMIZE",
    desc: "We monitor outcomes and continuously improve your staffing and automation performance.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div>
      {/* ══════════ HERO ══════════ */}
      <section className="hero-mesh py-20 text-white sm:py-28">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left — text + CTAs */}
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                Globixs Technology Solutions · Seattle
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                AI-Powered IT Staffing &amp; Business Consulting Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Globixs places pre-vetted IT engineers and ships production AI systems for US tech
                companies. Senior recruiters and consultants do the work. AI agents handle the
                scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/services" className="btn-primary">Hire IT Talent</Link>
                <Link href="/consulting" className="btn-secondary">Book a Consultation</Link>
              </div>
            </Reveal>

            {/* Right — static image */}
            <Reveal delay={120}>
              <Image
                src="/services/staff-augmentation.jpg"
                alt="Software team collaborating at a shared table with laptops and code on screen"
                width={700}
                height={525}
                priority
                className="w-full rounded-2xl object-cover shadow-[0_12px_32px_rgba(15,23,42,0.20)]"
              />
            </Reveal>
          </div>

          {/* Stats strip — full width below both columns */}
          <Reveal delay={80}>
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/15 bg-white/5 p-4"
                >
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ WHAT WE DO ══════════ */}
      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="What We Do"
              title="Two services. One operating philosophy."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {heroPillars.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 80}>
                <article className="premium-card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <pillar.Icon size={22} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-heading">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{pillar.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pillar.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-heading transition hover:bg-brandSoft"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHAT WE SOLVE ══════════ */}
      <section className="section-pad bg-black/[0.03]">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="Problems We Solve"
              title="Hiring is broken. So is most AI consulting."
              description="Two pain points. One firm built to fix both."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {solveCards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 70}>
                <article className="premium-card p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <card.Icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-heading">{card.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{card.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ DELIVERY MODEL ══════════ */}
      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionTitle eyebrow="Delivery Model" title="Sense → Reason → Orchestrate → Optimize" />
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 60}>
                <article className="enterprise-panel p-5">
                  <h3 className="text-base font-semibold text-heading">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{step.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WELCOME + VALUES (existing, unchanged) ══════════ */}
      <WelcomeSection />
      <ValuesSection />

      <CTABanner />
    </div>
  );
}
