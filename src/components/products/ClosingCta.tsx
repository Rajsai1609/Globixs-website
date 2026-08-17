import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

export function ClosingCta() {
  return (
    <section className="hero-mesh py-16 text-white md:py-24">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Want to build something like this for your business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            If you operate in restaurants, real estate, healthcare, or sales — we already have
            vertical playbooks ready to deploy. If you&apos;re in another industry, we&apos;ll
            adapt the playbook to fit. Free 30-minute scoping call.
          </p>
          <div className="mt-8">
            <Link href="/consulting" className="btn-primary">
              Book a Consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
