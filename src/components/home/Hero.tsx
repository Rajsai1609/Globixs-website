import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { BOOKING_URL } from "@/lib/booking";

// Hero type spec (reference: final_.png). Colors are fixed hex values from
// the reference rather than tokens; both clear 4.5:1 on the slate band
// (eyebrow 6.4:1, subhead 5.7:1 on --hero; 5.5:1 / 4.9:1 on --hero-2).
const EYEBROW_COLOR = "#F2A5A8";
const SUBHEAD_COLOR = "#A7B0B7";

const HEADLINE_LINES = ["AI Automation", "Digital Marketing", "Technology Consulting"] as const;

export function Hero() {
  return (
    <section className="hero-mesh hero-grid py-20 text-white lg:py-28">
      <div className="container-shell">
        {/* 2:1 split on desktop so "Technology Consulting." fits on one line
            at the 68px cap (it needs ~735px; the text column gets ~780px at
            1280+). Each line is nowrap from lg up so the three lines never
            reflow; below lg they stack and wrap naturally. */}
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">

          {/* Left column */}
          <Reveal>
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: EYEBROW_COLOR }}
            >
              Seattle-based · Working nationwide
            </p>

            {/* Three stacked lines, each a block span so they never reflow
                into one line on desktop; the full stop carries the brand red. */}
            <h1
              className="mt-5 font-semibold text-white"
              style={{
                fontSize: "clamp(40px, 5.6vw, 68px)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
              }}
            >
              {HEADLINE_LINES.map((line) => (
                <span key={line} className="block lg:whitespace-nowrap">
                  {line}
                  <span className="text-brand" aria-hidden="true">.</span>
                </span>
              ))}
            </h1>

            <p
              className="mt-6 max-w-[54ch] text-[20px] leading-[1.5]"
              style={{ color: SUBHEAD_COLOR }}
            >
              Voice AI, workflow automation, BI dashboards and growth marketing for businesses
              that want to run leaner.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a consultation →
              </a>
              <Link href="/ai-services" className="btn-on-dark">
                Explore AI Services →
              </Link>
            </div>
          </Reveal>

          {/* Right column — hidden on mobile */}
          <Reveal delay={120} className="hidden lg:block">
            <Image
              src="/images/hero-consulting.jpg"
              alt="Globixs engineers planning an AI automation rollout with a client"
              width={700}
              height={525}
              priority
              className="w-full rounded-2xl object-cover shadow-[0_12px_32px_rgba(15,23,42,0.20)]"
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
