'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 80

export function DustParticles() {
  const meshRef = useRef<THREE.Points>(null)

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1.8
      positions[i * 3 + 1] = Math.random() * 1.8 + 0.2
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3.5

      velocities[i * 3] = (Math.random() - 0.5) * 0.002
      velocities[i * 3 + 1] = Math.random() * 0.001 - 0.0003
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002
    }

    return { positions, velocities }
  }, [])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3))
    return geo
  }, [positions])

  useFrame(() => {
    if (!meshRef.current) return
    const posAttr = meshRef.current.geometry.attributes.position as THREE.BufferAttribute
    const pos = posAttr.array as Float32Array

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] += velocities[i * 3]
      pos[i * 3 + 1] += velocities[i * 3 + 1]
      pos[i * 3 + 2] += velocities[i * 3 + 2]

      // Bounce back inside ambulance
      if (Math.abs(pos[i * 3]) > 0.9) velocities[i * 3] *= -1
      if (pos[i * 3 + 1] > 1.9 || pos[i * 3 + 1] < 0.1) velocities[i * 3 + 1] *= -1
      if (Math.abs(pos[i * 3 + 2]) > 1.7) velocities[i * 3 + 2] *= -1
    }

    posAttr.needsUpdate = true
  })

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        color="#FFFACD"
        size={0.006}
        transparent
        opacity={0.25}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
