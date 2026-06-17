import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a0f",
          secondary: "#12121a",
          card: "#1a1a2e",
          hover: "#22223a",
        },
        accent: {
          finance: "#10b981",
          politics: "#ef4444",
          geography: "#3b82f6",
          mindset: "#a855f7",
          islam: "#f59e0b",
          books: "#ec4899",
        },
        text: {
          primary: "#f0f0f5",
          secondary: "#8888a0",
          muted: "#555570",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
