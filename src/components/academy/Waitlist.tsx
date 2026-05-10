import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

export function Waitlist() {
  return (
    <section id="waitlist" className="section-pad bg-blue-900 text-white">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
            BE FIRST IN THE NEXT COHORT
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Globixs Academy launches in 2026.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            We&apos;re admitting the founding cohort right now — invite-only, with a 1:1 consultation
            before tuition. Drop your email and we&apos;ll reach out when applications open. No spam,
            no marketing — just the application link.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-10 py-4 text-sm font-semibold text-blue-900 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Talk to Admissions →
            </Link>
          </div>
          <p className="mt-6 text-sm italic text-sky-200/70">
            Direct line to admissions: connect@globixs.com
          </p>
        </Reveal>
      </div>
    </section>
  );
}
