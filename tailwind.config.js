/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blur: "linear-gradient(260deg, #F3AA93, #CEE4F5, #E1DCD9, #B9EAFE)",
      },
    },
  },
  plugins: [],
}
