/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-violet': {
          DEFAULT: '#6C2EB9', // Основной оттенок фиолетового
          hover: '#7D3CCC', // Более светлый оттенок для ховера
          active: '#5A2396', // Более тёмный оттенок для активного состояния
        },
        'neon-violet': {
          DEFAULT: '#9B51E0', // Яркий неоново-фиолетовый для ссылок и выделений
          hover: '#AE65E8', // Более светлый для ховера
          active: '#833BC0', // Более тёмный для активного состояния
        },
        // main palette
        'deep-black': '#0A0A0A',
        'charcoal-gray': '#1B1B1B',
        'card-background': '#2A2A2A',
        'deep-violet': '#4B205A',
        'muted-blood-red': '#4A1F1F',
        'pale-gray': '#D6D6D6',
        'dim-gray': '#A5A5A5',
        'violet-blue': '#2F2A45',
        'smoky-brown': '#292421',
        'graphite-gray': '#333333',
        // later update
        'neon-blue': '#00d9ff',
        'neon-red': '#ff003c',
        'neon-purple': '#a500ff',
        'card-hover': '#343434', // Легкий переход для состояния hover
        'card-active': '#2E2E2E', // Едва заметное затемнение для состояния active
      },
      boxShadow: {
        'neon-blue': '0 0 8px #00d9ff',
        'neon-red': '0 0 8px #ff003c',
        'neon-purple': '0 0 8px #a500ff',
      },
      fontFamily: {
        mechanical: ['Orbitron', 'sans-serif'],
        audiowide: ['Audiowide', 'cursive'],
        vt323: ['VT323', 'monospace'],
        pressstart: ['"Press Start 2P"', 'cursive'],
        sharetech: ['"Share Tech Mono"', 'monospace'],
        exo2: ['"Exo 2"', 'sans-serif'],
        lcd: ['LCD', 'monospace'], // Добавили шрифт LCD
      },
    },
  },
  plugins: [],
}
