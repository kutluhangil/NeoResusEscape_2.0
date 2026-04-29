'use client'

import { useEffect, useState } from 'react'

export function MidpointCelebration() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => {
      setVisible(true)
      setTimeout(() => setVisible(false), 3000)
    }
    window.addEventListener('midpoint-reached', handler)
    return () => window.removeEventListener('midpoint-reached', handler)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center">
      {/* Golden radial burst */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,215,0,0.12) 0%, transparent 60%)',
          animation: 'fadeIn 0.3s ease-out, fadeOut 0.5s ease-in 2.5s forwards',
        }}
      />

      {/* Center text */}
      <div
        className="text-center"
        style={{ animation: 'slideUp 0.4s ease-out, fadeOut 0.5s ease-in 2.3s forwards' }}
      >
        <div className="text-fbu-yellow text-xs tracking-[0.4em] uppercase font-mono mb-2 yellow-glow">
          ✦ YARI YOL ✦
        </div>
        <div className="text-white text-2xl font-bold font-geist">
          5 / 10 Vaka
        </div>
        <div className="text-[var(--text-secondary)] text-sm mt-1">
          Devam et, doktor. Kapı yakınlaşıyor.
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeOut {
          to { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
