'use client'

import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'

export function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.4}
        luminanceThreshold={0.7}
        luminanceSmoothing={0.3}
        mipmapBlur
      />
      <Vignette
        offset={0.4}
        darkness={0.7}
        blendFunction={BlendFunction.NORMAL}
      />
      <ChromaticAberration
        offset={new THREE.Vector2(0.0003, 0.0003)}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  )
}
