/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:        '#1E2B38',
          'navy-mid':  '#253444',
          teal:        '#1E3220',
          'teal-dark': '#142418',
          'teal-mid':  '#1A2C1C',
          cyan:        '#D4921C',
          'cyan-dim':  '#B07A18',
          orange:      '#C4521A',
          'orange-dk': '#A84218',
          surface:     '#F5F0E6',
        },
      },
      fontFamily: {
        sans:    ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('@tailwindcss/typography'),
  ],
}
