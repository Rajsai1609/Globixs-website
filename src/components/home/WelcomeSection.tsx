import Image from "next/image";
import { GraduationCap, Zap, Rocket } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const pillars = [
  {
    Icon: GraduationCap,
    title: "Train",
    description:
      "Production AI engineering curriculum for US grads. Consultation-first admissions, mentored projects, placement-track.",
  },
  {
    Icon: Zap,
    title: "Place",
    description:
      "Pre-vetted AI engineers in 7–10 days. AI-driven sourcing, semantic matching, predictive fit scoring.",
  },
  {
    Icon: Rocket,
    title: "Build",
    description:
      "B2B AI products shipped to real customers — proof of what our trained-and-placed engineers deliver.",
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
              We&apos;re a Seattle-based firm with three coordinated pillars: Globixs Academy trains US graduates in production AI engineering, our staffing arm places them with enterprise and mid-market teams that need AI systems without the cost of a full in-house bench, and our products group ships B2B AI software built by the same engineers between client engagements. Senior consultants and mentors run the work; AI agents handle the scale.
            </p>
            <p className="mt-7 text-base font-semibold text-heading">
              The three pillars we run:
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-3">
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
