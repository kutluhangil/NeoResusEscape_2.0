'use client'

import { useEffect, useState } from 'react'
import { useGameStore } from '@/lib/store/gameStore'
import { QUESTIONS } from '@/lib/data/questions'

export function WrongFeedback() {
  const { activeQuestionId, watchHint, phase } = useGameStore()
  const [visible, setVisible] = useState(false)

  const question = QUESTIONS.find((q) => q.id === activeQuestionId)

  useEffect(() => {
    if (phase !== 'wrong_feedback') return
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [phase])

  if (!question || phase !== 'wrong_feedback') return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(255, 23, 68, 0.08)', backdropFilter: 'blur(8px)' }}
      />

      <div
        className="relative z-10 text-center px-6 transition-all duration-500"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'scale(1)' : 'scale(0.95)' }}
      >
        {/* Error icon */}
        <div
          className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255, 23, 68, 0.15)', border: '2px solid rgba(255, 23, 68, 0.6)' }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 8l16 16M24 8L8 24" stroke="#FF1744" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Label */}
        <div className="text-[var(--error)] text-xs tracking-[0.4em] uppercase font-mono mb-4">
          Y A N L I Ş
        </div>

        <p className="text-[var(--text-secondary)] text-sm mb-8 max-w-xs mx-auto">
          Endişelenme. Şu videoda doğru yaklaşımı birlikte inceleyelim.
        </p>

        <button
          onClick={() => watchHint(activeQuestionId!)}
          className="bg-[var(--error)]/10 border border-[var(--error)]/40 text-[var(--error)] px-6 py-3 rounded-xl text-sm font-medium hover:bg-[var(--error)]/20 transition-colors"
        >
          📺 Hatırlatma Videosunu İzle
        </button>
      </div>
    </div>
  )
}
