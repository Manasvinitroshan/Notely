/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Include your main HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS, TS, JSX, and TSX files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('autoprefixer'), // Add autoprefixer as a plugin
  ],
};

