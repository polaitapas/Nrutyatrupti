import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9933A',
          light: '#E4C06A',
          lighter: '#F0D899',
          dark: '#8B6419',
          deep: '#6B4E12',
        },
        ivory: '#FAF6EF',
        cream: '#F0E8D8',
        parchment: '#F3E6C9',
        stone: '#C4B49A',
        dark: {
          DEFAULT: '#0D0906',
          warm: '#1A1209',
          mid: '#2C1A0E',
          surface: '#1F1308',
        },
        maroon: {
          DEFAULT: '#A6303B',
          light: '#C2434F',
          deep: '#7A1F28',
        },
        teal: {
          DEFAULT: '#0E4B41',
          light: '#17685A',
          deep: '#0A332C',
        },
        sindoor: '#C1272D',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3rem,7vw,6rem)', { lineHeight: '0.97', letterSpacing: '-0.02em' }],
        hero: ['clamp(3.5rem,9vw,7.5rem)', { lineHeight: '0.93', letterSpacing: '-0.025em' }],
        section: ['clamp(2.2rem,5vw,4rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      },
      animation: {
        'spin-slow': 'spin 90s linear infinite',
        'spin-medium': 'spin 40s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        section: 'clamp(5rem,10vw,8rem)',
        'section-sm': 'clamp(3rem,6vw,5rem)',
      },
      maxWidth: {
        wrap: '1200px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
