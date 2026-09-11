import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { AI_SERVICES, aiServiceHref } from "@/lib/services-catalog";

export function ServiceCards() {
  return (
    <section id="ai-services" className="section-pad section-alt">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="AI SERVICES"
            title="Six systems, built for your business and run for you."
            description="Start with the one costing you the most today — missed calls, manual admin, disconnected tools, numbers you can't see — or let us run the whole stack."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AI_SERVICES.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 70}>
              <article className="brochure-card flex h-full flex-col p-7 lg:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <service.Icon size={22} className="text-accent" aria-hidden="true" />
                  </div>
                  <p className="font-mono text-sm tracking-[0.1em] text-brand">
                    ({String(idx + 1).padStart(2, "0")})
                  </p>
                </div>
                <h3 className="mt-5 text-xl font-bold text-heading">{service.title}</h3>
                <p className="mt-3 flex-1 text-base leading-7 text-foreground">{service.blurb}</p>
                <div className="mt-6">
                  <Link
                    href={aiServiceHref(service.id)}
                    className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                  >
                    Learn more →
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
