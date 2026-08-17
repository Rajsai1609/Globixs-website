import { BadgeCheck, DollarSign, FileText, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Item = { Icon: LucideIcon; title: string; description: string };

const items: Item[] = [
  {
    Icon: BadgeCheck,
    title: "90-day placement guarantee",
    description:
      "If a placed engineer leaves or doesn't work out within 90 days, we replace them at no additional cost.",
  },
  {
    Icon: DollarSign,
    title: "No upfront retainer",
    description:
      "Permanent placements are paid only when a candidate accepts an offer. No retainers, no setup fees, no risk to your hiring budget.",
  },
  {
    Icon: FileText,
    title: "Transparent terms",
    description:
      "Clear MSA, simple payment terms, no surprises. We share full fee structure on the first call so you can plan your budget with confidence.",
  },
];

export function Pricing() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Pricing & Engagement"
            title="Honest, transparent, no surprises."
            description="We share full pricing on our first call — and stand behind every placement with a 90-day guarantee."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 80}>
              <article className="premium-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <item.Icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
