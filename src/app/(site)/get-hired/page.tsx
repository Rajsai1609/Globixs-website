import type { Metadata } from "next";
import Link from "next/link";
import {
  DollarSign,
  Users,
  Globe,
  Sparkles,
  TrendingUp,
  Award,
  FileText,
  MessageCircle,
  Wand2,
  Target,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { GetHiredFAQ } from "@/components/get-hired/faq-accordion";
import { GetHiredForm } from "@/components/forms/get-hired-form";

export const metadata: Metadata = {
  title: "Get Hired | Land Your Next US Tech Role",
  description:
    "Free recruiter-led placement for engineers, data scientists, and IT professionals across the US. F-1, OPT, STEM OPT, H1B, green card, and US citizens — $0 cost to candidates, always.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

type Card = { Icon: LucideIcon; title: string; description: string };

const whoWeHelp: Card[] = [
  {
    Icon: Sparkles,
    title: "Entry-level & New Graduates",
    description:
      "F-1 students on OPT, STEM OPT extensions, and recent grads looking for their first US tech role. We focus on companies with strong sponsorship histories and new-grad-friendly programs.",
  },
  {
    Icon: TrendingUp,
    title: "Mid-level Professionals (3–7 years)",
    description:
      "Engineers, data scientists, and analysts ready for the next step. We match you to roles where your specific stack and domain experience are exactly what the team is hiring for.",
  },
  {
    Icon: Award,
    title: "Senior & Staff-level (8+ years)",
    description:
      "Senior ICs, tech leads, and architects looking for high-impact roles at companies that respect senior judgment. We handle confidential searches and direct-hire negotiations.",
  },
];

type TimelineStep = { Icon: LucideIcon; title: string; description: string };

const howItWorks: TimelineStep[] = [
  {
    Icon: FileText,
    title: "Submit your resume (5 minutes)",
    description:
      "Send us your resume and a quick note about what you're looking for — role type, target salary, location, visa status. We respond within 48 hours with an honest assessment of where you fit.",
  },
  {
    Icon: MessageCircle,
    title: "Intake call with a recruiter (30 minutes)",
    description:
      "If we think we can place you, we schedule a call. We'll go deep on your skills, target companies, and walk you through which open roles you'd be competitive for right now.",
  },
  {
    Icon: Wand2,
    title: "Resume optimization & profile prep",
    description:
      "Our team rewrites your resume for ATS keywords and clarity, and coaches you on LinkedIn positioning, GitHub presence, and answers for the questions you'll get in screens.",
  },
  {
    Icon: Target,
    title: "Submission to matched roles",
    description:
      "We submit your profile directly to hiring managers at companies actively interviewing — not job-board black holes. You see every submission, and you approve every one before it goes out.",
  },
  {
    Icon: Users,
    title: "Interview prep at every stage",
    description:
      "Recruiter screen prep, technical interview prep, system-design walkthroughs, and behavioral coaching. We work the process with you all the way to the offer.",
  },
  {
    Icon: CheckCircle,
    title: "Offer negotiation & placement",
    description:
      "When the offer comes, we help you negotiate base, equity, sign-on, and start date. Our recruiters know what each company actually pays — not what they post on the JD.",
  },
];

type Cell = { good: boolean; text: string };
type CompRow = { category: string; jobBoards: Cell; paidServices: Cell; globixs: Cell };

const comparisonRows: CompRow[] = [
  {
    category: "Cost to candidate",
    jobBoards:    { good: true,  text: "Free" },
    paidServices: { good: false, text: "$2,000–$10,000+ upfront" },
    globixs:      { good: true,  text: "Free, always" },
  },
  {
    category: "Resume help",
    jobBoards:    { good: false, text: "None" },
    paidServices: { good: false, text: "Templated, generic" },
    globixs:      { good: true,  text: "Personalized rewrite by recruiters" },
  },
  {
    category: "Interview prep",
    jobBoards:    { good: false, text: "None" },
    paidServices: { good: false, text: "Group sessions, generic" },
    globixs:      { good: true,  text: "1-on-1 with recruiters who know the company" },
  },
  {
    category: "Submission method",
    jobBoards:    { good: false, text: "Apply yourself, hope someone reads it" },
    paidServices: { good: false, text: "Same job-board approach" },
    globixs:      { good: true,  text: "Direct to hiring manager via our network" },
  },
  {
    category: "Salary negotiation",
    jobBoards:    { good: false, text: "You're on your own" },
    paidServices: { good: false, text: "Sometimes, with extra fee" },
    globixs:      { good: true,  text: "Always included, free" },
  },
  {
    category: "Refund / risk",
    jobBoards:    { good: false, text: "N/A" },
    paidServices: { good: false, text: "Often non-refundable" },
    globixs:      { good: true,  text: "No money at risk — ever" },
  },
];

const placementStats = [
  { value: "50+",        label: "Total placements to date" },
  { value: "All levels", label: "Entry-level to staff engineer" },
  { value: "All visas",  label: "F-1, OPT, STEM OPT, H1B, GC, US" },
  { value: "$0",         label: "Cost to every candidate placed" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function TableCell({ good, text }: Cell) {
  return (
    <span className="flex items-start gap-1.5">
      <span
        className={`mt-px shrink-0 font-bold ${good ? "text-emerald-500" : "text-white/70"}`}
        aria-hidden="true"
      >
        {good ? "✓" : "✗"}
      </span>
      <span>{text}</span>
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GetHiredPage() {
  return (
    <div>
      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="hero-mesh py-20 text-white sm:py-28">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow-on-dark">
              Free for Candidates · Employers Pay Us
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Land your next US tech role — without paying a dollar.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Globixs has placed 50+ engineers, analysts, and data scientists into full-time and
              contract roles across the US — F-1 students, OPT/STEM OPT, H1B holders, green card
              holders, and US citizens. Our recruiters are paid by the companies hiring you, so you
              pay nothing, ever. No upfront fees, no hidden charges, no bootcamp scams.
            </p>
            <div className="mt-8">
              <Link href="#talk-to-recruiter" className="btn-primary">
                Submit Your Resume
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <DollarSign size={15} className="text-brand" aria-hidden="true" />
                $0 candidate fees, ever
              </span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-2">
                <Users size={15} className="text-brand" aria-hidden="true" />
                50+ placements across the US
              </span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-2">
                <Globe size={15} className="text-brand" aria-hidden="true" />
                All visa statuses welcome
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════ WHO WE HELP ══════════════════════════ */}
      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="Who We Place"
              title="We help technical talent at every level."
              description="Whether you're three months from graduation or have a decade of senior experience, we work with candidates across the spectrum."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whoWeHelp.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 80}>
                <article className="premium-card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <card.Icon size={22} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-heading">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground">{card.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ HOW IT WORKS ══════════════════════════ */}
      <section className="section-pad bg-surface">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="Our Process"
              title="From resume to offer in 4–8 weeks."
              description="A real process, not vague promises. Here's exactly what happens after you submit your resume."
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl">
            {howItWorks.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 60}>
                <div className="flex gap-6 pb-10 last:pb-0">
                  {/* Circle + connector line */}
                  <div className="flex flex-col items-center">
                    <div className="step-badge h-10 w-10 text-sm">
                      {idx + 1}
                    </div>
                    {idx < howItWorks.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-border" style={{ minHeight: "1.5rem" }} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-2 pt-1.5">
                    <div className="flex items-center gap-2.5">
                      <step.Icon size={18} className="shrink-0 text-accent" aria-hidden="true" />
                      <h3 className="text-base font-semibold text-heading">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-foreground">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ COMPARISON TABLE ══════════════════════════ */}
      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="Why We're Different"
              title="Job boards, bootcamps, and us."
              description="Most job-search options either give you nothing for free or take thousands of dollars upfront. Here's how Globixs compares."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                      Category
                    </th>
                    <th className="px-5 py-4 text-left font-semibold text-heading">
                      Job Boards
                      <span className="ml-1.5 text-xs font-normal text-muted">(LinkedIn, Indeed)</span>
                    </th>
                    <th className="px-5 py-4 text-left font-semibold text-heading">
                      Paid Career Services
                      <span className="block text-xs font-normal text-muted">Bootcamps &amp; coaches</span>
                    </th>
                    <th className="border-l-2 border-accent bg-accent/5 px-5 py-4 text-left font-semibold text-accent">
                      Globixs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={row.category}
                      className={`border-b border-border last:border-0 ${
                        idx % 2 === 1 ? "bg-black/[0.025]" : "bg-white"
                      }`}
                    >
                      <td className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-muted">
                        {row.category}
                      </td>
                      <td className="px-5 py-4 text-foreground">
                        <TableCell {...row.jobBoards} />
                      </td>
                      <td className="px-5 py-4 text-foreground">
                        <TableCell {...row.paidServices} />
                      </td>
                      <td className="border-l-2 border-accent bg-accent/5 px-5 py-4 font-medium text-foreground">
                        <TableCell {...row.globixs} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════ WHAT WE'VE PLACED ══════════════════════════ */}
      <section className="section-pad bg-surface">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="Real Outcomes"
              title="50+ placements across the US tech market."
              description="Real candidates, real offers. Here's what our placement mix looks like."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {placementStats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 70}>
                <div className="enterprise-panel p-6 text-center">
                  <p className="text-3xl font-bold text-heading">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="mt-8 max-w-3xl text-base leading-7 text-foreground">
              Our placements span cloud engineering, data engineering, AI/ML, full-stack development,
              DevOps, and cybersecurity roles — at startups, mid-market companies, and Fortune 500
              enterprises across the US. We don&apos;t share specific candidate or company names
              without permission, but we&apos;re happy to walk you through anonymized case studies on
              a call.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════ FAQ ══════════════════════════ */}
      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="Questions People Ask"
              title="What's the catch?"
              description="Honest answers to the questions every job seeker is thinking but doesn't always ask."
            />
          </Reveal>
          <div className="mt-10 max-w-3xl">
            <GetHiredFAQ />
          </div>
        </div>
      </section>

      {/* ══════════════════════════ CONTACT FORM ══════════════════════════ */}
      <section id="talk-to-recruiter" className="section-pad bg-brandSoft">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">
              Ready to Start?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              Talk to a Globixs recruiter.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Send us your resume and a quick note about what you&apos;re looking for. We respond
              within 48 hours with an honest assessment — even if it&apos;s &ldquo;we&apos;re not the
              right fit right now.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-2xl">
            <GetHiredForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
