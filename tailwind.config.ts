import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  darkMode: ["class", "class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/LinkPages/**/*.{ts,tsx}",
    "./LinkPages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cursive: ['"Dancing Script"', "cursive"], 
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        flip: "show 40s linear infinite",
        scroll: "scroll 25s linear infinite",
      },
      keyframes: {
        show: {
          "0%": {
            transform: "translateY(-300%)",
          },
          "5%": {
            transform: "translateY(-200%)",
          },
          "33%": {
            transform: "translateY(-200%)",
          },
          "38%": {
            transform: "translateY(-100%)",
          },
          "60%": {
            transform: "translateY(-100%)",
          },
          "71%": {
            transform: "translateY(0)",
          },
          "80%": {
            transform: "translateY(0)",
          },
          "90%": {
            transform: "translateY(0)",
          },
          "99.99%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-300%)",
          },
        },
        scroll: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
