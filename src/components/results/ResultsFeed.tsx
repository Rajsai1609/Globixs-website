// Server component. Replaces the "Full transparency" section on /for-employees,
// directly above the $349 pricing block.
import Link from "next/link";
import { getRecentResponses } from "@/lib/results";
import ResponseRow from "./ResponseRow";

interface ResultsFeedProps {
  /** Redacted weekly-report image. When omitted the list takes the full width. */
  reportImage?: string;
}

export default async function ResultsFeed({ reportImage }: ResultsFeedProps) {
  const rows = await getRecentResponses(5);
  if (rows.length === 0) return null;

  return (
    // section-pad + container-shell so the vertical rhythm and the left edge
    // match every other section on /for-employees.
    <section id="results" className="section-pad scroll-mt-24">
      <div className="container-shell">
        {/* Only reserve the second column when there is a report image to put
            in it — otherwise the list gets the full width and the role names
            stop truncating. */}
        <div className={`grid gap-10 ${reportImage ? "lg:grid-cols-[1.35fr_1fr] lg:items-start" : ""}`}>
          <div>
            <div className="mb-4 flex items-end justify-between gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-[#1F2326] md:text-4xl">
                Recent employer responses
              </h2>
              <Link href="/results" className="shrink-0 text-[15px] font-medium text-[#C8262C] hover:underline">
                All results
              </Link>
            </div>
            <p className="mb-6 max-w-[58ch] text-[#383E42]">
              Real emails received by current customers, newest first. Names and contact details are
              removed; the company and the role are exactly as they arrived.
            </p>

            <ul className="overflow-hidden rounded-[10px] border border-[#DDE1E4] bg-white">
              {rows.map((r) => (
                <ResponseRow key={r.id} row={{ ...r, receivedOn: r.receivedOn.toISOString() }} />
              ))}
            </ul>
            <p className="mt-3 text-[13px] text-[#6B7378]">
              Results shown are from individual customers and are not typical or guaranteed. Company
              names appear only as senders of emails received; no affiliation or endorsement is implied.
            </p>
          </div>

          {reportImage && (
            <figure className="rounded-[10px] border border-[#DDE1E4] bg-[#F5F6F7] p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={reportImage}
                alt="A redacted Globixs weekly report showing roles applied to, the resume used, and the status of each application"
                className="w-full rounded-[6px] border border-[#DDE1E4]"
                loading="lazy"
              />
              <figcaption className="px-1 pt-3 text-[15px] text-[#383E42]">
                <span className="block font-semibold text-[#1F2326]">This is what you receive every Friday.</span>
                Every role we applied to, the tailored resume used, and where each application stands.
                You can verify our work — that is the point.
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
