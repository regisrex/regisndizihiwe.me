import Footer from '@/components/common/footer'
import { IconLink } from '@/components/common/icon-link'
import Nav from '@/components/common/nav'
import { GithubIcon, TwitterIcon } from '@/components/icons'
import { fairyDustCursor } from "cursor-effects"
import { useEffect } from 'react'

export default function BaseLayout({ children }: any) {
    return (
        <div className='flex'>
            <div className='sticky top-24 h-fit w-2/5 z-42'>
                <div className='flex flex-col gap-4 '>
                    <p className='text-bluish-100 text-4xl font-black'>R&eacute;gis N.</p>
                    <p className='text-bluish-100 text-xl font-semibold'>I write code and design experiences.</p>
                    <p className='text-bluish-200  font-medium'>
                   Teen designer & programmer,<br/> currently working at kurious lean

                        </p>
                </div>
                <div className='my-14'>
                    <Nav />
                </div>
                <div className='flex  gap-2 items-center fixe' >
                    <IconLink href="https://github.com/regisrex"><GithubIcon /></IconLink>
                    <IconLink href="https://x.com/regissrex"><TwitterIcon /></IconLink>
                    {/* <IconLink href="https://x.com/regissrex"><MastodonIcon /></IconLink> */}
                </div>
            </div>
            <div className='w-3/5 z-20'>
                {children}
                <div className='py-4'>
                <Footer />

                </div>
            </div>
            <div className='absolute fixed w-full mx-auto blur-3xl opacity-40'>
                <svg width="778" height="673" viewBox="0 0 778 673" fill="none" xmlns="http://www.w3.org/2000/svg" id='bgbck' className=''>
                    <rect width="778" height="673" fill="url(#paint0_linear_28_63)" fill-opacity="0.32" />
                    <defs>
                        <linearGradient id="paint0_linear_28_63" x1="642" y1="136" x2="142.5" y2="608" gradientUnits="userSpaceOnUse">
                            <stop offset="0.0758428" stop-color="#78B6FF" stop-opacity="0.09" />
                            <stop offset="0.407086" stop-color="#78F7FF" />
                            <stop offset="0.784899" stop-color="#5AA5FE" stop-opacity="0.10" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>


        </div>
    )
}