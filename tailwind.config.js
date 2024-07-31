/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" },
        secondary: { DEFAULT: "#ccffed", light: "#e0fff4", dark: "#99ffdb" },
        text: { DEFAULT: "#2F2F2F" },
        background: { DEFAULT: "#f0fff9" }
      },
      transitionProperty: {
        'width': 'width'
      },
      textDecoration: ['active'],

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

