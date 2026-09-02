import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getResultBySlug, getAllResults, RESPONSE_LABEL, daysBetween, imageUrl } from "@/lib/results";

export const revalidate = 300;

export async function generateStaticParams() {
  const all = await getAllResults();
  return all.map((r) => ({ slug: r.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = await getResultBySlug(slug);
  if (!r) return { title: "Customer result" };

  const companies = r.responses.map((x) => x.company);
  const companyList = new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(companies);
  const count = r.responses.length;
  const title = `${r.headline} | Globixs Job Marketing`;
  const description =
    `${r.profile} — ${count} employer ${count === 1 ? "response" : "responses"}` +
    `${companyList ? ` from ${companyList}` : ""}. Real emails, redacted and published with written permission.`;

  // Absolute Supabase URL, so it does not depend on metadataBase. This is what
  // LinkedIn and WhatsApp show when someone shares /30days.
  const firstImage = r.responses[0] ? imageUrl(r.responses[0].imagePath) : undefined;
  const images = firstImage
    ? [{ url: firstImage, alt: `${companies[0]} — ${RESPONSE_LABEL[r.responses[0].type]}, redacted` }]
    : undefined;

  return {
    title: { absolute: title },
    description,
    openGraph: { type: "article", title, description, images },
    twitter: { card: "summary_large_image", title, description, images: firstImage ? [firstImage] : undefined },
  };
}

export default async function ResultPage({ params }: Props) {
  const { slug } = await params;
  const r = await getResultBySlug(slug);
  if (!r) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-[15px] text-[#6B7378]">{r.profile}</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#1F2326] md:text-6xl">{r.headline}</h1>

      <ul className="mt-10 overflow-hidden rounded-[10px] border border-[#DDE1E4] bg-white">
        {r.responses.map((x) => (
          <li key={x.id} className="grid grid-cols-[28px_1fr_auto] gap-x-4 border-b border-[#DDE1E4] px-5 py-4 last:border-b-0">
            <span aria-hidden className="text-[18px] leading-none text-[#C8262C]">★</span>
            <span>
              <span className="font-semibold text-[#1F2326]">{x.company}</span>
              <span className="text-[#383E42]"> — {RESPONSE_LABEL[x.type]}{x.role ? ` · ${x.role}` : ""}</span>
            </span>
            <span className="text-[14px] text-[#6B7378]">day {daysBetween(r.joinedAt, x.receivedOn)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-lg text-[#383E42]">
          {r.story.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="grid gap-4">
          {r.responses.map((x) => (
            <figure key={x.id} className="overflow-hidden rounded-[10px] border border-[#DDE1E4] bg-[#F5F6F7]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl(x.imagePath)} alt={`${x.company} — ${RESPONSE_LABEL[x.type]}, redacted`} className="block w-full" loading="lazy" />
              <figcaption className="px-4 py-3 text-[14px] text-[#383E42]">
                <span className="block font-semibold text-[#1F2326]">{x.company}</span>{RESPONSE_LABEL[x.type]}{x.role ? ` — ${x.role}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <section className="mt-16 rounded-[12px] bg-[#383E42] p-10 text-white">
        <h2 className="text-3xl font-semibold">Your inbox could look like this next month.</h2>
        <p className="mt-3 max-w-[60ch] text-[#DDE1E4]">$349 a month, month-to-month, cancel anytime. A dedicated recruiter, 25–35 tailored applications every business day, a written report every week.</p>
        <a href="/join" className="mt-6 inline-block rounded-[6px] bg-white px-5 py-3 font-semibold text-[#C8262C]">Register — Core Tech Tracks</a>
      </section>
    </div>
  );
}
