import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
