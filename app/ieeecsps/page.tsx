import Hero from "@/components/CSPS/Hero";
import Navbar from "@/components/CSPS/Navbar";
import React from "react";

const CSPSHome = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default CSPSHome;
