import Footer from "@/components/common/footer";
import Nav from "@/components/common/nav";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { type AppProps } from "next/app";
import { Source_Serif_4 } from "next/font/google";
import "../code-styles.css";
import "../globals.css";

const appfont = Source_Serif_4({
  weight : ['400'],
  subsets : ['latin']
})


const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <DefaultSeo
        title="Regis NDIZIHIWE | Blog"
        description='Welcome to my spot on internet'
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.regisndizihiwe.me/',
          siteName: 'Regis NDIZIHIWE - Personal site and blog',
          images: [
            {
              url: "/og-img.png",
              width: 800,
              height: 600,
              alt: 'www.regisndizihiwe.me',
              type: 'image/jpeg',

            }
          ],

        }}
        twitter={{
          handle: '@regisrex',
          site: 'www.regisndizihiwe.me',
          cardType: 'image/png',
        }}
      />
      <div>
  
      <div className={" bg-white min-h-screen  leading-7   flex flex-col gap-4   text-black ss:px-[2vw] sm:px-[5vw] md:px-[14vw] lg:px-[24vw] " + appfont.className}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
      </div>
    </ThemeProvider>

  );
};

export default MyApp;
