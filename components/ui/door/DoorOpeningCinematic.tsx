'use client'

import { useEffect, useState } from 'react'
import { useGameStore } from '@/lib/store/gameStore'

export function DoorOpeningCinematic() {
  const { phase, endGame } = useGameStore()
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (phase !== 'door_opening') return
    setStep(0)

    const timings = [
      { delay: 800, fn: () => setStep(1) },  // Green hold
      { delay: 1600, fn: () => setStep(2) }, // Door motor sound
      { delay: 2200, fn: () => setStep(3) }, // Door opening
      { delay: 4000, fn: () => setStep(4) }, // White flood
      { delay: 5000, fn: () => endGame() },  // Fade to results
    ]

    const timers = timings.map(({ delay, fn }) => setTimeout(fn, delay))
    return () => timers.forEach(clearTimeout)
  }, [phase, endGame])

  if (phase !== 'door_opening') return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Green confirmation pulse */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: step >= 1 ? 'rgba(0, 230, 118, 0.12)' : 'transparent',
        }}
      />

      {/* Door opening flash */}
      <div
        className="absolute inset-0 transition-all duration-[2000ms] ease-in"
        style={{
          background: step >= 3 ? `rgba(255, 255, 255, ${Math.min(1, (step - 3) * 0.6)})` : 'transparent',
          opacity: step >= 3 ? 1 : 0,
        }}
      />

      {/* Final white out */}
      <div
        className="absolute inset-0 bg-white transition-opacity duration-1000"
        style={{ opacity: step >= 4 ? 1 : 0 }}
      />

      {/* Status text */}
      {step >= 1 && step < 4 && (
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-center">
          <div
            className="text-[var(--success)] font-mono text-lg tracking-[0.4em] uppercase transition-all duration-500"
            style={{ opacity: step >= 1 ? 1 : 0 }}
          >
            {step < 3 ? '✓ KOD DOĞRU' : 'KAPI AÇILIYOR...'}
          </div>
        </div>
      )}
    </div>
  )
}
