import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens : {
        "ss" : "0px"
      },
      fontFamily : {
        "general-sans" : ["General Sans", "sans-serif"],
        'inter-var' : ['Intervar', 'sans-serif']
      },
      colors : {
        'ble' : '#0F172A',
        'bluish' : {
          '100' : '#E2E8F0',
          '200' : '#8D9BB0'
        }
      }
    },
  },
  plugins: [],
  // darkMode : "class"
}
export default config
