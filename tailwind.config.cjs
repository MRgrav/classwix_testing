/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s infinite',
        fadeInOut: 'fadeInOut 3s ease-in-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '40%, 60%': { opacity: 0.9 },
          '50%': { opacity: 0.3 },
        },
        fadeInOut: {
          '0%': { opacity: 0, transform: 'translateX(-50%) translateY(50px)' },
          '20%': { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
          '80%': { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
          '100%': { opacity: 0, transform: 'translateX(-50%) translateY(50px)' },
        },
      },
    },
  },
  plugins: [],
};
