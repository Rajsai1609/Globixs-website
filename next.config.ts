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
      // ── Sept 2026 restructure (301 permanent) ──────────────────────────
      // AI services: every previous path lands on /ai-services.
      { source: "/services",       destination: "/ai-services", permanent: true },
      // Only page-like paths. Redirects run BEFORE public/ is served, so a
      // bare `:path*` also swallowed static files under /services/ (this
      // broke the homepage hero image). Anything with a file extension is
      // excluded; site images now live under /public/images anyway.
      { source: "/services/:path((?!.*\\.).*)", destination: "/ai-services", permanent: true },
      { source: "/ai-products",    destination: "/ai-services", permanent: true },
      { source: "/products",       destination: "/ai-services", permanent: true },
      { source: "/industries",     destination: "/ai-services", permanent: true },
      // Consulting: staffing and the legacy consulting page fold into
      // /technology-consulting.
      { source: "/staffing",       destination: "/technology-consulting#talent",         permanent: true },
      { source: "/consulting",     destination: "/technology-consulting",                permanent: true },
      // Job marketing: the whole /for-employees page now lives at #job-marketing.
      { source: "/for-employees",  destination: "/technology-consulting#job-marketing",  permanent: true },
      { source: "/for-candidates", destination: "/technology-consulting#job-marketing",  permanent: true },
      { source: "/get-hired",      destination: "/technology-consulting#job-marketing",  permanent: true },
      // ── Older redirects, unchanged ─────────────────────────────────────
      // Train/Academy pillar retired — keep old indexed links out of a 404.
      { source: "/academy",        destination: "/",           permanent: true },
      // Short links used in posts/DMs for the live results feed.
      { source: "/proof",          destination: "/results",    permanent: true },
      { source: "/30days",         destination: "/results",    permanent: true },
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
