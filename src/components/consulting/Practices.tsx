import { Brain, Workflow, Target, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Practice = {
  Icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

const practices: Practice[] = [
  {
    Icon: Brain,
    title: "AI Strategy & Opportunity Discovery",
    description:
      "We map your operations, identify the workflows where AI moves the most value, and prioritize them by ROI and feasibility. You leave with a ranked roadmap your team can actually execute — not a 200-slide deck.",
    bullets: [
      "2-week diagnostic across 5–8 core workflows",
      "Opportunity ranking by ROI, time-to-value, and risk",
      "Build-vs-buy recommendation per opportunity",
    ],
  },
  {
    Icon: Workflow,
    title: "Automation & Multi-Agent Architecture",
    description:
      "Once we know what to build, we design the architecture — single agents, multi-agent orchestrations, RAG pipelines, integrations into your existing stack. We hand off production-ready specs your team or ours can implement.",
    bullets: [
      "System architecture diagrams and data-flow specs",
      "Vendor and tooling shortlist (open-source vs commercial)",
      "Implementation roadmap with success metrics",
    ],
  },
  {
    Icon: Target,
    title: "Implementation & Optimization",
    description:
      "Globixs ships the systems we recommend — or partners with your team to ship them. Every deployment ships with monitoring, KPI dashboards, and a 90-day optimization sprint to tune the system against real-world data.",
    bullets: [
      "Senior engineers embedded with your team",
      "Production deployment, monitoring, and CI/CD setup",
      "90-day post-launch tuning and KPI review",
    ],
  },
];

export function Practices() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Our Practices"
            title="Three consulting practices, one operating philosophy."
            description="Senior humans, AI agents, and a delivery model built around your KPIs — not our hourly rate."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {practices.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 80}>
              <article className="premium-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <p.Icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-heading">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground">{p.description}</p>
                <ul className="mt-4 space-y-2">
                  {p.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-xs text-foreground">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
