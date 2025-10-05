import Navbar from "@/components/Wings/Navbar";
import React from "react";

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
