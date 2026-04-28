'use client'

import * as THREE from 'three'

// Hasta Monitörü
export function PatientMonitor() {
  return (
    <group>
      {/* Ekran */}
      <mesh position={[0, 0, 0.01]}>
        <boxGeometry args={[0.32, 0.22, 0.008]} />
        <meshStandardMaterial color="#000A00" emissive="#00FF88" emissiveIntensity={0.5} />
      </mesh>
      {/* Çerçeve */}
      <mesh>
        <boxGeometry args={[0.36, 0.26, 0.07]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Altındaki panel */}
      <mesh position={[0, -0.17, 0]}>
        <boxGeometry args={[0.36, 0.08, 0.12]} />
        <meshStandardMaterial color="#222" metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Kablolar */}
      <mesh position={[0.1, -0.25, 0.02]}>
        <cylinderGeometry args={[0.005, 0.005, 0.18, 6]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      {/* Butonlar */}
      {[-0.12, -0.06, 0, 0.06, 0.12].map((x, i) => (
        <mesh key={i} position={[x, -0.14, 0.06]}>
          <cylinderGeometry args={[0.009, 0.009, 0.008, 8]} />
          <meshStandardMaterial color={['#FF4444', '#4444FF', '#44FF44', '#FFFF00', '#888'][i]} metalness={0.3} roughness={0.5} />
        </mesh>
      ))}
    </group>
  )
}

// Defibrilatör
export function Defibrillator() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[0.28, 0.22, 0.16]} />
        <meshStandardMaterial color="#1A1A1A" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Ekran */}
      <mesh position={[0, 0.02, 0.081]}>
        <boxGeometry args={[0.18, 0.1, 0.005]} />
        <meshStandardMaterial color="#000" emissive="#00AAFF" emissiveIntensity={0.4} />
      </mesh>
      {/* Şarj butonu */}
      <mesh position={[0, -0.06, 0.081]}>
        <cylinderGeometry args={[0.025, 0.025, 0.01, 12]} />
        <meshStandardMaterial color="#FF4444" emissive="#FF0000" emissiveIntensity={0.3} metalness={0.3} />
      </mesh>
      {/* Paddle bağlantıları */}
      <mesh position={[-0.1, -0.04, 0.075]}>
        <cylinderGeometry args={[0.006, 0.006, 0.03, 6]} />
        <meshStandardMaterial color="#FFAA00" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.1, -0.04, 0.075]}>
        <cylinderGeometry args={[0.006, 0.006, 0.03, 6]} />
        <meshStandardMaterial color="#FFAA00" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

// Transport İnküvatör
export function TransportIncubator() {
  return (
    <group>
      {/* Ana kutu */}
      <mesh>
        <boxGeometry args={[0.55, 0.22, 0.35]} />
        <meshStandardMaterial color="#F0F0F0" metalness={0.1} roughness={0.6} />
      </mesh>
      {/* Şeffaf kapak */}
      <mesh position={[0, 0.115, 0]}>
        <boxGeometry args={[0.53, 0.01, 0.33]} />
        <meshStandardMaterial color="#88CCFF" transparent opacity={0.4} metalness={0} roughness={0} />
      </mesh>
      {/* Yan kapı açıklıkları */}
      <mesh position={[0.27, 0, 0]}>
        <boxGeometry args={[0.01, 0.12, 0.12]} />
        <meshStandardMaterial color="#CCCCCC" transparent opacity={0.5} />
      </mesh>
      {/* Kontrol paneli */}
      <mesh position={[0, -0.1, 0.17]}>
        <boxGeometry args={[0.4, 0.04, 0.01]} />
        <meshStandardMaterial color="#222" emissive="#0044FF" emissiveIntensity={0.2} />
      </mesh>
      {/* Tekerlekler */}
      {[[-0.2, -0.13, -0.13], [0.2, -0.13, -0.13], [-0.2, -0.13, 0.13], [0.2, -0.13, 0.13]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.03, 8]} />
          <meshStandardMaterial color="#333" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}
    </group>
  )
}

