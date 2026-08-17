import { XCircle } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

const items = [
  "Fortune 500 enterprise transformation programs — that's McKinsey's job, not ours.",
  "12-month retainers without milestones — we work in 2-to-8-week sprints with measurable outputs.",
  "AI hype without ROI — if we can't tie it to a real KPI, we won't sell it to you.",
];

export function NotFor() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Honest Positioning"
            title="What we won't do."
            description="Knowing what you're not for is as important as knowing what you are."
          />
        </Reveal>
        <Reveal delay={80} className="mt-10 max-w-2xl space-y-4">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <XCircle size={20} className="mt-0.5 shrink-0 text-white/60" aria-hidden="true" />
              <p className="text-base leading-7 text-foreground">{item}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
