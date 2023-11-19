import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
const navLinks = [
    {
        title: 'about',
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
        <div className="py-5   items-center justify-between top-0 flex backdrop-blur">
            <div className="flex items-center  w-full gap-4">
                <Link href={'/'} className="shadow-sm hover:shadow-lg"> <Image src={"/favicon.png"} width={100} height={100} alt="" className="overflow-hidden w-8 h-8 rounded-full" draggable={false} /></Link>
                <div className="w-fit flex items-center gap-4">
                    {
                        navLinks.map((link, i) => <Link href={link.href} key={i} className="hover:underline  decoration-neutral-600 underline-offset-4">{link.title}</Link>)
                    }
                </div>
            </div>
            {/* <button onClick={toogleTheme} >theme</button> */}
        </div>
    )
}