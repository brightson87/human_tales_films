import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#060708",
        bgSecondary: "#0c0e10",
        bgCard: "#111417",
        accentOrange: "#ff4d15",
        accentOrangeBright: "#ff622e",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
