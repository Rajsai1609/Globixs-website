import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

export function ClosingCta() {
  return (
    <section className="hero-mesh py-16 text-white md:py-24">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to see where AI moves your numbers?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Book a free 30-minute discovery call. We&apos;ll review your top 3 operational
            bottlenecks and show you which ones AI can actually solve — with realistic timelines
            and pricing. No pitch deck, no commitment.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Book a Discovery Call
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
