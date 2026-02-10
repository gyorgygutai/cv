/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,njk,md}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bg: 'var(--backgroundColor)',
        grey1: 'var(--grey1)',
        grey2: 'var(--grey2)',
        grey3: 'var(--grey3)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Noto Sans"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        base: ['14px', '1.6'],
        sm: ['12px', '1.6'],
      },
    },
  },
  plugins: [],
}
