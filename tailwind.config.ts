import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      wiggle: 'wiggle 3s ease-in-out infinite',
      slideUpEnter: 'slideUpEnter .3s ease-in-out',
      slideUpLeave: 'slideUpLeave .3s ease-in-out',
    },
    backgroundOpacity: ({ theme }) => theme('opacity'),
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      red: colors.red,
      background: 'rgb(var(--color-background))',
      foreground: 'rgb(var(--color-foreground))',
      primary: 'rgb(var(--color-primary))',
      secondary: 'rgb(var(--color-secondary))',
      accent: 'rgb(var(--color-accent))',
      destructive: 'rgb(var(--color-desctructive))',
      black: 'rgb(var(--color-black))',
      white: 'rgb(var(--color-white))',
      transparent: 'transparent',
    }),
    gradientColorStops: ({ theme }) => theme('colors'),
    gradientColorStopPositions: {
      '0%': '0%',
      '5%': '5%',
      '10%': '10%',
      '15%': '15%',
      '20%': '20%',
      '25%': '25%',
      '30%': '30%',
      '35%': '35%',
      '40%': '40%',
      '45%': '45%',
      '50%': '50%',
      '55%': '55%',
      '60%': '60%',
      '65%': '65%',
      '70%': '70%',
      '75%': '75%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '95%': '95%',
      '100%': '100%',
    },
    keyframes: {
      spin: {
        to: {
          transform: 'rotate(360deg)',
        },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
      wiggle: {
        '0%': { 
          transform: 'rotate(-3deg) scaleX(1.1) scaleY(1.1)',
        },
       '25%': {
        transform: 'scaleX(1.2) scaleY(1.2)',
        },
        '50%': { 
          transform: 'rotate(3deg) scaleX(1) scaleY(1)', 
        },
        '75%': {
          transform: 'scaleX(1.2) scaleY(1.2)',
        },
        '100%': { 
          transform: 'rotate(-3deg) scaleX(1.1) scaleY(1.1)',
        },
      },
      slideUpEnter: {
        '0%': {
          opacity: '0',
          transform: 'translateY(500px) scale(0)',
        },
        '100%': {
          opacity: '100',
          transform: 'translateY(0px) scale(1)',
        },
      },
      slideUpLeave: {
        '0%': {
          opacity: '100',
          transform: 'translateY(0px) scale(1)',
        },
        '100%': {
          opacity: '0',
          transform: 'translateY(500px) scale(0)',
        },
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      15: '0.15',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      35: '0.35',
      40: '0.4',
      45: '0.45',
      50: '0.5',
      55: '0.55',
      60: '0.6',
      65: '0.65',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      85: '0.85',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
    zIndex: {
      auto: 'auto',
      0: '0',
      1: '1',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      60: '60',
      70: '70',
      80: '80',
      90: '90',
      99: '99',
    },
  },
  plugins: [],
}
export default config
