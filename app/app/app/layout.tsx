import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caleb Abotibono - Building from iPhone',
  description: 'SaaS and Web Developer documenting the journey from iPhone-only development to full setup.',
  keywords: ['mobile development', 'iPhone coding', 'SaaS developer', 'Next.js', 'bootstrapping'],
  authors: [{ name: 'Caleb Ayindoo Abotibono' }],
  openGraph: {
    title: 'Building a Dev Business from iPhone',
    description: 'Follow the journey of coding, deploying, and scaling using only a mobile device.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📱</text></svg>" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
