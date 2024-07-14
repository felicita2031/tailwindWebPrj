/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center:true,
      screens:{
        lg:'1140px',
        xl:'1140px',
        '2xl':'1140px',
      },
    },
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        fontopen:['"font open','serif']
      },
      colors: {
        primary: '#1E3A8A',
        secondary: '#10B981',
        accent: '#F59E0B',
        background: '#F3F4F6',
        text: '#111827',
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
      },
      spacing:{
        '128':'32rem'
      },
      fontSize:{
        '2xs':'0.625rem', //10px
        '3xs':'0.5rem',//8px
      }
    },
    plugins: [],
  }
}
