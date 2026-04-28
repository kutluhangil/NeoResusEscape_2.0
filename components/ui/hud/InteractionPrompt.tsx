'use client'

import { useEffect, useState } from 'react'
import { useGameStore } from '@/lib/store/gameStore'

export function InteractionPrompt() {
  const { phase } = useGameStore()
  const [showPrompt, setShowPrompt] = useState(false)
  const [promptText, setPromptText] = useState('')

  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ label: string; show: boolean }>
      setShowPrompt(ce.detail.show)
      setPromptText(ce.detail.label)
    }
    window.addEventListener('interaction-prompt', handler)
    return () => window.removeEventListener('interaction-prompt', handler)
  }, [])

  if (!showPrompt || phase !== 'playing') return null

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
      <div className="glass rounded-xl px-5 py-3 flex items-center gap-3 interaction-prompt">
        <div className="w-7 h-7 rounded-lg border border-fbu-yellow/60 bg-fbu-yellow/10 flex items-center justify-center">
          <span className="text-fbu-yellow text-xs font-mono font-bold">E</span>
        </div>
        <span className="text-white text-sm font-medium">{promptText}</span>
      </div>
    </div>
  )
}
