/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      "very-dark-magenta": "hsl(300, 43%, 22%)",
      "soft-pink": "hsl(333, 80%, 67%)",
      "dark-grayish-magenta": "hsl(303, 10%, 53%)",
      "light-grayish-magenta": "hsl(300, 24%, 96%)",
      "white": "hsl(0, 0%, 100%)",
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '700',
    },
    extend: {
      fontFamily: {
        main: ["League Spartan", "sans-serif"],
      },
      fontSize: {
        body: '15px',
      },
    },
  },
  plugins: [],
}

