import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: { ignoreBuildErrors: true },
  experimental: { cpus: 1 },
};

export default nextConfig;
