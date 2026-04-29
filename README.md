<div align="center">

<br />

<img src="https://img.shields.io/badge/NeoRescue-v1.0-0A0E1A?style=for-the-badge&logoColor=white" alt="version" />
<img src="https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="nextjs" />
<img src="https://img.shields.io/badge/Three.js-3D-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="threejs" />
<img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
<img src="https://img.shields.io/badge/TailwindCSS-v3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="tailwind" />
<img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel" />

<br /><br />

```text
███╗   ██╗███████╗ ██████╗ ██████╗ ███████╗███████╗ ██████╗██╗   ██╗███████╗
████╗  ██║██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔════╝██╔════╝██║   ██║██╔════╝
██╔██╗ ██║█████╗  ██║   ██║██████╔╝█████╗  ███████╗██║     ██║   ██║█████╗  
██║╚██╗██║██╔══╝  ██║   ██║██╔══██╗██╔══╝  ╚════██║██║     ██║   ██║██╔══╝  
██║ ╚████║███████╗╚██████╔╝██║  ██║███████╗███████║╚██████╗╚██████╔╝███████╗
╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝
```

### **Kilitli Ambulans — Yenidoğan Resüsitasyonu** — Tıp eğitimini oyunlaştıran sinematik FPS kaçış odası.

*Fenerbahçe Üniversitesi Tıp Fakültesi için geliştirilmiştir.*

</div>

---

## ✦ NeoRescue Nedir?

**NeoRescue**, tıp öğrencilerini bir ambulans içindeki yenidoğan resüsitasyonu (NRP) senaryolarıyla sınayan web tabanlı bir **3D FPS kaçış odası** oyunudur.

Oyuncu, kapalı bir ambulansın içinde kilitlidir. Çevredeki 10 tıbbi ekipman noktasını inceleyerek NRP sorularını yanıtlar; her doğru yanıt bir rakamı ortaya çıkarır. Tüm rakamlar toplandığında arka kapıdaki şifreli kilidi açarak ambulanstan çıkabilir.

Statik bir sınav yerine, öğrenciler mekan keşfi, zaman baskısı ve sinematik atmosfer içinde klinik karar verme becerilerini pekiştirir. Sıralama tablosu anlık rekabeti mümkün kılar; tüm veriler tarayıcı yerel deposunda tutulur — backend yoktur.

---

<details>
<summary><strong>🇬🇧 English Description</strong></summary>

<br />

**NeoRescue** is a web-based **3D FPS escape room** game that tests medical students on Neonatal Resuscitation Protocol (NRP) scenarios inside a locked ambulance.

The player is trapped inside an ambulance. By examining 10 medical equipment hotspots, they answer NRP questions — each correct answer reveals one digit of the door code. Once all digits are collected, the rear door's keypad can be unlocked.

Instead of a static exam, students reinforce clinical decision-making under time pressure, spatial exploration, and cinematic atmosphere. A real-time leaderboard enables competition; all data lives in browser localStorage — no backend required.

</details>

---

## ⚡ Özellikler

| Özellik | Açıklama |
|---------|----------|
| 🚑 **3D Ambulans İçi** | Four.js ile tamamen prosedürel inşa edilmiş, PBR materyalli gerçekçi ambulans kabini |
| 🎯 **10 NRP Sorusu** | Her biri senaryo, 4 seçenek, ipucu videosu ve kapı kodu rakamı içeren klinik vakalar |
| 🔐 **Şifreli Kapı Sistemi** | Doğru cevaplar rakam toplar; tüm rakamlar tamamlanınca keypad kilidi açılır |
| 🎬 **Sinematik Açılış** | Giriş kamera turu, typewriter hikaye sunumu ve yarı yol kutlama efekti |
| 🔊 **Prosedürel Ses** | Web Audio API ile dosyasız ses motoru — ses dosyası olmadan çalışır |
| 📱 **Mobil Destek** | Sol taraf sanal joystick + sağ taraf E butonu ile tam mobil oynanış |
| 🏆 **Anlık Sıralama** | LocalStorage tabanlı kalıcı skor tablosu, CSV dışa aktarma desteği |
| ✨ **Post-Processing** | Bloom, Vignette, ChromaticAberration ve tavan LED flicker efektleri |

---

## 🛠️ Teknoloji Yığını

```text
Framework       →  Next.js 14 (App Router) · TypeScript (strict)
3D Motor        →  Three.js · React Three Fiber (@react-three/fiber)
3D Yardımcılar  →  React Three Drei (@react-three/drei)
Post-FX         →  @react-three/postprocessing (Bloom · Vignette · ChromaticAberration)
Durum Yönetimi  →  Zustand v5 (persist → LocalStorage)
UI & Animasyon  →  Tailwind CSS v3 · Framer Motion
Ses             →  Web Audio API (prosedürel) · Howler.js (dosya tabanlı)
Yazı Tipleri    →  Inter (UI) · JetBrains Mono (HUD/Keypad)
Deploy          →  Vercel (Next.js native)
```

