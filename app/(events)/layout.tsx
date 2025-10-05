export default function EventsLayout({
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
