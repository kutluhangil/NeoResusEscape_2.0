'use client'

import { useEffect, useRef } from 'react'
import { useGameStore } from '@/lib/store/gameStore'
import { ProceduralAudio } from '@/lib/hooks/useProceduralAudio'

export function AmbientAudio() {
  const { phase } = useGameStore()
  const ambientStopRef = useRef<(() => void) | null>(null)
  const beepStopRef = useRef<(() => void) | null>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (phase !== 'playing' || startedRef.current) return
    startedRef.current = true

    // Kullanıcı etkileşimi sonrası başlat (AudioContext policy)
    const start = () => {
      ambientStopRef.current = ProceduralAudio.startAmbient()
      beepStopRef.current = ProceduralAudio.startMonitorBeep()
      window.removeEventListener('click', start)
    }
    window.addEventListener('click', start)

    return () => {
      window.removeEventListener('click', start)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'results' || phase === 'landing') {
      ambientStopRef.current?.()
      beepStopRef.current?.()
      startedRef.current = false
      ambientStopRef.current = null
      beepStopRef.current = null
    }
  }, [phase])

  return null
}
