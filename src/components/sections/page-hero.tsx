import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/animations/reveal";

/**
 * The one hero used on every top-level page (home, /ai-services,
 * /digital-marketing, /technology-consulting, /about, /contact).
 *
 * Type spec (reference: final_.png):
 *  - dark slate band + 32px pixel grid at 4.5% (.hero-mesh .hero-grid)
 *  - eyebrow: uppercase 13px / 600 / 0.12em, #F2A5A8
 *  - headline: Poppins 600, clamp(40px, 5.6vw, 68px), line-height 1.02,
 *    -0.02em, white, each line ending in a #C8262C full stop; lines are
 *    nowrap from lg up and wrap naturally below
 *  - subhead: 20px, #A7B0B7, max 54ch
 *  - CTA row: primary .btn-primary, optional secondary .btn-on-dark
 *
 * Both text colors clear 4.5:1 on every part of the band (eyebrow 6.4:1,
 * subhead 5.7:1 on slate; 5.1:1 / 4.5:1 in the red-wash corner).
 */

const EYEBROW_COLOR = "#F2A5A8";
const SUBHEAD_COLOR = "#A7B0B7";

export type HeroCta = { label: string; href: string };

type Props = {
  eyebrow: string;
  /** One entry per headline line. A trailing "." is stripped and re-added in red. */
  lines: readonly string[];
  subhead: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  /** Optional right-hand column (e.g. the homepage photo). Hidden below lg. */
  aside?: ReactNode;
};

function stripTrailingStop(line: string): string {
  return line.endsWith(".") ? line.slice(0, -1) : line;
}

function CtaLink({ cta, className }: { cta: HeroCta; className: string }) {
  const external = cta.href.startsWith("http");
  if (external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
        {cta.label} →
      </a>
    );
  }
  // In-page anchors use a plain <a>; next/link is for route changes.
  if (cta.href.startsWith("#")) {
    return (
      <a href={cta.href} className={className}>
        {cta.label} →
      </a>
    );
  }
  return (
    <Link href={cta.href} className={className}>
      {cta.label} →
    </Link>
  );
}

export function PageHero({ eyebrow, lines, subhead, primaryCta, secondaryCta, aside }: Props) {
  const hasCtas = Boolean(primaryCta || secondaryCta);

  const text = (
    <Reveal>
      <p
        className="text-[13px] font-semibold uppercase tracking-[0.12em]"
        style={{ color: EYEBROW_COLOR }}
      >
        {eyebrow}
      </p>

      <h1
        className="mt-5 font-semibold text-white"
        style={{
          fontSize: "clamp(40px, 5.6vw, 68px)",
          lineHeight: 1.02,
          letterSpacing: "-0.02em",
        }}
      >
        {lines.map((line) => (
          <span key={line} className="block lg:whitespace-nowrap">
            {stripTrailingStop(line)}
            <span className="text-brand" aria-hidden="true">.</span>
          </span>
        ))}
      </h1>

      <p className="mt-6 max-w-[54ch] text-[20px] leading-[1.5]" style={{ color: SUBHEAD_COLOR }}>
        {subhead}
      </p>

      {hasCtas ? (
        <div className="mt-8 flex flex-wrap gap-4">
          {primaryCta ? <CtaLink cta={primaryCta} className="btn-primary" /> : null}
          {secondaryCta ? <CtaLink cta={secondaryCta} className="btn-on-dark" /> : null}
        </div>
      ) : null}
    </Reveal>
  );

  return (
    <section className="hero-mesh hero-grid py-20 text-white lg:py-28">
      <div className="container-shell">
        {aside ? (
          /* 2:1 split so a three-line headline fits at the 68px cap beside
             the aside (needs ~735px; the text column gets ~780px at 1280+). */
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            {text}
            <Reveal delay={120} className="hidden lg:block">
              {aside}
            </Reveal>
          </div>
        ) : (
          text
        )}
      </div>
    </section>
  );
}
