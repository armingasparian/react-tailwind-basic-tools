/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'light-grey': '#ebebeb',
        'grey': '#565656',
        'grey-2': '#515151',
        'grey-3': '#969696',
        'grey-4': '#9d9d9d',
        'grey-5': '#757575',
        'dark-grey': '#3d3d3d',
        'dark-mode-grey': '#2e2e2e',
        'red': '#e33b41',
        'blue': '#2473d5',
      },
      fontFamily: {
        proxima: ['Proxima Nova Rg', 'sans-serif'],
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      margin: {
        '1.25': '5px',
        '3.7': '15px',
        '7.5': '30px',
        '12': '48px',
        '15': '60px',
      },
      padding: {
        '1.2': '5px',
        '3.7': '15px',
        '6.5': '25px',
        '7.5': '30px',
        '12': '48px',
        '15': '60px',
        '18': '76px',
        '20': '80px',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '10': 'calc(10px + .3vw)',
        '12': 'calc(12px + .3vw)',
        '14': 'calc(14px + .3vw)',
        '16': 'calc(16px + .3vw)',
        '20': 'calc(20px + .3vw)',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '6': '6',
      },
      spacing: {
        '1.25': '5px',
        '5.5': '22px',
        '6': '24px',
        '6.2': '25px',
        '6.3': '26px',
        '15': '60px',
        'w16': 'calc(16px + .3vw)',
      },
      borderRadius: {
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '15': '15px'
      },
      boxShadow: {
        menuShadow: '1px 0 5px 1px hsl(0deg 0% 54% / 40%)',
        menuShadowBottom: '0 -5px 5px 0 rgb(0 0 0 / 10%)',
        menuShadowBottom2: '0 5px 10px 2px rgba(0 0 0 / 30%)',
      }
    },
    screens: {
      '2xs': { 'max': '575px' },

      'xs': { 'min': '576px', 'max': '640px' },

      'sm': { 'min': '641px', 'max': '768px' },

      'md': { 'min': '769px', 'max': '992' },

      '2lg': { 'min': '993px', 'max': '1024' },

      'lg': { 'min': '1025px', 'max': '1280' },

      'xl': { 'min': '1281px', 'max': '1535px' },

      '2xl': { 'min': '1536px' },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
