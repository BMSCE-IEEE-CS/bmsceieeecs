import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="h-[70vh] w-full bg-[url('/images/wings/hero.jpg')] bg-cover bg-center relative flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <Image
            src="/images/cslogoloader.png"
            alt="CS Project Series Logo"
            width={180}
            height={180}
            className="mb-6"
          />
          <h1 className="text-3xl sm:text-4xl font-bold max-w-2xl leading-snug mb-4">
            IEEE CS Project Series
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl leading-relaxed">
            Turn your ideas into impactful projects with expert mentorship,
            collaboration, and a chance to publish — exclusively for IEEE CS
            members.
          </p>
        </div>
      </div>

      <div className="h-[30vh] w-full bg-white flex items-center justify-center px-4">
        <div className="flex gap-6 flex-wrap justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl transition duration-300">
            View Projects
          </button>
          <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-blue-600 font-semibold text-lg rounded-xl transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
