import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/u/117688900?v=4"),
    ],
  },
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
