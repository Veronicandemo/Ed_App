/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        brightYellow: '#CBB26A',
        dark: '#080808',
        greyYellow: '#70633C',
        linearGradient: '#080808, #70633CE3',
        LightBlue: '#46AEF9',
        darkBrown: '#66491E',
        topbrowntowhiteLinearGradient: '#A57C3E, #A57C3E00',
        leftToRightGradient: '#CBB26A, #FFFFFF, #D1BC9C82, #A57C3E',
        darkbrownleftGradient: '#CBB26A, #BEA05B, #FFFFFF, #A57C3E',
        darkbrownrightGradient: '#CBB26A, #BEA05B, #FFFFFF, #A57C3E',
      },
      backgroundImage: {
        whyus_image: "url('/public/Rectangle 12.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
