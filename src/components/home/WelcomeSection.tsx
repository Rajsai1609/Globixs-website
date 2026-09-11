import Image from "next/image";
import { Bot, Megaphone, Compass } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const focusAreas = [
  {
    Icon: Bot,
    title: "AI Automation",
    description:
      "AI receptionists, process automation, POS and systems integration, analytics, and custom AI — built on your tools and run by our team.",
  },
  {
    Icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Websites that convert, local SEO that gets you found, and AI-driven lead generation that keeps the pipeline full.",
  },
  {
    Icon: Compass,
    title: "Technology Consulting",
    description:
      "Roadmaps, vendor selection, architecture reviews, and fractional technical leadership for teams without a CTO.",
  },
];

export function WelcomeSection() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              Welcome to Globixs
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground sm:text-lg">
              We&apos;re a Seattle-based technology firm. Growing businesses hire us to automate
              the work that eats their week, to market them to the customers they want, and to
              make technology decisions with a senior engineer in the room. Companies that need
              engineers use our IT staffing line, and job seekers use our job marketing service
              to land their next role. Senior consultants run the work; AI agents handle the scale.
            </p>
            <p className="mt-7 text-base font-semibold text-heading">
              Where we focus:
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-3">
              {focusAreas.map((area) => (
                <article key={area.title} className="premium-card p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <area.Icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-heading">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground">{area.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Image
              src="/services/data-analytics.jpg"
              alt="Globixs consulting team reviewing business dashboards with a client"
              width={600}
              height={450}
              className="w-full rounded-2xl object-cover shadow-[0_12px_32px_rgba(15,23,42,0.10)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
