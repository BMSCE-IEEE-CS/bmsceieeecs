import React from "react";
import Carousel from "../Carousel";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const title = Montserrat({ subsets: ["latin"] });

const Gallery = () => {
  return (
    <div id="gallery" className="w-full flex flex-col py-10 items-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`${title.className} text-orange-400 text-4xl md:text-5xl font-bold text-center`}
      >
        Gallery
      </motion.h1>{" "}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-10"
      >
        <Carousel />
      </motion.div>
      {/* <div className="mt-10 ">
        <Link href="google.com" target="_blank">
          Open Gallery
        </Link>
      </div> */}
    </div>
  );
};

export default Gallery;
