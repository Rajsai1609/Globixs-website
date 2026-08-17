import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  return (
    <section className="hero-mesh py-20 text-white sm:py-28">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow-on-dark">
            PRODUCTS WE&apos;VE BUILT
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            AI products built by the engineers we place.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            PathAI, Resto, Aigent, and SignalFeed are vertical AI products we ship to real customers. They&apos;re built between client engagements by Globixs engineers — the same talent we place with enterprise and mid-market teams.
          </p>
          <div className="mt-8">
            <Link href="/consulting" className="btn-primary">
              Hire Our Team for Your Project
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
