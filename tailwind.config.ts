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
        "general-sans" : ["General Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
  // darkMode : "class"
}
export default config
