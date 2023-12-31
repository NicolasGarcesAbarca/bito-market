/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans':['Open\\ Sans']
    },
    extend: {
      colors:{
        'purple-primary':'#600DC7',
        'cyan-primary':'#20F2CC',
        'black-text':'#1E1E1E',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

