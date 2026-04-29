import Image from "next/image";
import { Zap, Rocket } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const pillars = [
  {
    Icon: Zap,
    title: "Faster Placements",
    description:
      "First pre-vetted IT candidates submitted in 7–10 days, with a 90-day placement guarantee. Most agencies take 3–4 weeks just to find the first qualified person.",
  },
  {
    Icon: Rocket,
    title: "Faster AI Delivery",
    description:
      "Production AI systems shipped in 2-to-8-week sprints with monitoring, KPI dashboards, and a 90-day post-launch tuning period. Most consulting firms hand off slide decks and disappear.",
  },
];

export function WelcomeSection() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              Welcome to Globixs
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              We&apos;re an AI-native staffing and consulting firm based in Seattle, built for one
              thing: helping companies hire and ship faster than legacy firms allow. We pre-vet IT
              engineers through a 10-dimension AI screening pipeline, so first submissions land in
              7–10 days — not 4 weeks. We design and ship AI automation systems in 2-to-8-week
              sprints — not 12-month retainers. Senior consultants and engineers do the work; AI
              agents handle the scale. No body shops, no junior staff, no PowerPoint deliverables.
            </p>
            <p className="mt-7 text-base font-semibold text-heading">
              The two things we promise:
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="premium-card p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <pillar.Icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-heading">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{pillar.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Image
              src="/services/it-consulting.jpg"
              alt="Globixs consulting team collaborating on AI strategy"
              width={600}
              height={450}
              className="w-full rounded-2xl object-cover shadow-[0_12px_32px_rgba(15,23,42,0.10)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
