import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow ngrok public domains to load Next.js dev resources (HMR/assets).
  allowedDevOrigins: ["*.ngrok-free.dev"],

  async redirects() {
    return [
      {
        source: "/academy",
        destination: "https://www.mctpathai.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