---

## 📐 Proje Yapısı

```text
NeoResusEscape_2.0/
├── app/
│   ├── layout.tsx                     # Kök layout, font tanımları, metadata
│   ├── page.tsx                       # Faz yönlendirici (landing → story → oyun)
│   └── globals.css                    # CSS değişkenleri, glassmorphism, animasyonlar
├── components/
│   ├── GameView.tsx                   # Ana oyun görünümü: 3D sahne + tüm 2D katmanlar
│   ├── shared/                        # Button, GlassPanel, PageTransition
│   ├── three/
│   │   ├── Scene.tsx                  # Canvas kök bileşeni, tüm 3D çocukları barındırır
│   │   ├── ambulance/
│   │   │   └── AmbulanceShell.tsx     # Prosedürel ambulans kabini (4×2.2×2.1 m)
│   │   ├── audio/
│   │   │   └── AmbientAudio.tsx       # Ambient drone + monitör bip döngüsü
│   │   ├── effects/
│   │   │   ├── DustParticles.tsx      # Toz parçacık sistemi
│   │   │   └── PostProcessing.tsx     # Bloom · Vignette · ChromaticAberration
│   │   ├── interaction/
│   │   │   ├── DoorKeypad.tsx         # Arka kapı kilidi, tüm sorular çözülünce aktif
│   │   │   ├── Hotspot.tsx            # 3 katmanlı hotspot: idle / yakın / çok yakın
│   │   │   └── HotspotManager.tsx     # 10 hotspot yönetimi, E tuşu, mesafe tespiti
│   │   ├── lighting/
│   │   │   ├── CeilingLEDs.tsx        # Tavan LED'leri (flicker efekti)
│   │   │   ├── EnvironmentSetup.tsx   # Ambient + directional ışıklar
│   │   │   └── MonitorGlow.tsx        # Monitör yüzeyi kalp atışı pulse
│   │   └── player/
│   │       ├── CinematicCamera.tsx    # Giriş kamera turu + 5. cevap kamera sarsıntısı
│   │       └── FPSController.tsx      # WASD + PointerLock + head bob + sınır kontrolü
│   └── ui/
│       ├── door/                      # KeypadModal · DoorOpeningCinematic
│       ├── effects/                   # MidpointCelebration ("✦ YARI YOL ✦")
│       ├── hud/                       # HUD · InteractionPrompt · AudioToggle · PauseMenu
│       ├── landing/                   # LandingScreen
│       ├── leaderboard/               # LeaderboardTable
│       ├── mobile/                    # VirtualJoystick · MobileInteractButton
│       ├── name/                      # NameEntry
│       ├── question/                  # QuestionModal · CorrectFeedback · WrongFeedback · HintVideoPlayer
│       ├── results/                   # ResultsScreen
│       ├── story/                     # StoryIntro (typewriter animasyonu)
│       └── tutorial/                  # ControlsTutorial
├── lib/
│   ├── data/
│   │   ├── hotspotPositions.ts        # 10 hotspot koordinatı ve etiketleri
│   │   ├── questions.ts               # 10 NRP sorusu: senaryo · seçenekler · rakam · açıklama
│   │   └── storyText.ts               # Typewriter metin dizisi
│   ├── hooks/
│   │   ├── useAudio.ts                # Dosya tabanlı ses yöneticisi (Howler.js)
│   │   └── useProceduralAudio.ts      # Web Audio API ses motoru (dosyasız)
│   ├── store/
│   │   ├── gameStore.ts               # Ana oyun state makinesi (Zustand persist)
│   │   └── leaderboardStore.ts        # Sıralama tablosu (LocalStorage, CSV export)
│   └── utils/
│       ├── cn.ts                      # Tailwind class birleştirici (clsx)
│       ├── csvExport.ts               # Skor tablosu CSV dışa aktarma
│       ├── deviceDetect.ts            # Mobil/masaüstü tespiti
│       └── timeFormat.ts              # Süre biçimlendirme
├── public/
│   ├── images/                        # fbu_logo.svg · og_preview.png
│   ├── sounds/                        # (opsiyonel) MP3 ses dosyaları
│   └── videos/hints/                  # (opsiyonel) Vaka ipucu videoları
├── scripts/
│   └── generate-og.js                 # OG önizleme görseli oluşturucu
├── next.config.js
├── tailwind.config.ts
└── vercel.json
```

---

## 🚀 Başlarken

### Gereksinimler

- Node.js `>= 18`
- npm `>= 9`

### Yerel Geliştirme

```bash
# Repoyu klonla
git clone https://github.com/kutluhangil/NeoResusEscape_2.0.git
cd NeoResusEscape_2.0

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Uygulama `http://localhost:3000` adresinde açılır.

### Production Build

```bash
npm run build
# .next/ dizini oluşturulur → Vercel'e otomatik deploy edilir
```

