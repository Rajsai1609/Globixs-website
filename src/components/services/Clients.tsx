import { Rocket, Building2, Layers, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Client = { Icon: LucideIcon; title: string; description: string };

const clients: Client[] = [
  {
    Icon: Rocket,
    title: "Growth-Stage Startups",
    description:
      "Series A–C companies hiring their first senior engineers, scaling AI/ML teams, or building out cloud infrastructure ahead of their next funding round.",
  },
  {
    Icon: Building2,
    title: "Mid-Market Tech Companies",
    description:
      "$10M–$200M revenue companies in SaaS, fintech, healthtech, and proptech who need senior IT talent without the overhead of an internal recruiting team.",
  },
  {
    Icon: Layers,
    title: "AI-First Operators",
    description:
      "Companies adopting AI as a core capability — building ML platforms, deploying agentic systems, or modernizing data infrastructure for the AI era.",
  },
];

export function Clients() {
  return (
    <section className="section-pad section-alt">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Our Clients"
            title="Built for tech-forward companies, not procurement bureaucracy."
            description="We work best with hiring teams who care about technical fit and speed — not headcount checkboxes."
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
                <p className="mt-2 text-sm leading-6 text-foreground">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
