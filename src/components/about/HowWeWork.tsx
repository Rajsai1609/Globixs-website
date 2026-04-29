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
      "We map your hiring or operations workflows to find the highest-impact opportunities.",
  },
  {
    num: "2",
    Icon: Brain,
    title: "REASON",
    description: "Our AI agents learn your criteria, business rules, and goals.",
  },
  {
    num: "3",
    Icon: Workflow,
    title: "ORCHESTRATE",
    description:
      "AI and human teams execute sourcing, screening, building, or shipping — together.",
  },
  {
    num: "4",
    Icon: TrendingUp,
    title: "OPTIMIZE",
    description:
      "We measure outcomes and tune the system continuously against your KPIs.",
  },
];

export function HowWeWork() {
  return (
    <section className="section-pad bg-black/[0.03]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Our Approach"
            title="Sense → Reason → Orchestrate → Optimize."
            description="Every Globixs engagement runs the same loop. AI agents and senior humans working together — fast, measurable, and tied to outcomes that matter to your business."
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
