import generateRandomColor from "@/utils/randomColor";
import { NextSeo } from "next-seo";
import { useState } from "react";
import BlogTitleBg from '@/assets/blog-title-bg.png'

export default function BlogTitle({
    id,
    releaseDate,
    title,
    description,
    readTime ,
    image,
    language
}: {
    id: string
    releaseDate: string,
    title: string,
    description: string,
    readTime: string,
    image : string,
    language : string
}) {
    const [color,setColor] =  useState(generateRandomColor())
    // useEffect(() => {
    //     setColor(generateRandomColor())
    // },[])
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: `https://regisndizihiwe.me/blog/${id}`,
                    title: title,
                    description: description,
                    images: [
                        {
                            url: '/og-image.png',
                            width: 800,
                            height: 600,
                            alt: 'www.regisndizihiwe.me',
                            type: 'image/png',
                        }
                    ],
                    siteName: 'Regis NDIZIHIWE | Blog',
                }}
                twitter={{
                    handle: '@regissrex',
                    site: 'www.regisndizihiwe.me',
                    cardType: 'image/png',
                }}
            />
            <div className={`flex flex-col gap-2  mb-6 py-10  px-4 bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${BlogTitleBg.src})`}}>
                <p className="opacity-60 font-sans italic">{releaseDate}</p>
                <h3 className='text-3xl font-bold'>{title}</h3>
                {/* <h3 className='text-white/60 my-2'>{description}</h3> */}
                <p className="flex justify-between"><span>{readTime}</span> <span className=" bg-white/10 p-1 rounded-full px-3 capitalize">{language}</span></p>
            </div>
        </>
    )
}