import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

const rows = [
  {
    category: "Engagement length",
    legacy:  "✗ 6–12 months minimum",
    globixs: "✓ 2–8 week sprints",
  },
  {
    category: "Team seniority",
    legacy:  "✗ Junior consultants do most of the work",
    globixs: "✓ Senior consultants only, AI agents handle scale",
  },
  {
    category: "Pricing model",
    legacy:  "✗ $50K–$500K retainers",
    globixs: "✓ Fixed-scope sprints, transparent pricing",
  },
  {
    category: "Deliverable",
    legacy:  "✗ Slide deck and recommendations",
    globixs: "✓ Deployed systems and KPI dashboards",
  },
  {
    category: "Post-engagement",
    legacy:  "✗ \"Best of luck\"",
    globixs: "✓ 90-day optimization included",
  },
  {
    category: "AI execution capability",
    legacy:  "✗ Outsourced or theoretical",
    globixs: "✓ Native — we build what we recommend",
  },
];

function CellValue({ value }: { value: string }) {
  const good = value.startsWith("✓");
  const bad  = value.startsWith("✗");
  return (
    <span className={good ? "text-emerald-600" : bad ? "text-white/60" : "text-foreground"}>
      {value}
    </span>
  );
}

export function Comparison() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Why Globixs"
            title="The old way costs millions. The Globixs way ships in weeks."
            description="We built Globixs because traditional consulting wasn't designed for AI-era execution speed."
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[540px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                    Category
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-heading">
                    Legacy Consulting
                  </th>
                  <th className="border-l-2 border-accent bg-accent/5 px-5 py-4 text-left font-semibold text-accent">
                    Globixs
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={row.category}
                    className={`border-b border-border last:border-0 ${
                      idx % 2 === 1 ? "bg-black/[0.025]" : "bg-white"
                    }`}
                  >
                    <td className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-muted">
                      {row.category}
                    </td>
                    <td className="px-5 py-4 text-foreground">
                      <CellValue value={row.legacy} />
                    </td>
                    <td className="border-l-2 border-accent bg-accent/5 px-5 py-4 font-medium text-foreground">
                      <CellValue value={row.globixs} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
