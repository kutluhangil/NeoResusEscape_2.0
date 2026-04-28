'use client'

import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useGameStore } from '@/lib/store/gameStore'
import { HOTSPOT_POSITIONS } from '@/lib/data/hotspotPositions'
import { DOOR_KEYPAD_POSITION } from '@/lib/data/hotspotPositions'
import { Hotspot } from './Hotspot'

const INTERACT_DIST = 1.8

export function HotspotManager() {
  const { camera } = useThree()
  const { openQuestion, solvedQuestions, phase, allSolved, setPhase } = useGameStore()
  const nearestRef = useRef<{ id: string; questionId: number; isDoor: boolean } | null>(null)
  const [distances, setDistances] = useState<Record<string, number>>({})

  // Keyboard E handler
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== 'KeyE' || phase !== 'playing') return
      const near = nearestRef.current
      if (!near) return
      if (near.isDoor && allSolved) {
        setPhase('keypad')
      } else if (!near.isDoor) {
        openQuestion(near.questionId)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, allSolved, openQuestion, setPhase])

  useFrame(() => {
    if (phase !== 'playing') return

    const camPos = camera.position
    let nearest: typeof nearestRef.current = null
    let nearestDist = INTERACT_DIST
    const newDists: Record<string, number> = {}

    // Check hotspots
    for (const hp of HOTSPOT_POSITIONS) {
      if (solvedQuestions.includes(hp.questionId)) continue
      const pos = new THREE.Vector3(...hp.position)
      const dist = camPos.distanceTo(pos)
      newDists[hp.id] = dist
      if (dist < nearestDist) {
        nearestDist = dist
        nearest = { id: hp.id, questionId: hp.questionId, isDoor: false }
      }
    }

    // Check door keypad
    const doorDist = camPos.distanceTo(new THREE.Vector3(...DOOR_KEYPAD_POSITION))
    newDists['door_keypad'] = doorDist
    if (allSolved && doorDist < nearestDist) {
      nearest = { id: 'door_keypad', questionId: -1, isDoor: true }
    }

    nearestRef.current = nearest
    setDistances(newDists)

    // Dispatch interaction prompt event
    if (nearest) {
      const hp = HOTSPOT_POSITIONS.find((h) => h.id === nearest!.id)
      const label = nearest.isDoor ? 'Kapı Kodunu Gir' : `Vakayı İncele — ${hp?.label ?? ''}`
      window.dispatchEvent(new CustomEvent('interaction-prompt', { detail: { show: true, label } }))
    } else {
      window.dispatchEvent(new CustomEvent('interaction-prompt', { detail: { show: false, label: '' } }))
    }
  })

  return (
    <>
      {HOTSPOT_POSITIONS.map((hp) => (
        <Hotspot
          key={hp.id}
          config={hp}
          distance={distances[hp.id] ?? 99}
          isNearest={nearestRef.current?.id === hp.id}
          isSolved={solvedQuestions.includes(hp.questionId)}
          onInteract={() => openQuestion(hp.questionId)}
        />
      ))}
    </>
  )
}
