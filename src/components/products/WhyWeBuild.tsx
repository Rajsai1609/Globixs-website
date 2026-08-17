import { BadgeCheck, Users, Lightbulb, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Card = { Icon: LucideIcon; title: string; description: string };

const cards: Card[] = [
  {
    Icon: BadgeCheck,
    title: "Real proof, not slide decks",
    description:
      "Most consulting firms talk about AI. We ship it — to paying customers. When we tell you we can build production multi-agent systems, you can verify it on a live URL.",
  },
  {
    Icon: Users,
    title: "Senior teams sharpened by real work",
    description:
      "Our placed engineers and consultants spend part of their time on Globixs projects. They keep their skills sharp on real systems — which means stronger work for our staffing clients too.",
  },
  {
    Icon: Lightbulb,
    title: "Vertical playbooks at our fingertips",
    description:
      "When a restaurant or brokerage hires us for consulting, we already have a playbook from Resto or Realty. We don't start from zero — we start from production-tested patterns.",
  },
];

export function WhyWeBuild() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Why This Matters"
            title="Why a staffing firm builds AI products."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 80}>
              <article className="premium-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <card.Icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-heading">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
