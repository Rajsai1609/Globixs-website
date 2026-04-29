import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  return (
    <section className="hero-mesh py-20 text-white sm:py-28">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Globixs Projects
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Vertical AI systems we build in-house.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Globixs ships production AI systems across high-impact verticals — using our placed
            engineers and senior consultants. Each project is real proof of how we deliver: senior
            humans, multi-agent architecture, measurable outcomes. Some are live with paying
            customers. Others are in active development.
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
