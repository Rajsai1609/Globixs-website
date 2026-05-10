import { Bot, Brain, Code2, Database, GitBranch, Briefcase } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type CurriculumCard = {
  Icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: "true" }>;
  title: string;
  desc: string;
};

const cards: CurriculumCard[] = [
  {
    Icon: Bot,
    title: "Multi-agent systems",
    desc: "Build agents that plan, decide, and execute across tools. Architecture patterns, orchestration, error recovery, and the operational discipline to keep them running in production.",
  },
  {
    Icon: Brain,
    title: "LLM integration",
    desc: "Claude, GPT, open-source models. Prompt engineering, structured outputs, RAG architectures, evals — the techniques that ship enterprise-grade AI features.",
  },
  {
    Icon: Code2,
    title: "Production deployment",
    desc: "Take a working notebook to a system real users depend on. Vercel, Railway, Supabase, GitHub Actions, monitoring, and the on-call mindset.",
  },
  {
    Icon: Database,
    title: "Data + vector pipelines",
    desc: "Postgres, vector databases, ETL, semantic search. The data infrastructure modern AI applications run on.",
  },
  {
    Icon: GitBranch,
    title: "AI-native engineering practice",
    desc: "How to ship code with Claude Code, Cursor, and AI pair-programming as part of your daily workflow. The 10x leverage senior engineers already use.",
  },
  {
    Icon: Briefcase,
    title: "Client-ready engineering",
    desc: "Communication, delivery cadence, requirements discovery, scope negotiation. The skills that turn a strong engineer into someone enterprise teams want on their bench.",
  },
];

export function Curriculum() {
  return (
    <section className="section-pad bg-black/[0.03]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="THE CURRICULUM"
            title="Production AI engineering, not theory."
            description="Six modules of hands-on training. Every assignment ships. Every project has a code review. Every graduate leaves with a portfolio of real production work."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 80}>
              <article className="premium-card flex h-full flex-col gap-4 p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <card.Icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-heading">{card.title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">{card.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
