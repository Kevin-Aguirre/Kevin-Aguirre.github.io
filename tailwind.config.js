/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'opacity': 'opacity',
        'transform': 'transform',
      },
      translate: {
        '10': '2.5rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['motion-safe'],
      transform: ['motion-safe'],
    },
  },
  plugins: [],
}


