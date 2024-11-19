/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B1A55',
        secondary: '#070F2B',
        tertiaryDark: '#535C91',
        tertiaryLight: '#9290C3',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
