module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: ({ colors }) => ({
      ...colors,
      primary: '#6869ac'
    }),
    extend: {}
  },
  plugins: []
}
