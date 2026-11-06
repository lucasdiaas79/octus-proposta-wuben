import type { Config } from 'tailwindcss'

/**
 * Design system Studio Octus
 * Primárias: preto, branco, ciano Octus (#5CE3E5)
 * Secundárias: petróleo, névoa, ciano profundo, cinzas técnicos
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: { DEFAULT: '#5CE3E5', deep: '#0B7F84', ice: '#CFF7F8' },
        ink: '#0B0F10',
        coal: '#161C1E',
        petrol: { DEFAULT: '#0A2326', soft: '#0F3438' },
        mist: '#EEF2F2',
        tech: '#9AA3A6',
        slate: '#5E6A6E',
      },
      fontFamily: {
        sans: ['"Manrope Variable"', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.04em' },
      opacity: { '6': '0.06', '7': '0.07', '8': '0.08', '12': '0.12', '14': '0.14', '92': '0.92' },
    },
  },
  plugins: [],
} satisfies Config
