import { Zap, Brain, BadgeCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Reason = { Icon: LucideIcon; title: string; description: string };

const reasons: Reason[] = [
  {
    Icon: Zap,
    title: "Speed that doesn't cut corners",
    description:
      "First pre-vetted candidates in 7–10 days. Our AI sourcing engines find and score talent in hours; senior recruiters validate every shortlist before it reaches your inbox. Fast and vetted — not fast or vetted.",
  },
  {
    Icon: Brain,
    title: "Screening that tests real work",
    description:
      "Every candidate is scored across 10 dimensions — technical depth, project relevance, seniority signals — then validated in a live technical conversation. Keyword-matching agencies pass resumes; we pass engineers who can build what you're hiring for.",
  },
  {
    Icon: BadgeCheck,
    title: "Our own AI stack, not a reseller's",
    description:
      "The sourcing, matching, and screening systems behind every search are engineered in-house. That's why we deliver senior-agency quality at a fraction of legacy pricing — the heavy lifting runs on software we built.",
  },
];

export function WhyGlobixs() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="WHY GLOBIXS"
            title="Three things legacy staffing firms can't offer at our price."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reasons.map((r, idx) => (
            <Reveal key={r.title} delay={idx * 80}>
              <article className="enterprise-panel p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <r.Icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-heading">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground">{r.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
