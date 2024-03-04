import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ben Verbraecken - Developer',
  description: 'My name is Ben Verbraecken, a passionate web developer based in Beveren. With 20 years of experience in the field, I have a knack for creating interactive and responsive web applications. My expertise spans a wide range of languages and technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
