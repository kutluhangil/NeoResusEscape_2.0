import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

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
    <html lang="tr" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%231B2545'/><rect x='13' y='5' width='6' height='22' rx='2' fill='%23FFD700'/><rect x='5' y='13' width='22' height='6' rx='2' fill='%23FFD700'/></svg>" />
      </head>
      <body className="film-grain scan-lines antialiased" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
