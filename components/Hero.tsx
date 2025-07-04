import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative flex flex-col animate-grad-xy min-h-screen w-full items-center justify-center px-4 py-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl w-full gap-8">
        <p className="text-justify text-sm sm:text-base leading-relaxed md:w-1/2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          numquam eveniet voluptatum. Labore debitis deleniti, veniam maxime
          dolor qui perspiciatis. Consequatur minus quis odit vel ipsa placeat
          incidunt fugit. Id? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Unde sit aspernatur tenetur. Totam facilis mollitia
          unde odio doloremque ex tenetur, soluta reiciendis est quaerat! Nisi
          voluptatum facere animi tenetur nam? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Vitae ipsam vero perferendis quidem
          dolorem, libero incidunt magni illum odio vel esse deleniti, illo, non
          dolorum culpa atque accusamus id exercitationem.
        </p>
        <Image
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 rounded-2xl bg-white shadow-xl hover:shadow-2xl"
          src="/images/bmsceieeecsblack.png"
          width={500}
          height={500}
          alt="logo"
        />
      </div>

      {/* Scroll Arrow to #about */}
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
