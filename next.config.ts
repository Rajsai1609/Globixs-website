import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow ngrok public domains to load Next.js dev resources (HMR/assets).
  allowedDevOrigins: ["*.ngrok-free.dev"],
};

export default nextConfig;
