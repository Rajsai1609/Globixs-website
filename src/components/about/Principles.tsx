import { Zap, BadgeCheck, Target, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Principle = { Icon: LucideIcon; title: string; description: string };

const principles: Principle[] = [
  {
    Icon: Zap,
    title: "Speed over ceremony",
    description:
      "First IT candidates in 7–10 days. AI systems shipped in 2–8 week sprints. We don't believe hiring or consulting should take months.",
  },
  {
    Icon: BadgeCheck,
    title: "Senior people, AI scale",
    description:
      "Senior recruiters and consultants do the work. AI agents handle scale, sourcing, and analysis. No junior gatekeepers.",
  },
  {
    Icon: Target,
    title: "Outcomes, not hours",
    description:
      "Every engagement ties to measurable business KPIs — time-to-hire, automation throughput, dollars saved. We don't sell hours.",
  },
];

export function Principles() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Our Principles"
            title="What we stand for."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 80}>
              <article className="premium-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <p.Icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-heading">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
