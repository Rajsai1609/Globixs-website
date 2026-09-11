import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.ngrok-free.dev"],

  // Blog posts are read from content/blog at request time when a page
  // revalidates, so the markdown must ship with the serverless bundle.
  outputFileTracingIncludes: {
    "/blog": ["./content/blog/**/*"],
    "/blog/[slug]": ["./content/blog/**/*"],
  },

  async redirects() {
    return [
      // Legacy route renames (301 permanent)
      { source: "/industries",     destination: "/services",       permanent: true },
      { source: "/products",       destination: "/services",       permanent: true },
      { source: "/for-candidates", destination: "/for-employees",  permanent: true },
      { source: "/get-hired",      destination: "/for-employees",  permanent: true },
      // AI Services page folded into /services (Voice AI & Customer Engagement).
      { source: "/ai-products",    destination: "/services",       permanent: true },
      // Train/Academy pillar retired — keep old indexed links out of a 404.
      { source: "/academy",        destination: "/",               permanent: true },
      // Short links used in posts/DMs for the live results feed.
      { source: "/proof",          destination: "/results",        permanent: true },
      { source: "/30days",         destination: "/results",        permanent: true },
    ];
  },

  async rewrites() {
    return [
      // Clean URLs for the standalone registration pages (static files in
      // public/ — no App Router routes exist for /register or /join)
      { source: "/register", destination: "/register.html" },  // Unsaturated Roles
      { source: "/join",     destination: "/join.html" },      // Core Tech Tracks
    ];
  },
};

export default nextConfig;
