'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const WALL_MAT_PROPS = { metalness: 0.5, roughness: 0.4 }
const FLOOR_MAT_PROPS = { metalness: 0.0, roughness: 0.85 }
const CHROME_MAT_PROPS = { metalness: 0.95, roughness: 0.15 }

// Ambulans iç hacmi: 4m x 2.1m x 2.2m (uzunluk x yükseklik x genişlik)
const L = 4.0
const H = 2.1
const W = 2.2

export function AmbulanceShell() {
  const clockRef = useRef(new THREE.Clock())

  return (
    <group>
      {/* === ZEMIN === */}
      <mesh receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[W, 0.04, L]} />
        <meshStandardMaterial color="#2A2A2A" {...FLOOR_MAT_PROPS} />
      </mesh>

      {/* Zemin kauçuk ızgara desen - daha koyu şeritler */}
      <mesh position={[0, 0.021, 0]}>
        <boxGeometry args={[W - 0.02, 0.002, L - 0.02]} />
        <meshStandardMaterial color="#252525" {...FLOOR_MAT_PROPS} />
      </mesh>

      {/* === TAVAN === */}
      <mesh receiveShadow position={[0, H, 0]}>
        <boxGeometry args={[W, 0.04, L]} />
        <meshStandardMaterial color="#D8D8D8" metalness={0} roughness={0.7} />
      </mesh>

      {/* Tavan LED çerçeve */}
      <mesh position={[0, H - 0.02, 0]}>
        <boxGeometry args={[W - 0.1, 0.01, L - 0.1]} />
        <meshStandardMaterial color="#E0E0E0" metalness={0.1} roughness={0.5} />
      </mesh>

      {/* === SOL DUVAR (x = -W/2) === */}
      <mesh castShadow receiveShadow position={[-W / 2, H / 2, 0]}>
        <boxGeometry args={[0.04, H, L]} />
        <meshStandardMaterial color="#DDDDDD" {...WALL_MAT_PROPS} />
      </mesh>

      {/* Sol duvar iç panel detay */}
      <mesh position={[-W / 2 + 0.022, H / 2, 0]}>
        <boxGeometry args={[0.002, H - 0.2, L - 0.3]} />
        <meshStandardMaterial color="#E5E5E5" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* === SAĞ DUVAR (x = W/2) === */}
      <mesh castShadow receiveShadow position={[W / 2, H / 2, 0]}>
        <boxGeometry args={[0.04, H, L]} />
        <meshStandardMaterial color="#DDDDDD" {...WALL_MAT_PROPS} />
      </mesh>

      {/* === ÖN BÖLME (z = -L/2) === */}
      <mesh castShadow receiveShadow position={[0, H / 2, -L / 2]}>
        <boxGeometry args={[W, H, 0.06]} />
        <meshStandardMaterial color="#CCCCCC" {...WALL_MAT_PROPS} />
      </mesh>

      {/* Ön pencere */}
      <mesh position={[0, 1.3, -L / 2 + 0.031]}>
        <boxGeometry args={[1.2, 0.5, 0.01]} />
        <meshStandardMaterial
          color="#001133"
          metalness={0.1}
          roughness={0.0}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Pencere çerçevesi */}
      <PanelFrame position={[0, 1.3, -L / 2 + 0.034]} w={1.3} h={0.6} />

      {/* === ARKA KAPI DUVARI (z = L/2) — kapı delikleri hariç === */}
      {/* Sol panel */}
      <mesh castShadow receiveShadow position={[-0.7, H / 2, L / 2]}>
        <boxGeometry args={[0.7, H, 0.06]} />
        <meshStandardMaterial color="#CCCCCC" {...WALL_MAT_PROPS} />
      </mesh>

      {/* Sağ panel */}
      <mesh castShadow receiveShadow position={[0.7, H / 2, L / 2]}>
        <boxGeometry args={[0.7, H, 0.06]} />
        <meshStandardMaterial color="#CCCCCC" {...WALL_MAT_PROPS} />
      </mesh>

      {/* Üst panel (kapı üstü) */}
      <mesh castShadow receiveShadow position={[0, H - 0.15, L / 2]}>
        <boxGeometry args={[0.6, 0.3, 0.06]} />
        <meshStandardMaterial color="#CCCCCC" {...WALL_MAT_PROPS} />
      </mesh>

      {/* Alt eşik */}
      <mesh position={[0, 0.03, L / 2]}>
        <boxGeometry args={[0.6, 0.06, 0.12]} />
        <meshStandardMaterial color="#888888" {...CHROME_MAT_PROPS} />
      </mesh>

      {/* === KAPILAR (kapalı durum) === */}
      <Door position={[-0.15, H / 2, L / 2]} side="left" />
      <Door position={[0.15, H / 2, L / 2]} side="right" />

      {/* === RAF SİSTEMİ — SOL DUVAR === */}
      <ShelfUnit position={[-W / 2 + 0.15, 0.9, -0.3]} />
      <ShelfUnit position={[-W / 2 + 0.15, 1.4, -0.3]} />

      {/* === RAF SİSTEMİ — SAĞ DUVAR === */}
      <ShelfUnit position={[W / 2 - 0.15, 1.1, -0.3]} />
      <ShelfUnit position={[W / 2 - 0.15, 1.6, -0.3]} />

      {/* === KROM KÖŞE PROFILLER === */}
      <CornerRail position={[-W / 2 + 0.025, H / 2, -L / 2 + 0.025]} />
      <CornerRail position={[W / 2 - 0.025, H / 2, -L / 2 + 0.025]} />
      <CornerRail position={[-W / 2 + 0.025, H / 2, L / 2 - 0.025]} />
      <CornerRail position={[W / 2 - 0.025, H / 2, L / 2 - 0.025]} />

      {/* === SEDYE PLATFORMU === */}
      <StretcherBase />

      {/* === TAVAN LED ŞERİTLER === */}
      <LightStrip position={[-0.4, H - 0.03, 0]} />
      <LightStrip position={[0.4, H - 0.03, 0]} />

      {/* Mavi FBÜ kauçuk şerit */}
      <mesh position={[-W / 2 + 0.022, 0.4, 0]}>
        <boxGeometry args={[0.003, 0.02, L - 0.2]} />
        <meshStandardMaterial color="#1B3A6B" metalness={0} roughness={0.7} />
      </mesh>
      <mesh position={[W / 2 - 0.022, 0.4, 0]}>
        <boxGeometry args={[0.003, 0.02, L - 0.2]} />
        <meshStandardMaterial color="#1B3A6B" metalness={0} roughness={0.7} />
      </mesh>
    </group>
  )
}

