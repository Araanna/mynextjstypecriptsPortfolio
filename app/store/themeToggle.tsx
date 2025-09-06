// ThemeToggle.tsx
"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useThemeStore } from "./themeStore";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className={`text-2xl hover:opacity-90 text-gray-800 dark:text-purple-300`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;