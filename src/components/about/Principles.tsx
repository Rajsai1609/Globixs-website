import { Wrench, Users, FileCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Principle = { Icon: LucideIcon; title: string; description: string };

const principles: Principle[] = [
  {
    Icon: Wrench,
    title: "We build our own tools",
    description:
      "The scrapers, matching engines, and AI agents behind our services are built in-house. When we say AI-powered, we mean systems we engineered — not a subscription we resell.",
  },
  {
    Icon: Users,
    title: "Humans stay in the loop",
    description:
      "AI does the heavy lifting; people make the calls. Every candidate is vetted by a recruiter, every application reviewed by a human, every AI system supervised by our team.",
  },
  {
    Icon: FileCheck,
    title: "We prove our work",
    description:
      "Weekly reports for job seekers. Match-score write-ups for employers. Transparent monthly terms for AI services. If we can't show you the work, we don't expect you to pay for it.",
  },
];

export function Principles() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-shell">
        <Reveal>
          <SectionTitle eyebrow="WHY GLOBIXS" title="How we're different" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 80}>
              <article className="premium-card flex h-full flex-col p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <p.Icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-heading">{p.title}</h3>
                <p className="mt-2 text-base leading-7 text-foreground">{p.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