// BVM Maskesi
export function BVMMask() {
  return (
    <group>
      {/* Ana balon */}
      <mesh>
        <sphereGeometry args={[0.07, 12, 10]} />
        <meshStandardMaterial color="#88BBFF" transparent opacity={0.7} metalness={0} roughness={0.3} />
      </mesh>
      {/* Valv */}
      <mesh position={[0, 0, 0.07]}>
        <cylinderGeometry args={[0.015, 0.015, 0.04, 8]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.3} roughness={0.5} />
      </mesh>
      {/* Maske */}
      <mesh position={[0, 0, 0.11]}>
        <torusGeometry args={[0.04, 0.015, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#88BBFF" transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

// Laringoskop
export function Laryngoscope() {
  return (
    <group rotation={[0, 0, -0.3]}>
      {/* Handle */}
      <mesh position={[0, -0.06, 0]}>
        <cylinderGeometry args={[0.016, 0.018, 0.12, 12]} />
        <meshStandardMaterial color="#B8B8B8" metalness={0.9} roughness={0.15} />
      </mesh>
      {/* Blade */}
      <mesh position={[0.025, 0.04, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[0.008, 0.12, 0.025]} />
        <meshStandardMaterial color="#D0D0D0" metalness={0.95} roughness={0.1} />
      </mesh>
      {/* Light bulb */}
      <mesh position={[0.029, 0.09, 0]}>
        <sphereGeometry args={[0.004, 6, 6]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFF88" emissiveIntensity={1} />
      </mesh>
    </group>
  )
}

// İlaç Dolabı (cam kapak)
export function DrugCabinet() {
  return (
    <group>
      {/* Ana kutu */}
      <mesh>
        <boxGeometry args={[0.5, 0.7, 0.2]} />
        <meshStandardMaterial color="#F5F5F5" metalness={0.2} roughness={0.6} />
      </mesh>
      {/* Cam kapılar */}
      <mesh position={[-0.125, 0, 0.101]}>
        <boxGeometry args={[0.245, 0.68, 0.005]} />
        <meshStandardMaterial color="#AACCEE" transparent opacity={0.4} metalness={0} roughness={0} />
      </mesh>
      <mesh position={[0.125, 0, 0.101]}>
        <boxGeometry args={[0.245, 0.68, 0.005]} />
        <meshStandardMaterial color="#AACCEE" transparent opacity={0.4} metalness={0} roughness={0} />
      </mesh>
      {/* Raflar */}
      {[-0.2, 0, 0.2].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <boxGeometry args={[0.48, 0.01, 0.18]} />
          <meshStandardMaterial color="#E0E0E0" metalness={0.3} roughness={0.5} />
        </mesh>
      ))}
      {/* İlaç kutuları */}
      {[[-0.15, 0.1, 0], [0, 0.1, 0], [0.15, 0.1, 0],
        [-0.15, -0.1, 0], [0, -0.1, 0]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <boxGeometry args={[0.08, 0.06, 0.04]} />
          <meshStandardMaterial color={['#FFAA00', '#FF4444', '#4444FF', '#44BB44', '#FF88AA'][i]} metalness={0} roughness={0.7} />
        </mesh>
      ))}
    </group>
  )
}

// Oksijen Duvar Sistemi
export function OxygenWallSystem() {
  return (
    <group>
      {/* Tüp */}
      <mesh>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 12]} />
        <meshStandardMaterial color="#00AA44" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Üst kapak */}
      <mesh position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.055, 0.04, 0.04, 12]} />
        <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Regülatör */}
      <mesh position={[0.07, 0.15, 0]}>
        <boxGeometry args={[0.08, 0.06, 0.06]} />
        <meshStandardMaterial color="#222" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Hortum */}
      <mesh position={[0.07, 0, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.3, 6]} />
        <meshStandardMaterial color="#44AAFF" metalness={0} roughness={0.7} />
      </mesh>
    </group>
  )
}

