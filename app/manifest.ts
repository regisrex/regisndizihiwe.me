import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Regis N. | Software developer and designeer',
        short_name: 'Rex | Software devo',
        description: 'Software developer and UX Designer based in Rwanda',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}