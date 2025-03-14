/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'star-movement-bottom': 'star-movement-bottom 12s linear infinite alternate',
        'star-movement-top': 'star-movement-top 12s linear infinite alternate',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '0.3' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0.1' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '0.3' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0.1' },
        },
      },
    },
  },
  plugins: [],
}

