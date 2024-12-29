/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Paths to all your components and pages
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: { max: '639px' }, // Applies to screens 640px and smaller
        md: { max: '767px' }, // Applies to screens 768px and smaller
        lg: { max: '1023px' }, // Applies to screens 1024px and smaller
        xl: { max: '1279px' }, // Applies to screens 1280px and smaller
      },
    },
  },
  plugins: [],
}

