// store/themeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
  isDarkMode: boolean;
  theme: 'newlight' | 'halloween';
  initializeTheme: () => void;
  toggleTheme: () => void;
  setTheme: (theme: 'newlight' | 'halloween') => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      isDarkMode: false,
      theme: 'newlight',
      initializeTheme: () => {
        // Check for saved theme preference or system preference
        if (typeof window !== 'undefined') {
          const savedTheme = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          
          const initialTheme = savedTheme === 'halloween' ? 'halloween' : 
                            (prefersDark ? 'halloween' : 'newlight');
          
          set({ 
            theme: initialTheme,
            isDarkMode: initialTheme === 'halloween' 
          });
        }
      },
      toggleTheme: () => {
        const newTheme = get().theme === 'newlight' ? 'halloween' : 'newlight';
        set({ 
          theme: newTheme,
          isDarkMode: newTheme === 'halloween'
        });
      },
      setTheme: (theme) => {
        set({ 
          theme,
          isDarkMode: theme === 'halloween'
        });
      }
    }),
    {
      name: 'theme-storage', // name for the localStorage key
    }
  )
);