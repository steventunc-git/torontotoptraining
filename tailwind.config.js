/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earthy: "#f5f0e6" // Adjust to match Harley’s site
      },
    },
  },
  plugins: [],
}
