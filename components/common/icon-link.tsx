import Link from 'next/link'

export const IconLink = ({ children, href }: any) => {
    return (
        <Link href={href} className="text-bluish-200 hover:text-bluish-100 scale-75">
            {children}
        </Link>
    )
}