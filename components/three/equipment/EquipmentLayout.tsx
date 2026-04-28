'use client'

import {
  PatientMonitor,
  Defibrillator,
  TransportIncubator,
  BVMMask,
  Laryngoscope,
  DrugCabinet,
  OxygenWallSystem,
  SuctionDevice,
  PulseOximeter,
  UmbilicalCatheterSet,
  EmergencyKit,
  APGARClock,
} from './MedicalEquipment'
import * as THREE from 'three'

export function EquipmentLayout() {
  return (
    <>
      {/* ━━━ SOL DUVAR ━━━ */}

      {/* Hasta Monitörü */}
      <group position={[-1.02, 1.45, -0.4]} rotation={[0, Math.PI / 5, 0]}>
        <PatientMonitor />
      </group>

      {/* Defibrilatör */}
      <group position={[-1.02, 0.85, -1.0]} rotation={[0, Math.PI / 6, 0]}>
        <Defibrillator />
      </group>

      {/* Oksijen Duvar Sistemi */}
      <group position={[-1.02, 1.5, 0.2]} rotation={[0, Math.PI / 2, 0]}>
        <OxygenWallSystem />
      </group>

      {/* Aspiratör */}
      <group position={[-0.98, 0.58, -1.6]} rotation={[0, Math.PI / 3, 0]}>
        <SuctionDevice />
      </group>

      {/* Sol duvar raf malzemeleri */}
      <SmallBox position={[-0.98, 1.05, 0.8]} color="#FFAAAA" />
      <SmallBox position={[-0.98, 1.05, 0.95]} color="#AAFFAA" />
      <SmallBox position={[-0.98, 1.05, 1.1]} color="#AAAAFF" />

      {/* ━━━ SAĞ DUVAR ━━━ */}

      {/* İlaç Dolabı */}
      <group position={[1.02, 1.05, -0.5]} rotation={[0, -Math.PI / 2, 0]}>
        <DrugCabinet />
      </group>

      {/* Transport İnküvatör */}
      <group position={[0.65, 0.45, -1.0]}>
        <TransportIncubator />
      </group>

      {/* IV Sehpası */}
      <IVPole position={[0.98, 1.0, 0.5]} />

      {/* ━━━ YAN TEPSİ / RAF ━━━ */}

      {/* BVM Seti */}
      <group position={[-0.4, 0.88, 0.95]} rotation={[0, 0, 0]}>
        <BVMMask />
      </group>

      {/* Laringoskop */}
      <group position={[-0.15, 0.88, 0.95]}>
        <Laryngoscope />
      </group>

      {/* Umbilikal Kateter */}
      <group position={[0.5, 0.88, 0.95]}>
        <UmbilicalCatheterSet />
      </group>

      {/* Pulse Oksimetre */}
      <group position={[0.4, 0.88, -0.3]}>
        <PulseOximeter />
      </group>

      {/* APGAR Saati */}
      <group position={[-0.5, 0.88, -0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <APGARClock />
      </group>

      {/* ━━━ SEDYE ÜZERİ ━━━ */}

      {/* Resüsitasyon tahtası */}
      <mesh position={[0.1, 0.6, 0]} castShadow>
        <boxGeometry args={[0.4, 0.01, 0.55]} />
        <meshStandardMaterial color="#F0F0F0" metalness={0} roughness={0.8} />
      </mesh>

      {/* ━━━ ARKA KAPI YANI ━━━ */}

      {/* Acil Durum Çantası */}
      <group position={[-0.6, 0.5, 1.68]}>
        <EmergencyKit />
      </group>

      {/* ━━━ DEKORATİF ━━━ */}

      {/* Yangın söndürücü */}
      <FireExtinguisher position={[-1.0, 0.4, 1.5]} />

      {/* İlk yardım kutusu */}
      <FirstAidKit position={[0.98, 1.6, 0.9]} />

      {/* El dezenfektanı */}
      <Sanitizer position={[0.95, 1.3, -1.2]} />

      {/* Eldiven kutusu */}
      <GloveBox position={[-0.9, 1.55, 0.7]} />

      {/* Biyolojik atık kutusu */}
      <BioHazardBin position={[0.9, 0.25, 1.5]} />

      {/* Duvar saati */}
      <WallClock position={[0, 1.9, -1.9]} />
    </>
  )
}

// ━━━ Küçük dekoratif objeler ━━━

function SmallBox({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={[0.06, 0.08, 0.06]} />
      <meshStandardMaterial color={color} metalness={0} roughness={0.7} />
    </mesh>
  )
}

function IVPole({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.008, 0.008, 1.5, 8]} />
        <meshStandardMaterial color="#BBBBBB" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Base */}
      {[[0.1, 0], [-0.1, 0], [0, 0.1], [0, -0.1]].map(([x, z], i) => (
        <mesh key={i} position={[x, -0.72, z]}>
          <cylinderGeometry args={[0.005, 0.005, 0.2, 6]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#AAA" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
      {/* IV bag */}
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[0.1, 0.14, 0.02]} />
        <meshStandardMaterial color="#CCDDFF" transparent opacity={0.6} metalness={0} roughness={0.1} />
      </mesh>
      {/* Hook */}
      <mesh position={[0, 0.76, 0]}>
        <torusGeometry args={[0.018, 0.004, 6, 12, Math.PI]} />
        <meshStandardMaterial color="#AAA" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

function FireExtinguisher({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.04, 0.04, 0.3, 12]} />
        <meshStandardMaterial color="#CC0000" metalness={0.3} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.17, 0]}>
        <cylinderGeometry args={[0.025, 0.04, 0.04, 12]} />
        <meshStandardMaterial color="#888" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.04, 0.18, 0]}>
        <cylinderGeometry args={[0.006, 0.006, 0.1, 6]} />
        <meshStandardMaterial color="#888" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

