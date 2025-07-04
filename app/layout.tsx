import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "BMSCE IEEE Computer Society",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${montserrat} antialiased bg-gradient-to-br from-amber-500 via-orange-400 to-black animate-grad-xy`}
      >
        {children}
      </body>
    </html>
  );
}
