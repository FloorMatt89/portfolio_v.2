import type { Config } from "tailwindcss";

export default {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   	extend: {
   		colors: {
   			background: 'var(--background)',
   			foreground: 'var(--foreground)',
   			card: 'var(--card)',
          'card-border': 'var(--card-border)',
          'card-border-hover': 'var(--card-border-hover)',
          amber: 'var(--amber)',
          orange: 'var(--orange)',
          yellow: 'var(--yellow)',
          gold: 'var(--gold)',
          red: 'var(--red)',
          pink: 'var(--pink)',
          muted: 'var(--muted)',
   		},
   		borderRadius: {
   			lg: 'var(--radius)',
   			md: 'calc(var(--radius) - 2px)',
   			sm: 'calc(var(--radius) - 4px)'
   		}
   	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
