// Server component. Sits directly below <ResultsFeed /> on the job marketing
// section. Renders nothing until there is at least one published + consented
// testimonial, so the page simply lacks this block until the first one lands.
import Link from "next/link";
import { getPublishedTestimonials } from "@/lib/testimonials";

export default async function Testimonials() {
  const rows = await getPublishedTestimonials();
  if (rows.length === 0) return null;

  return (
    <section id="testimonials" className="scroll-mt-24 mx-auto max-w-6xl px-6 pb-16">
      <h2 className="text-3xl font-semibold tracking-tight text-[#1F2326] md:text-4xl">
        In their words
      </h2>
      <p className="mt-3 max-w-[58ch] text-[#383E42]">
        Quotes from current and former customers, published with their written permission.
      </p>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {rows.map((t) => (
          <li key={t.id} className="rounded-[10px] border border-[#DDE1E4] bg-white p-6">
            <blockquote className="text-[17px] leading-7 text-[#1F2326]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <footer className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[14px] text-[#6B7378]">
              <cite className="not-italic">{t.attribution}</cite>
              {t.resultSlug ? (
                <Link
                  href={`/results/${t.resultSlug}`}
                  className="font-medium text-[#C8262C] hover:underline"
                >
                  See their results
                </Link>
              ) : null}
            </footer>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[13px] text-[#6B7378]">
        Testimonials reflect individual experiences and are not typical or guaranteed.
      </p>
    </section>
  );
}
