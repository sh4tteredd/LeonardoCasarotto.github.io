/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {


    extend: {
      colors: {
        'mint-cream': '#C8C8C8',
        'alabaster':'#0E0A0C',
        'transp': '#00000036'
      },
      fontFamily: {
        abel: ["Abel", "sans-serif"],
        Lora: ["lora", "serif"],
        Lato: ["Lato", "system-ui"]
      },
    },
  },
  plugins: [],
}
