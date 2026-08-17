import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.ngrok-free.dev"],

  async redirects() {
    return [
      // Legacy route renames (301 permanent)
      { source: "/industries",     destination: "/ai-products",    permanent: true },
      { source: "/products",       destination: "/ai-products",    permanent: true },
      { source: "/for-candidates", destination: "/for-employees",  permanent: true },
      { source: "/get-hired",      destination: "/for-employees",  permanent: true },
      // Train/Academy pillar retired — keep old indexed links out of a 404.
      { source: "/academy",        destination: "/",               permanent: true },
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
