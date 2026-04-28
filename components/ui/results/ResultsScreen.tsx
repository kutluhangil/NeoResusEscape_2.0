'use client'

import { useEffect, useState, useRef } from 'react'
import { useGameStore, calculateScore } from '@/lib/store/gameStore'
import { useLeaderboardStore } from '@/lib/store/leaderboardStore'
import { QUESTIONS } from '@/lib/data/questions'
import { Button } from '@/components/shared/Button'
import { GlassPanel } from '@/components/shared/GlassPanel'
import { formatTime } from '@/lib/utils/timeFormat'

export function ResultsScreen() {
  const { playerName, elapsedSeconds, solvedQuestions, errorCount, resetGame, setPhase } = useGameStore()
  const { addEntry } = useLeaderboardStore()
  const [visible, setVisible] = useState(false)
  const [rank, setRank] = useState<number | null>(null)
  const [totalPlayers, setTotalPlayers] = useState(0)
  const [confetti, setConfetti] = useState<{ x: number; y: number; color: string; delay: number; size: number }[]>([])
  const savedRef = useRef(false)

  const correctCount = solvedQuestions.length
  const score = calculateScore(correctCount, elapsedSeconds, errorCount)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (savedRef.current) return
    savedRef.current = true

    const id = addEntry({
      name: playerName || 'Anonim',
      score,
      correctCount,
      elapsedSeconds,
      errorCount,
      completedAt: Date.now(),
    })

    const { getTopEntries, getPlayerRank } = useLeaderboardStore.getState()
    const entries = getTopEntries()
    setTotalPlayers(entries.length)
    setRank(getPlayerRank(id))
  }, [])

  useEffect(() => {
    setConfetti(
      Array.from({ length: 40 }, () => ({
        x: Math.random() * 100,
        y: -10,
        color: Math.random() > 0.5 ? '#FFD700' : '#00E676',
        delay: Math.random() * 3,
        size: Math.random() * 8 + 4,
      }))
    )
  }, [])

  const stats = [
    { icon: '⏱️', label: 'Toplam Süre', value: formatTime(elapsedSeconds) },
    { icon: '✓', label: 'Doğru Cevap', value: `${correctCount} / ${QUESTIONS.length}`, color: 'text-[var(--success)]' },
    { icon: '✕', label: 'Hata Sayısı', value: String(errorCount), color: errorCount > 0 ? 'text-[var(--error)]' : 'text-[var(--success)]' },
    { icon: '📊', label: 'Sıralama', value: rank ? `# ${rank} / ${totalPlayers}` : '—' },
    { icon: '🏆', label: 'Skor', value: `${score} puan`, color: 'text-fbu-yellow' },
  ]

  return (
    <div className="min-h-screen bg-[#0A0E1A] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-sm pointer-events-none"
          style={{
            left: `${c.x}%`,
            top: '-20px',
            width: `${c.size}px`,
            height: `${c.size}px`,
            backgroundColor: c.color,
            opacity: 0.7,
            animation: `fall ${3 + c.delay}s linear ${c.delay}s infinite`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes fall {
          to { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>

      <div
        className="relative z-10 w-full max-w-lg mx-4 transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-fbu-yellow text-sm tracking-[0.3em] uppercase font-mono mb-2">
            ✶  TEBRİKLER  ✶
          </div>
          <h1 className="text-3xl font-black text-white font-geist mb-2">
            DR. {(playerName || 'DOKTOR').toUpperCase()}
          </h1>
          <p className="text-[var(--text-secondary)] text-sm">
            Yenidoğan resüsitasyonunda ustalığını kanıtladın.
          </p>
        </div>

        {/* Stats panel */}
        <GlassPanel strong className="p-6 mb-6">
          <div className="space-y-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{stat.icon}</span>
                  <span className="text-[var(--text-secondary)] text-sm">{stat.label}</span>
                </div>
                <span className={`font-mono text-base font-bold ${stat.color ?? 'text-white'}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* Action buttons */}
        <div className="flex gap-3">
          <Button
            variant="secondary"
            size="md"
            onClick={() => setPhase('leaderboard')}
            className="flex-1"
          >
            LİDER TABLOSU
          </Button>
          <Button
            variant="primary"
            size="md"
            glow
            onClick={resetGame}
            className="flex-1"
          >
            TEKRAR OYNA
          </Button>
        </div>
      </div>
    </div>
  )
}