function FirstAidKit({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.18, 0.12, 0.08]} />
        <meshStandardMaterial color="#F5F5F5" metalness={0} roughness={0.7} />
      </mesh>
      {/* Kırmızı haç */}
      <mesh position={[0, 0, 0.041]}>
        <boxGeometry args={[0.02, 0.07, 0.003]} />
        <meshStandardMaterial color="#CC0000" />
      </mesh>
      <mesh position={[0, 0, 0.041]}>
        <boxGeometry args={[0.07, 0.02, 0.003]} />
        <meshStandardMaterial color="#CC0000" />
      </mesh>
    </group>
  )
}

function Sanitizer({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.025, 0.028, 0.14, 12]} />
        <meshStandardMaterial color="#E8F4FF" metalness={0} roughness={0.5} transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.03, 8]} />
        <meshStandardMaterial color="#DDD" metalness={0.4} roughness={0.4} />
      </mesh>
    </group>
  )
}

function GloveBox({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.2, 0.1, 0.1]} />
        <meshStandardMaterial color="#4488CC" metalness={0} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.04, 0.051]}>
        <boxGeometry args={[0.12, 0.04, 0.005]} />
        <meshStandardMaterial color="#AACCFF" transparent opacity={0.5} />
      </mesh>
    </group>
  )
}

function BioHazardBin({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.07, 0.065, 0.22, 12]} />
        <meshStandardMaterial color="#FFDD00" metalness={0} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.115, 0]}>
        <cylinderGeometry args={[0.075, 0.07, 0.01, 12]} />
        <meshStandardMaterial color="#EE8800" metalness={0} roughness={0.6} />
      </mesh>
    </group>
  )
}

function WallClock({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.02, 24]} />
        <meshStandardMaterial color="#F5F5EE" metalness={0} roughness={0.8} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.011, 0]}>
        <cylinderGeometry args={[0.102, 0.102, 0.005, 24]} />
        <meshStandardMaterial color="#222" metalness={0.5} roughness={0.4} />
      </mesh>
    </group>
  )
}
