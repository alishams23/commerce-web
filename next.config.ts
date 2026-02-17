import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/media/**`),
      {
        protocol: process.env.NEXT_PUBLIC_API_BASE_URL?.startsWith("https")
          ? "https"
          : "http",
        hostname:
          process.env.NEXT_PUBLIC_API_BASE_URL?.replace(
            /https?:\/\//,
            "",
          ).replace(/:\d{4}/, "") || "",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
