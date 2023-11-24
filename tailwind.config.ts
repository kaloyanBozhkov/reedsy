import aspectRatio from '@tailwindcss/aspect-ratio'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/client/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9C636F',
          50: '#d4d4d4',
          100: '#F0E2E4',
          200: '#D3BFC5',
          300: '#B79BA7',
          400: '#9C636F',
          500: '#834C59',
          600: '#6B3E47',
          700: '#542F35',
          800: '#3D2023',
          900: '#271114',
        },
        secondary: {
          DEFAULT: '#639C90',
          100: '#D6E6E0',
          200: '#ABCBC1',
          300: '#81B0A1',
          400: '#639C90',
          500: '#4F7D78',
          600: '#3E645F',
          700: '#2E4E4A',
          800: '#1F3934',
          900: '#0F2320',
        },
        'primary-dark': {
          DEFAULT: '#21323B',
          100: '#C5D0D8',
          200: '#9DAEBD',
          300: '#759CA2',
          400: '#21323B',
          500: '#18252E',
          600: '#121C23',
          700: '#0E161A',
          800: '#0A1011',
          900: '#050808',
        },
        'secondary-dark': {
          DEFAULT: '#3B2A21',
          100: '#6D5E58',
          200: '#4D3F39',
          300: '#2E2920',
          400: '#3B2A21',
          500: '#362621',
          600: '#31221F',
          700: '#2B1E1D',
          800: '#261B1B',
          900: '#211819',
        },
      },
      backgroundImage: {
        'main-back-dark': 'linear-gradient(0deg, rgba(33,50,59,1) 0%, rgba(18,28,32,1) 100%)',
        'main-back-light':
          'linear-gradient(0deg, rgba(223,216,206,1) 0%, rgba(244,241,237,1) 100%)',
      },
      keyframes: {
        'scale-in': {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(100%)',
          },
        },
        'scale-out': {
          '0%': {
            transform: 'scale(100%)',
          },
          '100%': {
            transform: 'scale(0)',
          },
        },
        'move-24px': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(24px, 0)',
          },
        },
      },
    },
  },
  plugins: [typography, aspectRatio],
}
