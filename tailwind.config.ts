import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        nature: {
          green: "#A8D8B9",
          yellow: "#F6D55C",
          red: "#ED553B",
          white: "#F1F1F1",
          dark: "#1D3557",
        },
        theme: {
          dark: "#001F3D",
          light: "#ffffff",
        },
      },
      fontFamily: {
        sans: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)',
      },
    },
  },
};

export default config;
