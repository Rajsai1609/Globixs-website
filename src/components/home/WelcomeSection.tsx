import Image from "next/image";
import { Users, Briefcase, Bot } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const serviceLines = [
  {
    Icon: Users,
    title: "IT Staffing",
    description:
      "Contract and full-time technical hires across cloud, data, AI/ML, cybersecurity, and software — pre-vetted and submitted in days.",
  },
  {
    Icon: Briefcase,
    title: "Job Marketing",
    description:
      "A dedicated recruiter, resumes tailored per role, and 25–35 applications sent daily on your behalf across core and unsaturated tracks.",
  },
  {
    Icon: Bot,
    title: "AI Services",
    description:
      "AI receptionists, chatbots, lead generation, automation, reviews, websites, and dashboards — built for your business and run for you.",
  },
];

export function WelcomeSection() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              Welcome to Globixs
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              We&apos;re a Seattle-based technology firm running three service lines. Businesses hire us to staff their technical teams with pre-vetted contract and full-time engineers, or to build and run the AI systems that answer their calls, fill their pipeline, and automate the busywork. Job seekers hire us to market them into their next role. Senior consultants and recruiters run the work; AI agents handle the scale.
            </p>
            <p className="mt-7 text-base font-semibold text-heading">
              The three service lines we run:
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-3">
              {serviceLines.map((line) => (
                <article key={line.title} className="premium-card p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <line.Icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-heading">{line.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{line.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Image
              src="/services/it-consulting.jpg"
              alt="Globixs consulting team collaborating on AI strategy"
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
