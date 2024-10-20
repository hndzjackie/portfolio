/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./components/*.{js,ts,jsx,tsx,html}",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}

