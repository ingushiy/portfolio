import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
        { source: "/veltreon", destination: "/veltreon.html" },
      ],
    };
  },
};

export default nextConfig;
