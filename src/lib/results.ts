import { prisma } from "@/lib/prisma";
import { ResponseType } from "@prisma/client";

// Only rows that are BOTH published and consented ever leave the server.
const PUBLISHABLE = { published: true, consentAt: { not: null } } as const;

export const RESPONSE_LABEL: Record<ResponseType, string> = {
  INTERVIEW_INVITE: "Phone interview",
  RECRUITER_SCREEN: "Recruiter phone screen",
  SCREENING_QUESTION: "Recruiter screening",
  OFFER: "Offer",
};

/**
 * Whole UTC calendar days between two instants.
 *
 * receivedOn / joinedAt are stored as UTC midnight, so comparing the UTC
 * date parts keeps "day N" stable no matter where the viewer is, and stays
 * correct if a row is ever entered with a time component or across a DST
 * boundary.
 */
export function daysBetween(a: Date, b: Date) {
  const utcDay = (d: Date) => Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  return Math.max(0, Math.round((utcDay(b) - utcDay(a)) / 86_400_000));
}

/**
 * Format a stored date in UTC.
 *
 * Dates are stored at UTC midnight. Formatting them in the viewer's local
 * zone shows the previous day for anyone west of UTC — which put every
 * response a day earlier than it happened, and one day out of step with the
 * "day N" figure beside it. Always format these dates through here.
 */
export function formatUtcDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" },
) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", { ...options, timeZone: "UTC" });
}

export function imageUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/results/${path}`;
}

export async function getRecentResponses(limit = 5) {
  const rows = await prisma.employerResponse.findMany({
    where: { result: PUBLISHABLE },
    orderBy: { receivedOn: "desc" },
    take: limit,
    include: { result: { select: { slug: true, profile: true, joinedAt: true } } },
  });
  return rows.map((r) => ({
    id: r.id,
    company: r.company,
    label: RESPONSE_LABEL[r.type],
    role: r.role,
    receivedOn: r.receivedOn,
    dayN: daysBetween(r.result.joinedAt, r.receivedOn),
    profile: r.result.profile,
    slug: r.result.slug,
    image: imageUrl(r.imagePath),
  }));
}

export async function getResultsSummary() {
  const [responses, customers, first] = await Promise.all([
    prisma.employerResponse.count({ where: { result: PUBLISHABLE } }),
    prisma.customerResult.count({ where: PUBLISHABLE }),
    prisma.customerResult.findFirst({ where: PUBLISHABLE, orderBy: { joinedAt: "asc" }, select: { joinedAt: true } }),
  ]);
  return { responses, customers, since: first?.joinedAt ?? null };
}

export async function getAllResults() {
  return prisma.customerResult.findMany({
    where: PUBLISHABLE,
    orderBy: { createdAt: "desc" },
    include: { responses: { orderBy: { receivedOn: "asc" } } },
  });
}

export async function getResultBySlug(slug: string) {
  return prisma.customerResult.findFirst({
    where: { slug, ...PUBLISHABLE },
    include: { responses: { orderBy: { receivedOn: "asc" } } },
  });
}
