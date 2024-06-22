import type { Config } from 'tailwindcss';

const config: Config = {
    daisyui: {
        themes: [
            {
                jjo: {
                    primary: '#000',
                    secondary: '#000',
                    accent: '#000',
                    neutral: '#000',
                    'base-100': '#fff',
                    info: '#000',
                    success: '#000',
                    warning: '#000',
                    error: '#000',
                },
            },
            'light',
        ],
    },
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            gradientColorStops: {},
            colors: {
                primary: {
                    400: '#9293A0',
                },
                orange: {
                    120: '#EB592D',
                },
                brand: {
                    400: '#6074A9',
                },
            },
            fontFamily: {
                sans: ['var(--font-sf-pro)'],
                mono: ['var(--font-cormorant)'],
                decorate: ['var(--font-mulish)'],
            },
            boxShadow: {
                box: '0px 5px 15px 0px #DFE6F070',
            },
        },
        backgroundImage: {
            'hero-pattern': "url('/hero/hero-image.png')",
        },
    },
    plugins: [require('daisyui')],
};
export default config;
