"use client";

import Hero from "@/components/Home/Hero";
import Loader from "@/components/Home/Loader";
import Navbar from "@/components/Home/Navbar";
import { useEffect, useState } from "react";
import About from "@/components/Home/About";
import Team from "@/components/Home/Team";
import Initiatives from "@/components/Home/Initiatives";
import Beam from "@/components/bg/Beam/Beam";
import Footer from "@/components/Home/Footer";
import ContactPage from "@/components/Home/Contact";
import Achievements from "@/components/Home/Achievements";
import Gallery from "@/components/Home/Gallery";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

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
      className={`relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden transition-opacity duration-700 ease-in-out ${
        contentVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Beam />
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Gallery />
      <Initiatives />
      <Achievements />
      <ContactPage />
      <Footer />
    </div>
  );
}
