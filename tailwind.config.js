/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "18px",
      },
      colors: {
        lightGrey: "#4f4f4f",
        black: "#0d0d0d",
        offWhite: "#f0f0f0",
        yellow: "#ffd027",
        orange: "#fe4a23",
      },
    },
  },
  plugins: [],
};
