import { FileText, Search, Filter, Users, CheckCircle, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Step = {
  num: string;
  day: string;
  Icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    num: "1",
    day: "Day 1",
    Icon: FileText,
    title: "Intake & calibration",
    description:
      "30-minute call with your hiring manager to align on must-haves, nice-to-haves, team context, and salary band. We leave the call knowing the role better than most agencies do at week 4.",
  },
  {
    num: "2",
    day: "Days 1–3",
    Icon: Search,
    title: "AI-powered sourcing",
    description:
      "Our AI agents continuously source from LinkedIn, GitHub, Stack Overflow, and our active candidate network. We surface candidates by actual technical signal — not just keyword overlap.",
  },
  {
    num: "3",
    day: "Days 3–6",
    Icon: Filter,
    title: "10-dimension screening",
    description:
      "Every candidate scored across 10 dimensions — technical depth, project relevance, seniority signals, culture markers, and more — using sentence-transformer embeddings and structured rubrics.",
  },
  {
    num: "4",
    day: "Days 6–9",
    Icon: Users,
    title: "Senior recruiter vetting",
    description:
      "Senior recruiters validate AI scores with live technical conversations. No junior gatekeepers, no missed signals, no candidates passed through without a human review.",
  },
  {
    num: "5",
    day: "Day 10+",
    Icon: CheckCircle,
    title: "Shortlist + placement support",
    description:
      "You receive 3–5 pre-vetted candidates with full match-score reports, technical write-ups, and visa status. We handle scheduling, offer coordination, and a 90-day placement guarantee.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-pad bg-surface">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Our Process"
            title="From job description to signed offer — in days, not months."
            description="Five steps. Senior recruiters and AI agents working together. Every candidate scored, validated, and approved by a human before you ever see a resume."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {steps.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 60}>
              <article className="enterprise-panel p-5">
                <div className="flex items-center gap-2">
                  <span className="step-badge h-8 w-8 text-sm">
                    {step.num}
                  </span>
                  <span className="text-xs font-semibold text-muted">{step.day}</span>
                </div>
                <step.Icon size={18} className="mt-3 text-accent" aria-hidden="true" />
                <h3 className="mt-2 text-sm font-bold text-heading">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-foreground">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
