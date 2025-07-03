"use client";

import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`flex flex-col w-full min-h-screen items-center justify-center transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 w-full">
      <Hero />
    </div>
  );
}
