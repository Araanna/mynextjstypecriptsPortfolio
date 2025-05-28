"use client";

import { FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";

import ExperienceBoard from "../app/components/ExperienceBoard";
import { motion } from "framer-motion";
import { useState } from "react";

// WaveWord Component (no sine wave animation)
const WaveWord = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <motion.span
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="inline-block px-1"
    >
      {children}
    </motion.span>
  );
};

// Home Component
interface HomeProps {
  setActiveSection: (section: string) => void;
}

const Home = ({ setActiveSection }: HomeProps) => {
  const handleHireMeClick = () => {
    setActiveSection("Contact");
    setTimeout(() => {
      // Calculate middle of the viewport
      const middleOfPage = window.innerHeight / 0.95 + window.scrollY;

      // Scroll to the middle of the page
      window.scrollTo({
        top: middleOfPage,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen relative pt-[2rem] md:pt-0 bg-gradient-to-br from-white to-stone-500/20"
      id="home-section"
    >
      <div className="mx-auto max-w-4xl w-full px-4 sm:px-6 py-8 md:py-12 md:px-12">
        {/* Combined headline with animated title */}
        <div className="text-center mb-8 md:mb-12">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-neutral-600/80 mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-stone-700/20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Hello, I'm Mela
            </span>
            <br />
            <div className="relative overflow-hidden h-12 sm:h-14 md:h-16 mt-2 sm:mt-3 md:mt-4">
              <div className="relative flex flex-col animate-flip">
                <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 text-slate-800 p-1 text-xl sm:text-2xl md:text-3xl">
                  FullStack Developer
                </div>
                <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 text-slate-800 p-1 text-xl sm:text-2xl md:text-3xl">
                  Mobile Developer
                </div>
                <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 text-slate-800 p-1 text-xl sm:text-2xl md:text-3xl">
                  UI Designer
                </div>
              </div>
            </div>
          </motion.h1>

          {/* Static headline */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-800 mt-6 md:mt-12 px-2 flex flex-wrap justify-center gap-x-2 text-center"
          >
            <WaveWord delay={0}>Creating</WaveWord>
            <WaveWord delay={0.1}>
              <span className="text-cyan-600">Website</span>,
            </WaveWord>
            <WaveWord delay={0.2}>UI/UX</WaveWord>
            <WaveWord delay={0.3}>
              <span className="text-indigo-800/70">with</span>
            </WaveWord>
            <WaveWord delay={0.4}>
              <span className="text-indigo-800/70">Figma</span>,
            </WaveWord>
            <WaveWord delay={0.5}>and</WaveWord>
            <WaveWord delay={0.6}>
              <span className="text-fuchsia-600/60">experiences</span>.
            </WaveWord>
          </motion.h2>
        </div>

        {/* Hire Me Button with floating effect */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            y: [0, -5, 0], // Floating effect
          }}
          transition={{
            delay: 0.6,
            duration: 0.6,
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            },
          }}
          className="mb-8 md:mb-12 flex justify-center"
        >
          <motion.button
            onClick={handleHireMeClick}
            className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-opacity-50 text-sm sm:text-base"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            Hire Me
          </motion.button>
        </motion.div>

       

        {/* ExperienceBoard component */}
        <div className="px-2 sm:px-0">
          <ExperienceBoard />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
