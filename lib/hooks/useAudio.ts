import { useEffect, useRef } from 'react'

// Minimal ses sistemi — Howler olmadan Web Audio API üzerinden
// Howler kurulu olduğunda genişletilebilir

type SoundId =
  | 'click'
  | 'hover'
  | 'correct'
  | 'wrong'
  | 'unlock'
  | 'door_open'
  | 'ambient'
  | 'monitor_beep'
  | 'keypad_press'

const SOUND_URLS: Record<SoundId, string> = {
  click:        '/sounds/ui/click.mp3',
  hover:        '/sounds/ui/hover.mp3',
  correct:      '/sounds/ui/correct.mp3',
  wrong:        '/sounds/ui/wrong.mp3',
  unlock:       '/sounds/door/unlock.mp3',
  door_open:    '/sounds/door/open_cinematic.mp3',
  ambient:      '/sounds/ambient/ambulance_idle.mp3',
  monitor_beep: '/sounds/ambient/monitor_beep.mp3',
  keypad_press: '/sounds/ui/click.mp3',
}

class AudioManager {
  private ctx: AudioContext | null = null
  private buffers = new Map<SoundId, AudioBuffer>()
  private ambient: AudioBufferSourceNode | null = null
  private gainNode: GainNode | null = null
  private masterVolume = 0.7
  private enabled = true

  private getCtx(): AudioContext {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      this.gainNode = this.ctx.createGain()
      this.gainNode.gain.value = this.masterVolume
      this.gainNode.connect(this.ctx.destination)
    }
    return this.ctx
  }

  async preload(ids: SoundId[]): Promise<void> {
    if (typeof window === 'undefined') return
    const ctx = this.getCtx()

    await Promise.allSettled(
      ids.map(async (id) => {
        if (this.buffers.has(id)) return
        try {
          const res = await fetch(SOUND_URLS[id])
          if (!res.ok) return
          const arr = await res.arrayBuffer()
          const buf = await ctx.decodeAudioData(arr)
          this.buffers.set(id, buf)
        } catch {
          // Ses dosyası eksik — sessizce geç
        }
      })
    )
  }

  play(id: SoundId, volume = 1.0): void {
    if (!this.enabled) return
    const buf = this.buffers.get(id)
    if (!buf) return

    try {
      const ctx = this.getCtx()
      if (ctx.state === 'suspended') ctx.resume()
      const src = ctx.createBufferSource()
      src.buffer = buf
      const gain = ctx.createGain()
      gain.gain.value = volume
      src.connect(gain)
      gain.connect(this.gainNode!)
      src.start()
    } catch { /* suppress */ }
  }

  playLoop(id: SoundId, volume = 0.3): () => void {
    if (!this.enabled) return () => {}
    const buf = this.buffers.get(id)
    if (!buf) return () => {}

    try {
      const ctx = this.getCtx()
      if (ctx.state === 'suspended') ctx.resume()
      const src = ctx.createBufferSource()
      src.buffer = buf
      src.loop = true
      const gain = ctx.createGain()
      gain.gain.value = volume
      src.connect(gain)
      gain.connect(this.gainNode!)
      src.start()
      return () => {
        try { src.stop(); src.disconnect() } catch { /* already stopped */ }
      }
    } catch {
      return () => {}
    }
  }

  setVolume(v: number): void {
    this.masterVolume = v
    if (this.gainNode) this.gainNode.gain.value = v
  }

  toggle(): void {
    this.enabled = !this.enabled
    if (this.gainNode) this.gainNode.gain.value = this.enabled ? this.masterVolume : 0
  }

  isEnabled(): boolean { return this.enabled }
}

// Singleton
let manager: AudioManager | null = null

function getAudioManager(): AudioManager {
  if (!manager) manager = new AudioManager()
  return manager
}

export function useAudio() {
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current) return
    loaded.current = true
    getAudioManager().preload(['click', 'hover', 'correct', 'wrong', 'unlock', 'ambient', 'monitor_beep'])
  }, [])

  return {
    play: (id: SoundId, volume?: number) => getAudioManager().play(id, volume),
    playLoop: (id: SoundId, volume?: number) => getAudioManager().playLoop(id, volume),
    setVolume: (v: number) => getAudioManager().setVolume(v),
    toggle: () => getAudioManager().toggle(),
    isEnabled: () => getAudioManager().isEnabled(),
  }
}

export { getAudioManager }
export type { SoundId }
