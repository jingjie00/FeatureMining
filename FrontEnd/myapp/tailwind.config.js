/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        boxlightyellow: '#F5F5F5',
        boxyellow: '#E2BF4A',
        bloodred: '#9D0001',
        lightred: '#FF0002',
        buttonred: '#9B1619',
        buttonlightred: '#C91D22',
        buttonblue: '#163D7E',
        buttonlightblue: '#245FC2',
        buttonlightgreen: '#00C620',
        buttongreen: '#00570E',
        buttonyellow: '#FFE500',
        buttongold: '#E2BF4A',
        roundgreen: '#3AFFB8',
        borderyellow: '#FFE600',
        borderorange: '#F29D1F',
        textyellow: '#FFE600',
        textgold: '#FDEC97',
        textred: '#C40000',
        textgray: '#989898',
        lightgrey: '#404040',
        headerbg: '#666666',
        modalbg: '#373737',
        inputborder: '#FDEC97',
      },
      backgroundImage: {
        'modal-bg': 'url(\'../images/bonus/bonus_bg.png\')',
        'main-bg': 'url(\'../images/bg.jpg\')',
        'arrow-bg': 'url(\'../images/dashboard/buttonBgLeft.png\')',
      },
      screens: {
        xs: '263px',
        // => @media (min-width: 640px) { ... }

        s: '430px',
        // => @media (min-width: 1024px) { ... }
      },
    },
    fontSize: {
      xxs: '10px',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  plugins: [],
};
