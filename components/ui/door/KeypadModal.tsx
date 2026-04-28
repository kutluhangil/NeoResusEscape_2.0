'use client'

import { useState, useEffect } from 'react'
import { useGameStore, getDoorCode } from '@/lib/store/gameStore'
import { DOOR_CODE } from '@/lib/data/questions'
import { GlassPanel } from '@/components/shared/GlassPanel'

const MAX_ATTEMPTS = 3

export function KeypadModal() {
  const { phase, setPhase, collectedDigits, endGame } = useGameStore()
  const [input, setInput] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [flash, setFlash] = useState<'none' | 'error' | 'success'>('none')
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    if (phase !== 'keypad') return
    setInput('')
    setAttempts(0)
    setFlash('none')
    setLocked(false)
  }, [phase])

  const handlePress = (digit: string) => {
    if (locked || input.length >= 10) return
    setInput((prev) => prev + digit)
  }

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1))
  }

  const handleSubmit = () => {
    if (input.length !== 10) return
    const correctCode = getDoorCode(collectedDigits)

    if (input === correctCode) {
      setFlash('success')
      setTimeout(() => setPhase('door_opening'), 1200)
    } else {
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      setFlash('error')
      setTimeout(() => {
        setFlash('none')
        setInput('')
        if (newAttempts >= MAX_ATTEMPTS) setLocked(true)
      }, 800)
    }
  }

  if (phase !== 'keypad') return null

  const remaining = MAX_ATTEMPTS - attempts

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <div
        className="relative z-10 w-full max-w-sm mx-4"
        style={{
          filter:
            flash === 'error'
              ? 'drop-shadow(0 0 20px rgba(255,23,68,0.6))'
              : flash === 'success'
                ? 'drop-shadow(0 0 20px rgba(0,230,118,0.6))'
                : 'none',
          transition: 'filter 0.3s ease',
        }}
      >
        <GlassPanel strong className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="text-fbu-yellow text-xs tracking-[0.3em] uppercase font-mono mb-1">
              ✶ ACİL DURUM KİLİT KONTROLÜ ✶
            </div>
            <div className="text-[var(--text-tertiary)] text-xs">
              Kapı Kontrol Paneli — 112 ARGE-09
            </div>
          </div>

          {/* Display */}
          <div
            className="mb-6 rounded-lg p-3 text-center border transition-colors duration-300"
            style={{
              background: '#0A0E1A',
              borderColor:
                flash === 'error'
                  ? 'rgba(255,23,68,0.6)'
                  : flash === 'success'
                    ? 'rgba(0,230,118,0.6)'
                    : 'rgba(255,215,0,0.2)',
            }}
          >
            <div className="flex items-center justify-center gap-1.5">
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className="w-6 h-8 flex items-center justify-center font-mono text-sm font-bold rounded border"
                  style={{
                    background: input[i] ? 'rgba(255,215,0,0.1)' : 'transparent',
                    borderColor: input[i] ? 'rgba(255,215,0,0.4)' : 'rgba(255,215,0,0.1)',
                    color:
                      flash === 'success'
                        ? '#00E676'
                        : flash === 'error'
                          ? '#FF1744'
                          : '#FFD700',
                  }}
                >
                  {input[i] ?? '·'}
                </div>
              ))}
            </div>
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((d) => (
              <KeypadBtn key={d} label={d} onClick={() => handlePress(d)} disabled={locked} />
            ))}
            <KeypadBtn label="←" onClick={handleBackspace} disabled={locked} variant="secondary" />
            <KeypadBtn label="0" onClick={() => handlePress('0')} disabled={locked} />
            <KeypadBtn
              label="✓"
              onClick={handleSubmit}
              disabled={locked || input.length !== 10}
              variant="confirm"
            />
          </div>

          {/* Attempts warning */}
          {locked ? (
            <div className="text-center text-[var(--error)] text-xs font-mono">
              ⚠ Çok fazla yanlış deneme. Lütfen bekleyin.
            </div>
          ) : attempts > 0 ? (
            <div className="text-center text-[var(--warning)] text-xs font-mono">
              ⚠ {remaining} deneme hakkı kaldı
            </div>
          ) : (
            <div className="text-center text-[var(--text-tertiary)] text-xs font-mono">
              10 haneli kodu girin ve ✓ tuşuna basın
            </div>
          )}
        </GlassPanel>
      </div>
    </div>
  )
}

function KeypadBtn({
  label,
  onClick,
  disabled,
  variant = 'default',
}: {
  label: string
  onClick: () => void
  disabled?: boolean
  variant?: 'default' | 'secondary' | 'confirm'
}) {
  const styles = {
    default: 'border-[var(--border-subtle)] bg-[#161C2A] hover:bg-[#1B2545] hover:border-fbu-yellow/40 text-white',
    secondary: 'border-[var(--border-subtle)] bg-[#161C2A] hover:bg-red-900/20 hover:border-red-500/40 text-[var(--text-secondary)]',
    confirm: 'border-[var(--success)]/40 bg-[var(--success)]/10 hover:bg-[var(--success)]/20 text-[var(--success)]',
  }[variant]

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        'h-12 rounded-lg border font-mono text-sm font-bold transition-all duration-150',
        'active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed',
        styles,
      ].join(' ')}
    >
      {label}
    </button>
  )
}
