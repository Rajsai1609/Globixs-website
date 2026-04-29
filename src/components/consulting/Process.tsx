import { Search, Brain, Workflow, TrendingUp, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Step = { num: string; Icon: LucideIcon; title: string; description: string };

const steps: Step[] = [
  {
    num: "1",
    Icon: Search,
    title: "SENSE",
    description:
      "We diagnose your operations, talk to your team, and map the workflows where AI moves the most value. Output: a prioritized opportunity roadmap.",
  },
  {
    num: "2",
    Icon: Brain,
    title: "REASON",
    description:
      "We design the system architecture — agents, integrations, data flows, KPIs. Output: production-ready specs and a build-vs-buy recommendation.",
  },
  {
    num: "3",
    Icon: Workflow,
    title: "ORCHESTRATE",
    description:
      "We ship the system — or partner with your team to ship it. Output: deployed AI agents tied to your existing stack and tracking real KPIs.",
  },
  {
    num: "4",
    Icon: TrendingUp,
    title: "OPTIMIZE",
    description:
      "Every deployment includes a 90-day post-launch tuning sprint. Output: sharpened systems, documented playbooks, and KPI lift you can show your board.",
  },
];

export function Process() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Our Process"
            title="Sense → Reason → Orchestrate → Optimize."
            description="Every Globixs engagement runs the same loop. Senior humans and AI agents working together, KPIs tracked from day one."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 60}>
              <article className="enterprise-panel p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {step.num}
                  </span>
                  <step.Icon size={18} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-heading">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
