import { CheckCircle } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const bullets = [
  "Stack: Custom OpenClaw orchestration + Firecrawl web scraping, deployed on Railway.",
  "Modules: prospect sourcing, enrichment via public data, AI-drafted outreach sequences, CRM sync, pipeline analytics.",
  "Currently in beta with internal Globixs use cases. External pilot launches Q3 2026.",
];

export function SalesIQ() {
  return (
    <section className="section-pad bg-black/[0.03]">
      <div className="container-shell">
        <Reveal>
          <div className="enterprise-panel p-8">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              IN DEVELOPMENT
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
              SalesIQ — Sales Prospecting AI
            </h2>
            <p className="mt-2 text-sm font-medium text-muted">
              Outbound prospecting, enrichment, and AI-augmented SDR workflows.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
              SalesIQ automates the top of the B2B sales funnel — sourcing prospects, enriching
              profiles, drafting personalized outreach, and tracking pipeline movement. Built on
              the same multi-agent infrastructure that powers Resto.
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-6 text-slate-600">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
