import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tvss01.iconroof.co.th'
      }
    ]
  }
};

export default nextConfig;
