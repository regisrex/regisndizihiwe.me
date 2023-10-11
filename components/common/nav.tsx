import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
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
    return (
        <div className="py-5 border-b border-white border-opacity-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src={"/favicon.png"} width={100} height={100} alt="" className="overflow-hidden w-8 h-8 rounded-full" draggable={false} />
                {
                    navLinks.map((link, i) => <Link href={link.href} key={i} className="hover:underline capitalize decoration-neutral-600 underline-offset-4">{link.title}</Link>)
                }
            </div>
            {/* <button onClick={toogleTheme} >theme</button> */}
        </div>
    )
}