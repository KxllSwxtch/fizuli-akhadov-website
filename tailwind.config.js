// tailwind.config.js
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: {
					100: '#D9EFFF',
					200: '#B3D7FF',
					300: '#8CBFFF',
				},
			},
		},
	},
	plugins: [],
}
