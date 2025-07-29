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
      className="bg-white/30 flex flex-col items-center px-8 py-4 rounded-xl backdrop-blur-md"
    >
      <h1 className="font-black text-3xl text-white">{stat}+</h1>
      <p className="text-xl text-gray-300">{text}</p>
    </div>
  );
};

const Stat = () => {
  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center w-3/4 mx-auto">
        <StatComponent value={1084} text="Members" />
        <StatComponent value={70} text="Events" />
        <StatComponent value={6} text="Prestigious Awards" />
      </div>
    </div>
  );
};

export default Stat;
