
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			...colors,
			primary: '#63D09D',
      green_500: '#5DC695',
      dark_blue: '#172C45'
		},
	},
	plugins: [],
}