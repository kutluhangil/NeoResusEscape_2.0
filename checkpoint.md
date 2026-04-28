# NeoRescue — Checkpoint Dosyası
> Son güncelleme: 2026-04-28

---

## ✅ TAMAMLANAN (Faz 1-2)

### 🏗️ Foundation (Agent 01) — TAMAMLANDI
- Next.js 14 App Router + TypeScript + Tailwind CSS 3
- `next.config.js` → `output: 'export'` (static export aktif)
- Zustand store iskeleti: `gameStore.ts` + `leaderboardStore.ts`
- LocalStorage persist middleware (leaderboard)
- Klasör yapısı tam kuruldu (blueprint'e uygun)
- `vercel.json` deployment config

### 🎨 UI/UX Premium (Agent 02) — TAMAMLANDI
Tüm 10 ekran:
1. **LandingScreen** — FBÜ temalı, floating particles, corner accents, tagline
2. **StoryIntro** — Typewriter efektli, kalp atışı satırı, saat 03:47
3. **NameEntry** — "Dr." prefix, platform seçici (Desktop/Quest 2)
4. **ControlsTutorial** — Keycap tasarımı, WASD/VR kontroller
5. **HUD** — Timer (JetBrains Mono), vaka sayacı, hata, kod parçaları slotları
6. **QuestionModal** — Glass morphism, klinik senaryo + 4 şık, keyboard shortcut (1-2-3-4)
7. **CorrectFeedback** — Yeşil glow, rakam reveal animasyonu, explanation
8. **WrongFeedback** — Kırmızı flash, hint video yönlendirmesi
9. **HintVideoPlayer** — Video player, atlanamaz, bittikten sonra retry
10. **KeypadModal** — 10 haneli display, 3x3 keypad, deneme sayacı
11. **DoorOpeningCinematic** — Step-by-step sinematik kapı açılışı
12. **ResultsScreen** — Confetti, stats panel, sıralama
13. **LeaderboardTable** — Top 3 madalya, mevcut oyuncu highlight, CSV export

### 🎮 3D Dünya (Agent 03-04-05 temel) — TAMAMLANDI
- **AmbulanceShell** — 4m×2.2m×2.1m gerçek ölçü, PBR materyaller (duvarlar/tavan/zemin/kapılar/sedye)
- **EquipmentLayout** — Tüm ekipman konumlandırıldı:
  - Sol duvar: Hasta Monitörü, Defibrilatör, Oksijen, Aspiratör
  - Sağ duvar: İlaç Dolabı, Transport İnküvatör, IV Sehpası
  - Yan tepsi: BVM, Laringoskop, Umbilikal Kateter, Pulse Oksimetre, APGAR Saati
  - Arka kapı: Acil Durum Çantası
  - Dekoratif: Yangın söndürücü, İlk yardım, Dezenfektan, Eldiven kutusu, Atık kutusu, Duvar saati
- **EnvironmentSetup** — Ambient + ceiling + monitor glow + window + door light
- **CeilingLEDs** — Titreyen LED şerit efekti
- **MonitorGlow** — Kalp atışı gibi yeşil pulsing
- **DustParticles** — 80 parçacık, sınırlar içinde bounce
- **PostProcessing** — Bloom + Vignette + ChromaticAberration

### 🕹️ Kontroller (Agent 06) — TAMAMLANDI
- **FPSController** — WASD + PointerLockControls + head bob + collision bounds
- Ambulans sınırları: x:[-0.85,0.85], z:[-1.7,1.7]
- Walk: 1.4 m/s, Run (Shift): 2.6 m/s, Eye height: 1.65m

### 🎯 Oyun Mantığı (Agent 07) — TAMAMLANDI
- **HotspotManager** — 10 hotspot, mesafe algılama (1.8m), E tuşu etkileşim
- **Hotspot** — 3 katman görsel: idle glow + proximity halo + interaction billboard
- **DoorKeypad** — Yeşil LED + allSolved trigger
- **gameStore** — Tam oyun döngüsü: landing→story→name→tutorial→playing→question→feedback→keypad→door→results
- Kapı kodu mantığı: Soru ID sırasına göre digit'ler birleşimi
- Puan sistemi: baseScore + timeBonus - errorPenalty

### 🗄️ Veri Katmanı — TAMAMLANDI
- `questions.ts` — 10 NRP sorusu, tam içerik, doğru cevaplar, explanation, digit
- `hotspotPositions.ts` — Her sorunun 3D pozisyonu
- `storyText.ts` — Hikaye satırları typewriter için
- Kapı kodu: **7314925860** (değişmez, her soru aynı digit)

---

## 🔜 YAPILACAKLAR

### Agent 08 — Audio & Narrative
- [ ] Howler.js entegrasyonu (3D pozisyonel ses)
- [ ] Ambient ses (ambulans motor + klima)
- [ ] Hasta monitörü beep (kalp atışı ritmik)
- [ ] Adım sesleri (4 varyasyon, randomize)
- [ ] Doğru/yanlış ses efektleri
- [ ] Kapı kilidi ve açılış sesi
- [ ] UI tıklama sesleri
- [ ] Intro/outro müziği

### Agent 09 — Polish & Deploy
- [ ] Vercel login → `! npx vercel login` çalıştır, sonra `npx vercel --prod`
- [ ] Font dosyalarını `/public/fonts/` içine koy:
  - Geist-Variable.woff2
  - Inter-Variable.woff2
  - JetBrainsMono-Variable.woff2
- [ ] FBÜ logosu: `/public/images/fbu_logo.svg`
- [ ] og_preview.jpg: `/public/images/og_preview.jpg`
- [ ] Hint videoları: `/public/videos/hints/case-0X-hint.mp4` (kullanıcı sağlayacak)
- [ ] Mobile fallback joystick
- [ ] VR Quest 2 XR entegrasyonu
- [ ] LOD sistemi (büyük sahne için)
- [ ] Lighthouse audit

---

## 📝 KRİTİK NOTLAR
- Vercel deploy için: `! npx vercel login` → browser'dan giriş yap → `npx vercel --prod`
- Alternatif: GitHub'a push et → Vercel dashboard'dan import
- Soru içerikleri placeholder — kullanıcı gerçek soruları `lib/data/questions.ts` içinde değiştirecek
- DOOR_CODE = "7314925860" — bu her soru için sabit digit'lerin birleşimi
- Font fallback var (sistem fontları kullanıyor), özel font için woff2 dosyaları ekle

---

## 🗂️ DOSYA YAPISI ÖZETİ
```
/app/            → Next.js App Router (page.tsx tek route)
/components/
  /three/        → 3D sahne bileşenleri
  /ui/           → 2D arayüz bileşenleri
  /shared/       → Ortak Button, GlassPanel, PageTransition
/lib/
  /store/        → Zustand state management
  /data/         → Sorular, hotspot pozisyonları, hikaye metni
  /utils/        → cn, time, csv, device detect
/public/         → Ses, video, font, model, texture klasörleri
```
