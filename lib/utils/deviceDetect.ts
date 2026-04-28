import type { Platform } from '../store/gameStore'

export function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'desktop'
  const ua = navigator.userAgent
  if (ua.includes('OculusBrowser') || ua.includes('Quest')) return 'vr-quest'
  if (/Mobi|Android/i.test(ua)) return 'mobile'
  return 'desktop'
}
