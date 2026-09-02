import { MetadataRoute } from "next";
import { getServices, getOpenJobs } from "@/lib/data";
import { getAllResults } from "@/lib/results";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://globixstech.com";
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, jobs, results] = await Promise.all([getServices(), getOpenJobs(), getAllResults()]);

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/ai-products",
    "/for-employees",
    "/results",
    "/consulting",
    "/staffing",
    "/careers",
    "/contact",
    "/register",
    "/join",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: service.updatedAt,
  }));

  const jobRoutes = jobs.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: job.updatedAt,
  }));

  // getAllResults() already filters to published + consented, so unpublished
  // or unconsented cases can never leak into the sitemap.
  const resultRoutes = results.map((result) => ({
    url: `${baseUrl}/results/${result.slug}`,
    lastModified: result.updatedAt,
  }));

  return [...staticRoutes, ...serviceRoutes, ...jobRoutes, ...resultRoutes];
}
