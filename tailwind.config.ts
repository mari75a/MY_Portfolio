import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0D",
        surface: "#111113",
        accent: "#E6FF00",
        accentSoft: "#CFFF00",
        text: "#EDEDED",
        muted: "#9CA3AF",
      },
      boxShadow: {
        glow: "0 0 30px rgba(230, 255, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
