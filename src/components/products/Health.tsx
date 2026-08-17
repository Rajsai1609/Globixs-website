import { CheckCircle } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const bullets = [
  "Compliance-first architecture: HIPAA-aware data handling, BAA-ready integrations, audit-trail logging by default.",
  "Modules: appointment scheduling, patient reminder workflows, clinic-back-office automation, intake forms.",
  "Currently in design and pilot-partner outreach phase — looking for design partner clinics in the Seattle area.",
];

export function Health() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <div className="enterprise-panel p-8">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              IN DEVELOPMENT
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
              Health — Healthcare Workflow AI
            </h2>
            <p className="mt-2 text-sm font-medium text-muted">
              Appointment scheduling, patient comms, and back-office automation.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-foreground">
              Health is a HIPAA-aware automation suite for clinics, healthtech startups, and small
              medical practices. Built from day one with compliance constraints in mind — not
              retrofitted later.
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-6 text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
