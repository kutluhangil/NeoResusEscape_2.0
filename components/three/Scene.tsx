'use client'

import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import { AmbulanceShell } from './ambulance/AmbulanceShell'
import { EquipmentLayout } from './equipment/EquipmentLayout'
import { CeilingLEDs } from './lighting/CeilingLEDs'
import { MonitorGlow } from './lighting/MonitorGlow'
import { EnvironmentSetup } from './lighting/EnvironmentSetup'
import { FPSController } from './player/FPSController'
import { CinematicCamera } from './player/CinematicCamera'
import { HotspotManager } from './interaction/HotspotManager'
import { DoorKeypad } from './interaction/DoorKeypad'
import { DustParticles } from './effects/DustParticles'
import { PostProcessing } from './effects/PostProcessing'
import { AmbientAudio } from './audio/AmbientAudio'

export function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          shadowMap: { enabled: true, type: 2 },
        }}
        camera={{ fov: 75, near: 0.05, far: 50, position: [0, 1.65, 0] }}
        shadows
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <EnvironmentSetup />
          <AmbulanceShell />
          <EquipmentLayout />
          <CeilingLEDs />
          <MonitorGlow />
          <HotspotManager />
          <DoorKeypad />
          <DustParticles />
          <PostProcessing />
          <AmbientAudio />
          <CinematicCamera />
          <FPSController />
        </Suspense>
      </Canvas>
    </div>
  )
}
