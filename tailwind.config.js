/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1a3a8f',
          'blue-dark': '#0d2260',
          'blue-mid': '#1e4db7',
          'blue-light': '#2563eb',
          gold: '#f5a800',
          'gold-light': '#fbbf24',
          'gold-dark': '#d97706',
          white: '#ffffff',
          'off-white': '#f8f9fc',
          'gray-light': '#e8edf5',
          'gray-mid': '#1e293b',
          'gray-dark': '#0f172a',
          dark: '#0a1628',
        },
      },
      fontFamily: {
        heading: ["'Century Gothic'", 'CenturyGothic', 'AppleGothic', 'sans-serif'],
        body: ["'Poppins'", 'sans-serif'],
        mono: ["'DM Mono'", "'Courier New'", 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0d2260 0%, #1a3a8f 50%, #1e4db7 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d97706 0%, #f5a800 50%, #fbbf24 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(26,58,143,0.05) 0%, rgba(245,168,0,0.05) 100%)',
        'section-gradient': 'linear-gradient(180deg, #f8f9fc 0%, #ffffff 100%)',
      },
      boxShadow: {
        'blue-glow': '0 0 30px rgba(26, 58, 143, 0.15)',
        'gold-glow': '0 0 20px rgba(245, 168, 0, 0.25)',
        'card-hover': '0 20px 60px rgba(26, 58, 143, 0.12)',
        'nav': '0 2px 20px rgba(10, 22, 40, 0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245, 168, 0, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(245, 168, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
