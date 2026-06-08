/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        "surface-1": "#111111",
        "surface-2": "#161616",
        "text-primary": "#FFFFFF",
        "text-muted": "#A0A0A0",
        accent: "#A8D8F0",
        "accent-soft": "#E8F4FD",
        border: "#222222",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
