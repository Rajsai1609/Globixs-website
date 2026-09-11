import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { BOOKING_URL } from "@/lib/booking";
import { SERVICES } from "@/lib/services-catalog";

export function Hero() {
  return (
    <section className="hero-mesh py-20 text-white sm:py-28">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow-on-dark">Services</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            AI automation, digital marketing and technology consulting.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Eight ways we help growing businesses run better. Every one is built on the tools you
            already use, launched in weeks, and run by our team afterwards.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a consultation
            </a>
            <Link href="/staffing" className="btn-on-dark">
              Hiring engineers instead?
            </Link>
          </div>

          {/* Jump links — one per section below. */}
          <nav aria-label="Service sections" className="mt-10">
            <ul className="flex flex-wrap justify-center gap-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="inline-flex items-center rounded-full border border-white/25 px-3.5 py-1.5 text-xs font-semibold text-white/80 transition hover:border-white hover:bg-white hover:text-heading"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
