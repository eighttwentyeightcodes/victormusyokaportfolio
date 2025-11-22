import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A0F29', // Deep Navy
          50: '#E8E9ED',
          100: '#D1D3DB',
          200: '#A3A7B7',
          300: '#757B93',
          400: '#474F6F',
          500: '#0A0F29',
          600: '#080C21',
          700: '#060919',
          800: '#040610',
          900: '#020308',
        },
        secondary: {
          DEFAULT: '#00D1C1', // Teal Mint
          50: '#E6FBF9',
          100: '#CCF7F3',
          200: '#99EFE7',
          300: '#66E7DB',
          400: '#33DFCF',
          500: '#00D1C1',
          600: '#00A79A',
          700: '#007D73',
          800: '#00534D',
          900: '#002A26',
        },
        accent: {
          DEFAULT: '#10B981', // Emerald Green (complementary)
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        background: '#F7F9FC',
        textPrimary: '#0D0D0D',
        textSecondary: '#646A73',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        display: ['Space Grotesk', 'monospace'],
        serif: ['Playfair Display', 'serif'],
        script: ['Dancing Script', 'cursive'],
        signature: ['Great Vibes', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out',
        'text-reveal': 'textReveal 1.5s ease-out forwards',
        'letter-pop': 'letterPop 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        letterPop: {
          '0%': { opacity: '0', transform: 'scale(0) rotate(-10deg)' },
          '50%': { transform: 'scale(1.2) rotate(5deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 20px rgba(0, 209, 193, 0.5), 0 0 40px rgba(16, 185, 129, 0.3)' },
          '50%': { textShadow: '0 0 30px rgba(0, 209, 193, 0.8), 0 0 60px rgba(16, 185, 129, 0.5)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
