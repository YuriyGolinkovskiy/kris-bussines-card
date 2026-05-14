import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF8F0',
        surface: '#F9EFE6',
        'text-primary': '#2A2A2A',
        'text-secondary': '#6B5B55',
        accent: '#9B1D2C',
        'accent-light': '#C43D4F',
        'accent-dark': '#751A26',
        decor: '#C9A87C',
        success: '#2E7D64',
        error: '#C94F4F',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;