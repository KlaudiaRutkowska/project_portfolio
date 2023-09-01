/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1440px',
            // => @media (min-width: 1440px) { ... }
        },
        container: {
            center: true,
            padding: '130px'
        },
        fontFamily: {
            'inter': ['Inter', 'sans-serif'],
        },
		extend: {
            colors: {
                'logo-light-purple': '#EEEBFF',
                'logo-text-color': '#7B61FF',

                'light-grey': '#6B7280',
                'dark-purple': '#3730A3',
            },
            rotate: {
                '30': '30deg',
            },
            height: {
                '15.5': '62px'
            },
            width: {
                '15.5': '62px'
            }
        },
	},
	plugins: [],
}
