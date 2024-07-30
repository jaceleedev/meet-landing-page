import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-teal': '#4D96A9',
        'secondary-purple': '#855FB1',
        'neutral-dark': '#28283D',
        'neutral-medium': '#87879D',
        'accent-light-blue': '#8FE3F9',
        'accent-light-purple': '#D9B8FF',
        'neutral-light': '#FAFAFA',
      },
      fontFamily: {
        'red-hat-display': ['var(--font-red-hat-display)'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const typographyUtilities = {
        '.text-heading-1': {
          fontFamily: 'var(--font-red-hat-display)',
          fontSize: '64px',
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: '100%',
        },
        '.text-heading-2': {
          fontFamily: 'var(--font-red-hat-display)',
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: '110%',
        },
        '.text-sub-heading': {
          fontFamily: 'var(--font-red-hat-display)',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: '26px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#4D96A9',
        },
        '.text-body': {
          fontFamily: 'var(--font-red-hat-display)',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '26px',
        },
        '.text-numbered-circle': {
          fontFamily: 'var(--font-red-hat-display)',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: '26px',
          color: '#87879D',
        },
        '.text-button': {
          fontFamily: 'var(--font-red-hat-display)',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: '26px',
        },
      };

      addUtilities(typographyUtilities);
    }),
  ],
};
export default config;
