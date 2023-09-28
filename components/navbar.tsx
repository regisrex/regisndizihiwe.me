'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
const NAV_LINKS = [{
    title: 'work',
    href: '/'
},
{
    title: 'about',
    href: '/about'
},
{
    title: 'resume',
    href: 'https://docs.google.com/document/d/1B2Chia8J31BbRv3McTzQ7NGF8XpvWFFGS4PRRSEMcrE/edit?usp=sharing'
},
]
export default function Navbar() {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className="flex items-center justify-between py-10 px-[4vw] border-b">
            <h1 className="text-4xl font-medium">Regis&nbsp;Rex.</h1>
            <div className="flex items-center gap-14">
                {
                    NAV_LINKS.map((link, index) => (
                        <Link href={`${link.href}`} key={index}>
                            <span className={`capitalize ${link.href == pathname && "underline underline-offset-8 "}`}> {link.title}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}