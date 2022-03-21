module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        bangla:['Noto Serif Bengali', 'serif'],
        arabic:['Noto Naskh Arabic', 'sans-serif'],
        english:['Fugaz One', 'cursive']
      }
    },
  },
  plugins: [],
}