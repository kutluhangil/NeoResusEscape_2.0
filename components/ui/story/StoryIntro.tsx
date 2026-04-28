'use client'

import { useEffect, useState, useRef } from 'react'
import { useGameStore } from '@/lib/store/gameStore'
import { STORY_LINES } from '@/lib/data/storyText'
import { Button } from '@/components/shared/Button'

export function StoryIntro() {
  const { setPhase } = useGameStore()
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIdx, setCurrentLineIdx] = useState(0)
  const [currentCharIdx, setCurrentCharIdx] = useState(0)
  const [done, setDone] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (currentLineIdx >= STORY_LINES.length) {
      setDone(true)
      return
    }

    const line = STORY_LINES[currentLineIdx]

    if (currentCharIdx >= line.length) {
      const t = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line])
        setCurrentLineIdx((i) => i + 1)
        setCurrentCharIdx(0)
      }, line === '' ? 300 : 400)
      return () => clearTimeout(t)
    }

    const speed = line === '' ? 0 : 35
    const t = setTimeout(() => {
      setCurrentCharIdx((c) => c + 1)
    }, speed)
    return () => clearTimeout(t)
  }, [currentLineIdx, currentCharIdx])

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 9999, behavior: 'smooth' })
  }, [displayedLines, currentCharIdx])

  const currentLine = currentLineIdx < STORY_LINES.length
    ? STORY_LINES[currentLineIdx].slice(0, currentCharIdx)
    : ''

  const skip = () => {
    setDisplayedLines(STORY_LINES)
    setCurrentLineIdx(STORY_LINES.length)
    setDone(true)
  }

  return (
    <div className="min-h-screen bg-[#030508] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle pulsing background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1B2545]/20 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Top: time indicator */}
      <div className="absolute top-8 left-0 right-0 flex justify-center">
        <div className="font-mono text-fbu-yellow text-2xl font-bold tracking-[0.2em] monitor-glow opacity-80">
          03:47
        </div>
      </div>

      {/* Story text container */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-xl w-full mx-auto px-8 py-16 max-h-[60vh] overflow-hidden"
        style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)' }}
      >
        <div className="space-y-2">
          {displayedLines.map((line, i) => (
            <p
              key={i}
              className={
                line === ''
                  ? 'h-4'
                  : line.startsWith('"')
                    ? 'text-fbu-yellow font-medium text-base leading-relaxed italic'
                    : 'text-[var(--text-secondary)] text-base leading-relaxed font-light'
              }
            >
              {line}
            </p>
          ))}

          {/* Currently typing line */}
          {!done && currentLineIdx < STORY_LINES.length && (
            <p
              className={
                currentLine === ''
                  ? 'h-4'
                  : STORY_LINES[currentLineIdx].startsWith('"')
                    ? 'text-fbu-yellow font-medium text-base leading-relaxed italic'
                    : 'text-[var(--text-secondary)] text-base leading-relaxed font-light'
              }
            >
              {currentLine}
              <span className="typewriter-cursor" />
            </p>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4">
        {done ? (
          <Button
            variant="primary"
            size="lg"
            glow
            onClick={() => setPhase('name_entry')}
            className="font-geist font-bold tracking-wider animate-slide-up"
          >
            DEVAM ET →
          </Button>
        ) : (
          <button
            onClick={skip}
            className="text-[var(--text-tertiary)] text-sm hover:text-white transition-colors duration-200 tracking-widest uppercase font-mono"
          >
            ATLA →
          </button>
        )}
      </div>

      {/* Heartbeat line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <HeartbeatLine />
      </div>
    </div>
  )
}

function HeartbeatLine() {
  return (
    <svg width="100%" height="40" viewBox="0 0 400 40" preserveAspectRatio="none" className="opacity-20">
      <polyline
        points="0,20 60,20 80,5 90,35 100,15 110,20 200,20 220,5 230,35 240,15 250,20 400,20"
        fill="none"
        stroke="#00FF88"
        strokeWidth="1.5"
      />
    </svg>
  )
}
