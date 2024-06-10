/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./views/*.{html,js,ejs}",
		"./views/fakultas/*.{html,js,ejs}",
		"./views/jurusan/*.{html,js,ejs}",
		"node_modules/preline/dist/*.js",
	],
	theme: {
		extend: {},
	},
	plugins: [require("preline/plugin"), require("daisyui")],
};
