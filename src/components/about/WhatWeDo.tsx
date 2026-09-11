import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Service = {
  num: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

/* Mirrors the homepage: the AI / marketing / consulting line leads, with
   staffing and job marketing as the secondary offerings. */
const services: Service[] = [
  {
    num: "(01)",
    title: "AI Automation, Digital Marketing & Technology Consulting",
    description:
      "Done-for-you systems for growing businesses: AI receptionists that catch every missed call, process automation, POS and systems integration, dashboards, custom AI, websites and local SEO, lead generation, and senior technology advice. We build it, launch it, and keep it running.",
    ctaLabel: "Explore our services →",
    ctaHref: "/services",
  },
  {
    num: "(02)",
    title: "IT Staffing for Companies",
    description:
      "We fill contract and full-time technical roles across cloud, data, AI/ML, cybersecurity, and software. Sourcing, screening, and matching run on our own AI stack with senior recruiters validating every candidate — so first submissions land in days, not weeks.",
    ctaLabel: "Explore staffing →",
    ctaHref: "/staffing",
  },
  {
    num: "(03)",
    title: "Job Marketing for Candidates",
    description:
      "A managed job search for people ready to move: a dedicated recruiter, a resume tailored for every application, and 25–35 quality applications submitted daily — across core technology tracks and an unsaturated roles track with less competition and faster interviews.",
    ctaLabel: "See how it works →",
    ctaHref: "/for-employees",
  },
];

export function WhatWeDo() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle eyebrow="WHAT WE DO" title="What we do" />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 80}>
              <article className="premium-card flex h-full flex-col p-8">
                <p className="font-mono text-sm tracking-[0.1em] text-brand">{service.num}</p>
                <h3 className="mt-3 text-xl font-bold text-heading">{service.title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-foreground">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={service.ctaHref}
                    className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                  >
                    {service.ctaLabel}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
