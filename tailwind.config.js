/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: '#000000',
                    100: '#383838', // Black 2
                    200: '#929292', // Black 3
                    300: '#B7B7B7', // Black 4
                },
                blue: {
                    DEFAULT: '#0065B2',
                },
                green: {
                    DEFAULT: '#01B806',
                },
                offwhite: {
                    DEFAULT: '#f6f6f6',
                },
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif'],
                Avenir: ['Avenir', 'sans-serif'],
            },
            fontSize: {
                head: ['24px', '32px'],
                subhead: ['18px', '28px'],
                title: ['16px', '24px'],
                subtitle: ['15px', '23px'],
            },
            boxShadow: {
                crousalShadow: '6px 4px 27px 0px #01B8061A',
                healthCheckupShadow: '0px 3.78px 3.78px 0px #0000001A',
                ambulaceShadow: '0px 1px 17.2px 3px #FF93BA9C',
            },
            lineHeight: {
                45.5: '50px',
            },
        },
    },
    plugins: [],
}
