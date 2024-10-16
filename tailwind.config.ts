import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#14b8a6",
          "primary-content": "#00070c",
          "secondary": "#efa937",
          "secondary-content": "#140a01",
          "accent": "#e22b39",
          "accent-content": "#120101",
          "neutral": "#111827",
          "neutral-content": "#c9cbcf",
          "base-100": "#ffffff",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          "base-content": "#161616",
          "info": "#0000ff",
          "info-content": "#c6dbff",
          "success": "#00ff00",
          "success-content": "#001600",
          "warning": "#00ff00",
          "warning-content": "#001600",
          "error": "#ff0000",
          "error-content": "#160000",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],


};
export default config;
