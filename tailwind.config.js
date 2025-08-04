/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        antique: "#faf3ed",
        naturalc: "#d7cbb5",
        duskyg: "#a6a89a",
        terracotta: "#89523d",
        goldt: "#917043",
        leather: "#3e2318",
        whiteal : "#f7f7ef",
        greyal: "#252222"
      },
      fontFamily: {
        'varela' : ["Varela"],
        'bodoni' : ["Bodoni Moda"],
        'roslindale-bold': ["Roslindale Bold"],
        'roslindale-reg': ["Roslindale Regular"],
        'monsieur': ["Cookie"],
      },
      animation: {
        'spin-slow' : `spin 20s linear infinite`,
      }
    },
  },
  plugins: [
    scrollbar,
  ],
};
