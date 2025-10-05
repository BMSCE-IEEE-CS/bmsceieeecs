import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Stat from "./Stat";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col animate-grad-xy min-h-screen w-full items-center justify-center px-4 py-20 text-white"
    >
      <div className="flex flex-col">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl w-full gap-8">
          <p className="text-justify text-sm sm:text-lg md:w-1/2">
            BMSCE IEEE Computer Society, started in 2021, saw more than 400
            participants enrolling in the first year itself. The chapter has
            since then worked together to enhance and upskill the technical
            knowledge of its members. The events covered a variety of fields
            from the national level hackathons which saw tech enthusiasts around
            the nation participating to fun events enriching the participants'
            cognitive skills. This year we witnessed over 15 successful events
            held both in the online and offline mode.
          </p>
          <Image
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 rounded-2xl"
            src="/images/bmsceieeecs.png"
            width={500}
            height={500}
            alt="logo"
          />
        </div>
        <Stat />
      </div>

      <Link
        href="#about"
        className="absolute bottom-6 animate-bounce p-3 rounded-full bg-white text-black hover:shadow-xl transition"
        aria-label="Scroll to About section"
      >
        <FaArrowDown className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default Hero;
