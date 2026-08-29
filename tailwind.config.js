/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        solvix: {
          bg: '#F2F5ED',
          bgDark: '#EFF4E8',
          forest: '#163321',
          forestDark: '#11291A',
          forestLight: '#1F452E',
          leaf: '#76A737',
          leafDark: '#5E882B',
          leafPillBg: '#E0ECCA',
          leafPillText: '#2E5718',
          border: '#E2E8DC',
          textDark: '#1A241B',
          textMuted: '#5A6759',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

