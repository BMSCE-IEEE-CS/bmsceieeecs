import SquareBg from "@/components/bg/Squares/Square";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | BMSCE IEEE Computer Society",
  description: "Events by BMSCE IEEE Computer Society",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <body className="relative flex flex-col items-center w-full min-h-screen overflow-x-hidden transition-opacity duration-700 ease-in-out">
        <SquareBg />

        {children}
      </body>
    </html>
  );
}
