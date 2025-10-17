import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      background: "#cdcdcdff",
      surface: "#f3f3f3ff",
      primary: "#376fc8ff",
      accent: "#facc15",
      orangeAccent: "#f59e0b",
      textMain: "#151134ff",
      textMuted: "#07398fff",
      textPlain: "#060034ff",
    },
  },
  plugins: [],
};
