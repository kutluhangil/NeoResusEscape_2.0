# NeoRescue — Checkpoint Dosyası
> Son güncelleme: 2026-04-29

---

## ✅ TAMAMLANAN (Tüm Fazlar)

### 🏗️ Agent 01 — Foundation ✓
- Next.js 14 App Router + TypeScript + Tailwind CSS 3
- `next.config.js` → `output: 'export'` (static export aktif)
- Zustand store: `gameStore.ts` + `leaderboardStore.ts` (LocalStorage persist)
- Klasör yapısı tam kuruldu, `vercel.json` config hazır

### 🎨 Agent 02 — UI/UX Premium ✓
13 ekran tam tamamlandı:
Landing → Story (typewriter) → NameEntry → Tutorial → HUD → QuestionModal →
CorrectFeedback → WrongFeedback → HintVideoPlayer → KeypadModal →
DoorOpeningCinematic → ResultsScreen → LeaderboardTable

### 🎮 Agent 03-04-05 — 3D Dünya + Ekipman + Aydınlatma ✓
- AmbulanceShell: 4m×2.2m×2.1m, PBR materyaller
- EquipmentLayout: 12+ tıbbi ekipman + 7 dekoratif obje
- PostProcessing: Bloom + Vignette + ChromaticAberration
- DustParticles, CeilingLEDs (flicker), MonitorGlow (heartbeat pulse)

### 🕹️ Agent 06 — Player Controller ✓
- FPSController: WASD + PointerLock + head bob + bounds
- Mobile Virtual Joystick (sol taraf) + E butonu (sağ taraf)

### 🎯 Agent 07 — Game Logic ✓
- HotspotManager: 10 hotspot, 1.8m interact mesafesi, E tuşu
- Hotspot: 3 katman görsel (idle/proximity/close), solved=yeşil
- DoorKeypad: yeşil LED, allSolved trigger
- PauseMenu: ESC ile açılır

### 🔊 Agent 08 — Audio & Narrative ✓
- ProceduralAudio: Web Audio API ile dosyasız ses (arpeji, buzzer, tık, kilid)
- AmbientAudio: ambient drone + monitör beep döngüsü
- QuestionModal + KeypadModal ses entegrasyonu
- AudioToggle: HUD'da ses açma/kapama

### ✨ Agent 09 — Polish ✓
- CinematicCamera: ilk giriş kamera turu + 5. cevap kamera titremesi
- MidpointCelebration: "Yarı Yol" overlay (5/10 vakada)
- next/font: Inter + JetBrains Mono
- FBÜ SVG logosu (/public/images/)
- PauseMenu tamamlandı

---

## 🚀 DEPLOY ADIMLARI

### Vercel (Önerilen)
```bash
# Terminal'de:
! npx vercel login
# → Tarayıcı açılır, giriş yap
# Sonra:
npx vercel --prod
```

### Alternatif: GitHub → Vercel Dashboard
1. GitHub'da repo oluştur
2. `git remote add origin https://github.com/KULLANICI/neorescue.git`
3. `git push -u origin main`
4. vercel.com → New Project → Import from GitHub
5. Build command: `npm run build`, Output: `out`

---

## 📝 KULLANICI EKLEMELERİ (Opsiyonel)

### Ses Dosyaları (/public/sounds/)
```
sounds/
  ambient/ambulance_idle.mp3    → Ambulans motor sesi
  ambient/monitor_beep.mp3      → EKG bip sesi
  ui/click.mp3                  → Tık sesi
  ui/correct.mp3                → Doğru cevap
  ui/wrong.mp3                  → Yanlış cevap
  door/unlock.mp3               → Kilit açılması
  door/open_cinematic.mp3       → Kapı açılış
  footsteps/step_01-04.mp3      → Adım sesleri
  music/intro_theme.mp3         → Açılış müziği
  music/outro_theme.mp3         → Kapanış müziği
```
Ses dosyaları eklendikçe otomatik yüklenir. Olmadığında prosedürel ses devreye girer.

### Hint Videoları
```
public/videos/hints/case-01-hint.mp4  → Vaka 1 hatırlatma
...
public/videos/hints/case-10-hint.mp4  → Vaka 10 hatırlatma
```

### Gerçek Sorular
`lib/data/questions.ts` dosyasını düzenle. Her soru için:
- `scenario`, `question`, `options`, `correctOptionId`, `digit` güncelle
- DOOR_CODE: digit'lerin ID sırasına göre birleşimi (otomatik hesaplanır)

### FBÜ Logosu
`public/images/fbu_logo.svg` — şu an placeholder SVG, gerçek logo ile değiştir.

---

## 🗂️ GİT LOG
- commit 5cc6fa5 — ESC pause menu, final polish
- commit 33baf0b — Agent 08-09: audio, sinematik, mobile joystick
- commit 4e92f57 — Agent 01-07: tam proje iskelet

---

## 📋 KRİTİK BİLGİLER
- **Kapı Kodu**: 7314925860 (sorular değişirse bu da değişir — otomatik)
- **Build**: `npm run build` → `/out` klasörü → Vercel'e yükle
- **Dev**: `npm run dev` → http://localhost:3000
- **Veri**: Tüm veri tarayıcı LocalStorage'da — backend yok, server yok
- **3D sahne**: `next/dynamic` ile SSR bypass edildi (Three.js için gerekli)
- **Soru içerikleri**: Placeholder NRP soruları — kullanıcı güncelleyecek
