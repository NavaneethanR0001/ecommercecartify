/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Black":"#1E2832",
        "primayBG":"#1e2832od"
      },
      fontFamily:{
        'primary':['Roboto', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '8rem',
      },
    },
  },
  plugins: [],
}

