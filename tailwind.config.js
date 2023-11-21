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
        'github': '#0d1117',
        'github-squeares': '#39d353',
        'discord': {
          light: '#5865f2',
          dark: '#5a74d2',
        },
        'linkedin': {
          light: '#0a66c2',
          dark: '#2c6cab',
        },
        'behance': {
          light: '#3278ff',
          dark: '#000b1d',
        },
        'twitter': {
          light: '#179cf0',
          dark: '#0d68a1',
        },
        'purple': {
          light: '#6b5ce5',
          dark: '#4c4681',
        },
        'red': {
          light: '#f31260',
          dark: '#ed4b50',
        }
      },
      backgroundImage: {
        'github-card': "url('/src/assets/images/github.webp')",
        'projects-card': "url('/src/assets/images/projects.webp')",
        'certificates-card': "url('/src/assets/images/certificates.webp')",
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      }
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
}