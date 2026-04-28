'use client'

import { useEffect, useState } from 'react'
import { useGameStore } from '@/lib/store/gameStore'
import { Button } from '@/components/shared/Button'
import { detectPlatform } from '@/lib/utils/deviceDetect'

export function LandingScreen() {
  const { setPhase, setPlatform } = useGameStore()
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [btnsVisible, setBtnsVisible] = useState(false)
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; delay: number }[]>([])

  useEffect(() => {
    setPlatform(detectPlatform())
    const t1 = setTimeout(() => setTitleVisible(true), 400)
    const t2 = setTimeout(() => setSubtitleVisible(true), 900)
    const t3 = setTimeout(() => setBtnsVisible(true), 1400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [setPlatform])

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 4,
      }))
    )
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0E1A]">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1B2545]/40 via-transparent to-transparent" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,215,0,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,215,0,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-fbu-yellow opacity-20 animate-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${3 + p.delay}s`,
          }}
        />
      ))}

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-fbu-yellow/80 to-transparent" />
      <div className="absolute top-0 left-0 h-32 w-px bg-gradient-to-b from-fbu-yellow/80 to-transparent" />
      <div className="absolute bottom-0 right-0 w-32 h-px bg-gradient-to-l from-fbu-yellow/80 to-transparent" />
      <div className="absolute bottom-0 right-0 h-32 w-px bg-gradient-to-t from-fbu-yellow/80 to-transparent" />

      {/* FBÜ Logo — top left */}
      <div className="absolute top-6 left-6 flex items-center gap-3 opacity-60">
        <FBULogo size={32} />
        <div>
          <div className="text-[10px] text-[var(--text-tertiary)] tracking-[0.2em] uppercase">
            Fenerbahçe Üniversitesi
          </div>
          <div className="text-[10px] text-[var(--text-tertiary)] tracking-[0.1em]">
            Tıp Fakültesi
          </div>
        </div>
      </div>

      {/* Ambulance silhouette background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <AmbulanceSilhouette />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Red cross / medical symbol */}
        <div
          className="mb-6 opacity-0 transition-all duration-1000"
          style={{ opacity: titleVisible ? 0.8 : 0, transform: titleVisible ? 'scale(1)' : 'scale(0.8)' }}
        >
          <div className="w-10 h-10 relative">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] bg-[var(--error)] rounded-full" />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-[var(--error)] rounded-full" />
          </div>
        </div>

        {/* Title */}
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="text-[var(--text-tertiary)] text-xs tracking-[0.4em] uppercase mb-3 font-mono">
            N R P · Simülasyon · v1.0
          </div>
          <h1
            className="font-geist font-black tracking-tight text-white"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}
          >
            NEO
            <span className="text-fbu-yellow yellow-glow">RESCUE</span>
          </h1>
          <div className="mt-2 text-[var(--text-secondary)] text-lg tracking-wider font-light">
            Kilitli Ambulans
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 flex items-center gap-4 transition-all duration-700"
          style={{ opacity: subtitleVisible ? 1 : 0 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-fbu-yellow/40" />
          <div className="text-[var(--text-tertiary)] text-xs tracking-[0.3em] uppercase font-mono">
            Yenidoğan Resüsitasyonu
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-fbu-yellow/40" />
        </div>

        {/* Tagline */}
        <div
          className="transition-all duration-700 delay-100"
          style={{ opacity: subtitleVisible ? 1 : 0 }}
        >
          <p className="text-[var(--text-secondary)] text-base max-w-sm leading-relaxed italic">
            "Sınav koridorda değil. Ambulansın içinde."
          </p>
        </div>

        {/* Buttons */}
        <div
          className="mt-10 flex flex-col items-center gap-4 transition-all duration-700"
          style={{
            opacity: btnsVisible ? 1 : 0,
            transform: btnsVisible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <Button
            variant="primary"
            size="lg"
            glow
            onClick={() => setPhase('story')}
            className="min-w-[200px] font-geist font-bold tracking-wider"
          >
            BAŞLA
          </Button>

          <button
            onClick={() => setPhase('leaderboard')}
            className="text-[var(--text-tertiary)] text-sm hover:text-fbu-yellow transition-colors duration-200 tracking-wide"
          >
            Lider Tablosu →
          </button>
        </div>

        {/* Stats row */}
        <div
          className="mt-12 flex gap-8 transition-all duration-700 delay-200"
          style={{ opacity: btnsVisible ? 0.5 : 0 }}
        >
          {[
            { label: '10 Vaka', sublabel: 'NRP Rehberi' },
            { label: 'FPS + VR', sublabel: 'Web & Quest 2' },
            { label: '100%', sublabel: 'Frontend Only' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-fbu-yellow font-mono text-sm font-bold">{stat.label}</div>
              <div className="text-[var(--text-tertiary)] text-xs mt-0.5">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="text-[var(--text-tertiary)] text-xs tracking-widest font-mono opacity-40">
          FBÜ TIP FAKÜLTESİ · YENİDOĞAN YOĞUN BAKIM SİMÜLASYONU
        </div>
      </div>

      {/* Scan line moving overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(255,215,0,0.01) 50%)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  )
}

function FBULogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="#1B2545" />
      <path d="M8 12h24M8 20h16M8 28h24" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="30" cy="20" r="4" fill="#FFD700" />
    </svg>
  )
}

function AmbulanceSilhouette() {
  return (
    <svg width="600" height="300" viewBox="0 0 600 300" fill="none" opacity="1">
      <rect x="50" y="100" width="500" height="160" rx="20" fill="white" />
      <rect x="50" y="90" width="140" height="80" rx="10" fill="white" />
      <circle cx="150" cy="270" r="30" fill="white" />
      <circle cx="440" cy="270" r="30" fill="white" />
      <rect x="200" y="110" width="80" height="10" rx="5" fill="#1B2545" />
      <rect x="240" y="100" width="10" height="30" rx="5" fill="#1B2545" />
    </svg>
  )
}
