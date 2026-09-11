// Server component. One line of live proof between the AI-service cards and
// the closing CTA. ResultsCounter renders nothing until a customer result is
// published, so this whole band disappears with it.
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import ResultsCounter from "@/components/results/ResultsCounter";
import { getResultsSummary } from "@/lib/results";

const JOB_MARKETING_HREF = "/technology-consulting#job-marketing";

export async function ResultsLine() {
  const { responses } = await getResultsSummary();
  if (responses === 0) return null;

  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal className="tint-panel mx-auto max-w-4xl p-8 text-center lg:p-10">
          <p className="eyebrow">Job marketing for professionals</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
            What our customers&apos; inboxes look like.
          </h2>
          <ResultsCounter href={JOB_MARKETING_HREF} />
          <div className="mt-6">
            <Link
              href={JOB_MARKETING_HREF}
              className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
            >
              How job marketing works →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
