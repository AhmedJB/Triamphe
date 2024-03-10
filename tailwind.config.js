/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: "#bc9a50",
        goldenLight: "#e8cf99",
        mainGray: "#474747",
        lightGray: "#f1f1f1",
      },
    },
  },
  plugins: [],
};
