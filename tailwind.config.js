/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "c-marine-blue": "hsl(213, 96%, 18%)",
        "c-purplish-blue": "hsl(243, 100%, 62%)",
        "c-pastel-blue": "hsl(228, 100%, 84%)",
        "c-light-blue": "hsl(206, 94%, 87%)",
        "c-strawberry-red": "hsl(354, 84%, 57%)",
        "c-cool-gray": "hsl(231, 11%, 63%)",
        "c-light-gray": "hsl(229, 24%, 87%)",
        "c-magnolia": "hsl(217, 100%, 97%)",
        "c-alabaster": "hsl(231, 100%, 99%)",
        "c-white": "hsl(0, 0%, 100%)",
      },
      fontSize: "16px",
      fontFamily: { sans: ["Ubuntu", "sans-serif"] },
    },
  },
  plugins: [],
};
