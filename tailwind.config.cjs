/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
      xxl: "1440px",
      sl: "2560px",
    },
    extend: {
      colors: {
        brand: {
          dark: "#1b1411",       // Deep espresso dark background
          card: "#261d18",       // Deep warm brown card surface
          border: "#3d2e25",     // Muted brown separator
          brown: "#7b5137",      // Classic warm brown
          light: "#b78762",      // Light caramel brown
          sand: "#d8b493",       // Soft sand brown
          pastel: "#f4ebe1",     // Pastel brown / soft cream
          cream: "#fbf8f5",      // Warm white / ivory
          muted: "#a89a8f",      // Muted brown-gray subtext
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "t-banner": "url('/src/assets/images/Home Trump Banner Brown.png')",
        "work-banner-1": "url('/src/assets/images/Classic Blue Bg.png')",
        "work-banner-2": "url('/src/assets/images/Orangy Wave Bg.png')",
        "cta-banner": "url('/src/assets/images/Start Project Bg Brown.png')",
      },
    },
  },
  plugins: [],
};
