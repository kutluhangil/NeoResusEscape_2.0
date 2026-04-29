import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fbu-navy':        '#1B2545',
        'fbu-navy-deep':   '#0F1730',
        'fbu-yellow':      '#FFD700',
        'fbu-yellow-warm': '#FFC72C',
        'bg-primary':      '#0A0E1A',
        'bg-secondary':    '#0F141F',
        'bg-tertiary':     '#161C2A',
        'medical-green':   '#00FF88',
        'medical-blue':    '#00BFFF',
        'medical-red':     '#FF2D2D',
      },
      fontFamily: {
        geist: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'breathe': 'breathe 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'typewriter': 'typewriter 0.05s steps(1) forwards',
        'screen-shake': 'screenShake 0.3s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.05)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 24px rgba(255, 215, 0, 0.8)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        screenShake: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-4px, 2px)' },
          '40%': { transform: 'translate(4px, -2px)' },
          '60%': { transform: 'translate(-3px, 3px)' },
          '80%': { transform: 'translate(3px, -1px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-yellow': '0 0 24px rgba(255, 215, 0, 0.3)',
        'glow-green': '0 0 24px rgba(0, 230, 118, 0.3)',
        'glow-red': '0 0 24px rgba(255, 23, 68, 0.3)',
        'modal': '0 24px 64px rgba(0, 0, 0, 0.8)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}

export default config
