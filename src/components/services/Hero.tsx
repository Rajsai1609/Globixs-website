import Link from "next/link";
import { Clock, BadgeCheck, Users } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  return (
    <section className="hero-mesh py-20 text-white sm:py-28">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            For Employers
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hire the IT engineers your team actually needs — in 7–10 days.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Globixs places senior IT talent — cloud engineers, data engineers, ML/AI engineers,
            full-stack developers, and DevOps specialists — at US tech companies. AI-powered
            sourcing, 10-dimension screening, senior recruiters reviewing every shortlist. No
            keyword-matching, no junior gatekeepers, no 4-week black holes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary">Talk to Our Team</Link>
            <Link href="#process" className="btn-secondary">See How We Work</Link>
          </div>

          {/* Trust strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Clock size={15} className="text-sky-300" aria-hidden="true" />
              First candidates in 7–10 days
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
            <span className="flex items-center gap-2">
              <BadgeCheck size={15} className="text-sky-300" aria-hidden="true" />
              90-day placement guarantee
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
            <span className="flex items-center gap-2">
              <Users size={15} className="text-sky-300" aria-hidden="true" />
              50+ engineers placed
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
