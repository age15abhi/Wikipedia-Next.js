import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WikiRocket',
  description: 'This is the Home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const bodyClass = `${inter.className} bg-slate-800`

  return (
    <html lang="en">
      <body className={bodyClass}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
