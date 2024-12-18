/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'text': 'var(--text)',
      'background': 'var(--background)',
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'accent': 'var(--accent)',
     },     
     fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '1xl': '1.555rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Lexend Deca',
      body: 'Questrial',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
  },
  },
  plugins: [],
}