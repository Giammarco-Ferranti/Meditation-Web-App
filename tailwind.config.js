/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "text-strong": "#3F3F46",
        "text-medium": "#71717A",
        "text-light": "#D9D9D9",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
