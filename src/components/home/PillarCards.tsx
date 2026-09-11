import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { PILLARS } from "@/lib/services-catalog";

export function PillarCards() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="WHAT WE DO"
            title="Three ways we help businesses run leaner."
            description="Pick the one that matches the problem in front of you. Each is a full practice with its own team, and they work together when you need more than one."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar, idx) => (
            <Reveal key={pillar.href} delay={idx * 80}>
              <article className="brochure-card flex h-full flex-col p-8 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <pillar.Icon size={24} className="text-accent" aria-hidden="true" />
                </div>
                <p className="mt-5 font-mono text-sm tracking-[0.1em] text-brand">
                  ({String(idx + 1).padStart(2, "0")})
                </p>
                <h3 className="mt-2 text-2xl font-bold text-heading lg:text-3xl">{pillar.title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-foreground">{pillar.blurb}</p>
                <div className="mt-6">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                  >
                    {pillar.ctaLabel}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
