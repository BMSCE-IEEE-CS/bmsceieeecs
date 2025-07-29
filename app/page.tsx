"use client";

import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import About from "@/components/About";
import Team from "@/components/Team";
import Initiatives from "@/components/Initiatives";
import Beam from "@/components/bg/utils/Beam/Beam";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        setContentVisible(true);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`flex flex-col w-full min-h-screen items-center bg-gray-800 justify-center transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full overflow-hidden transition-opacity duration-700 ease-in-out ${
        contentVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Beam />
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Initiatives />
    </div>
  );
}
