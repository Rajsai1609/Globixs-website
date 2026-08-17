import { Rocket, Building2, Layers, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Client = { Icon: LucideIcon; title: string; description: string };

const clients: Client[] = [
  {
    Icon: Rocket,
    title: "Growth-Stage Startups",
    description:
      "Series A–C teams hiring their first senior engineers or scaling AI/ML and cloud infrastructure before the next round. You get senior-agency depth without senior-agency invoices.",
  },
  {
    Icon: Building2,
    title: "Mid-Market Companies",
    description:
      "SaaS, fintech, healthtech, and proptech companies that need senior IT talent on demand — without standing up an internal recruiting team to get it.",
  },
  {
    Icon: Layers,
    title: "AI-First Operators",
    description:
      "Teams building ML platforms, deploying agentic systems, or modernizing data infrastructure. We speak the stack because we build on it ourselves.",
  },
];

export function Clients() {
  return (
    <section className="section-pad section-alt">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="WHO WE WORK WITH"
            title="Built for teams that hire on technical fit, not paperwork."
            description="We work best with hiring managers who know exactly what good looks like — and don't want to wait a month to see it."
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
