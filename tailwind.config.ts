import type { Config } from "tailwindcss";

export default {
  mode: "jit",
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
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        flip: "show 40s linear infinite",
        scroll: "scroll 25s linear infinite",
      },
      keyframes: {
        flip: {
          // Changed from 'show' to 'flip'
          "0%, 33%": { transform: "translateY(0)" }, // FullStack Developer
          "33.1%, 66%": { transform: "translateY(-100%)" }, // Mobile Developer
          "66.1%, 99.9%": { transform: "translateY(-200%)" }, // UI Designer
          "100%": { transform: "translateY(0)" }, // Reset
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
          "0%": { transform: "translateX(100%)" },
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
  ],

  // DaisyUI config with retro theme
  daisyui: {
    themes: [
      "accent", // default light theme
      "dark", // default dark theme
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
    darkTheme: "dark", // default dark theme
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
} satisfies Config;
