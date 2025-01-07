/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      libre: ['"Libre Baskerville"', 'serif'],
      ibm: ['"IBM Plex Sans Thai"', 'sans-serif'],
      noto: ['"Noto Sans Thai"', 'sans-serif'],
      prompt: ['"Prompt"', 'sans-serif'],
    },
  },
  plugins: [],
}

