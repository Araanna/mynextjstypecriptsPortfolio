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
      const middleOfPage = window.innerHeight / 0.95 + window.scrollY;
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
      className="flex flex-col items-center justify-center min-h-screen relative pt-[2rem] md:pt-0 bg-gradient-to-b from-white via-purple-100 to-purple-300 text-purple-900"
      id="home-section"
    >
      <div className="mx-auto max-w-4xl w-full px-4 sm:px-6 py-8 md:py-12 md:px-12">
        {/* Profile header inspired by Instagram */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mb-4 overflow-hidden border-4 border-white shadow-lg"
          >
            {/* Placeholder for profile image */}
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl font-bold text-purple-900 mb-1"
          >
            Melanie Abalde
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-purple-700 mb-4 italic text-center max-w-md"
          >
            Let all that you do be done in LOVE. 1 Corinth 16:14
          </motion.p>
          
          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-6 mb-6"
          >
            <div className="text-center">
              <div className="font-bold">89</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="font-bold">138</div>
              <div className="text-sm">Clients</div>
            </div>
            <div className="text-center">
              <div className="font-bold">135</div>
              <div className="text-sm">Collabs</div>
            </div>
          </motion.div>
        </div>

        {/* Combined headline with animated title */}
        <div className="text-center mb-8 md:mb-12">
          <div className="relative overflow-hidden h-12 sm:h-14 md:h-16 mt-2 sm:mt-3 md:mt-4">
            <div className="relative flex flex-col animate-flip">
              <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 text-purple-900 p-1 text-xl sm:text-2xl md:text-3xl">
                FullStack Developer
              </div>
              <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 text-purple-900 p-1 text-xl sm:text-2xl md:text-3xl">
                Mobile Developer
              </div>
              <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 text-purple-900 p-1 text-xl sm:text-2xl md:text-3xl">
                UI Designer
              </div>
            </div>
          </div>

          {/* Static headline */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-purple-800 mt-6 md:mt-12 px-2 flex flex-wrap justify-center gap-x-2 text-center"
          >
            <WaveWord delay={0}>Creating</WaveWord>
            <WaveWord delay={0.1}>
              <span className="text-pink-600">Digital</span>
            </WaveWord>
            <WaveWord delay={0.2}>Experiences</WaveWord>
            <WaveWord delay={0.3}>
              <span className="text-purple-600">with</span>
            </WaveWord>
            <WaveWord delay={0.4}>
              <span className="text-indigo-600">Love</span>
            </WaveWord>
            <WaveWord delay={0.5}>&</WaveWord>
            <WaveWord delay={0.6}>
              <span className="text-fuchsia-600">Passion</span>
            </WaveWord>
          </motion.h2>
        </div>

        {/* Hire Me Button with floating effect */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            y: [0, -5, 0],
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
            className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 text-sm sm:text-base"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            Work With Me
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 mb-8"
        >
          <a href="#" className="text-purple-700 hover:text-pink-600 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-purple-700 hover:text-blue-600 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-purple-700 hover:text-blue-800 transition-colors">
            <FaBehance size={24} />
          </a>
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