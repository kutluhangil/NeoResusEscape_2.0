'use client'

import { useEffect, useState } from 'react'
import { useGameStore } from '@/lib/store/gameStore'
import { useLeaderboardStore } from '@/lib/store/leaderboardStore'
import { Button } from '@/components/shared/Button'
import { formatTime } from '@/lib/utils/timeFormat'
import { exportLeaderboardCSV } from '@/lib/utils/csvExport'

export function LeaderboardTable() {
  const { setPhase, playerName } = useGameStore()
  const { getTopEntries, clearAll } = useLeaderboardStore()
  const [entries, setEntries] = useState(getTopEntries())
  const [visible, setVisible] = useState(false)
  const [showClear, setShowClear] = useState(false)

  useEffect(() => {
    setEntries(getTopEntries())
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [getTopEntries])

  const medals = ['🥇', '🥈', '🥉']

  return (
    <div
      className="min-h-screen bg-[#0A0E1A] flex flex-col transition-all duration-700"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)]">
        <button
          onClick={() => setPhase('landing')}
          className="text-[var(--text-tertiary)] hover:text-white transition-colors text-sm flex items-center gap-2"
        >
          ← Geri
        </button>
        <div className="text-center">
          <h1 className="text-lg font-bold text-white font-geist">LİDER TABLOSU</h1>
          <p className="text-[var(--text-tertiary)] text-xs">Fenerbahçe Üniversitesi Tıp Fakültesi</p>
        </div>
        <button
          onClick={() => exportLeaderboardCSV(entries)}
          className="text-fbu-yellow text-sm hover:text-fbu-yellow-warm transition-colors flex items-center gap-1"
          title="CSV İndir"
        >
          📥 CSV
        </button>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto px-4 py-4">
        {entries.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 gap-4">
            <div className="text-[var(--text-tertiary)] text-4xl">📭</div>
            <p className="text-[var(--text-secondary)] text-sm">Henüz kayıt yok. İlk oyunu sen başlat!</p>
            <Button variant="primary" size="md" glow onClick={() => setPhase('story')}>
              OYUNA BAŞLA
            </Button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            {/* Column headers */}
            <div className="grid grid-cols-[48px_1fr_80px_80px_80px] gap-3 px-4 py-2 text-[var(--text-tertiary)] text-xs font-mono uppercase tracking-wider border-b border-[var(--border-subtle)] mb-1">
              <div>#</div>
              <div>İsim</div>
              <div className="text-right">Doğru</div>
              <div className="text-right">Süre</div>
              <div className="text-right">Skor</div>
            </div>

            {entries.map((entry, i) => {
              const isCurrentPlayer = entry.name === playerName
              return (
                <div
                  key={entry.id}
                  className={[
                    'grid grid-cols-[48px_1fr_80px_80px_80px] gap-3 px-4 py-3 rounded-lg items-center',
                    'border transition-colors duration-200',
                    isCurrentPlayer
                      ? 'border-fbu-yellow/30 bg-fbu-yellow/5'
                      : 'border-transparent hover:border-[var(--border-subtle)] hover:bg-[var(--bg-secondary)]/40',
                  ].join(' ')}
                >
                  {/* Rank */}
                  <div className="text-center">
                    {i < 3 ? (
                      <span className="text-lg">{medals[i]}</span>
                    ) : (
                      <span className="font-mono text-[var(--text-tertiary)] text-sm">{i + 1}</span>
                    )}
                  </div>

                  {/* Name */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={[
                        'text-sm font-medium truncate',
                        isCurrentPlayer ? 'text-fbu-yellow' : 'text-white',
                      ].join(' ')}
                    >
                      Dr. {entry.name}
                    </span>
                    {isCurrentPlayer && (
                      <span className="text-fbu-yellow text-xs font-mono shrink-0">◀ sen</span>
                    )}
                  </div>

                  {/* Correct */}
                  <div className="text-right font-mono text-sm">
                    <span className={entry.correctCount === 10 ? 'text-[var(--success)]' : 'text-white'}>
                      {entry.correctCount}/10
                    </span>
                  </div>

                  {/* Time */}
                  <div className="text-right font-mono text-sm text-[var(--text-secondary)]">
                    {formatTime(entry.elapsedSeconds)}
                  </div>

                  {/* Score */}
                  <div className="text-right font-mono text-sm">
                    <span className={i < 3 ? 'text-fbu-yellow' : 'text-[var(--text-secondary)]'}>
                      {entry.score}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <button
          onClick={() => setPhase('story')}
          className="text-fbu-yellow text-sm hover:text-fbu-yellow-warm transition-colors"
        >
          Oyuna Başla →
        </button>
        <div className="relative">
          <button
            onDoubleClick={() => {
              clearAll()
              setEntries([])
            }}
            className="text-[var(--text-tertiary)] text-xs hover:text-[var(--error)] transition-colors"
            title="Tabloyu temizle (çift tıkla)"
          >
            🗑 Tabloyu Temizle
          </button>
        </div>
      </div>
    </div>
  )
}
