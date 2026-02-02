/** @type {import('tailwindcss').Config} */
export default {
    content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--color-primary)',
                'dark-100': '#000000',
                'light-100': 'var(--color-light-100)',
            },
            backgroundImage: {
                'hero-pattern': 'url(/src/assets/hero-pattern.png)',
            },
            fontFamily: {
                'dm-sans': 'var(--font-dm-sans)',
            },
            screens: {
                'xs': '475px',
            },
        },
    },
    plugins: [],
}
