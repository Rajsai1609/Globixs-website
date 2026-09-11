/**
 * Hero illustration for /ai-services: a voice-AI call card.
 * Pure HTML/CSS, no images. All names, numbers and times below are
 * ILLUSTRATIVE PLACEHOLDERS, not real customer data.
 */
import { PhoneIncoming, CalendarCheck } from "lucide-react";
import { PANEL, BORDER, TEXT, TEAL, RED, illoClass } from "./tokens";

type Line = { who: "caller" | "ai"; text: string };

const TRANSCRIPT: readonly Line[] = [
  { who: "caller", text: "Hi, do you have anything open Thursday afternoon?" },
  { who: "ai", text: "Yes, 2:30 or 4:00 on Thursday. Which works better?" },
  { who: "caller", text: "2:30, please. It's for a leaking water heater." },
];

export function VoiceCallCard() {
  return (
    <div
      className={illoClass}
      style={{ background: PANEL, borderColor: BORDER, color: TEXT }}
      aria-hidden="true"
    >
      {/* Incoming-call header */}
      <div className="flex items-center justify-between border-b px-5 py-4" style={{ borderColor: BORDER }}>
        <div className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "rgba(79,209,197,0.15)" }}
          >
            <PhoneIncoming size={16} style={{ color: TEAL }} />
          </span>
          <div>
            <p className="text-sm font-semibold">Incoming call</p>
            <p className="text-xs" style={{ color: "rgba(242,243,244,0.6)" }}>
              (425) 555-0142 · Bothell, WA
            </p>
          </div>
        </div>
        <span className="flex items-center gap-2 text-xs font-semibold" style={{ color: TEAL }}>
          <span className="h-2 w-2 rounded-full" style={{ background: TEAL }} />
          Live
        </span>
      </div>

      {/* Transcript */}
      <ul className="space-y-3 px-5 py-5">
        {TRANSCRIPT.map((line, i) => (
          <li key={i} className={`flex ${line.who === "ai" ? "justify-end" : "justify-start"}`}>
            <div className="max-w-[85%]">
              <p
                className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: line.who === "ai" ? TEAL : "rgba(242,243,244,0.55)" }}
              >
                {line.who === "ai" ? "AI receptionist" : "Caller"}
              </p>
              <p
                className="rounded-lg px-3.5 py-2.5 text-sm leading-6"
                style={{
                  background: line.who === "ai" ? "rgba(79,209,197,0.12)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${line.who === "ai" ? "rgba(79,209,197,0.35)" : BORDER}`,
                }}
              >
                {line.text}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Status badge */}
      <div className="px-5 pb-4">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
          style={{ background: "rgba(79,209,197,0.15)", color: TEAL, border: "1px solid rgba(79,209,197,0.4)" }}
        >
          AI answered · 1.8s · booked
        </span>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between border-t px-5 py-3 text-xs"
        style={{ borderColor: BORDER, color: "rgba(242,243,244,0.7)" }}
      >
        <span className="flex items-center gap-2">
          <CalendarCheck size={14} style={{ color: TEAL }} />
          Synced to your calendar
        </span>
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: RED }} />
      </div>
    </div>
  );
}
