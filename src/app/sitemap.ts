import { MetadataRoute } from "next";
import { getServices, getOpenJobs } from "@/lib/data";
import { getPublishedPosts } from "@/lib/blog";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://globixstech.com";
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, jobs, posts] = await Promise.all([
    getServices(),
    getOpenJobs(),
    getPublishedPosts(),
  ]);

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/staffing",
    "/for-employees",
    "/results",
    "/blog",
    "/consulting",
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

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...staticRoutes, ...serviceRoutes, ...jobRoutes, ...postRoutes];
}
