import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "475px", // for very small devices
        sm: "640px", // small screens, typically tablets
        md: "768px", // medium screens, like larger tablets
        lg: "1024px", // large screens, like desktops
        xl: "1280px", // extra large screens
        "2xl": "1536px", // ultra-wide screens
      },
    },
  },
  plugins: [],
} satisfies Config;