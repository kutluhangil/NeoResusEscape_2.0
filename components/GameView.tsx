'use client'

import dynamic from 'next/dynamic'
import { useGameStore } from '@/lib/store/gameStore'
import { HUD } from '@/components/ui/hud/HUD'
import { QuestionModal } from '@/components/ui/question/QuestionModal'
import { CorrectFeedback } from '@/components/ui/question/CorrectFeedback'
import { WrongFeedback } from '@/components/ui/question/WrongFeedback'
import { HintVideoPlayer } from '@/components/ui/question/HintVideoPlayer'
import { KeypadModal } from '@/components/ui/door/KeypadModal'
import { DoorOpeningCinematic } from '@/components/ui/door/DoorOpeningCinematic'
import { InteractionPrompt } from '@/components/ui/hud/InteractionPrompt'

// Three.js scene — client only (no SSR)
const Scene = dynamic(() => import('./three/Scene').then((m) => m.Scene), {
  ssr: false,
  loading: () => <SceneLoader />,
})

export function GameView() {
  const { phase } = useGameStore()

  return (
    <div className="fixed inset-0 bg-[#060810]">
      {/* 3D scene fills entire screen */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      {/* 2D overlay layers */}
      <HUD />
      <InteractionPrompt />
      <QuestionModal />
      <CorrectFeedback />
      <WrongFeedback />
      <HintVideoPlayer />
      <KeypadModal />
      <DoorOpeningCinematic />

      {/* Pointer lock instruction */}
      {phase === 'playing' && <ClickToLock />}
    </div>
  )
}

function ClickToLock() {
  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none"
      id="click-to-lock"
    >
      <div className="glass rounded-xl px-6 py-4 text-center animate-slide-up opacity-0"
        style={{ animation: 'fadeIn 0.5s ease-out 0.5s forwards' }}
      >
        <p className="text-[var(--text-secondary)] text-sm">
          Kontrol için tıkla + fare kilidi
        </p>
        <p className="text-[var(--text-tertiary)] text-xs mt-1 font-mono">
          ESC ile serbest bırak
        </p>
      </div>
    </div>
  )
}

function SceneLoader() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#060810]">
      <div className="relative mb-6">
        {/* Ambulans cross loader */}
        <div className="w-12 h-12 relative animate-pulse">
          <div className="absolute inset-y-[35%] inset-x-0 bg-[var(--error)] rounded" />
          <div className="absolute inset-x-[35%] inset-y-0 bg-[var(--error)] rounded" />
        </div>
      </div>
      <div className="text-[var(--text-tertiary)] text-sm font-mono tracking-wider">
        Ambulans Hazırlanıyor...
      </div>
      <div className="mt-3 w-48 h-px bg-[var(--bg-secondary)] rounded overflow-hidden">
        <div className="h-full bg-fbu-yellow rounded animate-[loading_2s_ease-in-out_infinite]" />
      </div>
      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 80%; margin-left: 10%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  )
}
