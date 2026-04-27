import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Disabling Turbopack for build stability
  experimental: {
     turbo: false
  }
};

export default nextConfig;
