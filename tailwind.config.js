/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        beige: `#ede3d8`,
        darkRed: `#953b34`,
      },
    },
  },
  plugins: [],
};
