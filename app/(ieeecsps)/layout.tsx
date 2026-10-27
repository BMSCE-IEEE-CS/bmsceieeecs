import Navbar from "@/components/CSPS/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CS Project Series | BMSCE IEEE Computer Society",
  description:
    "The CS Project Series by BMSCE IEEE Computer Society: hands-on student projects at BMS College of Engineering, Bengaluru.",
  openGraph: {
    images: ["/og.jpg"],
    title: "CS Project Series | BMSCE IEEE Computer Society",
    description:
      "The CS Project Series by BMSCE IEEE Computer Society: hands-on student projects at BMS College of Engineering, Bengaluru.",
  },
};


export default function IEEECSPSLayout({
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
