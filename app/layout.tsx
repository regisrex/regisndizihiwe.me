import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ style: 'normal', weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Regis NDIZIHIWE',
  description: 'UI/UX Designer & Front-end Developer based in Kigali, Rwanda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={" text-lg font-grotesk  selection:bg-black selection:text-white text-neutral-900"}>
        <Navbar />
        <div className='px-[4vw]'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
