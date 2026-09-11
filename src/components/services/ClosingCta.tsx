import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { BOOKING_URL } from "@/lib/booking";

export function ClosingCta() {
  return (
    <section className="hero-mesh py-16 text-white md:py-24">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Not sure which one you need? Start with a call.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Bring us the bottleneck — missed calls, cold leads, manual follow-ups, a POS that
            never got set up, a website nobody finds. We&apos;ll tell you honestly whether we can
            fix it and what it would take.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a consultation
            </a>
            <Link href="/contact" className="btn-on-dark">
              Send us a message
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
