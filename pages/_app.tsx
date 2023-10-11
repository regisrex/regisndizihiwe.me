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
        title="Regis NDIZIHIWE's Blog"
        description='It\s Rex, Welcome to my spot on internet'
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.regisndizihiwe.me/',
          siteName: 'Regis NDIZIHIWE\' Blog',
          images: [
            { 
              url: "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
              width: 800,
              height: 600,
              alt: 'Regis NDIZIHIWE\' Blog',
              type: 'image/jpeg',

            }
          ],

        }}
        twitter={{
          handle: '@regisrex',
          site: 'www.regisndizihiwe.me',
          cardType: 'It\s Rex, Welcome to my spot on internet',
        }}
      />
      <div className={"font-general-sans bg-neutral-900 min-h-screen flex flex-col gap-4  text-white selection:bg-neutral-800 ss:px-[2vw] sm:px-[5vw] md:px-[14vw] lg:px-[26vw] "}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>

  );
};

export default MyApp;