module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6869ac'
      },
      padding: {
        ipad: 'calc(100% * 0.039) calc(100% * 0.042) calc(100% * 0.04) calc(100% * 0.036)',
        iphone:
          'calc(100% * 0.175) calc(100% * 0.0725) calc(100% * 0.18) calc(100% * 0.072)',
        'ipad-content': '77%',
        'iphone-content': '200%'
      },
      backgroundImage: {
        ipad: "url('../public/images/iPad.png')",
        iphone: "url('../public/images/iPhone.png')"
      }
    }
  },
  plugins: []
}
