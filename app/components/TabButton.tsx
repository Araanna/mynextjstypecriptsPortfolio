import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active
    ? "text-gray-800 dark:text-purple-200 hover:text-gray-900 dark:hover:text-purple-300"   
    : "text-purple-500 dark:text-gray-400 hover:text-purple-700 dark:hover:text-gray-300";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-400 dark:bg-gray-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;