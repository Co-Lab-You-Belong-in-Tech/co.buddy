module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'copurple': {
          DEFAULT: '#706DFF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#D4D3FF',
          '400': '#A2A0FF',
          '500': '#706DFF',
          '600': '#3E3AFF',
          '700': '#0C07FF',
          '800': '#0400D3',
          '900': '#0300A0'
        },
        cogray: "c4c4c4",
      },
      fontFamily: {
        'sans': ['Manrope', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
