import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Stat from "./Stat";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col animate-grad-xy min-h-screen w-full items-center justify-center px-4 py-20 text-white"
    >
      <div className="flex flex-col">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-6xl w-full gap-8 mt-10">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeIn", delay: 0.2 }}
            className="text-justify text-sm sm:text-lg lg:w-1/2"
          >
            Established in 2021, BMSCE IEEE Computer Society quickly became a central hub for tech enthusiasts, attracting over 400 participants in its first year. Our core mission is to enhance and upskill the technical knowledge of our members, empowering them to become future leaders in computing. Through a dynamic mix of events - from <b> national-level hackathons to insightful workshops</b>, we foster a space for dialogue and innovation. Today, our chapter is a thriving community that has been recognized for its impact and contributions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <Image
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 rounded-2xl"
              src="/images/bmsceieeecs.png"
              width={500}
              height={500}
              alt="logo"
              priority
            />
          </motion.div>
        </div>
        <Stat />
      </div>

      <h2 className="text-3xl font-bold mb-4"><i>HAPPENING NOW!</i></h2>
      <div className="flex flex-col items-center justify-center w-full py-4 text-white">
        <Image
          src="/images/osw.png" 
          alt="Happening Now!"
          width={600}
          height={600}
          className="mb-10"
        />
        
        <Link
          href="https://osweek.bmsceieeecs.in" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-orange-500/60 text-white font-semibold rounded-lg hover:bg-orange-500 transition"
        >
          Visit Website
        </Link>
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
