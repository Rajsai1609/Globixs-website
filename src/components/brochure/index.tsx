/**
 * Brochure primitives.
 *
 * Shared building blocks for the site-wide brochure design language. Styling
 * lives in the `.eyebrow` / `.step-badge` / `.pill` / `.stat-figure` classes in
 * globals.css so these stay thin and pages don't repeat Tailwind strings.
 */

import type { ReactNode } from "react";

/* Red letterspaced uppercase label above a section heading. */
export function Eyebrow({
  children,
  onDark = false,
  className = "",
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return <p className={`${onDark ? "eyebrow-on-dark" : "eyebrow"} ${className}`}>{children}</p>;
}

/* Numbered red square badge for step/process sequences. */
export function StepBadge({ n, className = "" }: { n: number | string; className?: string }) {
  return (
    <span className={`step-badge ${className}`} aria-hidden="true">
      {n}
    </span>
  );
}

/* Pill badge for tag lists — audiences, tracks, technologies. */
export function Pill({
  children,
  tint = false,
  className = "",
}: {
  children: ReactNode;
  tint?: boolean;
  className?: string;
}) {
  return <span className={`${tint ? "pill-tint" : "pill"} ${className}`}>{children}</span>;
}

/* Big red figure with a small slate caption. */
export function Stat({
  value,
  caption,
  className = "",
}: {
  value: ReactNode;
  caption: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="stat-figure">{value}</p>
      <p className="stat-caption">{caption}</p>
    </div>
  );
}

/* Square red bullet list item. */
export function BulletItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="brochure-bullet" aria-hidden="true" />
      <span className="text-base leading-7 text-foreground">{children}</span>
    </li>
  );
}
