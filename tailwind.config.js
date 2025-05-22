// tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scrollRight: 'scrollRight 30s linear infinite',
      },
    },
  },
  plugins: [],
};
