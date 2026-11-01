/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F2D5B',
          'navy-dark': '#091B38',
          'navy-light': '#17407D',
          blue: '#2563EB',
          gold: '#D4AF7C',
          'gold-light': '#E8D4B4',
          'gold-subtle': '#F5ECE0',
          paper: '#F8F6EF',
          'paper-subtle': '#F2EFE4',
          neutral: '#94A3B8',
          ink: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Amiri', 'serif'],
        mono: ['Inter', 'monospace'],
      },
    },
  },
  plugins: [],
}
