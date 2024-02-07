/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
            mono: ["Rokkitt", "monospace"],
        },
        extend: {
            customHeight: {
                height: "calc(100vh - 65px)",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                ".customHeight": {
                    height: "calc(100vh - 61px)",
                    "@screen md": {
                        height: "calc(100vh - 65px)",
                    },
                },
            });
        },
    ],
};
