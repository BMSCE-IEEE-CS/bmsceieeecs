import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900 text-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 clip-path-hero z-0" />
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center h-full px-6 text-center sm:text-left">
        <div className="mb-10 sm:mb-0 sm:mr-16 bg-white/60 md:bg-white backdrop-blur-md p-4 rounded-lg w-5/6 md:w-1/4 shadow-blue">
          <Image
            src="/images/wings.png"
            alt="Wings Logo"
            width={250}
            height={250}
            className="w-full"
          />
        </div>

        <div className="max-w-xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">
            A community for creators in Competitive Programming and Web
            Development
          </h1>
          <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
            <button className="px-8 py-3 border-2 border-white bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-xl transition duration-300">
              Roadmaps
            </button>
            <button className="px-8 py-3 bg-white hover:bg-white/20 border-2 border-white hover:text-white text-blue-600 font-semibold text-lg rounded-xl transition duration-300">
              Practice
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import Image from "next/image";
// import React from "react";

// const Hero = () => {
//   return (
//     <section className="w-full overflow-hidden">
//       {/* Top Part with Background Image */}
//       <div className="h-[70vh] w-full bg-[url('/images/wings/hero.jpg')] bg-cover bg-center relative flex items-center justify-center text-white">
//         {/* Overlay (optional) */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center text-center px-4">
//           <Image
//             src="/images/wings.png"
//             alt="Wings Logo"
//             width={200}
//             height={200}
//             className="mb-6"
//           />
//           <h1 className="text-3xl sm:text-4xl font-bold max-w-xl leading-snug">
//             A community for creators in <br />
//             Competitive Programming and Web Development
//           </h1>
//         </div>
//       </div>

//       {/* Bottom Part with Buttons */}
//       <div className="h-[30vh] w-full bg-white flex items-center justify-center px-4">
//         <div className="flex gap-6 flex-wrap justify-center">
//           <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl transition duration-300">
//             Roadmaps
//           </button>
//           <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-blue-600 font-semibold text-lg rounded-xl transition duration-300">
//             Practice
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
