import Navbar from "@/components/CSPS/Navbar";

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
