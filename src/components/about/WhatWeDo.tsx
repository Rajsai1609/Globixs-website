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

/* Mirrors the homepage pillars and the three top-level service pages. */
const services: Service[] = [
  {
    num: "(01)",
    title: "AI Services",
    description:
      "AI and business process automation, voice AI and customer engagement, POS integration, business intelligence, workflow and systems integration, and custom AI solutions. Built on the tools you already use and run by our team after launch.",
    ctaLabel: "Explore AI Services →",
    ctaHref: "/ai-services",
  },
  {
    num: "(02)",
    title: "Digital Marketing",
    description:
      "Search and local SEO, Google and Meta ads, social content and LinkedIn management, email and WhatsApp campaigns, and landing pages built to convert. Tracking is set up first so every report ties back to calls, forms and bookings.",
    ctaLabel: "Explore Digital Marketing →",
    ctaHref: "/digital-marketing",
  },
  {
    num: "(03)",
    title: "Technology Consulting",
    description:
      "Systems and cloud consulting for businesses making technology decisions, talent solutions for teams that need engineers, and job marketing for technology professionals: a dedicated recruiter, a resume tailored for every application, and 25–35 applications submitted every business day.",
    ctaLabel: "Explore Technology Consulting →",
    ctaHref: "/technology-consulting",
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
