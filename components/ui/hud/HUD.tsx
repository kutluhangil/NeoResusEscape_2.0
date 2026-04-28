'use client'

import { useEffect } from 'react'
import { useGameStore } from '@/lib/store/gameStore'
import { QUESTIONS } from '@/lib/data/questions'
import { formatTime } from '@/lib/utils/timeFormat'

export function HUD() {
  const { elapsedSeconds, solvedQuestions, collectedDigits, errorCount, tick, phase } = useGameStore()

  useEffect(() => {
    if (phase !== 'playing') return
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [phase, tick])

  return (
    <div className="fixed inset-0 pointer-events-none z-20 select-none">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-4">
        {/* Timer */}
        <div className="glass rounded-lg px-3 py-2 flex items-center gap-2">
          <span className="text-[var(--text-tertiary)] text-xs">⏱</span>
          <span className="font-mono text-fbu-yellow text-sm font-bold monitor-glow">
            {formatTime(elapsedSeconds)}
          </span>
        </div>

        {/* Case counter */}
        <div className="glass rounded-lg px-3 py-2 text-center">
          <span className="font-mono text-white text-sm font-bold">
            <span className="text-fbu-yellow">{solvedQuestions.length}</span>
            <span className="text-[var(--text-tertiary)]">/{QUESTIONS.length}</span>
          </span>
          <div className="text-[var(--text-tertiary)] text-[10px] tracking-wider">VAKA</div>
        </div>

        {/* Error counter */}
        {errorCount > 0 && (
          <div className="glass rounded-lg px-3 py-2 flex items-center gap-2">
            <span className="text-[var(--error)] text-xs">✕</span>
            <span className="font-mono text-[var(--error)] text-sm font-bold">
              {errorCount}
            </span>
            <span className="text-[var(--text-tertiary)] text-xs">HATA</span>
          </div>
        )}
        {errorCount === 0 && <div className="w-20" />}
      </div>

      {/* Center crosshair */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Crosshair />
      </div>

      {/* Bottom: code collector */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-4 gap-2">
        <div className="text-[var(--text-tertiary)] text-[10px] tracking-[0.3em] uppercase font-mono">
          Kod Parçaları
        </div>
        <div className="glass rounded-xl px-4 py-2 flex gap-2">
          {QUESTIONS.map((q) => {
            const digit = collectedDigits[q.id]
            const solved = solvedQuestions.includes(q.id)
            return (
              <div
                key={q.id}
                title={solved ? `Vaka ${q.id} — ${q.category}` : `Vaka ${q.id}`}
                className={[
                  'w-7 h-8 flex items-center justify-center rounded font-mono text-sm font-bold',
                  'border transition-all duration-500',
                  solved
                    ? 'border-fbu-yellow/60 bg-fbu-yellow/10 text-fbu-yellow shadow-glow-yellow code-slot-fill'
                    : 'border-[var(--border-subtle)] bg-[#0F141F]/50 text-[var(--text-tertiary)]',
                ].join(' ')}
              >
                {digit ?? '·'}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Crosshair() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" className="opacity-70">
      <line x1="10" y1="2" x2="10" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="12" x2="10" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="10" x2="8" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="10" x2="18" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="10" r="1.5" fill="white" />
    </svg>
  )
}
