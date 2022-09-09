/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      color: {
        gray: "gray",
      },
      backgroundColor: {
        primary: "#eee",
        hover: "red",
        brown:"rgb(31, 3, 3)"
      },
      height: {
        100: "70vh",
        60: "60vh",

      },
      width: {
        100:"100%",
        // 80:"%"
      },

      fontSize: {
        title: "5rem",
      },
      screens: {
        xsm: "445px",
        sm: "665px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: { head: "'Alfa Slab One', cursive" },
    },
  },
  plugins: [],
};
