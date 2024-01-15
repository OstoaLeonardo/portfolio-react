/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/components/modal.js',
  ],
  theme: {
    extend: {
      colors: {
        'crayon': '#c1cfe6',
        'bright': '#e8ebf2',
        'spotify': '#00cf74',
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
        'pattern': "url('/src/assets/images/pattern.png')",
        'github-card': "url('/src/assets/images/github.webp')",
        'projects-card': "url('/src/assets/images/projects.webp')",
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      }
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
}