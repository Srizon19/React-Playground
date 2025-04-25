// tailwind.config.js
export default {
  darkMode: "class", // 👈 this enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust this to match your file structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
