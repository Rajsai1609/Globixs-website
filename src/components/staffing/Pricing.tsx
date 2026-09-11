import { BadgeCheck, DollarSign, FileText, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Item = { Icon: LucideIcon; title: string; description: string };

const items: Item[] = [
  {
    Icon: BadgeCheck,
    title: "90-day placement guarantee",
    description:
      "If a placed engineer leaves or isn't working out within 90 days, we replace them at no additional cost. Our incentive is a hire that sticks — same as yours.",
  },
  {
    Icon: DollarSign,
    title: "Pay only on success",
    description:
      "Permanent placements cost nothing until a candidate accepts your offer. No retainers, no setup fees, no invoices for searches that don't close.",
  },
  {
    Icon: FileText,
    title: "Terms you can plan around",
    description:
      "A clear MSA, simple payment terms, and the full fee structure shared on the first call — so the budget conversation happens before the search, not after.",
  },
];

export function Pricing() {
  return (
    <section className="section-pad section-alt">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="PRICING & ENGAGEMENT"
            title="Honest terms. Zero risk to start."
            description="Full pricing on the first call, in writing — and every placement backed by a guarantee."
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
