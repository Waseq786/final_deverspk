import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nevbar1 from '../../components/nevbar1'
import Footer from '../../components/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DeversPk',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-200 font-serif'> {children}</body>
    </html>
  )
}
