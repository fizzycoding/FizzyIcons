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
        brand: {
          yellow: "#FFDE59",
          yellowHover: "#FACC15",
          bg: "#FAF8F5",
          dark: "#141416",
          gray: "#6E6E73",
          border: "#18181B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        handwriting: ["var(--font-handwriting)", "cursive"],
      },
      boxShadow: {
        brutal: "3px 3px 0px 0px #18181B",
        "brutal-lg": "5px 5px 0px 0px #18181B",
        "brutal-xl": "8px 8px 0px 0px #18181B",
        "yellow-brutal": "6px 6px 0px 0px #FFDE59",
      },
    },
  },
  plugins: [],
};

export default config;

