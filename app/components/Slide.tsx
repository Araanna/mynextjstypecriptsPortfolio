"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Lenis from "lenis";

type SlideWordProps = {
  direction: "left" | "right";
  top: string;
  progress: any;
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
        className="relative w-screen h-screen bg-yellow-300 border-none rounded-b-3xl "
      >
        {/* Position each SlideWord vertically */}
        <SlideWord direction="left" top="2%" progress={scrollYProgress} />
        <SlideWord direction="right" top="20%" progress={scrollYProgress} />
        <SlideWord direction="left" top="38%" progress={scrollYProgress} />
        <SlideWord direction="right" top="55%" progress={scrollYProgress} />
        <SlideWord direction="left" top="70%" progress={scrollYProgress} />
      </div>
      <div className="h-[0.2vh]" />
    </main>
  );
}

const SlideWord: React.FC<SlideWordProps> = ({ direction, top, progress }) => {
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
      <Phrase />
    </motion.div>
  );
};

const Phrase: React.FC = () => {
  const words = ["Exploring", "new", "opportunities"];
  return (
    <div className=" px-8 flex gap-5 items-center">
      {words.map((word, index) => (
        <h1
          key={index}
          className="inline-flex items-center text-[6.5vw] font-serif drop-shadow-lg font-bold"
        >
          {word}
        </h1>
      ))}
    </div>
  );
};
