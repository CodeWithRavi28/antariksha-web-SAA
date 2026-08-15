/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--color-base) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        borderCustom: "rgb(var(--color-border) / <alpha-value>)",
        accentBlue: "rgb(var(--color-accent-blue) / <alpha-value>)",
        accentSky: "rgb(var(--color-accent-sky) / <alpha-value>)",
        textPrimary: "rgb(var(--color-text-primary) / <alpha-value>)",
        textMuted: "rgb(var(--color-text-muted) / <alpha-value>)",
      },
      fontFamily: {
        space: ["'Space Grotesk'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.25)",
        btnGlow: "0 0 20px rgba(59, 130, 246, 0.5)",
        cardGlow: "0 0 30px rgba(59, 130, 246, 0.15)",
      },
      animation: {
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
