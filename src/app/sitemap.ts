import { MetadataRoute } from "next";
import { getServices, getOpenJobs } from "@/lib/data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://globixstech.com";
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, jobs] = await Promise.all([getServices(), getOpenJobs()]);

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/staffing",
    "/careers",
    "/contact",
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

  return [...staticRoutes, ...serviceRoutes, ...jobRoutes];
}
