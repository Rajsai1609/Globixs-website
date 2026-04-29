import { Zap, Brain, BadgeCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Reason = { Icon: LucideIcon; title: string; description: string };

const reasons: Reason[] = [
  {
    Icon: Zap,
    title: "Speed legacy firms can't match",
    description:
      "First pre-vetted candidates in 7–10 days. AI-augmented sourcing finds and scores talent in hours, not weeks. Senior recruiters validate every shortlist before it reaches you.",
  },
  {
    Icon: Brain,
    title: "Real technical screening",
    description:
      "10-dimension AI scoring plus senior recruiter vetting catches what keyword-matching agencies miss. We ship engineers who can actually build what you're hiring them to build.",
  },
  {
    Icon: BadgeCheck,
    title: "Senior team, AI scale",
    description:
      "No junior gatekeepers or churn-and-burn account managers. Every Globixs engagement is run by senior recruiters with AI agents handling the heavy lifting — same depth, fraction of the cost.",
  },
];

export function WhyGlobixs() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Why Globixs"
            title="What you get with Globixs."
            description="Three things legacy IT staffing firms can't offer at our price."
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
                <p className="mt-2 text-sm leading-6 text-slate-600">{r.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
