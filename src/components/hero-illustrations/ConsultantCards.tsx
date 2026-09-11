/**
 * Hero illustration for /technology-consulting: three offset consultant
 * cards. Pure HTML/CSS, no images. Every role, stack, tenure and date is
 * an ILLUSTRATIVE PLACEHOLDER — not a real person or a live availability.
 */
import { PANEL, BORDER, TEXT, TEAL, RED } from "./tokens";

type Consultant = {
  role: string;
  stack: string;
  years: string;
  engagement: string;
  starts: string;
};

const CONSULTANTS: readonly Consultant[] = [
  { role: "Cloud Engineer", stack: "AWS · Terraform · Kubernetes", years: "8 yrs", engagement: "Contract-to-hire", starts: "Starts Oct 1" },
  { role: "Data / AI Engineer", stack: "Python · dbt · Snowflake", years: "6 yrs", engagement: "Contract-to-hire", starts: "Starts Oct 1" },
  { role: "Workday Consultant", stack: "HCM · Integrations", years: "7 yrs", engagement: "Contract-to-hire", starts: "Starts Oct 1" },
];

/* Each card is nudged right and down so the stack reads as a fanned deck. */
const OFFSETS = ["", "ml-6", "ml-12"] as const;

export function ConsultantCards() {
  return (
    <div className="w-full" aria-hidden="true">
      <div className="space-y-3">
        {CONSULTANTS.map((c, i) => (
          <div
            key={c.role}
            className={`rounded-lg border p-4 shadow-[0_12px_32px_rgba(15,23,42,0.20)] ${OFFSETS[i]}`}
            style={{ background: PANEL, borderColor: BORDER, color: TEXT }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{c.role}</p>
                <p className="mt-0.5 truncate text-xs" style={{ color: "rgba(242,243,244,0.65)" }}>
                  {c.stack} · {c.years}
                </p>
              </div>
              <span
                className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                style={{ background: "rgba(79,209,197,0.15)", color: TEAL, border: "1px solid rgba(79,209,197,0.4)" }}
              >
                {c.engagement}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="flex items-center gap-2" style={{ color: TEAL }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: TEAL }} />
                {c.starts}
              </span>
              {i === 0 ? (
                <span
                  className="rounded px-2 py-0.5 text-[11px] font-semibold"
                  style={{ background: "rgba(200,38,44,0.18)", color: "#F2A5A8", border: `1px solid ${RED}` }}
                >
                  Shortlisted in 48h
                </span>
              ) : (
                <span style={{ color: "rgba(242,243,244,0.55)" }}>Vetted · reference-checked</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
