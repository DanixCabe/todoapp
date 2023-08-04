/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
        '3xl': {'min': '1920px'},
        '2xl': {'min': '1535px' , max: '1919px'},
        '1xl': {'min': '1440px', max: '1534px'},
        'xl': {'min': '1279px'},
        'lg': {'min': '1023px'},
        'md': {'min': '767px'},
        'sm': {'min': '560px'},
        'xs': {'min': '360px'},
        'xxs': {'min': '1px'},
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

