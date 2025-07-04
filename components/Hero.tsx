import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col animate-grad-xy min-h-screen w-full items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-3/4 gap-6">
        <p className="text-justify">
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
          className="w-3/4 md:w-1/2 p-4 rounded-2xl bg-white shadow-xl hover:shadow-2xl"
          src="/images/bmsceieeecsblack.png"
          width={500}
          height={500}
          alt="logo"
        />
      </div>
      <Link
        className="absolute bottom-8 animate-bounce p-2 rounded-full bg-white hover:shadow-2xl transition"
        href="#"
      >
        <FaArrowDown />
      </Link>
    </div>
  );
};

export default Hero;
