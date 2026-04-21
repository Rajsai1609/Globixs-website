import { JobStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const STAFFING_SERVICE_SLUGS = [
  "staff-augmentation",
  "it-consulting",
  "managed-services",
  "data-services",
  "release-engineering",
];

export async function getServices() {
  return prisma.service.findMany({
    where: { slug: { in: STAFFING_SERVICE_SLUGS } },
    orderBy: { title: "asc" },
  });
}

export async function getServiceBySlug(slug: string) {
  return prisma.service.findUnique({ where: { slug } });
}

export async function getIndustries() {
  return prisma.industry.findMany({ orderBy: { name: "asc" } });
}

export async function getOpenJobs() {
  try {
    return await prisma.job.findMany({
      where: { status: JobStatus.OPEN },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch open jobs:", error);
    return [];
  }
}

export async function getJobBySlug(slug: string) {
  try {
    return await prisma.job.findUnique({ where: { slug } });
  } catch (error) {
    console.error(`Failed to fetch job by slug (${slug}):`, error);
    return null;
  }
}

