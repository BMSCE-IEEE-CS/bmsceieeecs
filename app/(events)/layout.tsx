import SquareBg from "@/components/bg/Squares/Square";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | BMSCE IEEE Computer Society, Bengaluru",
  description:
    "Hackathons, workshops, talks and competitions by BMSCE IEEE Computer Society at BMS College of Engineering, Bengaluru, from 2021 to today, including Parallax, a 24-hour national-level cybersecurity hackathon.",
  openGraph: {
    images: ["/og.jpg"],
    title: "Events | BMSCE IEEE Computer Society, Bengaluru",
    description:
      "Hackathons, workshops, talks and competitions by BMSCE IEEE Computer Society at BMS College of Engineering, Bengaluru, from 2021 to today, including Parallax, a 24-hour national-level cybersecurity hackathon.",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <body className="relative flex flex-col items-center w-full min-h-screen overflow-x-hidden transition-opacity duration-700 ease-in-out text-white">
        <SquareBg />

        {children}
      </body>
    </html>
  );
}
