import { CheckCircle } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const bullets = [
  "AVM live at avm-realestate-production.up.railway.app — XGBoost model achieving R² = 0.9523 on test data.",
  "6-module system: lead capture, qualification, AVM-powered comps, CRM enrichment, listing automation, and broker dashboards.",
  "Onboarding first brokerage clients in Q2 2026.",
];

export function Realty() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-shell">
        <Reveal>
          <div className="enterprise-panel p-8">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              IN DEVELOPMENT
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
              Realty — Real Estate Lead &amp; Valuation AI
            </h2>
            <p className="mt-2 text-sm font-medium text-muted">
              Lead automation + AVM intelligence for brokerages and proptech.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-foreground">
              Realty is a 6-module lead-generation and valuation intelligence platform for real
              estate teams. The flagship module — our automated valuation model (AVM) — is already
              deployed and generating predictions in production.
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
