import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'black': {
        'origin': '#000000',
        'link': '#505d69',
        'medium': '#636e75',
        'content': '#262525'
      },
      'white': '#ffffff',
      'green': {
        'origin': '#1cbb8c',
        'light': '#d6f3ea'
      },
      'gray':{
        'body':  '#f5f5f5',
        'light': '#eff2f7', 
        'lighthover': '#f8f9fa',
        'soft': '#343a40',
        'superlight': '#dadbdc',
        'text': '#54616d'
      },
      'blue': {
        'link': '#337ab7',
        'editlink': '#337ab7',
        'light': '#f0f8ff',
      },
      'red': {
        'origin': '#E31837',
        'light': '#ffdce2',
        'icon': '#dc3545'
      },
      'orange': {
        'origin': '#ea730a'
      },
      'yellow': {
        'origin': '#b7721b',
        'light': '#ffcd55'
      },
      'violet': {
        'origin': '#5664d2',
        'light': '#e0e3f7'
      },
      'brown': {
        'dark': '#484747'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        '3-items': 'repeat(3, minmax(160px, 365px))',
        '3-itemsMaxXl': 'repeat(3, minmax(160px, 300px))',
        '2-itemsMaxMd': 'repeat(2, minmax(160px, 365px))',
        '1-itemsMaxSm': 'repeat(1, minmax(160px, 100%))',
      }
    },

    maxWidth: {
      'layout': '1380px',
    },
  },
  plugins: [],
}
export default config