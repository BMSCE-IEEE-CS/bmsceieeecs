"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // ✅ Hooks must always run
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 420, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 420, damping: 24 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true);
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
    }
  }, []);

  // 🧠 Only control rendering here — not hook calls
  if (!mounted || isTouchDevice) return null;

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .hoverable")) setIsHovering(true);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .hoverable")) setIsHovering(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "70px",
          height: "70px",
          background:
            "radial-gradient(circle, rgba(255,140,0,0.35), transparent 70%)",
          filter: "blur(15px)",
        }}
        animate={{
          scale: isHovering ? [1, 1.25, 1] : [1, 1.1, 1],
          opacity: isHovering ? [0.7, 0.9, 0.7] : [0.4, 0.6, 0.4],
        }}
        transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 via-yellow-300 to-amber-400"
        style={{
          boxShadow: isHovering
            ? "0 0 40px rgba(255,180,60,1)"
            : "0 0 20px rgba(255,165,0,0.8)",
        }}
        animate={{
          scale: isHovering ? [1, 1.5, 1] : [1, 1.25, 1],
          rotate: isHovering ? [0, 6, -6, 0] : [0, 0, 0],
        }}
        transition={{ repeat: Infinity, duration: 1 }}
      />

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-orange-400/80"
          style={{
            width: `${16 + i * 12}px`,
            height: `${16 + i * 12}px`,
            boxShadow: "0 0 30px rgba(255,165,0,0.5)",
            filter: "blur(0.5px)",
          }}
          animate={{
            scale: isHovering
              ? [0.7, 1.6 + i * 0.2, 0.7]
              : [0.5, 1.3 + i * 0.2, 0.5],
            opacity: [0.9, 0, 0.9],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.3 + i * 0.35,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
