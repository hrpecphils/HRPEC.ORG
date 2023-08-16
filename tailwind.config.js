/**s @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./assets/**/*.{html,js}'],
  theme: {
    extend: {
      margin: {
        '.05': '5%',
        '.10': '10%',
        '.15': '15%',
        '.20': '20%',
        '.30': '30%',
        '.35': '35%',
        '.40': '40%',
        '.50': '50%',
      },
      padding: {
        '.05': '5%',
        '.10': '10%',
        '.15': '15%',
        '.20': '20%',
        '.25': '25%',
        '.30': '30%',
        '.35': '35%',
        '.40': '40%',
        '.50': '50%',
      },
      backgroundImage:{
        'ribbon': "url('/assets/images/ribbon-bg.svg')"
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'merriweather': ['Merriweather']
      },
      colors:{
        'f-blue': '#1B6580',
        's-blue': '#71CFEB',
        't-blue': '#0E3341',
        'f-1-blue': '#161F23',
        'f-2-blue': '#86D5FD',
        'f-white': '#F5F5F5',
        'f-2-blue': '#548CA0',
        's-white': '#D9D9D9'
      },
      backgroundImage: {
        'ribbon': "url('../assets/images/ribbon-bg.svg')",
        'random-images': "url('../assets/images/random-images.svg')"
      },
      fontSize: {
        xxxs: ' 0.4rem',
        xxs: ' 0.6rem',
        xs: '0.7rem',
        ssm: '0.8rem',
        sm: '0.9rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '3.1xl': '2.1875rem',
        '4xl': '2.441rem',
        '4.1xl': '2.5rem',
        '4.2xl': '2.5625rem',
        '4.3xl': '2.6025rem',
        '5xl': '3.052rem',
        '5.1xl': '3.125rem',
        '5.2xl': '3.25rem',
        '5.3xl': '3.35rem',
        '5.4xl': '3.45rem',
        '5.5xl': '3.563rem',
        '5.7xl': '3.7rem',
        '5.8xl': '3.8rem',
        '5.9xl': '3.9rem',
        '6xl': '3.75rem',
        '6.2xl': '3.95rem',
        '6.4xl': '4.15rem',
        '6.6xl': '4.35rem',
        '7.2xl': '4.5rem',
        '7.6xl': '4.9rem',
        '7.7xl': '5rem',
        '7.8xl': '5.03rem',
        '8xl': '6rem',
        '8.1xl': '6.1rem',
        '8.2xl': '6.2rem',
        '8.4xl': '6.4rem',
        '8.5xl': '6.5rem',
        '8.6xl': '6.6rem',
        '10xl': '9rem'
      },
      screens: {
        'phone': '320px',
        // => @media (min-width: 400px) { ... }
        'tablet': '768px',
        // => @media (min-width: 1024px) { ... }
        'desktop': '1224px',
        // => @media (min-width: 1280px) { ... }
      },
      width: {
        '1/6': '18%',
        '.30': '30%'
      },
      display: ['group-focus']
    },
  },
  plugins: [],
};