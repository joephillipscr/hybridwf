import type { Config } from 'tailwindcss';

/* Theming runs entirely on the CSS custom properties in globals.css — dark on
   :root, light behind a .light class — so there are no `dark:` utilities and
   no darkMode strategy to configure. */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        raised: 'rgb(var(--raised) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        brand: 'rgb(var(--brand) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        gloss: 'rgb(var(--gloss) / <alpha-value>)',
        /* Classification colours for the 120-principle matrix */
        universal: 'rgb(var(--universal) / <alpha-value>)',
        adapted: 'rgb(var(--adapted) / <alpha-value>)',
        human: 'rgb(var(--human) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '46rem',
      },
      boxShadow: {
        candy: '0 1px 0 0 rgb(255 255 255 / 0.25) inset, 0 10px 30px -12px rgb(var(--accent) / 0.55)',
        lift: '0 18px 48px -24px rgb(var(--brand) / 0.4)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up .6s cubic-bezier(.16,1,.3,1) both',
      },
    },
  },
  plugins: [],
};
export default config;
