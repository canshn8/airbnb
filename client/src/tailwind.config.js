/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        "border-color": "var(--border-color)",
        circle: "var(--circle)",
        "d-2": "var(--d-2)",
        "light-color": "var(--light-color)",
        "text-2": "var(--text-2)",
        "text-clr": "var(--text-clr)",
        "text-color": "var(--text-color)",
        "text-heading-color": "var(--text-heading-color)",
        white: "var(--white)",
        "x-1": "var(--x-1)",
        "x-1st": "var(--x-1st)",
        "x-2nd": "var(--x-2nd)",
        "x-3": "var(--x-3)",
        "x-3rd": "var(--x-3rd)",
        "x-4": "var(--x-4)",
        "x-5": "var(--x-5)",
      },
    },
  },
  plugins: [],
};
