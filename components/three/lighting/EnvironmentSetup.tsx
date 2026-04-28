'use client'

import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

export function EnvironmentSetup() {
  const { scene } = useThree()

  useEffect(() => {
    scene.background = new THREE.Color('#060810')
    scene.fog = new THREE.Fog('#060810', 5, 12)
  }, [scene])

  return (
    <>
      {/* Ambient — very dim, cold */}
      <ambientLight color="#0A1220" intensity={0.6} />

      {/* Main ceiling light */}
      <pointLight
        position={[0, 2.05, 0]}
        color="#FFF9E6"
        intensity={3}
        distance={6}
        decay={2}
        castShadow
        shadow-mapSize={[512, 512]}
        shadow-radius={4}
      />

      {/* Secondary ceiling light */}
      <pointLight
        position={[0, 2.05, -1]}
        color="#FFF9E6"
        intensity={1.5}
        distance={5}
        decay={2}
      />

      {/* Patient monitor green glow */}
      <pointLight
        position={[-1.0, 1.5, -0.4]}
        color="#00FF88"
        intensity={0.6}
        distance={2}
        decay={2}
      />

      {/* Blue night light from front window */}
      <directionalLight
        position={[0, 1.5, -2.5]}
        color="#0A2050"
        intensity={0.4}
        castShadow={false}
      />

      {/* Rear door light leak */}
      <pointLight
        position={[0, 1.0, 1.8]}
        color="#FF4400"
        intensity={0.2}
        distance={1.5}
        decay={2}
      />
    </>
  )
}
