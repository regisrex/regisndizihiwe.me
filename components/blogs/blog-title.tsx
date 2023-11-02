import { NextSeo } from "next-seo"

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
            <div className="flex flex-col gap-2  mb-6 py-4  border-neutral-700">
                <p className="opacity-60 font-sans italic">{releaseDate}</p>
                <h3 className='text-3xl font-bold'>{title}</h3>
                {/* <h3 className='text-white/60 my-2'>{description}</h3> */}
                <p className="opacity-60 flex justify-between"><span>{readTime}</span> <span className="font-bold text-sky-500 capitalize">{language}</span></p>
            </div>
        </>
    )
}