import Footer from "@/components/common/footer";
import Nav from "@/components/common/nav";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { type AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import "../code-styles.css";
import "../globals.css";

const appFont = DM_Sans({ subsets: ['latin'], fallback: ['serif'] })

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <DefaultSeo
        title="Regis NDIZIHIWE |  Blog"
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
      <div className={"font-general-sans bg-[#000000] min-h-screen flex flex-col gap-4  text-white selection:bg-neutral-800 ss:px-[2vw] sm:px-[5vw] md:px-[14vw] lg:px-[26vw] "}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>

  );
};

export default MyApp;
