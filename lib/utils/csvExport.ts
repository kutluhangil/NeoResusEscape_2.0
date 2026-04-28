import type { LeaderboardEntry } from '../store/leaderboardStore'
import { formatTime } from './timeFormat'

export function exportLeaderboardCSV(entries: LeaderboardEntry[]): void {
  const headers = ['Sıra', 'İsim', 'Doğru', 'Süre', 'Hata', 'Skor', 'Tarih']
  const rows = entries.map((e, i) => [
    String(i + 1),
    e.name,
    `${e.correctCount}/10`,
    formatTime(e.elapsedSeconds),
    String(e.errorCount),
    String(e.score),
    new Date(e.completedAt).toLocaleString('tr-TR'),
  ])

  const csvContent = [headers, ...rows]
    .map((row) => row.map((cell) => `"${cell}"`).join(','))
    .join('\n')

  const BOM = '﻿'
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `neorescue-lider-tablosu-${new Date().toISOString().split('T')[0]}.csv`
  link.click()
  URL.revokeObjectURL(url)
}
