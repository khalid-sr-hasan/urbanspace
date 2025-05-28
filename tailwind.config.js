/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 5s linear infinite", // spin-slow class
                wiggle: "wiggle 1s ease-in-out infinite",
                shake: "shake 0.5s infinite",
                spin: "spin-slow 10s linear infinite",
            },

            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-5deg)" },
                    "50%": { transform: "rotate(5deg)" },
                },
                shake: {
                    "0% ": { transform: "translateX(0)" },
                    "25%": { transform: "translateX(-2px)" },
                    "50% ": { transform: "translateX(2px)" },
                    "75% ": { transform: "translateX(-2px)" },
                    "100% ": { transform: "translateX(0)" },
                },
                spin: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
        },
    },
    plugins: [],
};
