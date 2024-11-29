import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "blur-left": {
          "0%": {
            transform: "translateX(100%)", // Start from the right
            filter: "blur(10px)", // Start blurred
          },
          "100%": {
            transform: "translateX(0)", // Move to normal position
            filter: "blur(0)", // Remove blur
          },
        },
      },
      animation: {
        "blur-left": "blur-left 1.5s ease-in-out forwards", // Apply animation timing and iteration
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
