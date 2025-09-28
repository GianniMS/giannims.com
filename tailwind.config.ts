/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // if you use src
    "./app/**/*.{js,ts,jsx,tsx}", // if you use app router
    "./components/**/*.{js,ts,jsx,tsx}", // if you have components folder
    "./pages/**/*.{js,ts,jsx,tsx}", // if you use the pages router
    "./*.{js,ts,jsx,tsx}", // root-level files!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
