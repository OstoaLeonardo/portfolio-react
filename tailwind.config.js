/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // component modal net ui
    './node_modules/@nextui-org/theme/dist/components/modal.js',
  ],
  theme: {
    fontFamily: {
      'body': ['DM Sans', 'sans-serif'],
      'sans': ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'crayon': '#c1cfe6',
        'bright': '#e8ebf2',
        'dadu': '#4685ff',
        'prefer': '#ff475a',
        'portfolio': '#1e2530',
        'spotify': '#00cf74',
        'store': '#c084fc',
        'movies': '#f31260',
        'github': '#24292e',
        'discord': {
          light: '#5865f2',
          dark: '#5A74D2',
        },
        'linkedin': {
          light: '#0a66c2',
          dark: '#2C6CAB',
        },
        'behance': {
          light: '#3278FF',
          dark: '#000b1d',
        },
        'twitter': {
          light: '#179cf0',
          dark: '#0D68A1',
        },
        'purple': {
          light: '#6b5ce5',
          dark: '#4C4681',
        },
        'yellow': {
          light: '#F7C958',
          dark: '#CDAB56',
        }
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
}