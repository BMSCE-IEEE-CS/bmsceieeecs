import type { MetadataRoute } from "next";
import { SITE_URL, PARALLAX_URL } from "@/lib/seo";

// Pages of this site plus the hosted event sites. Every Cyber Month event
// page is listed in /cybermonth/sitemap.xml (see robots.txt).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1, images: [`${SITE_URL}/og.jpg`] },
    { url: PARALLAX_URL, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/cybermonth`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/bits`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/wings`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/ieeecsps`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/csreach`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
