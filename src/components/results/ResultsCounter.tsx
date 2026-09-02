// Server component. Drop directly under the hero <h1> on /for-employees.
// Renders nothing until there is at least one published + consented response.
import { getResultsSummary } from "@/lib/results";

// The /for-employees hero sits on the dark mesh band, so the counter needs a
// light-on-dark variant — same `onDark` convention the page's CTA pair uses.
export default async function ResultsCounter({ onDark = false }: { onDark?: boolean }) {
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
        href="#results"
        className={`underline decoration-[#C8262C] decoration-2 underline-offset-4 ${
          onDark ? "hover:text-white" : "hover:text-[#C8262C]"
        }`}
      >
        see the emails
      </a>
    </p>
  );
}
