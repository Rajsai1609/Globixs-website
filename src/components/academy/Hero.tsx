import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  return (
    <section className="hero-mesh py-20 text-white sm:py-28">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-400/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-200">
            🚀 LAUNCHING 2026
          </span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            GLOBIXS ACADEMY
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Train where you&apos;ll actually be hired.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Globixs Academy turns US graduates into production-ready AI engineers. Agents, LLM
            integration, deployment, the discipline to ship — taught by senior consultants who
            place engineers into real roles every week. Consultation-first admissions.
            Placement-track curriculum. We only train people we&apos;re confident we can place.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#waitlist"
              className="rounded-lg bg-white px-8 py-4 text-sm font-semibold text-blue-900 shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Join the Waitlist →
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-white bg-transparent px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-900"
            >
              Talk to Admissions →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
