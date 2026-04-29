'use client'

import { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'
import * as THREE from 'three'
import { useGameStore } from '@/lib/store/gameStore'
import { getJoystickState } from '@/components/ui/mobile/VirtualJoystick'

const WALK_SPEED = 1.4
const RUN_SPEED = 2.6
const EYE_HEIGHT = 1.65
const CAMERA_BOB_AMPLITUDE = 0.015
const CAMERA_BOB_FREQUENCY = 8

// Ambulans içi sınırları
const BOUNDS = {
  minX: -0.85, maxX: 0.85,
  minZ: -1.7, maxZ: 1.7,
}

export function FPSController() {
  const { camera } = useThree()
  const controlsRef = useRef<any>(null)
  const keysRef = useRef<Record<string, boolean>>({})
  const velocityRef = useRef(new THREE.Vector3())
  const bobTimeRef = useRef(0)
  const isMovingRef = useRef(false)
  const { phase, cameraLocked, openQuestion } = useGameStore()

  useEffect(() => {
    camera.position.set(0, EYE_HEIGHT, 0)
  }, [camera])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      keysRef.current[e.code] = e.type === 'keydown'
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('keyup', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('keyup', onKey)
    }
  }, [])

  // Lock/unlock pointer based on game phase
  useEffect(() => {
    if (cameraLocked || phase !== 'playing') {
      controlsRef.current?.unlock()
    }
  }, [cameraLocked, phase])

  useFrame((_, delta) => {
    if (!controlsRef.current?.isLocked || cameraLocked || phase !== 'playing') return

    const keys = keysRef.current
    const isRunning = keys['ShiftLeft'] || keys['ShiftRight']
    const speed = isRunning ? RUN_SPEED : WALK_SPEED

    const direction = new THREE.Vector3()
    const forward = new THREE.Vector3()
    const right = new THREE.Vector3()

    camera.getWorldDirection(forward)
    forward.y = 0
    forward.normalize()
    right.crossVectors(forward, new THREE.Vector3(0, 1, 0))

    const joystick = getJoystickState()
    if (keys['KeyW'] || keys['ArrowUp'] || joystick.y < -0.2) direction.add(forward)
    if (keys['KeyS'] || keys['ArrowDown'] || joystick.y > 0.2) direction.sub(forward)
    if (keys['KeyA'] || keys['ArrowLeft'] || joystick.x < -0.2) direction.sub(right)
    if (keys['KeyD'] || keys['ArrowRight'] || joystick.x > 0.2) direction.add(right)

    const isMoving = direction.lengthSq() > 0
    isMovingRef.current = isMoving

    if (isMoving) {
      direction.normalize()
      const move = direction.multiplyScalar(speed * delta)

      // Apply movement with bounds
      const newX = Math.max(BOUNDS.minX, Math.min(BOUNDS.maxX, camera.position.x + move.x))
      const newZ = Math.max(BOUNDS.minZ, Math.min(BOUNDS.maxZ, camera.position.z + move.z))
      camera.position.x = newX
      camera.position.z = newZ
    }

    // Head bob
    if (isMoving) {
      bobTimeRef.current += delta * CAMERA_BOB_FREQUENCY * (isRunning ? 1.4 : 1)
    }
    const targetY = EYE_HEIGHT + (isMoving ? Math.sin(bobTimeRef.current) * CAMERA_BOB_AMPLITUDE : 0)
    camera.position.y += (targetY - camera.position.y) * 8 * delta
  })

  if (phase !== 'playing') return null

  return (
    <PointerLockControls
      ref={controlsRef}
      makeDefault
      onLock={() => { }}
      onUnlock={() => { }}
    />
  )
}
