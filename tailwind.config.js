/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#6271FC',
          200: '#3C15AB',
          300: '#30048F',
          400: '#C0C6FE'
        },
        yellow: {
          100: '#FCED62'
        },
        pink: {
          100: '#FF99FF'
        },
        green: {
          100: '#99FF99'
        },
        purple: {
          100: '#DEC3E9'
        }
      }
    }
  },
  plugins: []
}
