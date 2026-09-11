import { MetadataRoute } from "next";
import { getOpenJobs } from "@/lib/data";
import { getPublishedPosts } from "@/lib/blog";
import { getAllResults } from "@/lib/results";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://globixstech.com";
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [jobs, posts, results] = await Promise.all([
    getOpenJobs(),
    getPublishedPosts(),
    getAllResults(),
  ]);

  const staticRoutes = [
    "",
    "/ai-services",
    "/digital-marketing",
    "/technology-consulting",
    "/about",
    "/contact",
    "/results",
    "/blog",
    "/careers",
    "/register",
    "/join",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const jobRoutes = jobs.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: job.updatedAt,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const resultRoutes = results.map((r) => ({
    url: `${baseUrl}/results/${r.slug}`,
    lastModified: r.updatedAt,
  }));

  return [...staticRoutes, ...jobRoutes, ...postRoutes, ...resultRoutes];
}
