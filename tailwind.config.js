/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    preflight: false, // Important: don't break the existing Bootstrap template!
  },
  plugins: [],
}
