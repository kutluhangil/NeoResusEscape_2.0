'use client'

import { useState, useEffect } from 'react'
import { useGameStore } from '@/lib/store/gameStore'
import { QUESTIONS } from '@/lib/data/questions'
import { GlassPanel } from '@/components/shared/GlassPanel'
import { Button } from '@/components/shared/Button'
import { formatTime } from '@/lib/utils/timeFormat'
import { ProceduralAudio } from '@/lib/hooks/useProceduralAudio'

export function QuestionModal() {
  const { activeQuestionId, answerCorrect, answerWrong, closeQuestion, phase } = useGameStore()
  const [questionTime, setQuestionTime] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [shaking, setShaking] = useState(false)

  const question = QUESTIONS.find((q) => q.id === activeQuestionId)

  useEffect(() => {
    if (phase !== 'question') return
    setSelected(null)
    setQuestionTime(0)
    const interval = setInterval(() => setQuestionTime((t) => t + 1), 1000)
    return () => clearInterval(interval)
  }, [phase, activeQuestionId])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const map: Record<string, string> = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
      if (map[e.key] && phase === 'question') handleSelect(map[e.key])
      if (e.key === 'Escape') closeQuestion()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [phase, activeQuestionId])

  const handleSelect = (optionId: string) => {
    if (selected) return
    setSelected(optionId)
    ProceduralAudio.click()

    setTimeout(() => {
      if (optionId === question?.correctOptionId) {
        ProceduralAudio.correct()
        answerCorrect(activeQuestionId!)
      } else {
        ProceduralAudio.wrong()
        setShaking(true)
        setTimeout(() => setShaking(false), 500)
        setTimeout(() => answerWrong(), 600)
      }
    }, 200)
  }

  if (!question || (phase !== 'question')) return null

  const difficultyColor = {
    kolay: 'text-[var(--success)]',
    orta: 'text-[var(--warning)]',
    zor: 'text-[var(--error)]',
  }[question.difficulty]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className={[
          'relative z-10 w-full max-w-2xl mx-4 transition-transform duration-200',
          shaking ? 'error-shake' : '',
        ].join(' ')}
      >
        <GlassPanel strong className="overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-fbu-yellow text-xs font-bold">
                VAKA {String(question.id).padStart(2, '0')} / 10
              </span>
              <span className="text-[var(--border-medium)]">·</span>
              <span className="text-[var(--text-tertiary)] text-xs uppercase tracking-wider">
                {question.category}
              </span>
              <span className={`text-xs font-mono font-bold ${difficultyColor} uppercase`}>
                [{question.difficulty}]
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[var(--text-tertiary)] text-xs">
                ⏱ {formatTime(questionTime)}
              </span>
              <button
                onClick={closeQuestion}
                className="text-[var(--text-tertiary)] hover:text-white w-6 h-6 flex items-center justify-center rounded transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            {/* Scenario */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-fbu-yellow text-xs">📋</span>
                <span className="text-fbu-yellow text-xs font-mono tracking-wider uppercase">Klinik Senaryo</span>
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed bg-[var(--bg-secondary)]/60 rounded-lg p-3 border border-[var(--border-subtle)]">
                {question.scenario}
              </p>
            </div>

            {/* Question */}
            <div className="mb-5">
              <p className="text-white text-base font-medium leading-snug flex items-start gap-2">
                <span className="text-fbu-yellow shrink-0 mt-0.5">❓</span>
                {question.question}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-2">
              {question.options.map((opt) => {
                const isSelected = selected === opt.id
                const isCorrect = opt.id === question.correctOptionId
                const showResult = !!selected

                let optionStyle = 'border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40 hover:border-fbu-yellow/40 hover:bg-fbu-yellow/3 cursor-pointer'
                if (isSelected && isCorrect && showResult) {
                  optionStyle = 'border-[var(--success)] bg-[var(--success)]/10 cursor-default'
                } else if (isSelected && !isCorrect && showResult) {
                  optionStyle = 'border-[var(--error)] bg-[var(--error)]/10 cursor-default'
                } else if (showResult) {
                  optionStyle = 'border-[var(--border-subtle)] bg-transparent opacity-50 cursor-default'
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    disabled={!!selected}
                    className={[
                      'w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 flex items-center gap-3',
                      optionStyle,
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'shrink-0 w-6 h-6 rounded flex items-center justify-center text-xs font-mono font-bold',
                        'border transition-colors duration-200',
                        isSelected && showResult && isCorrect
                          ? 'border-[var(--success)] bg-[var(--success)]/20 text-[var(--success)]'
                          : isSelected && showResult && !isCorrect
                            ? 'border-[var(--error)] bg-[var(--error)]/20 text-[var(--error)]'
                            : 'border-[var(--border-medium)] text-fbu-yellow',
                      ].join(' ')}
                    >
                      {opt.id}
                    </span>
                    <span className="text-[var(--text-secondary)] text-sm">{opt.text}</span>
                  </button>
                )
              })}
            </div>

            {/* Keyboard hint */}
            {!selected && (
              <div className="mt-3 text-center text-[var(--text-tertiary)] text-xs font-mono">
                Klavye ile seç: 1 · 2 · 3 · 4
              </div>
            )}
          </div>
        </GlassPanel>
      </div>
    </div>
  )
}
