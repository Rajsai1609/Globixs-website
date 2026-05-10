import { Rocket, Building2, Users, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type ClientCard = { Icon: LucideIcon; title: string; description: string };

const clients: ClientCard[] = [
  {
    Icon: Rocket,
    title: "Growth-stage Startups",
    description:
      "Series A–C companies adopting AI as a force multiplier — to scale operations, automate customer ops, or build AI-native product features.",
  },
  {
    Icon: Building2,
    title: "Mid-Market Operators",
    description:
      "$10M–$200M revenue companies in services, healthcare, real estate, and finance who need AI to handle workflow bottlenecks their team doesn't have time for.",
  },
  {
    Icon: Users,
    title: "Enterprise IT Teams",
    description:
      "IT and engineering leaders at large enterprises who need AI systems built fast — without spinning up a new vendor relationship for every workstream.",
  },
];

export function Clients() {
  return (
    <section className="section-pad bg-black/[0.03]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Our Clients"
            title="Built for enterprise teams moving at startup speed."
            description="We work best with teams who want speed, specificity, and outcomes tied to KPIs — not 12-month engagements that disappear into PowerPoint."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {clients.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 80}>
              <article className="premium-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <card.Icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-heading">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
