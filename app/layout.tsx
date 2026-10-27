import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import CustomCursor from "@/components/Cursor";
import { SITE_URL, SITE_DESCRIPTION, SITE_KEYWORDS, STRUCTURED_DATA } from "@/lib/seo";

const font = Space_Grotesk({ subsets: ["latin"] });

const TITLE = "BMSCE IEEE Computer Society | Hackathons & Tech Events, BMS College of Engineering, Bengaluru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: "BMSCE IEEE Computer Society",
  authors: [{ name: "BMSCE IEEE Computer Society", url: SITE_URL }],
  alternates: { types: { "text/plain": "/llms.txt" } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "BMSCE IEEE Computer Society",
    locale: "en_IN",
    title: TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "BMSCE IEEE Computer Society: Learn, Build, Lead" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og.jpg"],
  },
  other: { "geo.region": "IN-KA", "geo.placename": "Bengaluru" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${font.className} antialiased text-white bg-gray-800`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c") }}
        />
        <Providers>
          {/* <CustomCursor /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
