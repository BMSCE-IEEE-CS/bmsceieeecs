import React from "react";

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
