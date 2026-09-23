/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#21A0E0',
        'primary-teal': '#45A8BD',
        'primary-seafoam': '#6AB09B',
        'primary-light-green': '#8EB778',
        'primary-yellow-green': '#B2BF55',
        'dark-navy': '#0A1628',
        'text-gray': '#64748B',
        'light-gray': '#F5F7FA',
        'medium-gray': '#E5E9F0',
        'section-divider': '#E1E8ED',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'container': '1450px',
      }
    },
  },
  plugins: [],
}
