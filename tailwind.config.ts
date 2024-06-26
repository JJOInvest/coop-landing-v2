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
                red: {
                    600: '#ef2823',
                },
                violet: {
                    400: '#9368ff',
                    800: '#5404db',
                },
                primary: {
                    400: '#9293A0',
                    neutral: '#f7f7f7',
                },
                orange: {
                    100: '#f96c41',
                    120: '#eb592d',
                },
                brand: {
                    400: '#6074a9',
                },
                salad: {
                    DEFAULT: '#00d598',
                },
                black: {
                    DEFAULT: '#000',
                    10: '#f5f5f7cc',
                },
                blue: {
                    10: '#f3f5fd',
                    60: '#b8c8fb',
                    100: '#9ea8df',
                    400: '#6079fd',
                    800: '#3862ef',
                    900: '#1d2a3e',
                },
                grey: {
                    60: '#cfd5e5',
                    500: '#4e4e4e',
                },
                cyan: {
                    DEFAULT: '#00ffff',
                },
            },
            fontFamily: {
                sans: ['var(--font-sf-pro)'],
                mono: ['var(--font-cormorant)'],
                decorate: ['var(--font-mulish)'],
            },
            backgroundImage: {
                price: 'linear-gradient(60deg, #00d598, #4ad56d)',
                'important-knowledge':
                    'linear-gradient(to bottom, black, transparent, transparent, black)',
                invest: 'linear-gradient(60deg, #ff7f57, #d8575f)',
                'market-grow': 'linear-gradient(90deg, #7C5E9C 0%, #3E29B9 100%)',
                'market-grow-2': 'linear-gradient(48deg, #6EA7B3, #0684A1)',
                'start-whenever': 'linear-gradient(135deg, #fde4e3, #eee7ff)',
                'best-minds': 'linear-gradient(48deg, #6EA7B3 6.08%, #0684A1 104.31%)',
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
