import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { BOOKING_URL } from "@/lib/site-config";

export function CTABanner() {
  return (
    <section className="hero-mesh py-16 text-white md:py-24">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Tell us where your business is leaking.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Missed calls, manual admin, tools that don&apos;t talk to each other, a website nobody
            finds. A 30-minute call and we&apos;ll tell you honestly whether we can fix it and what
            it would take.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={BOOKING_URL} className="btn-primary">
              Book a consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
