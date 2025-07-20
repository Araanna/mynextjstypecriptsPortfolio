import React from "react";
import {
  Laptop,
  Code,
  Feather,
  Database,
  GitFork,
  Cloud,
  Circle,
  ArrowRight,
} from "lucide-react";

const ScrollingText: React.FC = () => {
  const techItems = [
    { name: "REACT", icon: <Laptop className="inline mr-1 w-4 h-4" /> },
    { name: "DJANGO", icon: <Code className="inline mr-1 w-4 h-4" /> },
    { name: "TYPESCRIPT", icon: <Code className="inline mr-1 w-4 h-4" /> },
    { name: "NEXTJS", icon: <ArrowRight className="inline mr-1 w-4 h-4" /> },
    { name: "TAILWIND CSS", icon: <Feather className="inline mr-1 w-4 h-4" /> },
    { name: "FRAMER MOTION", icon: <Code className="inline mr-1 w-4 h-4" /> },
    { name: "REDUX", icon: <Circle className="inline mr-1 w-4 h-4" /> },
    { name: "ZUSTAND", icon: <Code className="inline mr-1 w-4 h-4" /> },
    { name: "PRISMA ORM", icon: <Database className="inline mr-1 w-4 h-4" /> },
    { name: "POSTGRESQL", icon: <Database className="inline mr-1 w-4 h-4" /> },
    { name: "MONGODB", icon: <Database className="inline mr-1 w-4 h-4" /> },
    { name: "GRAPHQL", icon: <Code className="inline mr-1 w-4 h-4" /> },
    { name: "REST APIS", icon: <Cloud className="inline mr-1 w-4 h-4" /> },
    { name: "WEBSOCKETS", icon: <GitFork className="inline mr-1 w-4 h-4" /> },
  ];

  const renderScrollingContent = () => {
    return techItems.map((tech, index) => (
      <span key={index} className="inline-flex items-center mx-4"> {/* Increased mx-2 to mx-4 for more spacing */}
        {tech.icon}
        {tech.name}
      </span>
    ));
  };

  return (
    <div className="overflow-hidden whitespace-nowrap group bg-black dark:bg-[#ECD9FF]">
      <div 
        className="inline-flex items-center text-[#ECD9FF] dark:text-black text-sm font-semibold py-[0.9rem] animate-scroll-very-slow group-hover:animation-paused"
        style={{
          paddingRight: "100%",
        }}
      >
        {renderScrollingContent()}
        {renderScrollingContent()}
        {renderScrollingContent()}
        {renderScrollingContent()}
        {renderScrollingContent()}
        {renderScrollingContent()}
      </div>
    </div>
  );
};

export default ScrollingText;