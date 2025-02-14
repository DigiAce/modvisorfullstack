/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightYellow: "#f6d876",
        white2: "#fffbf2",
        darkGreen: "#05ab54",
        dark: "#1e1e1e",
        navBarColor: "#173996",
        textColor:"#173996",
        yell:"#ffc541",
        pink: "#f472b6",
      },
      
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        leagueGothic: ["Courgette", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "0",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        'gradient-navbar': 'linear-gradient(90deg, rgba(221,218,218,0.47942927170868344) 35%, rgba(221,218,218,0.48503151260504207) 35%);',
        'gradient-box': 'linear-gradient(90deg, rgba(0,0,0,0.47942927170868344) 35%, rgba(0,0,0,0.48503151260504207) 35%);',
        // "gradient-text": "linear-gradient(to right, #f472b6, #a855f7, #f472b6)",
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'fade-in': 'fade-in 1s ease-in',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      // keyframes: {
      //   gradientFlow: {
      //     "0%": { backgroundPosition: "0% 50%" },
      //     "50%": { backgroundPosition: "100% 50%" },
      //     "100%": { backgroundPosition: "0% 50%" },
      //   },
      // },
      // animation: {
      //   gradientFlow: "gradientFlow 3s ease infinite",
      // },
    },
  },
  plugins: [],
};
