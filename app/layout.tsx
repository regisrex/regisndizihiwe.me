import '@/app/globals.css';
import Footer from "@/components/common/footer";
import Nav from "@/components/common/nav";
import { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';

export const metadata: Metadata = {
    title: "Regis N.",
    description: "Sofware engineer ,tech advocate, a mentor and a designer ",
    metadataBase: new URL('https://regisndizihiwe.me'),
    keywords: ['Best UX Designer', 'Regis NDIZIHIWE', 'regisrex', 'Rwanda', 'Musanze', 'Kigali', 'Web developer', 'Mobile developer', 'Software engineer', 'Regis N.', 'NDIZIHIWE Regis', 'Software engineer in Rwanda', 'Kurious learn', 'Javascript', 'Golang']
}

const appFont = IBM_Plex_Mono({ weight: ['400'], subsets: ['latin'] })
export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <body className={appFont.className}>
            <Nav />
            <section
                className="flex flex-col bg-blur-md gap-4 w-full  min-h-screen color-slate-700  bg-black  selection:bg-yellow-400 selection:text-black  font-medium scrollbar-w-0px leading-7    sm:px-[2vw] sm:px-[4vw] md:px-[12vw] lg:px-[16vw]  bg-cover  bg-fixed"
                style={{
                    // backgroundImage: `url(${BBg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "fixed",
                }}
            >

                <div className="">
                    {children}
                    <div className="py-4"></div>
                </div>
                <Footer />
            </section>
        </body>
    );
}