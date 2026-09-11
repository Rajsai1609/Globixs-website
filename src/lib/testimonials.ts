import { prisma } from "@/lib/prisma";

// Only rows that are BOTH published and consented ever leave the server —
// the same rule the results feed applies to CustomerResult.
const PUBLISHABLE = { published: true, consentAt: { not: null } } as const;

export type PublishedTestimonial = {
  id: string;
  quote: string;
  attribution: string;
  /** Slug of the linked customer result, when one is attached. */
  resultSlug: string | null;
};

export async function getPublishedTestimonials(limit = 6): Promise<PublishedTestimonial[]> {
  let rows;
  try {
    rows = await prisma.customerTestimonial.findMany({
      where: PUBLISHABLE,
      orderBy: { createdAt: "desc" },
      take: limit,
      include: { customerResult: { select: { slug: true, published: true, consentAt: true } } },
    });
  } catch (error: unknown) {
    // A missing table (migration not yet deployed) or a DB outage must not
    // take the whole consulting page down — the block simply doesn't render.
    console.error("Failed to fetch testimonials:", error);
    return [];
  }
  return rows.map((t) => ({
    id: t.id,
    quote: t.quote,
    attribution: t.attribution,
    // Link to the story only if that result is itself publishable.
    resultSlug:
      t.customerResult && t.customerResult.published && t.customerResult.consentAt
        ? t.customerResult.slug
        : null,
  }));
}
