/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070B14",
        panel: "#0E1422",
        panelSoft: "#111A2B",
        accent: "#58E1C1",
        accentWarm: "#FF9B71",
        line: "rgba(255,255,255,0.09)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(88,225,193,0.12), 0 18px 60px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
