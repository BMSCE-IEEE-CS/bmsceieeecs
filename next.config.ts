import type { NextConfig } from "next";

// Cyber Month 2026 and CS BITS 2026 are separate sites (their own repos and
// Vercel projects). These rewrites show them at www.bmsceieeecs.in/cybermonth
// and /bits without touching anything else on this site. Each project
// serves everything under that same path, so its pages and assets resolve on
// this domain too.
const CYBER_MONTH_ORIGIN = "https://ieeecs-cybermonth.vercel.app";
const CS_BITS_ORIGIN = "https://cs-bits-2026.vercel.app";

const nextConfig: NextConfig = {
  // Short, shareable links to the Parallax hackathon page.
  async redirects() {
    return [
      { source: "/parallax", destination: "/cybermonth/events/parallax-hackathon", permanent: false },
      { source: "/hackathon", destination: "/cybermonth/events/parallax-hackathon", permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: "/cybermonth", destination: `${CYBER_MONTH_ORIGIN}/cybermonth` },
      { source: "/cybermonth/:path*", destination: `${CYBER_MONTH_ORIGIN}/cybermonth/:path*` },
      { source: "/bits", destination: `${CS_BITS_ORIGIN}/bits` },
      { source: "/bits/:path*", destination: `${CS_BITS_ORIGIN}/bits/:path*` },
    ];
  },
};

export default nextConfig;
