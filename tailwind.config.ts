import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          midnight: '#20243A',
        },
        porcelain: '#FAF9F5',
        palm: {
          DEFAULT: '#3F6654',
          dark: '#2F4F40',
          light: '#537C68',
        },
        mango: {
          DEFAULT: '#D7A53B',
          dark: '#BA8D2F',
          light: '#E2B859',
        },
        terracotta: {
          DEFAULT: '#B85F4B',
          dark: '#9E4C3A',
        },
        cloud: {
          DEFAULT: '#E8E9E5',
          dark: '#D5D7D0',
          light: '#F2F3F0',
        },
        ink: {
          DEFAULT: '#17191D',
          muted: '#4A4E57',
          subtle: '#717682',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
        content: '680px',
      },
      boxShadow: {
        subtle: '0 8px 30px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        editorial: '4px',
        card: '6px',
        image: '8px',
        hero: '12px',
      },
    },
  },
  plugins: [],
};

export default config;
