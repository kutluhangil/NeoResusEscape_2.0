'use client'

import { useEffect, useRef, useState } from 'react'
import { useGameStore } from '@/lib/store/gameStore'

interface JoystickState {
  x: number  // -1 to 1
  y: number  // -1 to 1
}

// Global joystick state accessible from FPS controller
let _joystickState: JoystickState = { x: 0, y: 0 }
export function getJoystickState(): JoystickState { return _joystickState }

const RADIUS = 60

export function VirtualJoystick() {
  const { phase, platform } = useGameStore()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)
  const touchIdRef = useRef<number | null>(null)
  const baseRef = useRef<HTMLDivElement>(null)

  const isMobile = platform === 'mobile'
  if (!isMobile || phase !== 'playing') return null

  const handleTouchStart = (e: React.TouchEvent) => {
    if (touchIdRef.current !== null) return
    const touch = e.changedTouches[0]
    touchIdRef.current = touch.identifier
    setActive(true)
    setPos({ x: 0, y: 0 })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchIdRef.current === null) return
    const touch = Array.from(e.changedTouches).find((t) => t.identifier === touchIdRef.current)
    if (!touch || !baseRef.current) return

    const rect = baseRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = touch.clientX - cx
    const dy = touch.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const clamped = Math.min(dist, RADIUS)
    const angle = Math.atan2(dy, dx)
    const nx = (Math.cos(angle) * clamped) / RADIUS
    const ny = (Math.sin(angle) * clamped) / RADIUS

    setPos({ x: Math.cos(angle) * clamped, y: Math.sin(angle) * clamped })
    _joystickState = { x: nx, y: ny }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = Array.from(e.changedTouches).find((t) => t.identifier === touchIdRef.current)
    if (!touch) return
    touchIdRef.current = null
    setActive(false)
    setPos({ x: 0, y: 0 })
    _joystickState = { x: 0, y: 0 }
  }

  return (
    <div className="fixed bottom-8 left-8 z-30 pointer-events-auto select-none">
      <div
        ref={baseRef}
        className="relative"
        style={{ width: RADIUS * 2, height: RADIUS * 2 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Base ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-fbu-yellow/20"
          style={{ background: 'rgba(255,215,0,0.04)' }}
        />
        {/* Thumb */}
        <div
          className="absolute w-10 h-10 rounded-full border border-fbu-yellow/50 transition-all duration-75"
          style={{
            background: active ? 'rgba(255,215,0,0.2)' : 'rgba(255,215,0,0.08)',
            left: RADIUS - 20 + pos.x,
            top: RADIUS - 20 + pos.y,
            boxShadow: active ? '0 0 12px rgba(255,215,0,0.3)' : 'none',
          }}
        />
      </div>
    </div>
  )
}

// E interaction button for mobile
export function MobileInteractButton() {
  const { phase } = useGameStore()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ show: boolean }>
      setVisible(ce.detail.show)
    }
    window.addEventListener('interaction-prompt', handler)
    return () => window.removeEventListener('interaction-prompt', handler)
  }, [])

  if (phase !== 'playing') return null

  return (
    <div className="fixed bottom-8 right-8 z-30 pointer-events-auto">
      <button
        className="w-16 h-16 rounded-full border-2 border-fbu-yellow/60 bg-fbu-yellow/10 flex items-center justify-center active:scale-90 transition-transform"
        style={{ boxShadow: visible ? '0 0 20px rgba(255,215,0,0.4)' : 'none' }}
        onTouchStart={() => window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyE' }))}
      >
        <span className="text-fbu-yellow font-mono text-sm font-bold">E</span>
      </button>
    </div>
  )
}
