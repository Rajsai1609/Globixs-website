import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

export function ClosingCta() {
  return (
    <section className="hero-mesh py-16 text-white md:py-24">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Your next IT role, filled in 7–10 days.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Tell us what you&apos;re hiring for. Within a week you&apos;ll have 3–5 pre-vetted
            candidates with full technical write-ups, match scores, and visa status — first
            engagement free, no commitment.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Talk to Our Team
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
