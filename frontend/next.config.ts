import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pisces.bbystatic.com",
      },
    ],
  },
};

export default nextConfig;
