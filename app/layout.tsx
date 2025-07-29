import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
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
      <body className={`${font.className} antialiased text-white bg-gray-800`}>
        {children}
      </body>
    </html>
  );
}
