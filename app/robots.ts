import { SITE_URL } from '@/content/content'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: ['Applebot', 'Bingbot', 'Googlebot'],
                allow: '*',
                disallow: ['/test/']
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    }
}