"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCamera, FiGithub, FiCode } from "react-icons/fi";
import ExperienceBoard from "../app/components/ExperienceBoard";
import { githubProjects } from "@/lib/githubProjects";

// --- Types ---
interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  folder?: string;
}

// --- GalleriesContent Component ---
const GalleriesContent = () => {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/cloudinary-gallery");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImages(data.resources || []);
      } catch (err: any) {
        setError(err.message || "Failed to load gallery images.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  if (loading) {
    return (
      <motion.div
        key="loading"
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
        key="error"
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
                alt={`Image from ${image.folder || "gallery"}`}
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
      
    </div>

    <div className="space-y-4">
      {githubProjects
        .filter((project) => project.isOpenForCollaboration)
        .map((project) => (
          <div
            key={project.id}
            className="p-2 border-2 border-purple-400/60 dark:border-gray-900/20 rounded-lg hover:shadow-2xl transition-shadow"
          >
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
                <p className="text-purple-600 dark:text-gray-900 text-xs font-semibold mt-1">
                  {project.description}
                </p>
              </div>
              <span className="bg-purple-600/10 dark:bg-gray-700 text-purple-900 dark:text-gray-200 text-xs px-2 py-1 rounded-md font-bold">
                {project.techStack[0]}
              </span>
            </div>
            <div className="mt-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 dark:text-gray-900 dark:hover:text-black-950 text-[0.7rem] font-semibold flex items-center gap-1"
              >
                <FiCode size={14} className="font-semibold" />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
    </div>

    <div className="mt-4 space-y-2">
      <h3 className="bg-purple-800/20 dark:bg-slate-100 p-1 rounded-sm text-xs font-semibold text-purple-900 dark:text-gray-950 w-max text-center">
        My GitHub Contributions
      </h3>
      <img
        src="https://ghchart.rshah.org/6C3082/Araanna"
        alt="GitHub Contributions"
        className="w-full max-w-xl dark:hidden"
  />
  <img
    src="https://ghchart.rshah.org/6B7280/Araanna"
    alt="GitHub Contributions"
    className="w-full max-w-xl hidden dark:block"
      />
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
  const [activeContent, setActiveContent] = useState<"galleries" | "github">("galleries");

  const handleHireMeClick = () => {
    setActiveSection("Contact");
    setTimeout(() => {
      const middleOfPage = window.innerHeight * 0.95 + window.scrollY;
      window.scrollTo({ top: middleOfPage, behavior: "smooth" });
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
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:col-span-1">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mb-4 overflow-hidden border-4 border-white dark:border-gray-900"
          >
            <img
              src="https://images.fineartamerica.com/images-medium-large-5/soap-bubble-with-a-pattern-of-colours-adam-hart-davisscience-photo-library.jpg"
              className="w-full h-full object-cover"
              alt="Profile Picture"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[2.2rem] sm:text-[2.5rem] font-bold text-purple-900 dark:text-gray-900"
          >
            Melanie Abalde
          </motion.h1>

          <div className="w-full flex justify-center md:justify-start">
            <div className="relative overflow-hidden h-10">
              <div className="relative flex flex-col animate-flip text-purple-800 dark:text-gray-950">
                <div className="flex items-center h-10 font-semibold text-md">FullStack Developer</div>
                <div className="flex items-center h-10 font-semibold text-md">Mobile Developer</div>
                <div className="flex items-center h-10 font-semibold text-md">UI Designer</div>
              </div>
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm md:text-md font-semibold text-purple-800 dark:text-gray-900 mt-2"
          >
            Creating Digital Experiences with Love & Passion
          </motion.h2>
 <div className="w-full max-w-lg flex justify-center items-center md:block md:-translate-x-[5rem]">
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
              y: { repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" },
            }}
            className=" flex flex-col items-center md:items-start w-full"
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
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full transform md:-translate-y-[5rem]">
          <div className="flex mb-4 w-full max-w-sm md:max-w-full">
            <button
              onClick={() => setActiveContent("galleries")}
              className={`flex-1 py-3 font-semibold transition-all duration-300 rounded-l-sm flex items-center justify-center gap-2 text-sm ${
                activeContent === "galleries"
                  ? "bg-purple-300 text-purple-800 shadow-lg dark:bg-gray-800 dark:text-gray-100"
                  : "bg-purple-100 text-purple-700 dark:bg-gray-900 dark:text-gray-300"
              }`}
            >
              <FiCamera className="text-xl" />
              MY TECH JOURNEY
            </button>
            <button
              onClick={() => setActiveContent("github")}
              className={`flex-1 py-3 font-semibold transition-all duration-300 rounded-r-sm flex items-center justify-center gap-2 text-sm ${
                activeContent === "github"
                  ? "bg-purple-300 text-purple-800 shadow-lg dark:bg-gray-800 dark:text-gray-100"
                  : "bg-purple-100 text-purple-700 dark:bg-gray-900 dark:text-gray-300"
              }`}
            >
              <FiGithub className="text-lg" />
              GitHub
            </button>
          </div>

          <div className="w-full min-h-[400px]">
            {activeContent === "galleries" ? <GalleriesContent /> : <GithubHighlightsContent />}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;