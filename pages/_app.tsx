import BaseLayout from "@/layouts/base-layout";
import '@unocss/reset/tailwind.css';
import { DefaultSeo } from "next-seo";
import { type AppProps } from "next/app";
import { Inter } from "next/font/google";
import 'uno.css';
import "../code-styles.css";
import "../globals.css";

const appfont = Inter({
  subsets: ['latin']
})


const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <DefaultSeo
        title="Regis NDIZIHIWE | Webdev | Open Source"
        description='Hey! Welcome to my spot on the internet'
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

        <div className={"bg-ble min-h-screen  scrollbar-w-0px leading-7  py-24  flex flex-col gap-4 text-neutral-300 ss:px-[2vw] sm:px-[4vw] md:px-[6vw] lg:px-[10vw] font-inter-var " + appfont.className}>
          {/* <Nav /> */}
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
          {/* <Footer /> */}
          {/* <Image  src={BlogTitleBg.src} width={BlogTitleBg.width} height={BlogTitleBg.height}  alt='' className='fixed mx-auto saturation blur-3xl right-0 -bottom-24 m'/> */}

        </div>
      </div>
    </>
  );
};

export default MyApp;
