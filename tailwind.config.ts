import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F38F2D",
        secondary: "#009ED6",
        heading: "#183754",
        text: "#5a5a5a",
        // skyblue: '#daf0ff',
      },
    },
  },
  plugins: [],
};
export default config;
