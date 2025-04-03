"use client";

import { FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";

import ExperienceBoard from "../app/components/ExperienceBoard";
import { motion } from "framer-motion";

interface HomeProps {
  setActiveSection: (section: string) => void;
}

const Home = ({ setActiveSection }: HomeProps) => {
  const handleHireMeClick = () => {
    setActiveSection("Contact");
    setTimeout(() => {
      const contactElement = document.getElementById("contact-section");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen relative pt-[2rem] md:pt-0 bg-gradient-to-br from-gray-100 to-gray-50"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-stone-500/20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Hello, I'm Mela
            </span>
            <br />
            <div className="relative overflow-hidden h-12 sm:h-14 md:h-16 mt-2 sm:mt-3 md:mt-4">
              <div className="relative flex flex-col animate-flip">
                <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 text-neutral-800 p-1 text-xl sm:text-2xl md:text-3xl">
                  FullStack Developer
                </div>
                <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 text-neutral-800 p-1 text-xl sm:text-2xl md:text-3xl">
                  Mobile Developer
                </div>
                <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 text-neutral-800 p-1 text-xl sm:text-2xl md:text-3xl">
                  UI Designer
                </div>
              </div>
            </div>
          </motion.h1>

          {/* Additional headline */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-800 mt-6 md:mt-12 px-2"
          >
            Creating <span className="text-cyan-600">Website</span>,{" "}
            <span className="text-indigo-800/70">UI/UX with Figma</span>, and{" "}
            <span className="text-fuchsia-600/60">experiences</span>.
          </motion.h2>
        </div>

        {/* Hire Me Button */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8 md:mb-12 flex justify-center"
        >
          <button
            onClick={handleHireMeClick}
            className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-opacity-50 text-sm sm:text-base"
          >
            Hire Me
          </button>
        </motion.div>

        {/* Social links - stacked on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-gray-600 mb-8 md:mb-12"
        >
          <div className="flex flex-row items-center gap-3">
            <a
              href="https://www.linkedin.com/in/melanie-abalde-0a363a31b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 transition-colors hover:text-blue-600"
            >
              <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
          </div>

          <div className="flex flex-row items-center gap-3">
            <a
              href="https://dribbble.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 transition-colors hover:text-orange-500"
            >
              <FaDribbble className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
              <span>Dribbble</span>
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
          </div>

          <a
            href="https://www.instagram.com/arannnnnaaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 transition-colors hover:text-pink-600"
          >
            <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
            <span>Instagram</span>
          </a>
        </motion.div>

        {/* ExperienceBoard component - will naturally sink with the flow */}
        <div className="px-2 sm:px-0">
          <ExperienceBoard />
        </div>
      </div>

      {/* Subtle decorative element */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="h-2 w-2 rounded-full bg-gray-400"
        />
      </div>
    </motion.section>
  );
};

export default Home;
