'use client'

import { useState } from 'react'
import { ProceduralAudio } from '@/lib/hooks/useProceduralAudio'

let _muted = false

export function AudioToggle() {
  const [muted, setMuted] = useState(false)

  const toggle = () => {
    _muted = !_muted
    setMuted(_muted)
    ProceduralAudio.click()
  }

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-30 glass rounded-lg p-2 text-[var(--text-tertiary)] hover:text-white transition-colors duration-200"
      title={muted ? 'Sesi Aç' : 'Sesi Kapat'}
    >
      {muted ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M9 3L5 6H2v4h3l4 3V3z" fill="currentColor" opacity="0.5"/>
          <line x1="11" y1="5" x2="15" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="5" x2="11" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M9 3L5 6H2v4h3l4 3V3z" fill="currentColor"/>
          <path d="M11 6c.8.6 1.3 1.5 1.3 2.5s-.5 1.9-1.3 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M13 4c1.5 1.2 2.5 3 2.5 4.5s-1 3.3-2.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )}
    </button>
  )
}
