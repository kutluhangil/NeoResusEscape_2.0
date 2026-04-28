'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function CeilingLEDs() {
  const leftRef = useRef<THREE.PointLight>(null)
  const rightRef = useRef<THREE.PointLight>(null)
  const timeRef = useRef(0)

  useFrame((_, delta) => {
    timeRef.current += delta
    // Subtle flicker
    const flicker = 1.0 + Math.sin(timeRef.current * 47) * 0.015 + Math.sin(timeRef.current * 31) * 0.008
    if (leftRef.current) leftRef.current.intensity = 0.8 * flicker
    if (rightRef.current) rightRef.current.intensity = 0.8 * flicker
  })

  return (
    <>
      <pointLight ref={leftRef} position={[-0.4, 2.0, 0]} color="#FFF9E6" intensity={0.8} distance={3} decay={2} />
      <pointLight ref={rightRef} position={[0.4, 2.0, 0]} color="#FFF9E6" intensity={0.8} distance={3} decay={2} />
      <pointLight position={[-0.4, 2.0, -1.5]} color="#FFF9E6" intensity={0.5} distance={2.5} decay={2} />
      <pointLight position={[0.4, 2.0, -1.5]} color="#FFF9E6" intensity={0.5} distance={2.5} decay={2} />
    </>
  )
}
