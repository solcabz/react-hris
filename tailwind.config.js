/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "costum-blue": "#2B3991",
        "hover-active": "#2B388C",
      },
    },
  },
  plugins: [],
};
