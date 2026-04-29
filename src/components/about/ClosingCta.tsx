import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

export function ClosingCta() {
  return (
    <section className="hero-mesh py-16 text-white md:py-24">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to work with us?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you&apos;re hiring IT talent or scoping an AI project, we&apos;ll give you an
            honest assessment in a 30-minute call. No pitch deck, no commitment.
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
