import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { sand: '#E8D8BD', ocean: '#617D73', teal: '#123B2A', cream: '#FBFAF5', ink: '#102D21' }, fontFamily: { serif: ['var(--font-serif)'], sans: ['var(--font-sans)'] } } }, plugins: [] } satisfies Config;
