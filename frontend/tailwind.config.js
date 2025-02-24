/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./app.vue",
    ],
    theme: {
        screens: {
            'b-xl': {'max': '1919px'},
            '2xl': {'max': '1792px'},
            xl: {'max': '1440px'},
            'b-lg': {'max': '1439px'},
            lg: {'max': '1250px'},
            'b-md': {'max': '1024px'},
            md: {'max': '768px'},
            'b-sm': {'max': '767px'},
            sm: {'max': '640px'},
        },
        fontFamily: {
            'golos': ['Golos', 'sans-serif'],
            'mulish': ['Mulish', 'sans-serif'],
            'onest': ['Onest', 'sans-serif'],
        },
        colors: {
            'light-green': '#204C4F',
            'dark-green-56': '#1A252B8F',
            'dark-green': '#023438',
            'pink': '#FFACA3',
            'orange': '#FF3B26',
            'black': '#060425',
            'footer-gray': '#233038',
            'white': '#F8FCFD',
            'white-18': '#FFFFFF2E',
            'white-72': '#F8FCFDB8',
            'light-gray': '#BCCCCE',
            'success-green': '#05AA64',
            'error-red': '#F41C05',
            'disabled-gray': '#BABABA',
            'active-orange': '#FF1900',
            'focus-orange': '#FF5C4B',
        }
    },
    plugins: [],
}