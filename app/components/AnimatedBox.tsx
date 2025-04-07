"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const colors = ["#E4C087", "#CDC1FF", "#A2D2DF", "#987D9A"] as const;

type ColorType = (typeof colors)[number];

const boxStyle = {
  width: 50,
  height: 50,
  borderRadius: 5,
};

export default function AnimatedBox() {
  const [randomColor, setRandomColor] = useState<ColorType>(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      setRandomColor(colors[randomIndex]);
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        backgroundColor: randomColor,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
      style={{
        ...boxStyle,
        position: "fixed",
        left: "5%",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
      }}
    />
  );
}
