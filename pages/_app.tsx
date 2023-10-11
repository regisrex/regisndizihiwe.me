import Footer from "@/components/common/footer";
import Nav from "@/components/common/nav";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import "../code-styles.css";
import "../globals.css";

const appFont = DM_Sans({ subsets: ['latin'] , fallback: ['serif']})

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {/* <div className={appFont.className + " bg-black min-h-screen flex flex-col gap-10  text-white selection:bg-neutral-800 ss:px-[2vw] sm:px-[5vw] md:px-[14vw] lg:px-[26vw] "}> */}
      <div className={"font-general-sans bg-neutral-900 min-h-screen flex flex-col gap-4  text-white selection:bg-neutral-800 ss:px-[2vw] sm:px-[5vw] md:px-[14vw] lg:px-[26vw] "}>
        <Nav />
        <Component {...pageProps} />
        <Footer/>
      </div>
    </ThemeProvider>
  );
};

export default MyApp;