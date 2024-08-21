/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/**/*.{html,ts}',
    ],
    darkMode: 'false',
    theme: {
        extend: {
            fontFamily: {
                'sans': ['"Recursive Variable"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('tailwindcss-safe-area'),
        require('daisyui')
    ],
    daisyui: {
        themes: false,
        darkTheme: false,
        styled: true,
        base: true,
        uitils: true,
        logs: false,
        rtl: false,
    }
}