function Door({ position, side }: { position: [number, number, number]; side: 'left' | 'right' }) {
  const w = 0.28
  return (
    <mesh castShadow position={position}>
      <boxGeometry args={[w, H - 0.1, 0.04]} />
      <meshStandardMaterial color="#C8C8C8" metalness={0.6} roughness={0.35} />
    </mesh>
  )
}

function StretcherBase() {
  return (
    <group position={[0, 0, 0]}>
      {/* Ana platform */}
      <mesh castShadow position={[0, 0.56, 0]}>
        <boxGeometry args={[0.75, 0.04, 2.0]} />
        <meshStandardMaterial color="#E8E8E8" metalness={0} roughness={0.5} />
      </mesh>
      {/* Kenar korkuluğu */}
      <mesh position={[-0.38, 0.65, 0]}>
        <boxGeometry args={[0.01, 0.18, 1.9]} />
        <meshStandardMaterial color="#888" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0.38, 0.65, 0]}>
        <boxGeometry args={[0.01, 0.18, 1.9]} />
        <meshStandardMaterial color="#888" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Ayaklar */}
      {[[-0.3, 0.85], [0.3, 0.85], [-0.3, -0.85], [0.3, -0.85]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.28, z]}>
          <boxGeometry args={[0.03, 0.56, 0.03]} />
          <meshStandardMaterial color="#666" metalness={0.95} roughness={0.1} />
        </mesh>
      ))}
    </group>
  )
}

function ShelfUnit({ position }: { position: [number, number, number] }) {
  return (
    <mesh castShadow position={position}>
      <boxGeometry args={[0.06, 0.025, 0.5]} />
      <meshStandardMaterial color="#AAAAAA" metalness={0.7} roughness={0.3} />
    </mesh>
  )
}

function CornerRail({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.02, H, 0.02]} />
      <meshStandardMaterial color="#BBBBBB" metalness={0.95} roughness={0.1} />
    </mesh>
  )
}

function LightStrip({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.03, 0.01, 3.6]} />
      <meshStandardMaterial
        color="#FFFFFF"
        emissive="#FFF9E6"
        emissiveIntensity={0.8}
        metalness={0}
        roughness={0.9}
      />
    </mesh>
  )
}

function PanelFrame({ position, w, h }: { position: [number, number, number]; w: number; h: number }) {
  const thick = 0.025
  return (
    <group position={position}>
      <mesh position={[0, h / 2, 0]}>
        <boxGeometry args={[w + thick * 2, thick, thick]} />
        <meshStandardMaterial color="#999" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, -h / 2, 0]}>
        <boxGeometry args={[w + thick * 2, thick, thick]} />
        <meshStandardMaterial color="#999" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[-w / 2 - thick / 2, 0, 0]}>
        <boxGeometry args={[thick, h, thick]} />
        <meshStandardMaterial color="#999" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[w / 2 + thick / 2, 0, 0]}>
        <boxGeometry args={[thick, h, thick]} />
        <meshStandardMaterial color="#999" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  )
}
