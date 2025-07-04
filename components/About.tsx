"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatComponentProp {
  value: number;
  text: string;
  duration?: number;
}

const StatComponent = ({ value, text, duration = 2000 }: StatComponentProp) => {
  const [stat, setStat] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const increment = Math.ceil(value / (duration / 30));
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setStat(current);
    }, 30);

    return () => clearInterval(interval);
  }, [inView, value, duration]);

  return (
    <div
      ref={ref}
      className="bg-black/50 flex flex-col items-center px-8 py-4 rounded-xl"
    >
      <h1 className="font-black text-3xl text-white">{stat}+</h1>
      <p className="text-xl text-gray-300">{text}</p>
    </div>
  );
};

const About = () => {
  return (
    // <div id="about" className="w-3/4 md:w-2/3 py-20">
    //   <div className="bg-black/25 px-8 py-4 rounded-xl">
    //     <p className="text-white">
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
    //       repudiandae aperiam fugiat id vero autem, nemo delectus consequuntur
    //       minima et laborum quae recusandae est tempore incidunt quaerat omnis
    //       hic! Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing
    //       elit. Accusamus autem nostrum soluta nesciunt dolorum repellendus
    //       atque sint minus ullam rerum totam quod tempora animi, vero dolorem
    //       quas accusantium porro corporis.
    //     </p>
    //   </div>
    // </div>

    <div id="about" className="w-full py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center w-3/4 mx-auto">
        <StatComponent value={1084} text="Members" />
        <StatComponent value={70} text="Events" />
        <StatComponent value={6} text="Prestigious Awards" />
      </div>
    </div>
  );
};

export default About;
