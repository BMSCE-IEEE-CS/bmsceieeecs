import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CS Reach | BMSCE IEEE Computer Society",
  description:
    "CS Reach is the outreach programme of BMSCE IEEE Computer Society, introducing school students to computer science.",
  openGraph: {
    images: ["/og.jpg"],
    title: "CS Reach | BMSCE IEEE Computer Society",
    description:
      "CS Reach is the outreach programme of BMSCE IEEE Computer Society, introducing school students to computer science.",
  },
};


export default function CSReachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
