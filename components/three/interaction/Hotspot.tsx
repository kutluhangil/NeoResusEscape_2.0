'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Billboard, Text } from '@react-three/drei'
import * as THREE from 'three'
import type { HotspotConfig } from '@/lib/data/hotspotPositions'

interface HotspotProps {
  config: HotspotConfig
  distance: number
  isNearest: boolean
  isSolved: boolean
  onInteract: () => void
}

export function Hotspot({ config, distance, isNearest, isSolved, onInteract }: HotspotProps) {
  const haloRef = useRef<THREE.Mesh>(null)
  const pillarRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const timeRef = useRef(0)

  const baseColor = isSolved ? '#00E676' : '#FFD700'
  const isClose = distance < 3.0
  const isVeryClose = distance < 1.5

  useFrame((_, delta) => {
    timeRef.current += delta

    // Breathing animation
    const breath = 0.5 + 0.5 * Math.sin(timeRef.current * Math.PI)

    if (haloRef.current) {
      const mat = haloRef.current.material as THREE.MeshBasicMaterial
      if (isSolved) {
        mat.opacity = 0.08 + breath * 0.05
      } else if (isVeryClose) {
        mat.opacity = 0.5 + breath * 0.3
      } else if (isClose) {
        mat.opacity = 0.25 + breath * 0.15
      } else {
        mat.opacity = 0.08 + breath * 0.07
      }
    }

    if (pillarRef.current) {
      const mat = pillarRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = isSolved ? 0.04 : 0.08 + breath * 0.08
    }

    if (ringRef.current) {
      ringRef.current.rotation.y += delta * (isVeryClose ? 1.2 : 0.4)
      const mat = ringRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = isClose ? (0.3 + breath * 0.2) : 0.1
    }
  })

  return (
    <group position={config.position}>
      {/* Equipment indicator box */}
      <mesh>
        <boxGeometry args={[0.12, 0.12, 0.12]} />
        <meshStandardMaterial
          color={baseColor}
          emissive={baseColor}
          emissiveIntensity={isSolved ? 0.3 : 0.6}
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Ground halo ring */}
      <mesh
        ref={haloRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -config.position[1] + 0.02, 0]}
      >
        <ringGeometry args={[0.35, 0.5, 32]} />
        <meshBasicMaterial
          color={baseColor}
          transparent
          opacity={0.15}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Rotating inner ring */}
      <mesh
        ref={ringRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -config.position[1] + 0.021, 0]}
      >
        <ringGeometry args={[0.2, 0.25, 16]} />
        <meshBasicMaterial
          color={baseColor}
          transparent
          opacity={0.1}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Vertical light pillar */}
      <mesh
        ref={pillarRef}
        position={[0, 1.0 - config.position[1], 0]}
      >
        <cylinderGeometry args={[0.018, 0.018, 2.0, 8]} />
        <meshBasicMaterial
          color={baseColor}
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </mesh>

      {/* Top sparkle glow */}
      <mesh position={[0, 1.5 - config.position[1], 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial
          color={baseColor}
          transparent
          opacity={isSolved ? 0.3 : 0.6}
        />
      </mesh>

      {/* Point light */}
      {!isSolved && isClose && (
        <pointLight
          color={baseColor}
          intensity={0.5}
          distance={1.2}
          decay={3}
          position={[0, 0, 0]}
        />
      )}

      {/* Interaction label */}
      {isVeryClose && !isSolved && (
        <Billboard position={[0, 1.6 - config.position[1], 0]}>
          <Text
            fontSize={0.07}
            color="#FFFFFF"
            outlineColor="#1B2545"
            outlineWidth={0.006}
            anchorX="center"
            anchorY="middle"
          >
            {`[E] VAKA İNCELE`}
          </Text>
          <Text
            position={[0, -0.09, 0]}
            fontSize={0.05}
            color="#FFD700"
            outlineColor="#1B2545"
            outlineWidth={0.004}
            anchorX="center"
            anchorY="middle"
          >
            {config.label}
          </Text>
        </Billboard>
      )}

      {/* Solved indicator */}
      {isSolved && (
        <Billboard position={[0, 0.3 - config.position[1], 0]}>
          <Text
            fontSize={0.06}
            color="#00E676"
            anchorX="center"
            anchorY="middle"
          >
            ✓
          </Text>
        </Billboard>
      )}
    </group>
  )
}
