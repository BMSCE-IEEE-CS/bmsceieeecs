import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BMSCE IEEE Computer Society",
  description: "Official website of BMSCE IEEE Computer Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${font.className} antialiased bg-gradient-to-br text-white from-slate-600 via-gray-700 to-slate-900 animate-grad-xy`}
      >
        {children}
      </body>
    </html>
  );
}
