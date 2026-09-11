import type { ReactNode } from "react";
import { Reveal } from "@/components/animations/reveal";
import { BOOKING_URL } from "@/lib/booking";

type JumpLink = { href: string; label: string };

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  /** Optional second CTA rendered next to "Book a consultation". */
  secondary?: { href: string; label: string };
  /** Anchor pills for the sections below. */
  jumpLinks?: readonly JumpLink[];
  children?: ReactNode;
};

/** Dark mesh page hero shared by the three service pages. */
export function PageHero({ eyebrow, title, description, secondary, jumpLinks, children }: Props) {
  return (
    <section className="hero-mesh py-20 text-white sm:py-28">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow-on-dark">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">{description}</p>
          {children}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a consultation
            </a>
            {secondary ? (
              <a href={secondary.href} className="btn-on-dark">
                {secondary.label}
              </a>
            ) : null}
          </div>

          {jumpLinks && jumpLinks.length > 0 ? (
            <nav aria-label="Page sections" className="mt-10">
              <ul className="flex flex-wrap justify-center gap-2">
                {jumpLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex items-center rounded-full border border-white/25 px-3.5 py-1.5 text-xs font-semibold text-white/80 transition hover:border-white hover:bg-white hover:text-heading"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
