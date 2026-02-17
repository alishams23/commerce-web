import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!apiUrl) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

const parsedUrl = new URL(apiUrl);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: parsedUrl.protocol.replace(":", "") as "http" | "https",
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
