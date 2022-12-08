/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#111111",
                backgroundLite: "#1D1D1D",
                baseColor: "#9BFF00",
                secondaryColor: "#DBFD51",
                textCustom: "#666666",
            },
        },
    },
    plugins: [],
}
