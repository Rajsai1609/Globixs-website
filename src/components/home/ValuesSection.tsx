import { FiTarget, FiZap, FiLayers, FiTrendingUp } from "react-icons/fi";
import type { IconType } from "react-icons";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Value = {
  Icon: IconType;
  title: string;
  description: string;
};

const values: Value[] = [
  {
    Icon: FiTarget,
    title: "Client Focus",
    description:
      "At Globixs, we are committed to first understanding our clients' businesses, then solving the bottlenecks slowing them down.",
  },
  {
    Icon: FiZap,
    title: "Speed to Value",
    description:
      "AI-augmented sourcing and automation cut placement timelines and project ramp-up by up to 60% — because your hiring and delivery cycles can't wait.",
  },
  {
    Icon: FiLayers,
    title: "Domain Depth",
    description:
      "Specialized vertical playbooks across healthcare, real estate, sales, restaurants, and finance — not one-size-fits-all consulting.",
  },
  {
    Icon: FiTrendingUp,
    title: "Outcome Obsession",
    description:
      "We measure what matters: time-to-hire, candidate-role fit, automation throughput, dollars saved. Every system ships with metrics that prove it works.",
  },
];

export function ValuesSection() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Why Choose Globixs"
            title="Built on values that drive outcomes"
            description="Four principles guide every engagement — from the first discovery call to the AI systems we deploy in production."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 70}>
              <article className="premium-card flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <item.Icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
