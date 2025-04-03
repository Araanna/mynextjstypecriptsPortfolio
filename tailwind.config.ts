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
        flip: "flip 6s ease-in-out infinite",
        scroll: "scroll 25s linear infinite",
      },
      keyframes: {
        flip: {
          "0%, 32%": { transform: "translateY(0)" },
          "33%, 65%": { transform: "translateY(-33.33%)" },
          "66%, 99%": { transform: "translateY(-66.66%)" },
          "100%": { transform: "translateY(0)" }
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

  daisyui: {
    themes: [
      "light",
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