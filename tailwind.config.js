/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'purple-primary':'#600DC7',
        'cyan-primary':'#20F2CC',
      },
    },
  },
  plugins: [],
}

