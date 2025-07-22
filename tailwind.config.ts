import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  darkMode: 'class',
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
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        flip: "show 20s linear infinite",
        scroll: "scroll 40s linear infinite", // Increased from 25s to 40s
        "scroll-slow": "scroll 120s linear infinite", // Increased from 90s to 120s
        "scroll-very-slow": "scroll 180s linear infinite", // Added new very slow option
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
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      addUtilities({
        '.animation-paused': {
          'animation-play-state': 'paused',
        },
      });
    },
  ],

  daisyui: {
    themes: [
      "accent",
      "dark",
      {
        retro: {
          primary: "#ef9995",
          secondary: "#a4cbb4",
          accent: "#ebdc99",
          neutral: "#7d7259",
          "base-100": "#f4e8c1",
          info: "#2563eb",
          success: "#16a34a",
          warning: "#d97706",
          error: "#dc2626",
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "0.5rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.98",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
} satisfies Config;