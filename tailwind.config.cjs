

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Lato', 'Helvetica', 'sans-serif'],
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1.2rem',
				md: '1.6rem',
			},
			screens: {
				DEFAULT: '83.75rem'
			}
		},
		extend: {
			colors: {
				blue: {
					"50": "#D0E8FF",
					"100": "#BBDEFF",
					"200": "#92C9FF",
					"300": "#6AB5FF",
					"400": "#41A1FF",
					"500": "#188DFF",
					"600": "#0071DF",
					"700": "#0054A7",
					"800": "#00386F",
					"900": "#001C37"
				}
			}
		},
	},
	plugins: [],
}
