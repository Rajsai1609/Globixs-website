import { Users, Lightbulb } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

const services = [
  {
    Icon: Users,
    title: "IT Staffing & Recruiting",
    description:
      "We place pre-vetted IT engineers, data scientists, ML/AI talent, and DevOps specialists into contract, contract-to-hire, and full-time roles across the US tech market.",
  },
  {
    Icon: Lightbulb,
    title: "Business Consulting Services",
    description:
      "AI strategy, automation advisory, and technology consulting for enterprise and growth-stage teams — delivered in 2-to-8-week sprints with KPIs tracked from day one.",
  },
];

export function WhatWeDo() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="What We Do"
            title="Two service lines, one philosophy."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 80}>
              <article className="premium-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <s.Icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-heading">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
