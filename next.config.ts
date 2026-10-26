import type { NextConfig } from "next";

// Cyber Month 2026 is a separate site (its own repo and Vercel project).
// These rewrites show it at www.bmsceieeecs.in/cybermonth without touching
// anything else on this site. The Cyber Month project serves everything
// under /cybermonth, so its pages and assets resolve on this domain too.
const CYBER_MONTH_ORIGIN = "https://ieeecs-cybermonth.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/cybermonth", destination: `${CYBER_MONTH_ORIGIN}/cybermonth` },
      { source: "/cybermonth/:path*", destination: `${CYBER_MONTH_ORIGIN}/cybermonth/:path*` },
    ];
  },
};

export default nextConfig;
