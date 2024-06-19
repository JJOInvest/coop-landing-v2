import type { Config } from 'tailwindcss';

const config: Config = {
    daisyui: {
        themes: ['light'],
    },
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sf-pro)'],
                mono: ['var(--font-cormorant)'],
            },
        },
    },
    plugins: [require('daisyui')],
};
export default config;
