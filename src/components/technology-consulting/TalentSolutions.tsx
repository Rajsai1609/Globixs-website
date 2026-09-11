import Link from "next/link";
import {
  Users,
  Cloud,
  Database,
  Brain,
  BarChart3,
  Server,
  Code2,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { BulletItem, StepBadge } from "@/components/brochure";
import { BOOKING_URL } from "@/lib/site-config";

/* (b) Talent Solutions — the former /staffing page folded into one section:
   roles, engagement models, process and terms. */

type Role = { Icon: LucideIcon; title: string };

const roles: Role[] = [
  { Icon: Cloud, title: "Cloud Engineers" },
  { Icon: Database, title: "Data Engineers" },
  { Icon: Brain, title: "ML / AI Engineers" },
  { Icon: BarChart3, title: "Data Scientists" },
  { Icon: Server, title: "DevOps / SRE" },
  { Icon: Code2, title: "Full-Stack Engineers" },
  { Icon: ShieldCheck, title: "Cybersecurity" },
  { Icon: Smartphone, title: "Mobile Engineers" },
];

const models = [
  { title: "Contract Staffing", desc: "Short- and long-term IT placements across cloud, data, AI, and software delivery." },
  { title: "Permanent Placement", desc: "Direct-hire support with AI-assisted technical and culture-fit assessment." },
  { title: "Contract-to-Hire", desc: "A structured path from contract engagement to full-time offer, so hiring risk stays low." },
  { title: "OPT / H-1B Staffing", desc: "Placement support for international talent with compliance-first workflows." },
];

const process = [
  { step: "1", title: "Intake & calibration", desc: "We agree the role, the must-haves and what a strong first submission looks like." },
  { step: "2", title: "AI-powered sourcing", desc: "Our own sourcing stack searches beyond job boards and ranks candidates against the brief." },
  { step: "3", title: "10-dimension screening", desc: "Every candidate is scored on technical work, not keywords." },
  { step: "4", title: "Senior recruiter vetting", desc: "A recruiter validates each shortlist before you see a resume." },
  { step: "5", title: "Shortlist & placement support", desc: "Interviews, offer negotiation and onboarding, with a guarantee on every placement." },
];

const terms = [
  "First candidates in 7–10 business days.",
  "Full pricing in writing on the first call; you pay only on a successful placement.",
  "A 90-day placement guarantee on every hire.",
];

export function TalentSolutions() {
  return (
    <section id="talent" className="section-pad section-alt scroll-mt-28" aria-labelledby="talent-title">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">(02) Technology Consulting</p>
          <div className="mt-4 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
              <Users size={24} className="text-accent" aria-hidden="true" />
            </div>
            <h2 id="talent-title" className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              Talent Solutions
            </h2>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-7 text-foreground sm:text-lg">
            Contract and full-time technical hires for companies that know what good looks like
            and don&apos;t want to wait a month to see it. Sourcing, screening and matching run on
            our own AI stack; senior recruiters validate every candidate before you see a resume.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Roles + engagement models — 3/5 */}
          <Reveal className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-heading">
              Roles we fill
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {roles.map((role) => (
                <li key={role.title} className="premium-card flex items-center gap-2.5 p-3">
                  <role.Icon size={18} className="shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-sm font-semibold text-heading">{role.title}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.14em] text-heading">
              Engagement models
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {models.map((model) => (
                <article key={model.title} className="premium-card p-5">
                  <h4 className="text-base font-semibold text-heading">{model.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-foreground">{model.desc}</p>
                </article>
              ))}
            </div>
          </Reveal>

          {/* Process + terms + CTA — 2/5 */}
          <Reveal delay={100} className="lg:col-span-2">
            <aside className="tint-panel flex h-full flex-col p-7 lg:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-heading">
                How it works
              </h3>
              <ol className="mt-4 space-y-4">
                {process.map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <StepBadge n={item.step} className="!h-9 !w-9 text-sm" />
                    <div>
                      <p className="text-sm font-bold text-heading">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-heading">
                Terms
              </h3>
              <ul className="mt-3 flex-1 space-y-2">
                {terms.map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={BOOKING_URL} className="btn-primary">
                  Book a consultation
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Send a job description
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
