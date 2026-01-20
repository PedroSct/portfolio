import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a", 
        surface: "#121212",    
        "surface-highlight": "#1E1E1E", 
        border: "#2A2A2A",     
        text: {
          primary: "#EDEDED",   
          secondary: "#A1A1AA", 
          muted: "#52525B",    
        },
        primary: "#3B82F6",    
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%)',
      },
      // --- ATUALIZAÇÃO DA ANIMAÇÃO MARQUEE ---
      animation: {
        marquee: 'marquee 40s linear infinite', // Aumentei o tempo para ficar mais suave
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }, // <--- MUDAR DE -50% PARA -100%
        },
      },
      // ---------------------------------------
    },
  },
  plugins: [],
};
export default config;