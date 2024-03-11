/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'light-red': 'hsl(356, 100%, 66%)',
                'very-light-red': 'hsl(355, 100%, 74%)',
                'very-dark-blue': 'hsl(208, 49%, 24%)',
                'grayish-blue': 'hsl(240, 2%, 79%)',
                'very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
                'very-dark-black-blue': 'hsl(240, 10%, 16%)',
            },
            backgroundImage: {
                'introBgMobile': 'url("/src/images/bg-pattern-intro-mobile.svg"),linear-gradient(to bottom right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))',
                'bodyBg': 'url("/src/images/bg-pattern-circles.svg"), linear-gradient(to bottom right, hsl(237, 17%, 21%), hsl(237, 23%, 32%))',
                'editorBg': 'url("/src/images/illustration-editor-desktop.svg")',
            },
            fontFamily: {
                'overpass': ['Overpass', 'sans-serif'],
                'ubuntu': ['Ubuntu', 'sans-serif'],
            },
            gridTemplateColumns: {
                'editorCols': "minmax(1rem,1fr) minmax(0,720px) minmax(0,720px) minmax(1rem,1fr)",
                'infraColsDesktop': "minmax(1rem, 1fr) repeat(2, minmax(1rem, 1fr))",
            },
            gridTemplateRows: {
                'infraRows': "minmax(1rem, 190px) repeat(2, minmax(1rem, 330px))",
            },
        },
    },
    plugins: [],
}