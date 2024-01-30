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
      slomo: 'slomo 30s ease-in-out infinite',
      text: 'text 0.3s ease infinite',
      linewiggle: 'linewiggle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      reverselinewiggle: 'linewiggle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse',
      wiggle: 'wiggle .6s ease-in-out infinite',
      hardwiggle: 'wiggle .2s ease-in-out infinite',
      modalEnter: 'modalEnter .2s ease-in-out',
      slideUpEnter: 'slideUpEnter .3s ease-in-out',
      slideUpLeave: 'slideUpLeave .3s ease-in-out',
    },
    backgroundOpacity: ({ theme }) => theme('opacity'),
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      '4xl': '0 45px 70px -10px rgba(0, 0, 0, 0.5)',
    },
    boxShadowColor: ({ theme }) => theme('colors'),
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      white: colors.white,
      transparent: colors.transparent,
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
      accent2: 'rgb(var(--color-accent2))',
      destructive: 'rgb(var(--color-desctructive))',
      black: 'rgb(var(--color-black))',
    }),
    dropShadow: {
      sm: '0 1px 1px rgb(0 0 0 / 0.05)',
      DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
      md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
      lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
      xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
      '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
      none: '0 0 #0000',
    },
    fill: ({ theme }) => ({
      none: 'none',
      ...theme('colors'),
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
      slomo: {
        '0%, 100%': {
          scale: '1',
        },
        '50%': {
          transform:'translateX(35%) translateY(40%)',
          scale: '6',
          rotate: '8deg',
        },
      },
      text: {
        '0%': {
          'background-size': '50% 50%',
          'background-position': 'center',
        },
        '25%': {
          'background-size': '100% 100%',
          'background-position': 'right',
        },
        '50%': {
          'background-size': '50% 50%',
          'background-position': 'bottom',
        },
        '75%': {
          'background-size': '100% 100%',
          'background-position': 'left',
        },
        '100%': {
          'background-size': '50% 50%',
          'background-position': 'top',
        },
      },
      linewiggle: {
        '0%': { 
          transform: 'scale(1)',
        },
       '25%': {
        transform: 'scale(1.15)',
        },
        '50%': { 
          transform: 'scale(1)', 
        },
        '75%': {
          transform: 'scale(1.15)',
        },
        '100%': { 
          transform: 'scale(1)',
        },
      },
      wiggle: {
        '0%': { 
          transform: 'scale(1.1)',
          transformOrigin: '150px 50px',
          x: '0px',
          y: '0px',
        },
        '10%': { 
          transform: 'scale(0.9)',
        },
       '25%': {
        transform: 'rotate(1.2deg) scale(1.08)',
        x: '2px',
        y: '1px',
        },
        '35%': { 
          transform: 'scale(1.1)',
        },
        '50%': { 
          transform: 'rotate(-1.2deg) scale(1)', 
          x: '-3px',
          y: '5px',
        },
        '60%': { 
          transform: 'rotate(1.2deg) scale(1.2)',
        },
        '75%': {
          transform: 'rotate(-2deg) scale(1.18)',
          x: '4px',
          y: '-2px',
        },
        '90%': { 
          transform: 'rotate(1.2deg) scale(0.9)',
        },
        '100%': { 
          transform: 'scale(1.1)',
          x: '0px',
          y: '0px',
        },
      },
      modalEnter: {
        '0%': {
          opacity: '0',
          transform: 'scale(0)',
        },
        '100%': {
          opacity: '100',
          transform: 'scale(1)',
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
        sans: ['var(--font-GeistSans)'],
        mono: ['var(--font-GeistMono)'],
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
