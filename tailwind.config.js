/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040b17',
          900: '#071527',
          850: '#0c203b',
          800: '#102b4e',
          700: '#193e6d',
          600: '#23538f',
        },
        turquoise: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          DEFAULT: '#00c4b4',
          600: '#0d9488',
          700: '#0f766e',
        },
        editorial: {
          paper: '#FBFBFA',
          parchment: '#F5F5F0',
          subtle: '#EEEEEA',
          muted: '#8C929D',
          body: '#2D3748',
          dark: '#0A1322',
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Amiri"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.015em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
  },
  plugins: [],
}