// Aspiratör
export function SuctionDevice() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[0.22, 0.28, 0.18]} />
        <meshStandardMaterial color="#E8E8E8" metalness={0.2} roughness={0.6} />
      </mesh>
      {/* Ekran */}
      <mesh position={[0, 0.06, 0.091]}>
        <boxGeometry args={[0.14, 0.08, 0.005]} />
        <meshStandardMaterial color="#000" emissive="#0088FF" emissiveIntensity={0.3} />
      </mesh>
      {/* Hortum bağlantısı */}
      <mesh position={[0.08, -0.08, 0.091]}>
        <cylinderGeometry args={[0.015, 0.015, 0.04, 8]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#666" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Kavanoz */}
      <mesh position={[0, -0.08, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 12]} />
        <meshStandardMaterial color="#CCDDFF" transparent opacity={0.6} metalness={0} roughness={0.1} />
      </mesh>
    </group>
  )
}

// Pulse Oksimetre
export function PulseOximeter() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[0.1, 0.06, 0.06]} />
        <meshStandardMaterial color="#F0F0F0" metalness={0.2} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0, 0.031]}>
        <boxGeometry args={[0.07, 0.04, 0.005]} />
        <meshStandardMaterial color="#000" emissive="#00FF88" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0.06, 0, 0]}>
        <cylinderGeometry args={[0.004, 0.004, 0.1, 6]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#FF4444" />
      </mesh>
    </group>
  )
}

// Umbilikal Kateter Seti
export function UmbilicalCatheterSet() {
  return (
    <group>
      {/* Kutu */}
      <mesh>
        <boxGeometry args={[0.18, 0.04, 0.12]} />
        <meshStandardMaterial color="#F8F8F8" metalness={0} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.022, 0]}>
        <boxGeometry args={[0.17, 0.005, 0.11]} />
        <meshStandardMaterial color="#0044BB" metalness={0} roughness={0.9} />
      </mesh>
      {/* Yazı placeholder */}
      <mesh position={[0, 0.025, 0]}>
        <boxGeometry args={[0.12, 0.002, 0.03]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
    </group>
  )
}

// Acil Durum Çantası
export function EmergencyKit() {
  return (
    <group>
      {/* Ana çanta */}
      <mesh>
        <boxGeometry args={[0.35, 0.25, 0.2]} />
        <meshStandardMaterial color="#FF4400" metalness={0} roughness={0.8} />
      </mesh>
      {/* Haç sembolü */}
      <mesh position={[0, 0, 0.101]}>
        <boxGeometry args={[0.04, 0.12, 0.005]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0} roughness={0.9} />
      </mesh>
      <mesh position={[0, 0, 0.101]}>
        <boxGeometry args={[0.12, 0.04, 0.005]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0} roughness={0.9} />
      </mesh>
      {/* Fermuar */}
      <mesh position={[0, 0.126, 0]}>
        <boxGeometry args={[0.34, 0.01, 0.01]} />
        <meshStandardMaterial color="#888" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

// APGAR Saati (duvar saati tipi)
export function APGARClock() {
  return (
    <group>
      {/* Çerçeve */}
      <mesh>
        <cylinderGeometry args={[0.09, 0.09, 0.02, 24]} />
        <meshStandardMaterial color="#222" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Kadran */}
      <mesh position={[0, 0.011, 0]}>
        <cylinderGeometry args={[0.085, 0.085, 0.005, 24]} />
        <meshStandardMaterial color="#FFFEF0" metalness={0} roughness={0.9} />
      </mesh>
      {/* Akrep */}
      <mesh position={[0, 0.016, 0.03]} rotation={[Math.PI / 2, 0, 0.5]}>
        <boxGeometry args={[0.004, 0.04, 0.003]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      {/* Yelkovan */}
      <mesh position={[0, 0.016, 0.02]} rotation={[Math.PI / 2, 0, 2.1]}>
        <boxGeometry args={[0.003, 0.065, 0.002]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  )
}
