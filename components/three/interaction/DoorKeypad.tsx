'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Billboard, Text } from '@react-three/drei'
import * as THREE from 'three'
import { useGameStore } from '@/lib/store/gameStore'
import { DOOR_KEYPAD_POSITION } from '@/lib/data/hotspotPositions'

export function DoorKeypad() {
  const { allSolved } = useGameStore()
  const timeRef = useRef(0)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    timeRef.current += delta
    if (glowRef.current && allSolved) {
      const mat = glowRef.current.material as THREE.MeshStandardMaterial
      mat.emissiveIntensity = 0.4 + Math.sin(timeRef.current * 3) * 0.3
    }
  })

  return (
    <group position={DOOR_KEYPAD_POSITION}>
      {/* Keypad housing */}
      <mesh ref={glowRef}>
        <boxGeometry args={[0.12, 0.16, 0.035]} />
        <meshStandardMaterial
          color={allSolved ? '#001A00' : '#111'}
          emissive={allSolved ? '#00FF00' : '#330000'}
          emissiveIntensity={allSolved ? 0.4 : 0.12}
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* Digit buttons 3x3 */}
      {[[-0.03, 0.04], [0, 0.04], [0.03, 0.04],
        [-0.03, 0], [0, 0], [0.03, 0],
        [-0.03, -0.04], [0, -0.04], [0.03, -0.04]].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.018]}>
          <boxGeometry args={[0.02, 0.02, 0.006]} />
          <meshStandardMaterial
            color="#1A1A1A"
            emissive={allSolved ? '#002200' : '#000'}
            metalness={0.4}
            roughness={0.6}
          />
        </mesh>
      ))}

      {/* Status LED */}
      <mesh position={[0, 0.065, 0.018]}>
        <sphereGeometry args={[0.006, 8, 8]} />
        <meshStandardMaterial
          color={allSolved ? '#00FF00' : '#FF2200'}
          emissive={allSolved ? '#00FF00' : '#FF2200'}
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* Display panel */}
      <mesh position={[0, -0.07, 0.018]}>
        <boxGeometry args={[0.08, 0.025, 0.003]} />
        <meshStandardMaterial
          color="#000A00"
          emissive="#00FF44"
          emissiveIntensity={allSolved ? 0.4 : 0.05}
        />
      </mesh>

      {/* Glow when all solved */}
      {allSolved && (
        <pointLight color="#00FF44" intensity={0.5} distance={1.0} decay={3} />
      )}
    </group>
  )
}
