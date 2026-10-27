import Navbar from "@/components/Wings/Navbar";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WINGS | BMSCE IEEE Computer Society",
  description:
    "WINGS is an initiative of BMSCE IEEE Computer Society at BMS College of Engineering, Bengaluru.",
  openGraph: {
    images: ["/og.jpg"],
    title: "WINGS | BMSCE IEEE Computer Society",
    description:
      "WINGS is an initiative of BMSCE IEEE Computer Society at BMS College of Engineering, Bengaluru.",
  },
};


export default function WingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
