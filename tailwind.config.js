/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#34d399",
          secondary: "#0f172a",
          accent: "#7c3aed",
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
      borderRadius: {
        xl: "0.875rem",
      },
      boxShadow: {
        soft: "0 6px 16px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
