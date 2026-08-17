import { Briefcase, UserCheck, Repeat, Globe, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Model = { Icon: LucideIcon; title: string; bullets: string[] };

const models: Model[] = [
  {
    Icon: Briefcase,
    title: "Contract Staffing",
    bullets: [
      "3–12 month engagements for project-specific work",
      "Cloud, data, ML, and full-stack engineers ready in days",
      "Pre-vetted technical depth — no resume roulette",
    ],
  },
  {
    Icon: UserCheck,
    title: "Permanent Placement",
    bullets: [
      "Direct full-time hires with 90-day placement guarantee",
      "AI-assisted technical screening and culture-fit signals",
      "Senior recruiters handle offer negotiation and onboarding",
    ],
  },
  {
    Icon: Repeat,
    title: "Contract-to-Hire",
    bullets: [
      "Try-before-you-hire arrangements that reduce risk",
      "Smooth transition to full-time when there's a fit",
      "Flexible engagement terms tied to your hiring timeline",
    ],
  },
  {
    Icon: Globe,
    title: "OPT / H-1B Staffing",
    bullets: [
      "Specialized international IT talent placement",
      "Visa sponsorship guidance and immigration coordination",
      "Active candidate network across F-1, OPT, STEM OPT, H-1B, and GC",
    ],
  },
];

export function EngagementModels() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Engagement Models"
            title="Hire the way that fits your team."
            description="Whether you need a 3-month specialist or a senior engineer for the long haul, we have a model that matches."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {models.map((model, idx) => (
            <Reveal key={model.title} delay={idx * 70}>
              <article className="premium-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <model.Icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-heading">{model.title}</h3>
                <ul className="mt-4 space-y-2">
                  {model.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <span
                        className="brochure-bullet h-1.5 w-1.5"
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
