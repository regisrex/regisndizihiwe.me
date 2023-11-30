import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const navLinks = [
    {
        title: 'home',
        href: '/'
    },
    {
        title: 'blog',
        href: '/blog'
    },
]


export default function Nav() {
    const { theme, setTheme } = useTheme();

    const toogleTheme = () => {
        if (theme == 'dark') setTheme('light')
        else if (theme == 'light') setTheme('dark')
        else setTheme('dark')
    }

    const router = useRouter()
    const [selected, setSelected] = useState('home')

    useEffect(() => {
        setSelected(router.pathname)
    }, [router.pathname])

    const checkMatch = (path: typeof router.pathname, selected: typeof navLinks[0]) => {
        if (selected.title == 'home') return path == selected.href
        if (selected.title == 'blog') return path.includes(selected.href)
    }
    return (    
        <ul>
            {navLinks.map((link, i) => <li key={i}>
                <Link href={link.href} className={`flex items-center max-w-[76px] my-2 hover:max-w-[84px] duration-500 gap-4 ${checkMatch(selected,link) && 'max-w-[76px]'}`}>
                    <div className={`w-full uppercase  duration-100 h-[2px] ${checkMatch(selected, link) ? 'bg-bluish-100 h-[5px] font-semibold' : 'bg-bluish-200'}`} />
                    <span className={`text-sm font-medium uppercase ${checkMatch(selected, link) ? 'text-bluish-100' : 'text-bluish-200'}`}>{link.title}</span>
                </Link>
            </li>
            )}
        </ul>
    )
}