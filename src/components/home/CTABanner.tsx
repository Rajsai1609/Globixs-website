import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

export function CTABanner() {
  return (
    <section className="hero-mesh py-16 text-white md:py-24">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Hiring or building? Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            30-minute call. We&apos;ll review your hiring or AI bottlenecks and tell you honestly
            whether we can help. No pitch deck, no commitment.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Book a Free Consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
