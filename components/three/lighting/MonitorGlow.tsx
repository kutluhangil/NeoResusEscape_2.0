'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function MonitorGlow() {
  const glowRef = useRef<THREE.PointLight>(null)
  const timeRef = useRef(0)

  useFrame((_, delta) => {
    timeRef.current += delta
    // Heartbeat-like pulsing
    const beat = Math.sin(timeRef.current * Math.PI * 1.2)
    const pulse = beat > 0 ? Math.pow(beat, 0.3) : 0
    if (glowRef.current) {
      glowRef.current.intensity = 0.3 + pulse * 0.4
    }
  })

  return (
    <>
      {/* Patient monitor screen glow */}
      <pointLight
        ref={glowRef}
        position={[-1.0, 1.45, -0.4]}
        color="#00FF88"
        intensity={0.3}
        distance={1.8}
        decay={2}
      />

      {/* Monitor screen mesh */}
      <mesh position={[-1.02, 1.45, -0.4]}>
        <boxGeometry args={[0.01, 0.22, 0.32]} />
        <meshStandardMaterial
          color="#001A0A"
          emissive="#00FF88"
          emissiveIntensity={0.6}
          metalness={0}
          roughness={0.9}
        />
      </mesh>
    </>
  )
}
