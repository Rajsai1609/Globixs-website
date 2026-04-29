import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  return (
    <section className="hero-mesh py-20 text-white sm:py-28">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            About Globixs
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            An AI-native staffing and consulting firm built for speed.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Globixs Technology Solutions is a Seattle-based firm that helps US companies hire IT
            talent faster and ship AI systems sooner. We combine senior recruiters and consultants
            with production-grade AI agents to deliver measurable outcomes — not slide decks, not
            month-long delays.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
