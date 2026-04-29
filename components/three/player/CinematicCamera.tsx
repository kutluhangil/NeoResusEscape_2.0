'use client'

import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useGameStore } from '@/lib/store/gameStore'

export function CinematicCamera() {
  const { camera } = useThree()
  const { phase, solvedQuestions } = useGameStore()
  const introRef = useRef({ active: true, t: 0 })
  const midpointRef = useRef({ triggered: false, active: false, t: 0 })
  const prevSolvedCount = useRef(0)

  // İlk giriş — otomatik kamera turu
  useFrame((_, delta) => {
    const intro = introRef.current
    if (!intro.active) return

    intro.t += delta * 0.3
    const angle = intro.t * Math.PI * 0.5 // 90 derece tur
    const radius = 0.4

    camera.position.x += (Math.sin(angle) * radius - camera.position.x) * 0.05
    camera.position.z += (Math.cos(angle) * radius * 0.5 - camera.position.z) * 0.05

    if (intro.t > 4) {
      intro.active = false
      camera.position.set(0, 1.65, 0)
    }
  })

  // 5. doğru cevap — "yarı yol" anı: kısa kamera shake + altın parlama
  useEffect(() => {
    const count = solvedQuestions.length
    if (count === 5 && prevSolvedCount.current < 5) {
      triggerMidpoint()
    }
    prevSolvedCount.current = count
  }, [solvedQuestions])

  function triggerMidpoint() {
    midpointRef.current = { triggered: true, active: true, t: 0 }
    window.dispatchEvent(new CustomEvent('midpoint-reached'))
  }

  useFrame((_, delta) => {
    const mid = midpointRef.current
    if (!mid.active) return
    mid.t += delta

    // Kamera titremesi
    if (mid.t < 0.5) {
      camera.position.x += (Math.random() - 0.5) * 0.008
      camera.position.y += (Math.random() - 0.5) * 0.005
    } else {
      mid.active = false
    }
  })

  return null
}
