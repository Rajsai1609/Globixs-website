// Server component. Sits under the job-marketing heading on
// /technology-consulting and, with an explicit `href`, on the homepage.
// Renders nothing until there is at least one published + consented response.
import { getResultsSummary } from "@/lib/results";

// The job-marketing hero sits on the dark mesh band, so the counter needs a
// light-on-dark variant — same `onDark` convention the section's CTA pair uses.
// `href` defaults to the in-page feed anchor; the homepage points it at the
// job-marketing section instead.
export default async function ResultsCounter({
  onDark = false,
  href = "#results",
}: {
  onDark?: boolean;
  href?: string;
}) {
  const { responses, customers, since } = await getResultsSummary();
  if (responses === 0) return null; // shows nothing until there is something to show

  const sinceLabel = since?.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  return (
    <p className={`mt-4 text-[17px] ${onDark ? "text-white/70" : "text-[#383E42]"}`}>
      <span className={`font-semibold ${onDark ? "text-white" : "text-[#1F2326]"}`}>
        {responses} employer {responses === 1 ? "response" : "responses"} across {customers}{" "}
        {customers === 1 ? "customer" : "customers"}
      </span>
      {sinceLabel && ` since ${sinceLabel}`} —{" "}
      <a
        href={href}
        className={`underline decoration-[#C8262C] decoration-2 underline-offset-4 ${
          onDark ? "hover:text-white" : "hover:text-[#C8262C]"
        }`}
      >
        see the emails
      </a>
    </p>
  );
}
