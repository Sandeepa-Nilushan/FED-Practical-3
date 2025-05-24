/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind will scan these files for class names
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: "#2196f3",   // Blue
        secondary: "#f44336", // Red
        // Dark theme colors
        dark: {
          bg: "#1a1a1a",
          card: "#2d2d2d",
          text: "#ffffff",
          border: "#404040"
        }
      },
      boxShadow: {
        'bottom-right': '8px 8px 20px 2px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
