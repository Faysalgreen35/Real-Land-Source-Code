/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter',  sans-serif",
        jersey: "'Jersey 10 Charted',  sans-serif",
        playfair: "'Playfair',  sans-serif",
        anton: "'Anton',  sans-serif",
        jacquard: "'Jacquard 24',  sans-serif",
      }
    },
  },
  plugins: [require("daisyui")],
}

