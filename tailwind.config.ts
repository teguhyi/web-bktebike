import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "primary": "#00b2d6",
        "accent": "#ef233c",
        "background-light": "#f5f8f8",
        "background-dark": "#0f2023",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "lg": "0.5rem",
        "xl": "0.75rem",
      },
    }
  },

  plugins: []
} as Config;
