/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      color: {
        gray: "gray",
      },
      fontFamily: { head: "'Alfa Slab One', cursive" },

      backgroundColor: {
        primary: "#eee",
      },
      height: {
        100: "100vh",
        60: "500px",
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
    },
  },
  plugins: [],
};
