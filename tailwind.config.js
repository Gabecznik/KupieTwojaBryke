import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      background: "#1c1e22",
      surface: "#2a2d33",
      primary: "#3b82f6",
      accent: "#facc15",
      orangeAccent: "#f59e0b",
      textMain: "#e5e7eb",
      textMuted: "#9ca3af",
    },
  },
  plugins: [],
};
