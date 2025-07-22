import { create } from "zustand";

type ThemeState = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  initializeTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: false,

  toggleTheme: () => {
    set((state) => {
      const newMode = !state.isDarkMode;
      document.body.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return { isDarkMode: newMode };
    });
  },

  initializeTheme: () => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    document.body.classList.toggle("dark", isDark);
    set({ isDarkMode: isDark });
  },
}));