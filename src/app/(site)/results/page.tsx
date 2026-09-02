import type { Metadata } from "next";
import Link from "next/link";
import { getAllResults, getResultsSummary, RESPONSE_LABEL, daysBetween } from "@/lib/results";

export const metadata: Metadata = {
  title: "Customer results | Globixs Job Marketing",
  description: "Real employer responses received by Globixs job marketing customers, with redacted screenshots.",
};
export const revalidate = 300;

export default async function ResultsIndex() {
  const [results, summary] = await Promise.all([getAllResults(), getResultsSummary()]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-[#1F2326] md:text-5xl">
        What our customers’ inboxes look like.
      </h1>
      {summary.responses === 0 ? (
        <>
          <p className="mt-4 max-w-[60ch] text-lg text-[#383E42]">
            We publish employer responses here as customers give written permission. The first is on
            its way — check back soon or{" "}
            <a
              href="https://tinyurl.com/2sfxn9w3"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#C8262C] underline hover:text-[#A81F24]"
            >
              book a free 20-minute call
            </a>
            .
          </p>
          {/* /join is a rewrite to a static file in public/ — plain anchor, not next/link. */}
          <a href="/join" className="btn-primary mt-6">
            Register — Core Tech Tracks
          </a>
        </>
      ) : (
        <>
          <p className="mt-4 max-w-[60ch] text-lg text-[#383E42]">
            {summary.responses} employer responses across {summary.customers} customers. Every screenshot is
            real and redacted; every customer gave written permission.
          </p>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {results.map((r) => (
              <li key={r.id} className="rounded-[10px] border border-[#DDE1E4] bg-white p-6">
                <Link href={`/results/${r.slug}`} className="group block">
                  <h2 className="text-2xl font-semibold text-[#1F2326] group-hover:text-[#C8262C]">{r.headline}</h2>
                  <p className="mt-1 text-[15px] text-[#6B7378]">{r.profile}</p>
                  <ul className="mt-4 space-y-1.5 text-[15px] text-[#383E42]">
                    {r.responses.map((x) => (
                      <li key={x.id}>
                        <span className="font-semibold text-[#1F2326]">{x.company}</span> — {RESPONSE_LABEL[x.type]}
                        <span className="text-[#6B7378]"> · day {daysBetween(r.joinedAt, x.receivedOn)}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-block text-[15px] font-medium text-[#C8262C]">See the emails</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="mt-10 max-w-[80ch] text-[13px] text-[#6B7378]">
        Results shown are from individual customers and are not typical or guaranteed. Globixs Technology Solutions
        does not guarantee employment, interviews, offers or any particular salary; hiring decisions are made solely
        by employers. Company names appear only as senders of emails received; no affiliation or endorsement is implied.
      </p>
    </div>
  );
}
