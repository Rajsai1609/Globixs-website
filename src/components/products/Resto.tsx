import { CheckCircle } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const bullets = [
  "Stack: Google Forms → Sheets → Make.com → Gmail/Twilio. Multi-agent orchestration handles intake, validation, and customer comms.",
  "Live clients: 4 restaurants (hospitality, catering, multi-location)",
  "Voice AI integration in progress — Twilio toll-free verification underway.",
];

const techStack = ["Google Forms", "Sheets", "Make.com", "Gmail", "Twilio"];

export function Resto() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <div className="enterprise-panel overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Left — project details */}
              <div className="p-8">
                {/* LIVE badge with ping */}
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold text-emerald-700">LIVE</span>
                </div>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
                  Resto — Restaurant Operations AI
                </h2>
                <p className="mt-2 text-sm font-medium text-muted">
                  Order intake, catering, and CRM workflows automated end-to-end.
                </p>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  Resto is the most mature project in the Globixs portfolio — a multi-agent
                  automation system for independent restaurants and catering operators. Live in
                  production with 4 active restaurant clients, handling order intake, customer
                  communication, CRM workflows, and back-office automation.
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

              {/* Right — live metrics panel */}
              <div className="flex items-center border-t border-border bg-surface p-8 lg:border-l lg:border-t-0">
                <div className="w-full space-y-5">
                  <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4">
                    <span className="relative flex h-3 w-3 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-emerald-700">Live in Production</p>
                      <p className="text-xs text-emerald-600">All systems operational</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border bg-white p-4 text-center">
                      <p className="text-3xl font-bold text-heading">4</p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-muted">Active Clients</p>
                    </div>
                    <div className="rounded-xl border border-border bg-white p-4 text-center">
                      <p className="text-3xl font-bold text-heading">3</p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-muted">AI Agents</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Architecture
                    </p>
                    <div className="mt-2 space-y-1 font-mono text-xs text-slate-600">
                      <p>Forms → Sheets → Make.com</p>
                      <p>Gmail · Twilio SMS / Voice</p>
                      <p>Multi-agent orchestration</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Tech Stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {techStack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Next Milestone
                    </p>
                    <p className="mt-1 text-sm font-medium text-heading">
                      Voice AI integration (Twilio toll-free)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
