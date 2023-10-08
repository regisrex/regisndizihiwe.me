import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Regis NDIZIHIWE',
  description: "I code in Typescript, Go and I'm planning to add Rust",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <main className={inter.className+ " " + " text-white selection:bg-neutral-800"}>{children}</main>
    </html>
  )
}
