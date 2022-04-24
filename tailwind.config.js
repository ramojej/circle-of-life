module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E4D80",
        grey: "#071623",
        lightBlue: "#7DAACE",
      },
      ringColor: {
        primary: "#0E4D80",
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
        md: "18px",
        "md-lh": ["18px", "28px"],
        lg: ["20px", "30px"],
      },
      letterSpacing: {
        two: "2px",
      },
      spacing: {
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
        "30px": "30px",
        "35px": "35px",
        50: "50px",
      },
      maxWidth: {
        btn: "215px",
      },
      width: {
        "200px": "200px",
        "slider-img-default-sm": "320px",
        "logo-m": "198px",
        "logo-d": "242px",
      },
      height: {
        hero: "calc(100vh + 100px)",
      },
      borderRadius: {
        "30px": "30px",
      },
      screens: {
        "2xl": "1400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