---

## 🎮 Oyun Akışı

```
Landing Screen
    ↓  "Başla"
Story Intro  (typewriter — ambulans senaryosu)
    ↓  otomatik
Name Entry  (isim girişi)
    ↓  "Oyuna Başla"
Controls Tutorial  (WASD · E · ESC · Mobil kontroller)
    ↓  "Hazırım"
3D Oyun  ──→  Hotspot'a yaklaş (E)  ──→  Soru Modalı
                    ↓ Doğru              ↓ Yanlış
               Correct Feedback     Wrong Feedback
               (rakam açılır)        (ipucu video)
                    ↓                    ↓ Tekrar dene
              10 soru tamamlandı
                    ↓
              Keypad Modal  (kapı kodu gir)
                    ↓  Doğru kod
              Kapı Açılış Sinematik
                    ↓
              Results Screen  (süre · skor · yıldız)
                    ↓
              Leaderboard Table
```

---

## ✏️ İçerik Güncelleme Rehberi

### Soruları Değiştirme

`lib/data/questions.ts` dosyasını düzenle. Her soru nesnesi:

```ts
{
  id: 1,
  scenario: "Vaka metni...",          // Klinik senaryo açıklaması
  question: "Soru metni?",
  options: [
    { id: 'a', text: "Seçenek A" },
    { id: 'b', text: "Seçenek B" },
    { id: 'c', text: "Seçenek C" },
    { id: 'd', text: "Seçenek D" },
  ],
  correctOptionId: 'b',               // Doğru şık
  digit: '7',                         // Bu sorunun katkısı (0-9)
  explanation: "Açıklama metni...",
  hintVideoUrl: '/videos/hints/case-01-hint.mp4',  // opsiyonel
}
```

> **Not:** Kapı kodu, tüm soruların `digit` değerlerinin ID sırasına göre birleşiminden otomatik hesaplanır.

### Opsiyonel Medya Dosyaları

```text
public/
├── sounds/
│   ├── ambient/ambulance_idle.mp3    # Ambulans motor sesi
│   ├── ambient/monitor_beep.mp3      # EKG bip sesi
│   ├── ui/click.mp3                  # Tık sesi
│   ├── ui/correct.mp3                # Doğru cevap
│   ├── ui/wrong.mp3                  # Yanlış cevap
│   ├── door/unlock.mp3               # Kilit açılması
│   └── footsteps/step_01-04.mp3      # Adım sesleri
└── videos/hints/
    ├── case-01-hint.mp4              # Vaka 1 ipucu videosu
    └── ...
    └── case-10-hint.mp4              # Vaka 10 ipucu videosu
```

Ses dosyaları mevcut olmadığında prosedürel ses motoru (Web Audio API) otomatik devreye girer.

---

## 🔒 Mimari Notlar

| Konu | Uygulama |
|------|----------|
| **Backend Yok** | Tüm veri (skor, durum) tarayıcı LocalStorage'da — sunucu gerekmez |
| **SSR Bypass** | Three.js `<Canvas>` `next/dynamic` + `ssr: false` ile yüklenir |
| **3D ↔ 2D Köprüsü** | `window.dispatchEvent(CustomEvent)` ile Three.js frame loop → React DOM |
| **Mobil FPS** | `getJoystickState()` ile VirtualJoystick değerleri FPSController'a beslenir |
| **Ses Dosyasız** | Web Audio API osilatörleri tüm sesleri programatik üretir |
| **PBR Materyaller** | Tüm 3D objeler MeshStandardMaterial ile roughness/metalness değerleri taşır |

---

## 🗺️ Yol Haritası

- [x] Next.js 14 App Router altyapısı
- [x] Prosedürel ambulans kabini (AmbulanceShell)
- [x] 12 tıbbi ekipman 3D modeli
- [x] FPS kontrolcü (WASD + PointerLock + head bob)
- [x] 10 hotspot sistemi + kapı keypad mekaniği
- [x] Soru modalı + doğru/yanlış geri bildirim
- [x] Prosedürel ses motoru (Web Audio API)
- [x] Sinematik kamera turu + midpoint kutlaması
- [x] Mobil sanal joystick desteği
- [x] Sıralama tablosu (LocalStorage + CSV export)
- [x] Vercel deployment
- [ ] Gerçek NRP soru içerikleri (eğitim ekibi güncelleyecek)
- [ ] Vaka ipucu videoları (10 adet MP4)
- [ ] Gece/gündüz döngüsü ve dinamik aydınlatma
- [ ] VR/XR desteği (@react-three/xr — Quest 2)
- [ ] Çoklu dil desteği (EN/TR)

---

<div align="center">

Fenerbahçe Üniversitesi Tıp Fakültesi için özenle geliştirilmiştir.

<br />

*Projeyi faydalı bulduysanız bir ⭐ vermeyi düşünün.*

</div>
