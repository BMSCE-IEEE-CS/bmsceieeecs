import SquareBg from "@/components/bg/Squares/Square";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <body className="relative flex flex-col items-center w-full min-h-screen overflow-hidden transition-opacity duration-700 ease-in-out">
        <SquareBg />

        {children}
      </body>
    </html>
  );
}
