/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#31363f", secondary: "#007aff", tertiary: "#d9d9d9" },
    },
    fontFamily: {
      openSans: ["Open sans", "sans-serif"],
    },
  },
  plugins: [],
};
