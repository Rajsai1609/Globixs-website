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
    ];
  },

  async rewrites() {
    return [
      // Clean URL for the standalone Unsaturated Roles registration page
      // (static file at public/register.html — no App Router route exists for /register)
      { source: "/register", destination: "/register.html" },
    ];
  },
};

export default nextConfig;
