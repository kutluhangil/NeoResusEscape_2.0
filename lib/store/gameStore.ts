import { create } from 'zustand'
import { QUESTIONS, DOOR_CODE } from '../data/questions'

export type GamePhase =
  | 'landing'
  | 'story'
  | 'name_entry'
  | 'tutorial'
  | 'playing'
  | 'question'
  | 'correct_feedback'
  | 'wrong_feedback'
  | 'hint_video'
  | 'keypad'
  | 'door_opening'
  | 'results'
  | 'leaderboard'

export type Platform = 'desktop' | 'mobile' | 'vr-quest' | 'vr-other'

interface GameState {
  phase: GamePhase
  playerName: string
  platform: Platform
  startTime: number | null
  endTime: number | null
  elapsedSeconds: number
  solvedQuestions: number[]
  collectedDigits: Record<number, string>
  errorCount: number
  activeQuestionId: number | null
  hintsWatched: number[]
  cameraLocked: boolean
  allSolved: boolean

  setPhase: (phase: GamePhase) => void
  setPlayerName: (name: string) => void
  setPlatform: (platform: Platform) => void
  startGame: () => void
  openQuestion: (questionId: number) => void
  answerCorrect: (questionId: number) => void
  answerWrong: () => void
  watchHint: (questionId: number) => void
  retryQuestion: () => void
  closeQuestion: () => void
  tick: () => void
  endGame: () => void
  resetGame: () => void
  lockCamera: () => void
  unlockCamera: () => void
}

export const useGameStore = create<GameState>((set, get) => ({
  phase: 'landing',
  playerName: '',
  platform: 'desktop',
  startTime: null,
  endTime: null,
  elapsedSeconds: 0,
  solvedQuestions: [],
  collectedDigits: {},
  errorCount: 0,
  activeQuestionId: null,
  hintsWatched: [],
  cameraLocked: false,
  allSolved: false,

  setPhase: (phase) => set({ phase }),

  setPlayerName: (name) => set({ playerName: name }),

  setPlatform: (platform) => set({ platform }),

  startGame: () => set({
    startTime: Date.now(),
    elapsedSeconds: 0,
    phase: 'playing',
  }),

  openQuestion: (questionId) => set({
    activeQuestionId: questionId,
    phase: 'question',
    cameraLocked: true,
  }),

  answerCorrect: (questionId) => {
    const state = get()
    const question = QUESTIONS.find((q) => q.id === questionId)
    if (!question) return

    const newSolved = [...state.solvedQuestions, questionId]
    const newDigits = { ...state.collectedDigits, [questionId]: question.digit }
    const allSolved = newSolved.length === QUESTIONS.length

    set({
      solvedQuestions: newSolved,
      collectedDigits: newDigits,
      allSolved,
      phase: 'correct_feedback',
    })
  },

  answerWrong: () => set((state) => ({
    errorCount: state.errorCount + 1,
    phase: 'wrong_feedback',
  })),

  watchHint: (questionId) => set((state) => ({
    hintsWatched: [...state.hintsWatched, questionId],
    phase: 'hint_video',
  })),

  retryQuestion: () => set({ phase: 'question' }),

  closeQuestion: () => set({
    activeQuestionId: null,
    phase: 'playing',
    cameraLocked: false,
  }),

  tick: () => set((state) => {
    if (state.startTime && state.phase === 'playing') {
      return { elapsedSeconds: Math.floor((Date.now() - state.startTime) / 1000) }
    }
    return {}
  }),

  endGame: () => set({
    endTime: Date.now(),
    phase: 'results',
  }),

  resetGame: () => set({
    phase: 'landing',
    playerName: '',
    startTime: null,
    endTime: null,
    elapsedSeconds: 0,
    solvedQuestions: [],
    collectedDigits: {},
    errorCount: 0,
    activeQuestionId: null,
    hintsWatched: [],
    cameraLocked: false,
    allSolved: false,
  }),

  lockCamera: () => set({ cameraLocked: true }),
  unlockCamera: () => set({ cameraLocked: false }),
}))

export function getDoorCode(collectedDigits: Record<number, string>): string {
  return QUESTIONS.map((q) => collectedDigits[q.id] ?? '_').join('')
}

export function calculateScore(
  solvedCount: number,
  elapsedSeconds: number,
  errorCount: number
): number {
  const baseScore = solvedCount * 100
  const timeBonus = Math.max(0, 1000 - elapsedSeconds * 2)
  const errorPenalty = errorCount * 30
  return Math.max(0, baseScore + timeBonus - errorPenalty)
}
