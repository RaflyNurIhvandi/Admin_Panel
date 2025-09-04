import { defineConfig } from "tailwindcss";

export default defineConfig({
    content: ["./index.html", "./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Poppins : ["Poppins", "ui-sans-serif", "system-ui"],
            }
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('not-sm', '@media not all and (min-width: 640px)')
        }
    ],
});
