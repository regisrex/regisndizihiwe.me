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

        <div className={"bg-ble min-h-screen color-bluish-200  font-medium scrollbar-w-0px leading-7 py-12  flex flex-col gap-4  sm:px-[2vw] sm:px-[4vw] md:px-[10vw] lg:px-[22vw] font-inter-var " + appfont.className}>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>

        </div>
      </div>
    </>
  );
};

export default MyApp;
