import Link from "next/link";
import { Zap, BadgeCheck, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  return (
    <section className="hero-mesh py-20 text-white sm:py-28">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Globixs Business Consulting
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            AI strategy and automation consulting that ships outcomes.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Most consulting firms hand you a slide deck and disappear. Globixs combines senior
            consultants with multi-agent AI systems to identify your highest-impact opportunities,
            design the right architecture, and roll it out with measurable KPIs — typically in
            weeks, not quarters. No bloated retainers. No theoretical frameworks. Just systems
            that move your numbers.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Book a Free Discovery Call
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <Zap size={15} className="text-brand" aria-hidden="true" />
              First insights in 2 weeks
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
            <span className="flex items-center gap-2">
              <BadgeCheck size={15} className="text-brand" aria-hidden="true" />
              Senior consultants only
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
            <span className="flex items-center gap-2">
              <TrendingUp size={15} className="text-brand" aria-hidden="true" />
              Outcomes tied to KPIs
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
