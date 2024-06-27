/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    
  extend: {
    animation: {
        'spin-slow': 'spin 15s linear infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite'    
    },
    keyframes: {
        'infinite-scroll': {
            from: {
                transform: 'translateX(0)'
            },
            to: {
                transform: 'translateX(-100%)'
            }
        }
    }
  },
  plugins: [require("tw-elements/plugin.cjs"), require('flowbite/plugin')({
    charts: true
  })],
  darkMode: "class"
}
}