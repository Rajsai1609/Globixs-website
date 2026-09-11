import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { BulletItem } from "@/components/brochure";
import { BOOKING_URL } from "@/lib/booking";

type Props = {
  /** Section anchor — matches the catalog id. */
  id: string;
  /** e.g. "(02) AI Services" */
  eyebrow: string;
  title: string;
  Icon: LucideIcon;
  /** 2–3 sentence description. */
  description: string;
  /** Three outcome bullets. */
  outcomes: readonly string[];
  /** Alternate background so consecutive sections read as separate bands. */
  alt?: boolean;
  /** Override the CTA target; defaults to the booking link. */
  ctaHref?: string;
  ctaLabel?: string;
};

/**
 * The one section pattern shared by /ai-services, /digital-marketing and the
 * consulting page: heading, short description, three outcomes, and a
 * "Book a consultation" CTA. Keeps every service page on the same rhythm.
 */
export function ServiceSection({
  id,
  eyebrow,
  title,
  Icon,
  description,
  outcomes,
  alt = false,
  ctaHref = BOOKING_URL,
  ctaLabel = "Book a consultation",
}: Props) {
  const isExternal = ctaHref.startsWith("http");
  return (
    <section
      id={id}
      /* scroll-mt clears the sticky header when arriving via #anchor. */
      className={`section-pad scroll-mt-28 ${alt ? "section-alt" : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow">{eyebrow}</p>
            <div className="mt-4 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <Icon size={24} className="text-accent" aria-hidden="true" />
              </div>
              <h2
                id={`${id}-title`}
                className="text-3xl font-bold tracking-tight text-heading sm:text-4xl"
              >
                {title}
              </h2>
            </div>
            <p className="mt-5 max-w-3xl text-base leading-7 text-foreground sm:text-lg">
              {description}
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <aside className="tint-panel flex h-full flex-col p-7 lg:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-heading">
                What you get
              </h3>
              <ul className="mt-4 flex-1 space-y-3">
                {outcomes.map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={ctaHref}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="btn-primary w-full sm:w-auto"
                >
                  {ctaLabel}
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
