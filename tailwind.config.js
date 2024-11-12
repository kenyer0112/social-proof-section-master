/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        DarkGrayishMagenta: "hsl(303, 10%, 53%)",
        LightGrayishMagenta: "hsl(300, 24%, 96%)",
        White: "hsl(0, 0%, 100%)",
        VeryDarkMagenta: " hsl(300, 43%, 22%)",
        SoftPink: "hsl(333, 80%, 67%)",
        hovercolor: "#F0F8FF",
      },
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
