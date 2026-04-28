'use client'

import { useState, useEffect } from 'react'
import { useGameStore, Platform } from '@/lib/store/gameStore'
import { Button } from '@/components/shared/Button'
import { GlassPanel } from '@/components/shared/GlassPanel'
import { detectPlatform } from '@/lib/utils/deviceDetect'

export function NameEntry() {
  const { setPhase, setPlayerName, setPlatform, platform } = useGameStore()
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    const detected = detectPlatform()
    setPlatform(detected)
  }, [setPlatform])

  const handleSubmit = () => {
    const trimmed = name.trim()
    if (trimmed.length < 2) {
      setError('En az 2 karakter giriniz.')
      return
    }
    if (trimmed.length > 30) {
      setError('En fazla 30 karakter giriniz.')
      return
    }
    setError('')
    setPlayerName(trimmed)
    setPhase('tutorial')
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="min-h-screen bg-[#0A0E1A] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1B2545]/30 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-[var(--text-tertiary)] text-xs tracking-[0.3em] uppercase font-mono mb-4">
            Ambulans Hazır
          </div>
          <h2 className="text-3xl font-bold text-white font-geist">
            Adın doktor?
          </h2>
        </div>

        {/* Name input */}
        <GlassPanel strong className="p-1 mb-2">
          <div className="flex items-center gap-3 px-4 py-3">
            <span className="text-fbu-yellow font-mono text-sm shrink-0">Dr.</span>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setError('')
              }}
              onKeyDown={handleKey}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Adınızı giriniz..."
              maxLength={30}
              autoFocus
              className={[
                'flex-1 bg-transparent text-white text-base outline-none',
                'placeholder:text-[var(--text-tertiary)]',
                'font-inter',
              ].join(' ')}
            />
            <span className="text-[var(--text-tertiary)] text-xs font-mono">{name.length}/30</span>
          </div>
          {/* focus indicator */}
          <div
            className="h-px mx-1 transition-all duration-300"
            style={{ background: focused ? 'var(--fbu-yellow)' : 'transparent', boxShadow: focused ? '0 0 8px rgba(255,215,0,0.5)' : 'none' }}
          />
        </GlassPanel>

        {error && (
          <p className="text-[var(--error)] text-xs font-mono mt-2 ml-2">{error}</p>
        )}

        {/* Platform selector */}
        <div className="mt-8 mb-10">
          <div className="text-[var(--text-tertiary)] text-xs tracking-wider uppercase font-mono mb-3">
            Platform Seç
          </div>
          <div className="grid grid-cols-2 gap-3">
            <PlatformCard
              emoji="🖥️"
              label="Web / Masaüstü"
              sublabel="WASD + Fare"
              selected={platform === 'desktop'}
              onClick={() => setPlatform('desktop')}
            />
            <PlatformCard
              emoji="🥽"
              label="Meta Quest 2"
              sublabel="WebXR"
              selected={platform === 'vr-quest'}
              onClick={() => setPlatform('vr-quest')}
            />
          </div>
        </div>

        {/* Submit */}
        <Button
          variant="primary"
          size="lg"
          glow
          onClick={handleSubmit}
          disabled={name.trim().length < 2}
          className="w-full font-geist font-bold tracking-wider"
        >
          AMBULANSA GİR →
        </Button>

        {/* Back */}
        <button
          onClick={() => setPhase('story')}
          className="mt-4 w-full text-center text-[var(--text-tertiary)] text-sm hover:text-white transition-colors duration-200"
        >
          ← Geri
        </button>
      </div>
    </div>
  )
}

function PlatformCard({
  emoji,
  label,
  sublabel,
  selected,
  onClick,
}: {
  emoji: string
  label: string
  sublabel: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={[
        'relative p-4 rounded-xl border text-left transition-all duration-200',
        'focus:outline-none',
        selected
          ? 'border-fbu-yellow/60 bg-fbu-yellow/5 shadow-glow-yellow'
          : 'border-[var(--border-subtle)] bg-[#0F141F] hover:border-fbu-yellow/30',
      ].join(' ')}
    >
      {selected && (
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-fbu-yellow" />
      )}
      <div className="text-2xl mb-2">{emoji}</div>
      <div className="text-white text-sm font-medium">{label}</div>
      <div className="text-[var(--text-tertiary)] text-xs mt-0.5 font-mono">{sublabel}</div>
    </button>
  )
}
