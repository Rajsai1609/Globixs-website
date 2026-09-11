import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { Pill } from "@/components/brochure";
import { BOOKING_URL } from "@/lib/booking";
import { getPublishedPosts, formatPostDate } from "@/lib/blog";

const TITLE = "Blog";
const DESCRIPTION =
  "Practical notes from the Globixs team on AI automation, digital marketing, and technology consulting for growing businesses.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${TITLE} | Globixs Technology Solutions`,
    description: DESCRIPTION,
    type: "website",
    url: "/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Globixs blog" }],
  },
};

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  return (
    <div>
      <section className="hero-mesh py-16 text-white sm:py-20">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow-on-dark">Blog</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Notes from the work.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
              {DESCRIPTION}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          {posts.length === 0 ? (
            <Reveal className="mx-auto max-w-2xl text-center">
              <SectionTitle
                title="First posts are on the way."
                description="We're writing up what we've learned running AI automation, marketing, and technology projects for real businesses. Check back soon, or book a call if you'd rather not wait."
              />
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book a consultation
                </a>
                <Link href="/services" className="btn-secondary">
                  See our services
                </Link>
              </div>
            </Reveal>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, idx) => (
                <li key={post.slug}>
                  <Reveal delay={idx * 60} className="h-full">
                    <article className="brochure-card flex h-full flex-col p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                        <time dateTime={post.date.toISOString()}>{formatPostDate(post.date)}</time>
                      </p>
                      <h2 className="mt-3 text-xl font-bold text-heading">
                        <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-3 flex-1 text-base leading-7 text-foreground">
                        {post.description}
                      </p>
                      {post.tags.length > 0 ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Pill key={tag} className="!px-3 !py-1 !text-xs">
                              {tag}
                            </Pill>
                          ))}
                        </div>
                      ) : null}
                      <div className="mt-6">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                        >
                          Read post →
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
