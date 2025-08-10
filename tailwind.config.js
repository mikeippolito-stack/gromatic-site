/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { 
    extend: {
      colors: {
        'gromatic-green': '#2B7A3D',
        'automation-blue': '#1E3A8A',
        'success-gold': '#F59E0B'
      }
    } 
  },
  plugins: [],
};
