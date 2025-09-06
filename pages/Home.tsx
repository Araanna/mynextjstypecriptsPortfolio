"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCamera, FiGithub, FiCode } from "react-icons/fi";
import ExperienceBoard from "../app/components/ExperienceBoard";
import { githubProjects } from "@/lib/githubProjects";
import { mapImageResources } from "@/lib/cloudinary";
import { cn } from "@/lib/utils";
import { socialLinks } from "../lib/links.ts";
import Link from "next/link";
import { useThemeStore } from "../app/store/themeStore.ts";

// Define the MappedImage type if not imported from elsewhere
type MappedImage = {
  id: string;
  image: string;
  title: string;
  displayName: string;
};

// --- GalleriesContent Component ---
const GalleriesContent = () => {
  const { isDarkMode } = useThemeStore(); // ✅ use hook at top
  const [images, setImages] = useState<MappedImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "/api/cloudinary-gallery?folder=tech-communities",
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error || `HTTP error! status: ${response.status}`,
          );
        }
        const data = await response.json();
        const mapped = mapImageResources(data.resources || []);
        setImages(mapped);
      } catch (err: any) {
        setError(err.message || "Failed to load gallery images.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  const textColor = isDarkMode ? "text-purple-300" : "text-gray-800";

  if (loading) {
    return (
      <motion.div className="text-center mt-8 text-purple-800 dark:text-gray-400 text-xs font-semibold">
        LOADING GALLERY...
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div className="text-center mt-8 text-red-500 dark:text-red-400">
        {error}
      </motion.div>
    );
  }

  return (
    <motion.div>
      {images.length === 0 ? (
        <p className="text-center mt-8 text-purple-700 dark:text-gray-300">
          No images found in the "Tech Communities" gallery.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group bg-purple-200 dark:bg-gray-700 h-44 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.displayName}
              </div>
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
      <h3 className="text-sm font-bold text-purple-900 dark:text-gray-950 flex items-center gap-2">
        <FiGithub className="text-purple-600 dark:text-gray-950 text-md font-apple" />
        Open for Contribution
      </h3>
    </div>

    <div className="space-y-4">
      {githubProjects
        .filter((project) => project.isOpenForCollaboration)
        .map((project) => (
          <div
            key={project.id}
            className="p-2 border border-purple-400 dark:border-gray-900/20 rounded-lg hover:shadow-2xl transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h5 className="font-semibold text-purple-900 dark:text-gray-900 text-xs">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-apple"
                  >
                    {project.title}
                  </a>
                </h5>
                <p className="text-purple-600 dark:text-gray-900 text-xs font-medium mt-1 text-left">
                  {project.description}
                </p>
              </div>
              <span
                className={cn(
                  "text-xs px-2 py-1 font-apple rounded-md font-medium",
                  "backdrop-blur-sm backdrop-saturate-150 border border-white/10",
                  "text-purple-900 bg-purple-500/10",
                  "dark:text-black dark:bg-gray-700/20 dark:border-white/10",
                )}
              >
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

   <div className="mt-4 text-sm font-semibold mb-8">
<p
  className="
    text-purple-900       /* small light */
    dark:text-white       /* small dark */
    lg:text-purple-900    /* lg light */
    lg:dark:text-black    /* lg dark */
  "
>
  Want to contribute in my GitHub projects? Feel free to open an issue or PR!
</p>





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
  const [isMobile, setIsMobile] = useState(false);

  const { isDarkMode } = useThemeStore();
  const textColor = isDarkMode ? "text-gray-800" : "text-purple-900";

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Set initial value
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Clean up
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleHireMeClick = () => {
    setActiveSection("Contact");
    setTimeout(() => {
      const middleOfPage = window.innerHeight * 0.95 + window.scrollY;
      window.scrollTo({ top: middleOfPage, behavior: "smooth" });
    }, 100);
  };

  // Simple Tooltip component
  const Tooltip = ({
    title,
    children,
    placement = "bottom",
  }: {
    title: string;
    children: React.ReactNode;
    placement?: string;
  }) => {
    return (
      <div className="relative group">
        {children}
        <span
          className={`
          absolute 
          ${placement === "bottom" ? "top-full mt-2" : "bottom-full mb-2"} 
          left-1/2 transform -translate-x-1/2
          px-2 py-1 
          bg-black text-white text-xs 
          rounded 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300
          whitespace-nowrap
          z-10
        `}
        >
          {title}
        </span>
      </div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen relative pt-[8rem] md:pt-0 
                 bg-gradient-to-b from-white via-purple-200 to-purple-300 text-purple-900 overflow-hidden
                 dark:bg-gradient-to-b dark:from-white dark:via-gray-100 dark:to-black-900 dark:text-gray-100"
      id="home-section"
    >
      <div className="mx-auto max-w-7xl w-full p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:col-span-1 -mt-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mb-4 overflow-hidden border-4 border-white dark:border-gray-900 "
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
            className="text-[2.2rem] sm:text-[2.5rem] font-apple font-bold text-purple-900 dark:text-gray-900"
          >
            Melanie Abalde
          </motion.h1>

          <div className="w-full flex justify-center md:justify-start">
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
            className="text-sm md:text-md font-semibold text-purple-800 dark:text-gray-900 "
          >
            Creating Digital Experiences with Love & Passion
          </motion.h2>

          <div className="w-full max-w-lg flex justify-center items-center md:block md:-translate-x-[5rem]">
            <ExperienceBoard />
          </div>
          <div className="flex space-x-4 md:space-x-6">
            {socialLinks.map(
              ({ href, label, title, Icon, colorClass, download }) => (
                <Tooltip key={label} title={title} placement="bottom">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative hover:opacity-90 ${textColor} ${colorClass}`}
                    aria-label={label}
                    download={download ? true : undefined}
                  >
                    <Icon size={isMobile ? 20 : 24} />
                  </a>
                </Tooltip>
              ),
            )}
          </div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -5, 0] }}
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
            className="flex flex-col items-center md:items-start w-full"
          >
            <motion.button
              onClick={handleHireMeClick}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 text-xs sm:text-sm px-4 py-2
                         dark:from-gray-700 dark:to-gray-800 dark:text-gray-100 dark:focus:ring-gray-500 -mx-2 my-6"
            >
              Work With Me
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full transform md:-translate-y-[4rem]">
          <div className="flex mb-4 w-full max-w-sm md:max-w-full">
            <button
              onClick={() => setActiveContent("galleries")}
              className={cn(
                "flex-1 py-3 font-semibold transition-all duration-300 rounded-l-sm flex items-center justify-center gap-2 text-xs",
                "backdrop-blur-xl backdrop-saturate-150 border border-white/10",
                activeContent === "galleries"
                  ? "bg-purple-500/20 text-purple-900 dark:bg-gray-800/30 dark:text-black"
                  : "bg-purple-500/10 text-purple-700 dark:bg-gray-800/20 dark:text-gray-800",
              )}
            >
              <FiCamera className="text-lg font-bold" />
              MY TECH JOURNEY
            </button>

            <button
              onClick={() => setActiveContent("github")}
              className={cn(
                "flex-1 py-3 font-semibold transition-all duration-300 rounded-r-sm flex items-center justify-center gap-2 text-xs",
                "backdrop-blur-xl backdrop-saturate-150 border border-white/30",
                activeContent === "github"
                  ? "bg-purple-500/20 text-purple-900 dark:bg-gray-800/30 dark:text-black"
                  : "bg-purple-500/10 text-purple-700 dark:bg-gray-800/20 dark:text-gray-800",
              )}
            >
              <FiGithub className="text-lg" />
              GitHub
            </button>
          </div>

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
