import { NextSeo } from "next-seo"

export default function BlogTitle({
    id,
    releaseDate,
    title,
    description,
    readTime
}: {
    id: string
    releaseDate: string,
    title: string,
    description: string,
    readTime: string
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
            <div className="flex flex-col gap-2 mb-6 py-4 border-b border-neutral-800">
                <p className="opacity-60 font-sans italic">Released on: {releaseDate}</p>
                <h3 className='text-2xl font-bold text-white'>{title}</h3>
                <p className="opacity-60">{readTime} &nbsp;&nbsp;&nbsp;&nbsp; rust • open-source • cli </p>
            </div>
        </>
    )
}