import { Shield, Repeat, TrendingUp, RotateCw } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type AdvantageCard = {
  Icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: "true" }>;
  title: string;
  desc: string;
};

const cards: AdvantageCard[] = [
  {
    Icon: Shield,
    title: "Defensible moat",
    desc: "Most staffing firms can't credibly claim AI services. We can. We staff the engineers who build AI systems, and we build AI systems ourselves — so our AI-powered staffing pipeline is a working demo of what we sell.",
  },
  {
    Icon: Repeat,
    title: "Cross-sell engine",
    desc: "Our staffing clients are the exact buyers for AI services. When a Fortune 500 already trusts us to place their AI engineers, the next conversation is naturally about the AI systems those engineers will build.",
  },
  {
    Icon: TrendingUp,
    title: "Higher-margin services",
    desc: "Staffing is the relationship. AI services are the expansion. We bring both under one AI-native roof — so enterprises consolidate vendors, not multiply them.",
  },
  {
    Icon: RotateCw,
    title: "Talent flywheel",
    desc: "The AI engineers we place into client teams become candidates for our own AI service projects. Every placement makes our delivery bench stronger. Every project sharpens our screening pipeline.",
  },
];

export function StrategicAdvantages() {
  return (
    <section className="section-pad bg-black/[0.03]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="STRATEGIC ADVANTAGES"
            title="Why two offerings beat one"
            description="One firm. One AI-native operating system. Both sides reinforce each other."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
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
