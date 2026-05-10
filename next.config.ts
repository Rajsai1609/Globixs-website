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
};

export default nextConfig;
