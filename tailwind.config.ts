import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  important: true,
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/LinkPages/**/*.{ts,tsx}",
    "./LinkPages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Dancing Script"', "cursive"],
        apple: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      // ✅ restore all Tailwind default colors
      colors: {
        ...colors,
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        flip: "show 20s linear infinite",
        scroll: "scroll 40s linear infinite",
        "scroll-slow": "scroll 120s linear infinite",
        "scroll-very-slow": "scroll 180s linear infinite",
      },
      keyframes: {
        flip: {
          "0%": { transform: "translateY(0)" },
          "33.33%": { transform: "translateY(0)" },
          "33.34%": { transform: "translateY(-100%)" },
          "66.66%": { transform: "translateY(-100%)" },
          "66.67%": { transform: "translateY(-200%)" },
          "99.99%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(0)" },
        },
        show: {
          "0%": { transform: "translateY(-300%)" },
          "5%": { transform: "translateY(-200%)" },
          "33%": { transform: "translateY(-200%)" },
          "38%": { transform: "translateY(-100%)" },
          "60%": { transform: "translateY(-100%)" },
          "71%": { transform: "translateY(0)" },
          "80%": { transform: "translateY(0)" },
          "90%": { transform: "translateY(0)" },
          "99.99%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-300%)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    require("@designbycode/tailwindcss-text-shadow")({
      shadowColor: "rgba(0, 0, 0, 0.55)",
      shadowBlur: "6px",
      shadowOffsetX: "12px",
      shadowOffsetY: "12px",
    }),
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void;
    }) {
      addUtilities({
        ".animation-paused": {
          "animation-play-state": "paused",
        },
      });
    },
  ],

  daisyui: {
    themes: true,
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} satisfies Config;
