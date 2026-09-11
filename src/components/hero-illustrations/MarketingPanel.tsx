/**
 * Hero illustration for /digital-marketing: a performance panel.
 * Inline SVG line chart + HTML tiles, no images. Every number, name and
 * review below is an ILLUSTRATIVE PLACEHOLDER, not a real result.
 */
import { Star } from "lucide-react";
import { PANEL, BORDER, TEXT, TEAL, RED, illoClass } from "./tokens";

const METRICS = [
  { label: "Calls from Google", value: "42" },
  { label: "Leads from ads", value: "17" },
  { label: "Page-1 keywords", value: "18" },
] as const;

// Rising series, normalised to a 300×90 viewBox (placeholder shape).
const POINTS = "0,78 40,70 80,72 120,58 160,52 200,40 240,30 280,18 300,12";

export function MarketingPanel() {
  return (
    <div
      className={illoClass}
      style={{ background: PANEL, borderColor: BORDER, color: TEXT }}
      aria-hidden="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b px-5 py-4" style={{ borderColor: BORDER }}>
        <div>
          <p className="text-sm font-semibold">Leads · last 30 days</p>
          <p className="text-xs" style={{ color: "rgba(242,243,244,0.6)" }}>
            Search, ads and reviews in one view
          </p>
        </div>
        <span className="text-xs font-semibold" style={{ color: TEAL }}>
          ↑ trending
        </span>
      </div>

      {/* Chart */}
      <div className="px-5 pt-5">
        <svg viewBox="0 0 300 90" className="h-24 w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mk-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={TEAL} stopOpacity="0.28" />
              <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
            </linearGradient>
          </defs>
          {[20, 45, 70].map((y) => (
            <line key={y} x1="0" x2="300" y1={y} y2={y} stroke={BORDER} strokeWidth="1" />
          ))}
          <polygon points={`0,90 ${POINTS} 300,90`} fill="url(#mk-fill)" />
          <polyline
            points={POINTS}
            fill="none"
            stroke={TEAL}
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="300" cy="12" r="4" fill={TEAL} />
        </svg>
      </div>

      {/* Metric tiles */}
      <div className="grid grid-cols-3 gap-3 px-5 pt-4">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="rounded-lg px-3 py-3"
            style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
          >
            <p className="text-[22px] font-bold leading-none" style={{ color: TEAL }}>
              {m.value}
            </p>
            <p className="mt-1.5 text-[11px] leading-4" style={{ color: "rgba(242,243,244,0.7)" }}>
              {m.label}
            </p>
          </div>
        ))}
      </div>

      {/* Review row */}
      <div
        className="mx-5 my-5 flex items-center gap-3 rounded-lg px-4 py-3"
        style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
      >
        <span className="flex gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={13} fill={TEAL} stroke={TEAL} />
          ))}
        </span>
        <p className="min-w-0 truncate text-xs" style={{ color: "rgba(242,243,244,0.85)" }}>
          &ldquo;Booked online in two minutes, showed up on time.&rdquo;
          <span style={{ color: "rgba(242,243,244,0.55)" }}> — New Google review</span>
        </p>
        <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: RED }} />
      </div>
    </div>
  );
}
