/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite/**/*.js',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
        colors:{
          transparent: 'transparent',
          current: 'currentColor',
          aFuerte: '#0A1128',
          aFuerte2: '#001F54',
          aFuerte3: '#034078',
          aFuerte4: '#1282A2',
          bCasi: '#FEFCFB'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements/dist/plugin")
  ],
}
