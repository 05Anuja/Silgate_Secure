/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Silgate Brand Palette
        'silgate-blue': '#0B5095',
        'silgate-blue-dark': '#083D73',
        'silgate-blue-light': '#1673C7',
        'silgate-orange': '#F1613E',
        'silgate-orange-dark': '#D94E2C',
        'silgate-gold': '#F8B83A',
        'silgate-amber': '#F48E33',
        'silgate-black': '#111111',
        // Existing tokens mapped to Silgate Brand
        'primary-blue': '#0B5095',
        'primary-teal': '#1673C7',
        'primary-seafoam': '#F8B83A',
        'primary-light-green': '#F48E33',
        'primary-yellow-green': '#F1613E',
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
