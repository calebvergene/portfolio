import { Epilogue } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(20, 20, 23)',
        bg2: 'rgb(26, 26, 29)',
        bg3: 'rgb(34, 34, 38)',
        lighttext: 'rgb(117,120,123)',
        lighttext2: 'rgb(137,140,143)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Epilogue: ['Epilogue', 'sans-serif']
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0", // Updated to string
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1", // Updated to string
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
