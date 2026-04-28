import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NeoRescue — Kilitli Ambulans',
  description: 'Yenidoğan Resüsitasyonu Kaçış Odası Simülasyonu | Fenerbahçe Üniversitesi Tıp Fakültesi',
  keywords: 'NRP, yenidoğan, resüsitasyon, tıp, eğitim, simülasyon, FBÜ',
  metadataBase: new URL('https://neorescue.vercel.app'),
  openGraph: {
    title: 'NeoRescue — Kilitli Ambulans',
    description: 'Sınav koridorda değil. Ambulansın içinde.',
    type: 'website',
    images: ['/images/og_preview.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0E1A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="film-grain scan-lines vignette antialiased">
        {children}
      </body>
    </html>
  )
}
