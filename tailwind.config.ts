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
                    neutral: '#f7f7f7',
                },
                orange: {
                    120: '#eb592d',
                },
                brand: {
                    400: '#6074a9',
                },
            },
            fontFamily: {
                sans: ['var(--font-sf-pro)'],
                mono: ['var(--font-cormorant)'],
                decorate: ['var(--font-mulish)'],
            },
            boxShadow: {
                box: '0px 5px 15px 0px #DFE6F070',
                button: '0px 1px 2px 0px rgba(77, 84, 94, 0.05), 2px 4px 10px 0px rgba(77, 84, 94, 0.10)',
            },
        },
        backgroundImage: {
            'hero-pattern': "url('/hero/hero-image.png')",
            'smart-pattern': "url('/smartest/smart-man.png')",
            'full-control-pattern': "url('/full-control/bg.png')",
            'important-pattern': "url('/important-knowledge/woman.png')",
            'important-pattern-small': "url('/important-knowledge/woman-small.png')",
            'welcome-pattern': "url('/welcome/bg.svg')",
        },
    },
    plugins: [require('daisyui')],
};
export default config;
