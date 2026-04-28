'use client'

import { useEffect, useState } from 'react'
import { useGameStore } from '@/lib/store/gameStore'
import { Button } from '@/components/shared/Button'
import { GlassPanel } from '@/components/shared/GlassPanel'

export function ControlsTutorial() {
  const { setPhase, startGame, platform } = useGameStore()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const controls = platform === 'vr-quest'
    ? [
        { key: 'Sol Joystick', action: 'Hareket et' },
        { key: 'Sağ Joystick', action: 'Dön (45°)' },
        { key: 'Sağ Trigger', action: 'Etkileşim' },
        { key: 'A Butonu', action: 'Duraklat' },
      ]
    : [
        { key: 'W A S D', action: 'Hareket et' },
        { key: 'FARE', action: 'Etrafına bak' },
        { key: 'SHIFT', action: 'Hızlı yürü' },
        { key: 'E', action: 'Etkileşim / Vaka aç' },
        { key: 'ESC', action: 'Menü' },
      ]

  return (
    <div
      className="min-h-screen bg-[#0A0E1A] flex items-center justify-center relative overflow-hidden transition-all duration-700"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1B2545]/25 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-lg px-6">
        <GlassPanel strong className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-fbu-yellow text-xs tracking-[0.3em] uppercase font-mono mb-2">
              {platform === 'vr-quest' ? 'Meta Quest 2 Kontrolleri' : 'Klavye & Fare Kontrolleri'}
            </div>
            <h2 className="text-2xl font-bold text-white font-geist">KONTROLLER</h2>
          </div>

          {/* Keys grid */}
          <div className="space-y-3 mb-8">
            {controls.map((ctrl) => (
              <div key={ctrl.key} className="flex items-center justify-between">
                <div className="flex gap-1">
                  {ctrl.key.split(' ').map((k) => (
                    <KeyCap key={k} label={k} />
                  ))}
                </div>
                <span className="text-[var(--text-secondary)] text-sm">{ctrl.action}</span>
              </div>
            ))}
          </div>

          {/* Tip */}
          <div className="rounded-lg bg-fbu-yellow/5 border border-fbu-yellow/20 p-4 mb-8">
            <div className="flex gap-3 items-start">
              <span className="text-fbu-yellow text-lg">📍</span>
              <div>
                <p className="text-white text-sm font-medium mb-1">İPUCU</p>
                <p className="text-[var(--text-secondary)] text-sm">
                  Sarı ışıkları takip et — sorular oradadır. Her ekipmanın yanında parlayan halo bir vakayı işaret eder.
                </p>
              </div>
            </div>
          </div>

          {/* Start button */}
          <Button
            variant="primary"
            size="lg"
            glow
            onClick={() => startGame()}
            className="w-full font-geist font-bold tracking-wider"
          >
            ANLADIM, BAŞLA →
          </Button>
        </GlassPanel>
      </div>
    </div>
  )
}

function KeyCap({ label }: { label: string }) {
  return (
    <div className="min-w-[36px] h-9 px-2 flex items-center justify-center rounded-md bg-[#161C2A] border border-[var(--border-medium)] text-fbu-yellow text-xs font-mono font-bold shadow-[0_2px_0_rgba(255,215,0,0.2)]">
      {label}
    </div>
  )
}
