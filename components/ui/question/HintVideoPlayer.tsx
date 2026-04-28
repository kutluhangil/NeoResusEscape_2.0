'use client'

import { useEffect, useRef, useState } from 'react'
import { useGameStore } from '@/lib/store/gameStore'
import { QUESTIONS } from '@/lib/data/questions'

export function HintVideoPlayer() {
  const { activeQuestionId, retryQuestion, phase } = useGameStore()
  const [ended, setEnded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const question = QUESTIONS.find((q) => q.id === activeQuestionId)

  useEffect(() => {
    if (phase !== 'hint_video') return
    setEnded(false)
    videoRef.current?.play().catch(() => {})
  }, [phase, activeQuestionId])

  if (!question || phase !== 'hint_video') return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 px-1">
          <div className="w-2 h-2 rounded-full bg-[var(--error)] animate-pulse" />
          <span className="text-[var(--text-secondary)] text-sm font-mono">HATIRLATMA VİDEOSU — Vaka {question.id}</span>
        </div>

        {/* Video */}
        <div className="rounded-xl overflow-hidden bg-[#0A0E1A] border border-[var(--border-subtle)] aspect-video relative">
          <video
            ref={videoRef}
            src={question.hintVideoUrl}
            className="w-full h-full object-cover"
            onEnded={() => setEnded(true)}
            playsInline
            controls={false}
          />

          {/* Placeholder when no video */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="text-[var(--text-tertiary)] text-sm font-mono text-center">
              📹 Video yüklenemedi.<br />
              <span className="text-xs opacity-60">{question.hintVideoUrl}</span>
            </div>
            <button
              onClick={() => setEnded(true)}
              className="text-fbu-yellow text-xs hover:underline"
            >
              Devam et →
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between px-1">
          <span className="text-[var(--text-tertiary)] text-xs">
            {ended ? 'Video tamamlandı.' : 'Video bittikten sonra soru tekrar sorulacak.'}
          </span>
          {ended && (
            <button
              onClick={retryQuestion}
              className="bg-fbu-yellow/10 border border-fbu-yellow/30 text-fbu-yellow px-4 py-2 rounded-lg text-sm hover:bg-fbu-yellow/20 transition-colors font-medium"
            >
              Soruya Dön →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
