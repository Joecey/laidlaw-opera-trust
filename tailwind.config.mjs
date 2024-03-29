/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    theme: {
        extend: {
            colors: {
                laidlawRed: '#d51f35',
                laidlawTeal: '#23a698',
                laidlawGrey: '#2d2926',
                laidlawLightRed: '#fabbcb',
                laidlawLightBlue: '#b1e4e3',
                laidlawPurple: '#572c5f',
                boneWhite: '#F9F6EE',
            },
        },
    },
    darkMode: 'class',
}
