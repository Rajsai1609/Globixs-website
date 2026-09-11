import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { Reveal } from "@/components/animations/reveal";
import { BOOKING_URL } from "@/lib/booking";
import { getPublishedPost, getPublishedPosts, formatPostDate } from "@/lib/blog";

type Params = { slug: string };

// Only published posts get a route. Drafts (published: false) are not in this
// list and, with dynamicParams off, 404 instead of rendering on demand.
export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | Globixs Technology Solutions`,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date.toISOString(),
      authors: [post.author],
      tags: post.tags,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.body,
    options: { parseFrontmatter: false },
  });

  return (
    <article>
      <header className="hero-mesh py-16 text-white sm:py-20">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl">
            <Link href="/blog" className="text-sm font-semibold text-white/70 hover:text-white">
              ← All posts
            </Link>
            <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/70">{post.description}</p>
            <p className="mt-6 text-sm text-white/60">
              <time dateTime={post.date.toISOString()}>{formatPostDate(post.date)}</time>
              {" · "}
              {post.author}
            </p>
          </Reveal>
        </div>
      </header>

      <div className="section-pad">
        <div className="container-shell">
          <div className="post-body mx-auto max-w-3xl">{content}</div>

          <aside className="tint-panel mx-auto mt-16 max-w-3xl p-8">
            <h2 className="text-xl font-bold text-heading">Want this working in your business?</h2>
            <p className="mt-2 text-base leading-7 text-foreground">
              A 30-minute call is enough to tell you whether it fits and what it would take.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
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
          </aside>
        </div>
      </div>
    </article>
  );
}
