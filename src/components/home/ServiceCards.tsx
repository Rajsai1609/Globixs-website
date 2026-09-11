import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import {
  AUTOMATION_SERVICES,
  GROWTH_SERVICES,
  serviceHref,
  type ServiceEntry,
} from "@/lib/services-catalog";

type CardProps = {
  service: ServiceEntry;
  /** Two-digit ordinal shown in the corner, e.g. "01". */
  index: number;
  /** Second-row cards are wider, so they carry a slightly larger heading. */
  emphasis?: boolean;
};

function ServiceCard({ service, index, emphasis = false }: CardProps) {
  const href = serviceHref(service.id);
  return (
    <article className="brochure-card flex h-full flex-col p-7 lg:p-8">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
          <service.Icon size={22} className="text-accent" aria-hidden="true" />
        </div>
        <p className="font-mono text-sm tracking-[0.1em] text-brand">
          ({String(index).padStart(2, "0")})
        </p>
      </div>
      <h3
        className={`mt-5 font-bold text-heading ${emphasis ? "text-2xl lg:text-3xl" : "text-xl"}`}
      >
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-base leading-7 text-foreground">{service.blurb}</p>
      <div className="mt-6">
        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
        >
          Learn more →
        </Link>
      </div>
    </article>
  );
}

export function ServiceCards() {
  return (
    <section id="services" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="WHAT WE DO"
            title="AI and automation services, built for your business and run for you."
            description="Start with the system costing you the most today — missed calls, manual admin, disconnected tools, numbers you can't see — or let us run the whole stack. Every engagement ships on your tools and comes with someone accountable for keeping it working."
          />
        </Reveal>

        {/* Row 1 — six AI & automation services */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AUTOMATION_SERVICES.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 70}>
              <ServiceCard service={service} index={idx + 1} />
            </Reveal>
          ))}
        </div>

        {/* Row 2 — Digital Marketing and Technology Consulting */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {GROWTH_SERVICES.map((service, idx) => (
            <Reveal key={service.id} delay={(AUTOMATION_SERVICES.length + idx) * 70}>
              <ServiceCard
                service={service}
                index={AUTOMATION_SERVICES.length + idx + 1}
                emphasis
              />
            </Reveal>
          ))}
        </div>

        {/* Secondary offerings — kept visible but clearly subordinate. */}
        <Reveal delay={600}>
          <div className="mt-10 flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-foreground">
              <span className="font-semibold text-heading">Also from Globixs:</span> IT staffing
              for companies that need engineers, and job marketing for candidates ready to move.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/staffing" className="text-heading hover:text-brand">
                IT Staffing →
              </Link>
              <Link href="/for-employees" className="text-heading hover:text-brand">
                Job Marketing →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
