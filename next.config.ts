import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The CV still links to the old Vercel address: send those visits to the same page on the domain.
  // Preview deployments keep their own URLs.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ihor-yeromich(-iota)?\.vercel\.app" }],
        destination: "https://www.yeromich.de/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
