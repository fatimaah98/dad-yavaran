import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app.vue',
    './app/**/*.{vue,ts,js,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0f766e', // teal
        'primary-light': '#6ee7b7',
        'background-soft': '#fbfdfb',
        'border-muted': '#e6e9e6',
        'text-primary': '#064e3b',
        'text-muted': '#6b7280',
        'warning-soft': '#fff7ed',
      },
      boxShadow: {
        card: '0 4px 20px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
}

export default config
