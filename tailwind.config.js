/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B86A2E',
          hover: '#9F5723',
        },
        secondary: '#D89A4A',
        cream: '#FAF6F1',
        beige: '#F5EDE3',
        dark: '#111827', // slightly darker for premium feel
        muted: '#4B5563', // slightly better contrast for gray
        soft: '#E7D8C8',
        brand: {
          green: '#25D366', // WhatsApp
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.05)',
        'premium': '0 20px 40px -10px rgba(184, 106, 46, 0.1)',
      }
    },
  },
  plugins: [],
};
