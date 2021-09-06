module.exports = {
  mode: "jit",
  purge: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pastel: "#ffadad",
        pastel2: "#ffd6a5",
        pastel3: "#fdffb6",
        pastel4: "#caffbf",
        pastel5: "#9bf6ff",
        pastel6: "#a0c4ff",
        pastel7: "#bdb2ff",
        pastel8: "#ffc6ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
