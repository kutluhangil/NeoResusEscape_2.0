import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { calculateScore } from './gameStore'

export interface LeaderboardEntry {
  id: string
  name: string
  score: number
  correctCount: number
  elapsedSeconds: number
  errorCount: number
  completedAt: number
}

interface LeaderboardState {
  entries: LeaderboardEntry[]
  addEntry: (entry: Omit<LeaderboardEntry, 'id'>) => void
  clearAll: () => void
  getTopEntries: (limit?: number) => LeaderboardEntry[]
  getPlayerRank: (entryId: string) => number
}

export const useLeaderboardStore = create<LeaderboardState>()(
  persist(
    (set, get) => ({
      entries: [],

      addEntry: (entry) => {
        const newEntry: LeaderboardEntry = {
          ...entry,
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        }
        set((state) => ({
          entries: [...state.entries, newEntry]
            .sort((a, b) => {
              if (b.correctCount !== a.correctCount) return b.correctCount - a.correctCount
              return a.elapsedSeconds - b.elapsedSeconds
            })
            .slice(0, 50),
        }))
        return newEntry.id
      },

      clearAll: () => set({ entries: [] }),

      getTopEntries: (limit = 50) => {
        return get().entries.slice(0, limit)
      },

      getPlayerRank: (entryId) => {
        const entries = get().entries
        const idx = entries.findIndex((e) => e.id === entryId)
        return idx === -1 ? -1 : idx + 1
      },
    }),
    {
      name: 'neorescue-leaderboard',
      storage: createJSONStorage(() =>
        typeof window !== 'undefined' ? localStorage : {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        }
      ),
    }
  )
)
