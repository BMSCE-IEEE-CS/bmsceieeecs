import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-700 to-gray-900 w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl md:text-7xl animate-pulse">
        Coming<span className="text-amber-500">Soon</span>
      </h1>
    </div>
  );
}
