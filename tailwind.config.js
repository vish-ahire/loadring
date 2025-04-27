/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fade 0.8s infinite alternate",
        customPulse: "customPulse 1.5s infinite",
        stretch: "stretch 1.2s infinite alternate",
        "square-spin": "square-spin 2s infinite linear",
        'dot-pulse': 'dot-pulse 1.5s infinite ease-in-out',
        'bounce': 'bounce 0.6s infinite alternate',

      },
      keyframes: {
        'bounce': {
          'to': { transform: 'translateY(-20px)' },
        },
        "square-spin": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(270deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        'dot-pulse': {
          '0%, 40%, 100%': { transform: 'scale(0)' },
          '20%': { transform: 'scale(1)' },
        },
        'fade': {
          'to': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
