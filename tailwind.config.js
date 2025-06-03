/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'script': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        'accent': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        'gold': '#FFD700',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hearts': 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M10 17.95c-.8 0-1.5-.43-1.9-.85l-6-6c-1.85-1.85-1.85-4.85 0-6.7 1.85-1.85 4.85-1.85 6.7 0L10 5.6l1.2-1.2c1.85-1.85 4.85-1.85 6.7 0 1.85 1.85 1.85 4.85 0 6.7l-6 6c-.4.42-1.1.85-1.9.85z" fill="rgba(235, 188, 195, 0.05)"%3E%3C/path%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
};