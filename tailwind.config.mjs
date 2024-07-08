const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
		fontFamily: {
			'anton': ['Anton', 'sans-serif']
		},
      listStyleImage: {
        barberPole: 'url("/icons/listBarberPole.svg")',
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
