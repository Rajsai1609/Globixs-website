import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  return (
    <section className="hero-mesh py-20 text-white sm:py-28">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow-on-dark">
            ABOUT GLOBIXS
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            One technology partner. Three ways we deliver.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Globixs Technology Solutions is a Seattle-based technology services company. We place
            pre-vetted engineers with businesses, run managed job searches for candidates, and build
            AI systems that grow small and mid-size companies.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
