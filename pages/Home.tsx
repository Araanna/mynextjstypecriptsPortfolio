// pages/Home.tsx (as per your current structure)
"use client"; // Keep this, as it's a client component

import ExperienceBoard from "../app/components/ExperienceBoard"; // Adjust path as needed
import { githubProjects } from "@/lib/githubProjects";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiCamera, FiGithub, FiCode } from "react-icons/fi";
// REMOVE: import { v2 as cloudinary } from 'cloudinary'; // NOT needed here
// REMOVE: CLOUDINARY_CLOUD_NAME, API_KEY, API_SECRET constants

// --- Types for Cloudinary Images ---
interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  folder?: string;
}

// --- WaveWord Component ---
const WaveWord = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
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

// --- GalleriesContent Component (Now fetches from your API route) ---
const GalleriesContent = () => {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        setError(null);

        // --- FETCH FROM YOUR NEXT.JS API ROUTE ---
        // This is the correct and secure way
        const response = await fetch('/api/cloudinary-gallery'); // Call your API route
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Frontend received gallery data:", data);

        setImages(data.resources as CloudinaryImage[] || []);

      } catch (err: any) {
        console.error("Failed to fetch gallery images (client-side via API route):", err);
        setError(err.message || "Failed to load gallery images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []); // Runs once on component mount

  if (loading) {
    return (
      <motion.div
        key="galleries-loading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center mt-8 text-purple-800 dark:text-gray-200"
      >
        Loading gallery... 📸
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        key="galleries-error"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center mt-8 text-red-500 dark:text-red-400"
      >
        {error}
      </motion.div>
    );
  }

  return (
    <motion.div
      key="galleries"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {images.length === 0 ? (
        <p className="text-center mt-8 text-purple-700 dark:text-gray-300">
          No images found in the "Tech Communities" gallery.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {images.map((image) => (
            <div
              key={image.public_id}
              className="bg-purple-200 dark:bg-gray-700 h-44 rounded-lg flex items-center justify-center overflow-hidden shadow-md"
            >
              <img
                src={image.secure_url}
                alt={`Image from ${image.folder || 'gallery'}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

// --- GithubHighlightsContent Component ---
const GithubHighlightsContent = () => (
  <motion.div
    key="github"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="mb-4">
      <h3 className="text-md font-bold text-purple-900 dark:text-gray-950 flex items-center gap-2">
        <FiGithub className="text-purple-600 dark:text-gray-950 text-sm" />
        Open for Contribution
      </h3>
      <p className="text-purple-700 dark:text-gray-900 text-xs font-semibold">Projects where I welcome contributors</p>
    </div>

    <div className="space-y-4">
      {githubProjects
        .filter(project => project.isOpenForCollaboration)
        .map(project => (
          <div key={project.id} className="p-2 border-2 border-purple-400 dark:border-gray-900 rounded-lg hover:shadow-2xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-purple-800 dark:text-gray-900">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {project.title}
                  </a>
                </h4>
                <p className="text-purple-600 dark:text-gray-900 text-xs font-semibold mt-1">{project.description}</p>
              </div>
              <span className="bg-purple-600/10 dark:bg-gray-700 text-purple-900 dark:text-gray-200 text-xs px-2 py-1 rounded-md whitespace-nowrap font-bold ">
                {project.techStack[0]}
              </span>
            </div>
            <div className="mt-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 dark:text-gray-900 dark:hover:text-black-950 text-[0.7rem]  font-semibold flex items-center gap-1"
              >
                <FiCode size={14} className="font-semibold" />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
    </div>

    <div className="mt-4 text-sm font-semibold text-purple-900 dark:text-gray-900">
      Want to collaborate? Feel free to open an issue or PR!
    </div>
  </motion.div>
);

// --- Home Component ---
interface HomeProps {
  setActiveSection: (section: string) => void;
}

const Home = ({ setActiveSection }: HomeProps) => {
  const [activeContent, setActiveContent] = useState<"galleries" | "github">(
    "galleries",
  );

  const handleHireMeClick = () => {
    setActiveSection("Contact");
    setTimeout(() => {
      const middleOfPage = window.innerHeight * 0.95 + window.scrollY;
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
      className="flex flex-col items-center justify-center min-h-screen relative pt-[2rem] md:pt-0
                 bg-gradient-to-b from-white via-purple-100 to-purple-300 text-purple-900 overflow-hidden
                 dark:bg-gradient-to-b dark:from-white dark:via-gray-100 dark:to-black-900 dark:text-gray-100"
      id="home-section"
    >
      <div className="mx-auto max-w-7xl w-full p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="flex flex-col items-left md:col-span-1">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mb-4 overflow-hidden border-4 border-white dark:border-gray-900 "
          >
            <img
              src="https://images.fineartamerica.com/images-medium-large-5/soap-bubble-with-a-pattern-of-colours-adam-hart-davisscience-photo-library.jpg"
              className="w-full h-full object-cover"
              alt="Profile Picture Placeholder - Soap bubble with colors"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[2.5rem] font-bold text-left text-purple-900 dark:text-gray-900"
          >
            Melanie Abalde
          </motion.h1>

          <div className="text-left">
            <div className="relative overflow-hidden h-10">
              <div className="relative flex flex-col animate-flip text-purple-800 dark:text-gray-950">
                <div className="flex items-center h-10 font-semibold text-md">
                  FullStack Developer
                </div>
                <div className="flex items-center h-10 font-semibold text-md">
                  Mobile Developer
                </div>
                <div className="flex items-center h-10 font-semibold text-md">
                  UI Designer
                </div>
              </div>
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-md font-semibold text-purple-800 dark:text-gray-900"
          >
            Creating Digital Experiences with Love & Passion
          </motion.h2>

          <div className="transform -translate-x-[8rem]">
            <ExperienceBoard />
          </div>

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
          >
            <motion.button
              onClick={handleHireMeClick}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 text-xs sm:text-sm px-4 py-2
                         dark:from-gray-700 dark:to-gray-800 dark:text-gray-100 dark:focus:ring-gray-500"
            >
              Work With Me
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-1 flex flex-col items-start w-full transform -translate-y-[5rem]">
          <div className="flex mb-4 w-full">
            <button
              onClick={() => setActiveContent("galleries")}
              className={`flex-1 py-4 font-semibold transition-all duration-300 rounded-l-sm  flex items-center justify-center gap-2  ${
                activeContent === "galleries"
                  ? "bg-purple-300 text-purple-800 shadow-lg dark:bg-gray-800 dark:text-gray-100 text-sm"
                  : "bg-purple-100 text-purple-700 dark:bg-gray-900 dark:text-gray-300 text-md"
              }`}
            >
              <FiCamera className="text-xl" />
            MY TECH JOURNEY
            </button>
            <button
              onClick={() => setActiveContent("github")}
              className={`flex-1 py-4 font-semibold transition-all duration-300 rounded-r-sm flex items-center justify-center gap-2 ${
                activeContent === "github"
                  ? "bg-purple-300 text-purple-800 shadow-lg dark:bg-gray-800 dark:text-gray-100"
                  : "bg-purple-100 text-purple-700 dark:bg-gray-900 dark:text-gray-300"
              }`}
            >
              <FiGithub className="text-lg" />
              Github
            </button>
          </div>
          {/* Content container with fixed dimensions */}
          <div className="w-full min-h-[400px]">
            {activeContent === "galleries" ? (
              <GalleriesContent />
            ) : (
              <GithubHighlightsContent />
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;