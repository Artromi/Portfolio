/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        offWhite: {
          100: '#F8F8F8'
        },
        newWhite: {
          100: '#FAF9F8'
        },
        mintGreen: {
          100: '#99FF99'
        }
      }
    }
  },
  plugins: []
}
