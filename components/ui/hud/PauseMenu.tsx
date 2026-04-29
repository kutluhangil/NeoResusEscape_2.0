'use client'

import { useEffect, useState } from 'react'
import { useGameStore } from '@/lib/store/gameStore'
import { GlassPanel } from '@/components/shared/GlassPanel'
import { Button } from '@/components/shared/Button'

export function PauseMenu() {
  const { phase, setPhase, resetGame } = useGameStore()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (phase !== 'playing') { setOpen(false); return }

    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Escape') setOpen((v) => !v)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [phase])

  if (!open || phase !== 'playing') return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <GlassPanel strong className="relative z-10 p-8 w-80">
        <h2 className="text-white text-xl font-bold font-geist text-center mb-6">DURAKLAT</h2>
        <div className="flex flex-col gap-3">
          <Button variant="primary" size="md" onClick={() => setOpen(false)} className="w-full">
            Devam Et
          </Button>
          <Button variant="secondary" size="md" onClick={() => { setOpen(false); setPhase('tutorial') }} className="w-full">
            Kontrolleri Gör
          </Button>
          <Button variant="ghost" size="md" onClick={() => { setOpen(false); resetGame() }} className="w-full text-[var(--error)]">
            Oyunu Bitir
          </Button>
        </div>
        <p className="text-center text-[var(--text-tertiary)] text-xs mt-4 font-mono">ESC ile kapat</p>
      </GlassPanel>
    </div>
  )
}
