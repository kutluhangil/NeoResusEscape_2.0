// Node.js canvas ile OG preview oluşturur
// npm install canvas  gerektirir — opsiyonel
// Kullanım: node scripts/generate-og.js
// Eğer canvas yoksa, public/images/ klasörüne manuel PNG koy

const fs = require('fs')
const path = require('path')

try {
  const { createCanvas } = require('canvas')

  const W = 1200, H = 630
  const canvas = createCanvas(W, H)
  const ctx = canvas.getContext('2d')

  // Background
  ctx.fillStyle = '#0A0E1A'
  ctx.fillRect(0, 0, W, H)

  // Gradient radial
  const grad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, 400)
  grad.addColorStop(0, 'rgba(27,37,69,0.6)')
  grad.addColorStop(1, 'transparent')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, H)

  // Medical cross
  ctx.fillStyle = '#CC2222'
  ctx.fillRect(W / 2 - 6, 100, 12, 80)
  ctx.fillRect(W / 2 - 40, 130, 80, 12)

  // Title
  ctx.font = 'bold 80px system-ui'
  ctx.fillStyle = '#FFFFFF'
  ctx.textAlign = 'center'
  ctx.fillText('NEORESCUE', W / 2, 280)

  // Yellow accent
  ctx.fillStyle = '#FFD700'
  ctx.font = 'bold 80px system-ui'
  ctx.fillText('RESCUE', W / 2, 280) // partial highlight

  // Subtitle
  ctx.font = '32px system-ui'
  ctx.fillStyle = '#B8C0D0'
  ctx.fillText('Kilitli Ambulans — Yenidoğan Resüsitasyonu', W / 2, 340)

  // Tagline
  ctx.font = 'italic 24px system-ui'
  ctx.fillStyle = '#FFD700'
  ctx.fillText('"Sınav koridorda değil. Ambulansın içinde."', W / 2, 400)

  // Bottom bar
  ctx.fillStyle = 'rgba(255,215,0,0.3)'
  ctx.fillRect(0, H - 2, W, 2)

  // FBÜ text
  ctx.font = '20px system-ui'
  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.fillText('Fenerbahçe Üniversitesi Tıp Fakültesi', W / 2, H - 30)

  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(path.join(__dirname, '../public/images/og_preview.png'), buffer)
  console.log('OG preview oluşturuldu: public/images/og_preview.png')
} catch (e) {
  console.log('canvas paketi bulunamadı. OG preview oluşturulamadı.')
  console.log('Çözüm: npm install canvas && node scripts/generate-og.js')
  console.log('Veya public/images/og_preview.jpg konumuna manuel PNG koy.')
}
