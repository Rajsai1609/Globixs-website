import { Reveal } from "@/components/animations/reveal";
import { BulletItem } from "@/components/brochure";
import { BOOKING_URL } from "@/lib/booking";
import { SERVICES, type ServiceEntry } from "@/lib/services-catalog";

const ROW_LABEL: Record<ServiceEntry["row"], string> = {
  automation: "AI & Automation",
  growth: "Growth & Strategy",
};

type SectionProps = {
  service: ServiceEntry;
  index: number;
  alt: boolean;
};

function ServiceSection({ service, index, alt }: SectionProps) {
  const ordinal = String(index).padStart(2, "0");
  return (
    <section
      id={service.id}
      /* scroll-mt clears the sticky header when arriving via #anchor. */
      className={`section-pad scroll-mt-28 ${alt ? "section-alt" : ""}`}
      aria-labelledby={`${service.id}-title`}
    >
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">

          {/* What we do — 3/5 */}
          <Reveal className="lg:col-span-3">
            <p className="eyebrow">
              ({ordinal}) {ROW_LABEL[service.row]}
            </p>
            <div className="mt-4 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <service.Icon size={24} className="text-accent" aria-hidden="true" />
              </div>
              <h2
                id={`${service.id}-title`}
                className="text-3xl font-bold tracking-tight text-heading sm:text-4xl"
              >
                {service.title}
              </h2>
            </div>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">
              {service.blurb}
            </p>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-heading">
              What we do
            </h3>
            <ul className="mt-4 space-y-3">
              {service.whatWeDo.map((item) => (
                <BulletItem key={item}>{item}</BulletItem>
              ))}
            </ul>
          </Reveal>

          {/* Who it's for + CTA — 2/5 */}
          <Reveal delay={100} className="lg:col-span-2">
            <aside className="tint-panel flex h-full flex-col p-7 lg:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-heading">
                Who it&apos;s for
              </h3>
              <p className="mt-3 flex-1 text-base leading-7 text-foreground">
                {service.whoItsFor}
              </p>
              <div className="mt-8">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  Talk to us
                </a>
                <p className="mt-3 text-xs leading-5 text-muted">
                  30-minute call. We&apos;ll tell you whether this is the right fix and what it
                  would take.
                </p>
              </div>
            </aside>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

export function ServiceSections() {
  return (
    <>
      {SERVICES.map((service, idx) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={idx + 1}
          alt={idx % 2 === 1}
        />
      ))}
    </>
  );
}
