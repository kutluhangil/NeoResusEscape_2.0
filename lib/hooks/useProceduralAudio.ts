'use client'

// Gerçek ses dosyaları yokken prosedürel Web Audio ile ses üretir
// Ses dosyaları eklendiğinde useAudio.ts bu fonksiyonları override eder

let _ctx: AudioContext | null = null

function ctx(): AudioContext {
  if (!_ctx) _ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
  if (_ctx.state === 'suspended') _ctx.resume()
  return _ctx
}

export const ProceduralAudio = {
  // Başarı sesi — yükselen arpej
  correct(): void {
    try {
      const c = ctx()
      const freqs = [523, 659, 784, 1047] // C5 E5 G5 C6
      freqs.forEach((f, i) => {
        const osc = c.createOscillator()
        const gain = c.createGain()
        osc.type = 'sine'
        osc.frequency.value = f
        gain.gain.setValueAtTime(0, c.currentTime + i * 0.08)
        gain.gain.linearRampToValueAtTime(0.18, c.currentTime + i * 0.08 + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.08 + 0.4)
        osc.connect(gain).connect(c.destination)
        osc.start(c.currentTime + i * 0.08)
        osc.stop(c.currentTime + i * 0.08 + 0.5)
      })
    } catch { /* suppress */ }
  },

  // Yanlış cevap — düşen buzzer
  wrong(): void {
    try {
      const c = ctx()
      const osc = c.createOscillator()
      const gain = c.createGain()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(440, c.currentTime)
      osc.frequency.exponentialRampToValueAtTime(180, c.currentTime + 0.3)
      gain.gain.setValueAtTime(0.25, c.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.4)
      osc.connect(gain).connect(c.destination)
      osc.start()
      osc.stop(c.currentTime + 0.45)
    } catch { /* suppress */ }
  },

  // UI tık sesi
  click(): void {
    try {
      const c = ctx()
      const osc = c.createOscillator()
      const gain = c.createGain()
      osc.type = 'sine'
      osc.frequency.value = 880
      gain.gain.setValueAtTime(0.15, c.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.06)
      osc.connect(gain).connect(c.destination)
      osc.start()
      osc.stop(c.currentTime + 0.07)
    } catch { /* suppress */ }
  },

  // Kapı kilidi açılma
  unlock(): void {
    try {
      const c = ctx()
      const freqs = [200, 400, 600, 800]
      freqs.forEach((f, i) => {
        const osc = c.createOscillator()
        const gain = c.createGain()
        osc.type = 'square'
        osc.frequency.value = f
        gain.gain.setValueAtTime(0.08, c.currentTime + i * 0.06)
        gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.06 + 0.1)
        osc.connect(gain).connect(c.destination)
        osc.start(c.currentTime + i * 0.06)
        osc.stop(c.currentTime + i * 0.06 + 0.15)
      })
    } catch { /* suppress */ }
  },

  // Keypad tuş sesi
  keypadPress(): void {
    try {
      const c = ctx()
      const osc = c.createOscillator()
      const gain = c.createGain()
      osc.type = 'square'
      osc.frequency.value = 600 + Math.random() * 200
      gain.gain.setValueAtTime(0.06, c.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.05)
      osc.connect(gain).connect(c.destination)
      osc.start()
      osc.stop(c.currentTime + 0.06)
    } catch { /* suppress */ }
  },

  // Ambient ambulans hum (düşük frekans drone)
  startAmbient(): () => void {
    try {
      const c = ctx()
      const osc = c.createOscillator()
      const gain = c.createGain()
      const filter = c.createBiquadFilter()
      osc.type = 'sawtooth'
      osc.frequency.value = 55
      filter.type = 'lowpass'
      filter.frequency.value = 120
      gain.gain.value = 0.06
      osc.connect(filter).connect(gain).connect(c.destination)
      osc.start()

      const osc2 = c.createOscillator()
      const gain2 = c.createGain()
      osc2.type = 'sine'
      osc2.frequency.value = 110
      gain2.gain.value = 0.03
      osc2.connect(gain2).connect(c.destination)
      osc2.start()

      return () => {
        try { osc.stop(); osc2.stop() } catch { /* already stopped */ }
      }
    } catch {
      return () => {}
    }
  },

  // Monitör beep (periyodik)
  startMonitorBeep(): () => void {
    const interval = setInterval(() => {
      try {
        const c = ctx()
        const osc = c.createOscillator()
        const gain = c.createGain()
        osc.type = 'sine'
        osc.frequency.value = 880
        gain.gain.setValueAtTime(0.08, c.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.1)
        osc.connect(gain).connect(c.destination)
        osc.start()
        osc.stop(c.currentTime + 0.12)
      } catch { /* suppress */ }
    }, 1200)

    return () => clearInterval(interval)
  },
}
