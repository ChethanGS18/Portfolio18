/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Product Sans'", 'system-ui', 'sans-serif'],
        thin: ["'Product Sans Thin'", 'system-ui', 'sans-serif'],
        light: ["'Product Sans Light'", 'system-ui', 'sans-serif'],
        medium: ["'Product Sans Medium'", 'system-ui', 'sans-serif'],
        black: ["'Product Sans Black'", 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          50: 'rgba(255,255,255,0.04)',
          100: 'rgba(255,255,255,0.06)',
          200: 'rgba(255,255,255,0.08)',
          300: 'rgba(255,255,255,0.12)',
          400: 'rgba(255,255,255,0.16)',
        },
        glass: {
          border: 'rgba(255,255,255,0.10)',
          highlight: 'rgba(255,255,255,0.06)',
        },
        accent: {
          primary: '#4F8EF7',
          secondary: '#38BDF8',
          emerald: '#34D399',
          amber: '#FBBF24',
          rose: '#FB7185',
        },
        neutral: {
          850: '#1a1a1a',
          925: '#0d0d0d',
          950: '#080808',
        }
      },
      backgroundImage: {
        'mesh-1': 'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(79,142,247,0.12) 0%, transparent 60%)',
        'mesh-2': 'radial-gradient(ellipse 60% 80% at 80% 20%, rgba(56,189,248,0.08) 0%, transparent 60%)',
        'mesh-3': 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(52,211,153,0.06) 0%, transparent 60%)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'counter-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        'scan-line': {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        'noise': {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-1%,-1%)' },
          '20%': { transform: 'translate(1%,1%)' },
          '30%': { transform: 'translate(-1%,1%)' },
          '40%': { transform: 'translate(1%,-1%)' },
          '50%': { transform: 'translate(0,0)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'border-flow': 'border-flow 4s ease infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'counter-spin': 'counter-spin 15s linear infinite',
        'scan-line': 'scan-line 2s linear infinite',
        'noise': 'noise 0.3s steps(1) infinite',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-lg': '0 24px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glow-blue': '0 0 40px rgba(79,142,247,0.3)',
        'glow-cyan': '0 0 40px rgba(56,189,248,0.3)',
        'glow-emerald': '0 0 40px rgba(52,211,153,0.3)',
      },
    },
  },
  plugins: [],
};
