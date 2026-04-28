'use client'

import { useEffect, useState } from 'react'
import { useGameStore } from '@/lib/store/gameStore'
import { QUESTIONS } from '@/lib/data/questions'

export function CorrectFeedback() {
  const { activeQuestionId, closeQuestion, allSolved, setPhase, phase } = useGameStore()
  const [countdown, setCountdown] = useState(3)
  const [codeVisible, setCodeVisible] = useState(false)

  const question = QUESTIONS.find((q) => q.id === activeQuestionId)

  useEffect(() => {
    if (phase !== 'correct_feedback') return
    const t = setTimeout(() => setCodeVisible(true), 200)
    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(interval)
          if (allSolved) {
            setPhase('keypad')
          } else {
            closeQuestion()
          }
          return 0
        }
        return c - 1
      })
    }, 1000)
    return () => { clearTimeout(t); clearInterval(interval) }
  }, [phase, allSolved, closeQuestion, setPhase])

  if (!question || phase !== 'correct_feedback') return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative z-10 text-center px-6">
        {/* Success icon */}
        <div
          className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center success-glow-anim"
          style={{ background: 'rgba(0, 230, 118, 0.15)', border: '2px solid rgba(0, 230, 118, 0.6)' }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M6 16l7 7 13-13" stroke="#00E676" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Label */}
        <div className="text-[var(--success)] text-xs tracking-[0.4em] uppercase font-mono mb-3">
          D O Ğ R U   C E V A P
        </div>

        {/* Code digit reveal */}
        {codeVisible && (
          <div className="mb-4 code-slot-fill">
            <div className="text-[var(--text-tertiary)] text-xs font-mono mb-2">Kod Parçası Kazandın</div>
            <div
              className="w-16 h-20 mx-auto flex items-center justify-center rounded-xl text-4xl font-black font-mono"
              style={{
                background: 'rgba(255, 215, 0, 0.1)',
                border: '2px solid rgba(255, 215, 0, 0.6)',
                color: '#FFD700',
                boxShadow: '0 0 24px rgba(255, 215, 0, 0.4)',
              }}
            >
              {question.digit}
            </div>
          </div>
        )}

        {/* Explanation */}
        <div className="max-w-sm mx-auto mb-8 text-[var(--text-secondary)] text-sm leading-relaxed">
          {question.explanation}
        </div>

        {/* All solved hint */}
        {allSolved && (
          <div className="text-fbu-yellow text-sm font-medium mb-4 animate-pulse">
            🎉 Tüm vakalar tamamlandı! Kapı kodu hazır!
          </div>
        )}

        {/* Countdown */}
        <button
          onClick={() => allSolved ? setPhase('keypad') : closeQuestion()}
          className="text-[var(--text-tertiary)] text-sm hover:text-white transition-colors"
        >
          Devam ({countdown}s) →
        </button>
      </div>
    </div>
  )
}
