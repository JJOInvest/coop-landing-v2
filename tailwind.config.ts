import type { Config } from 'tailwindcss';

const config: Config = {
    daisyui: {
        themes: ['light'],
    },
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                orange: {
                    120: '#EB592D',
                },
            },
            fontFamily: {
                sans: ['var(--font-sf-pro)'],
                mono: ['var(--font-cormorant)'],
            },
        },
        backgroundImage: {
            'hero-pattern': "url('/hero/hero-image.png')",
        },
    },
    plugins: [require('daisyui')],
};
export default config;
