"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Lenis from "lenis";

type SlideWordProps = {
  direction: "left" | "right";
  top: string;
  progress: any;
  isMobile?: boolean;
};

export default function Slide(): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden">
      <div className="h-[0.2vh]" />
      <div
        ref={container}
        className="relative w-screen h-screen bg-yellow-300 border-none rounded-b-3xl"
      >
        {/* Desktop version (hidden on mobile) */}
        <div className="hidden md:block">
          <SlideWord direction="left" top="2%" progress={scrollYProgress} />
          <SlideWord direction="right" top="20%" progress={scrollYProgress} />
          <SlideWord direction="left" top="38%" progress={scrollYProgress} />
          <SlideWord direction="right" top="55%" progress={scrollYProgress} />
          <SlideWord direction="left" top="70%" progress={scrollYProgress} />
        </div>

        {/* Mobile version (hidden on desktop) */}
        <div className="md:hidden">
          <SlideWord direction="left" top="5%" progress={scrollYProgress} isMobile />
          <SlideWord direction="right" top="20%" progress={scrollYProgress} isMobile />
          <SlideWord direction="left" top="35%" progress={scrollYProgress} isMobile />
          <SlideWord direction="right" top="50%" progress={scrollYProgress} isMobile />
          <SlideWord direction="left" top="65%" progress={scrollYProgress} isMobile />
          <SlideWord direction="right" top="80%" progress={scrollYProgress} isMobile />
        </div>
      </div>
      <div className="h-[0.2vh]" />
    </main>
  );
}

const SlideWord: React.FC<SlideWordProps> = ({ direction, top, progress, isMobile }) => {
  const slideDirection = direction === "left" ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * slideDirection, -150 * slideDirection]
  );

  return (
    <motion.div
      style={{ x: translateX, top }}
      className="absolute flex items-center gap-1 whitespace-nowrap w-full"
    >
      {isMobile ? <MobilePhrase /> : <DesktopPhrase />}
    </motion.div>
  );
};

const DesktopPhrase: React.FC = () => {
  const words = ["Exploring", "new", "opportunities"];
  
  return (
    <div className="px-8 flex gap-5 items-center">
      {words.map((word, index) => (
        <motion.h1
          key={index}
          className="inline-flex items-center text-[6.5vw] font-serif drop-shadow-lg font-bold"
          initial={{ y: "-300%" }}
          animate={{
            y: [
              "-300%", // 0%
              "-200%", // 5%
              "-200%", // 33%
              "-100%", // 38%
              "-100%", // 60%
              "0%",    // 71%
              "0%",    // 80%
              "0%",    // 90%
              "0%",    // 99.99%
              "-300%"  // 100%
            ]
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
            times: [0, 0.05, 0.33, 0.38, 0.6, 0.71, 0.8, 0.9, 0.9999, 1]
          }}
        >
          {word}
        </motion.h1>
      ))}
    </div>
  );
};

const MobilePhrase: React.FC = () => {
  const phrase = "Exploring new opportunities";
  
  return (
    <motion.div 
      className="px-4 flex gap-1 items-center"
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity
      }}
    >
      <h1 className="inline-flex items-center text-[5vw] font-serif drop-shadow-lg font-bold">
        {phrase} • {phrase} • {phrase} • {phrase}
      </h1>
    </motion.div>
  );
};