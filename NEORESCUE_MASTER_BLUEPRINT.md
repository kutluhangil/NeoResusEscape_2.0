# 🚑 NEORESCUE — KİLİTLİ AMBULANS

> **Master Ultra Blueprint v2.0**  
> Yenidoğan Resüsitasyonu Kaçış Oyunu Simülasyonu  
> Web (FPS) + Meta Quest 2 (WebXR) | Frontend-Only | LocalStorage  
> **Fenerbahçe Üniversitesi** Tıp Fakültesi için özel olarak tasarlanmıştır.

---

## 📖 İÇİNDEKİLER

1. [Hikaye & Narratif Çerçeve](#1-hikaye--narratif-çerçeve)
2. [Proje Kimliği & Vizyon](#2-proje-kimliği--vizyon)
3. [Kullanıcı Akışı (Sıfırdan Sonuca)](#3-kullanıcı-akışı-sıfırdan-sonuca)
4. [Tech Stack — Pure Frontend](#4-tech-stack--pure-frontend)
5. [Multi-Agent Geliştirme Planı](#5-multi-agent-geliştirme-planı)
6. [Proje Klasör Yapısı](#6-proje-klasör-yapısı)
7. [3D Ambulans Tasarımı — Premium & Sinematik](#7-3d-ambulans-tasarımı--premium--sinematik)
8. [Tıbbi Ekipman Yerleşim Atlası](#8-tıbbi-ekipman-yerleşim-atlası)
9. [Soru İstasyonları (Hotspot Sistemi)](#9-soru-i̇stasyonları-hotspot-sistemi)
10. [Oyuncu Kontrolleri (Web + VR)](#10-oyuncu-kontrolleri-web--vr)
11. [Soru Havuzu (10 Placeholder Vaka)](#11-soru-havuzu-10-placeholder-vaka)
12. [Kapı Kodu Sistemi](#12-kapı-kodu-sistemi)
13. [Premium UI Ekranları](#13-premium-ui-ekranları)
14. [Tasarım Sistemi (FBÜ Temalı)](#14-tasarım-sistemi-fbü-temalı)
15. [Ses Tasarımı & Atmosfer](#15-ses-tasarımı--atmosfer)
16. [Aydınlatma & Post-Processing](#16-aydınlatma--post-processing)
17. [Animasyonlar & Sinematik Anlar](#17-animasyonlar--sinematik-anlar)
18. [LocalStorage Şeması](#18-localstorage-şeması)
19. [Lider Tablosu Sistemi](#19-lider-tablosu-sistemi)
20. [Performans Optimizasyonu](#20-performans-optimizasyonu)
21. [Asset Listesi & Kaynaklar](#21-asset-listesi--kaynaklar)
22. [Kurulum & Deployment](#22-kurulum--deployment)
23. [Ajan Yürütme Sırası (Execution Order)](#23-ajan-yürütme-sırası-execution-order)

---

## 1. HİKAYE & NARRATİF ÇERÇEVE

### 🎬 Açılış Sinematiği

> Saat **03:47**. İstanbul Anadolu Yakası. Koridorlar boş. Florasan ışıkları titriyor.  
>
> Sen, **Fenerbahçe Üniversitesi Tıp Fakültesi** son sınıf öğrencisisin. Yenidoğan Yoğun Bakım rotasyonunun **final sınavı** bu gece. Ama bu sıradan bir sınav değil.
>
> Profesörün, hastane bahçesinde park etmiş **112 ARGE-09** kodlu eğitim ambulansının arka kapısını açıyor. "İçeri gir," diyor. "Senden istediğim tek şey: yenidoğan resüsitasyonu konusunda her şeyi bildiğini kanıtla."
>
> Kapı arkandan kapanıyor. **Klik.** Elektronik kilit devreye giriyor.
>
> Ambulansın hasta monitörü uyanıyor. Yeşil ışık, metalik yüzeylere yansıyor. Ekipman raflarındaki LED'ler tek tek aydınlanıyor. Her birinin yanında **bir senaryo, bir karar, bir hayat** var.
>
> 10 vaka. 10 doğru cevap. 10 rakam.  
> Bu rakamları birleştir, kapıyı aç, sınavı geç.  
> Yanılırsan? Hatırlatma videosu seni bekliyor — ama saat işliyor.
>
> **Hazır mısın, doktor?**

### 🎭 Hikayenin Amacı

- **Bağlam yaratmak**: Soyut bir test yerine, gerçek bir basınç hissiyatı.
- **Motive etmek**: Çözmek için somut bir hedef (kapıdan çıkmak).
- **Tematik tutarlılık**: Tüm UI, ses, ışık tasarımı bu hikayeyi destekler.
- **Hatıra**: Sıradan bir quiz değil, **anlatılan bir deneyim**.

### 🎯 Üç Aşamalı Narratif Yay

```
AÇILIŞ            ─────────────────  Hikaye → İsim → Ambulansa giriş
GERİLİM           ─────────────────  10 vaka, hatalar, geri sayım
ÇÖZÜLÜŞ           ─────────────────  Kod → Kapı animasyonu → Lider tablosu
```

---

## 2. PROJE KİMLİĞİ & VİZYON

### Tanım

| Alan | Detay |
|---|---|
| **Ürün Adı** | NeoRescue — Kilitli Ambulans |
| **Tagline** | *"Sınav koridorda değil. Ambulansın içinde."* |
| **Hedef Kitle** | Fenerbahçe Üniversitesi Tıp Fakültesi öğrencileri |
| **Platform** | Web tarayıcı (Desktop FPS) + Meta Quest 2 (WebXR) |
| **Mimari** | %100 Frontend — backend yok, kayıt yok, login yok |
| **Veri** | LocalStorage (lider tablosu) |
| **Süre (oyun)** | Ortalama 15-25 dakika |
| **Dil** | Türkçe (UI), Türkçe + İngilizce (tıbbi terimler) |

### Premium Vizyon İlkeleri

1. **Sinematik açılış** — yükleme ekranı bile bir film gibi.
2. **Gerçekçi 3D ortam** — gerçek ambulans referans alınır, hayal değil.
3. **Sessiz lüks** — abartılı animasyon değil, hissedilen kalite.
4. **Tek vurgu rengi** — FBÜ sarısı, koyu lacivert üzerinde mücevher gibi.
5. **Her ses anlamlı** — fon müziği değil, atmosfer.

---

## 3. KULLANICI AKIŞI (SIFIRDAN SONUCA)

```
┌──────────────────────────────────────────────────────────┐
│  LANDING / AÇILIŞ EKRANI                                 │
│  ─────────────────────────────────                       │
│  • Karanlık zemin                                        │
│  • FBÜ logo (yumuşak fade)                               │
│  • Cinematic background loop (ambulans iç videosu)       │
│  • [BAŞLA] butonu                                        │
└──────────────┬───────────────────────────────────────────┘
               ▼
┌──────────────────────────────────────────────────────────┐
│  HİKAYE EKRANI (Story Intro)                             │
│  ─────────────────────────────────                       │
│  • Yazı tipi efektiyle akan metin (typewriter)           │
│  • Arkada düşük volume ambient (kalp atışı + ambulans)   │
│  • Atla butonu (skip)                                    │
└──────────────┬───────────────────────────────────────────┘
               ▼
┌──────────────────────────────────────────────────────────┐
│  İSİM GİRİŞ EKRANI                                       │
│  ─────────────────────────────────                       │
│  • "Adın doktor?" sorusu                                 │
│  • Tek input (validate: 2-30 karakter)                   │
│  • Platform seçimi: 🖥️ Web  /  🥽 Meta Quest 2          │
│  • [AMBULANSA GİR] butonu                                │
└──────────────┬───────────────────────────────────────────┘
               ▼
┌──────────────────────────────────────────────────────────┐
│  TUTORIAL / KONTROL ÖĞRETİMİ (5-10 sn)                   │
│  ─────────────────────────────────                       │
│  • Web: WASD + Mouse görseli                             │
│  • VR: Sağ trigger + sol joystick görseli                │
│  • "E" → Etkileşim   "ESC" → Menü                        │
└──────────────┬───────────────────────────────────────────┘
               ▼
┌──────────────────────────────────────────────────────────┐
│  AMBULANS İÇİ — ANA OYUN                                 │
│  ─────────────────────────────────                       │
│  • Oyuncu ambulansta serbest dolaşır                     │
│  • 10 hotspot (ekipman/duvar/raf yanında)                │
│  • Hotspot'a yaklaşınca: parlak halo + "E ile etkileşim" │
│  • Soru ekranı açılır → cevap ver                        │
│  • Doğru → rakam kazan + HUD'da göster                   │
│  • Yanlış → hatırlatma videosu → tekrar sor              │
│  • HUD: süre, toplanan kodlar, kalan vaka                │
└──────────────┬───────────────────────────────────────────┘
               ▼
┌──────────────────────────────────────────────────────────┐
│  KAPI KODU GİRİŞ                                         │
│  ─────────────────────────────────                       │
│  • Tüm 10 rakam toplandığında kapı keypad'i parlar       │
│  • Oyuncu kapıya yaklaşır → "E" → keypad açılır          │
│  • 10 haneli kodu yazar → ENTER                          │
│  • Kapı sinematik açılır + dış ışık doldurur             │
└──────────────┬───────────────────────────────────────────┘
               ▼
┌──────────────────────────────────────────────────────────┐
│  SONUÇ EKRANI                                            │
│  ─────────────────────────────────                       │
│  • "TEBRİKLER, DR. {AD}"                                 │
│  • Toplam süre / Doğru cevap / Hata sayısı               │
│  • Lider tablosundaki sıralama                           │
│  • [LİDER TABLOSU]  [TEKRAR OYNA]                        │
└──────────────┬───────────────────────────────────────────┘
               ▼
┌──────────────────────────────────────────────────────────┐
│  LİDER TABLOSU                                           │
│  ─────────────────────────────────                       │
│  • Tablo: Sıra | İsim | Doğru | Süre                     │
│  • Top 50 LocalStorage'da saklanır                       │
│  • Mevcut oyuncu satırı highlight                        │
│  • [Excel/CSV İndir] butonu (öğretmen için)              │
└──────────────────────────────────────────────────────────┘
```

---

## 4. TECH STACK — PURE FRONTEND

```
┌──────────────────────────────────────────────────────────┐
│  CORE                                                     │
│  ─────                                                    │
│  • Next.js 14 (App Router, static export)                │
│  • TypeScript 5                                           │
│  • Tailwind CSS 3                                         │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  3D & VR                                                  │
│  ───────                                                  │
│  • Three.js                                               │
│  • @react-three/fiber                                     │
│  • @react-three/drei                                      │
│  • @react-three/xr (Meta Quest 2)                         │
│  • @react-three/postprocessing                            │
│  • three-stdlib (FPS controls, GLTF loader)               │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  UI / ANIMATION                                           │
│  ──────────────                                           │
│  • Framer Motion                                          │
│  • lucide-react (ikonlar)                                 │
│  • react-typed (typewriter intro)                         │
│  • clsx + tailwind-merge                                  │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  STATE & STORAGE                                          │
│  ───────────────                                          │
│  • Zustand (oyun state)                                   │
│  • Zustand persist middleware (localStorage)              │
│  • localforage (büyük veriler için fallback)              │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  AUDIO                                                    │
│  ─────                                                    │
│  • Howler.js (3D pozisyonel ses)                          │
│  • Web Audio API                                          │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  YOK                                                      │
│  ─                                                        │
│  ✗ Backend / API                                          │
│  ✗ Database                                               │
│  ✗ Authentication                                         │
│  ✗ Cloud storage                                          │
│  ✗ Server-side rendering (SSR kapatılır)                  │
└──────────────────────────────────────────────────────────┘
```

### Build Stratejisi
- `next.config.js` → `output: 'export'` (statik HTML üretir)
- Tüm asset'ler `/public` altında, hash'lenmiş cache busting
- Sıkıştırma: gzip + brotli (Vercel/Netlify default)
- Hedef bundle boyutu: **< 8 MB initial load** (3D modeller hariç)

---

## 5. MULTI-AGENT GELİŞTİRME PLANI

Bu proje **9 uzmanlaşmış ajan** tarafından paralel ve sıralı şekilde geliştirilecek. Her ajan kendi sorumluluk alanına sahip ve diğerlerinin çıktılarını input olarak kullanır.

### 🤖 Ajan Listesi

```
╔══════════════════════════════════════════════════════════════════╗
║  AGENT 01 — FOUNDATION (Temel Mimar)                             ║
║  ────────────────────────────────────                            ║
║  Sorumluluk:                                                     ║
║  • Next.js 14 projesi kurulumu                                   ║
║  • TypeScript + Tailwind + ESLint config                         ║
║  • Klasör yapısı oluşturma                                       ║
║  • next.config.js (static export)                                ║
║  • Zustand store iskeleti                                        ║
║  • LocalStorage hook'ları                                        ║
║  • Routing yapısı (App Router)                                   ║
║                                                                  ║
║  Çıktı: Çalışır boş Next.js projesi                              ║
║  Süre: 0.5 gün                                                   ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  AGENT 02 — UI/UX PREMIUM (Sinematik Tasarımcı)                  ║
║  ──────────────────────────────────────────                      ║
║  Sorumluluk:                                                     ║
║  • Landing / Açılış ekranı                                       ║
║  • Hikaye intro (typewriter + cinematic)                         ║
║  • İsim giriş ekranı                                             ║
║  • Tutorial overlay (kontroller)                                 ║
║  • HUD (süre, kodlar, vaka sayacı)                               ║
║  • Soru modal'ı (premium, blur backdrop)                         ║
║  • Yanlış/doğru feedback animasyonları                           ║
║  • Kapı keypad arayüzü                                           ║
║  • Sonuç ekranı (cinematic)                                      ║
║  • Lider tablosu                                                 ║
║                                                                  ║
║  Tasarım Prensipleri:                                            ║
║  • Premium dark theme (#0A0E1A bg)                               ║
║  • FBÜ aksent: Sarı (#FFD700) + Lacivert (#1B2545)               ║
║  • Glass morphism panellerde                                     ║
║  • Framer Motion ile her geçiş yumuşak                           ║
║  • Display font: Geist Mono / JetBrains Mono                     ║
║  • Body font: Inter Variable                                     ║
║                                                                  ║
║  Çıktı: Tüm 2D arayüzler tamamlanmış                             ║
║  Süre: 2 gün                                                     ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  AGENT 03 — 3D WORLD BUILDER (Ambulans Mimarı)                   ║
║  ──────────────────────────────────────────                      ║
║  Sorumluluk:                                                     ║
║  • Ambulans iç gövdesi (4m x 2.2m x 2.1m gerçek ölçü)            ║
║  • Duvarlar, tavan, zemin (PBR materyaller)                      ║
║  • Tavan paneli (havalandırma + LED şerit)                       ║
║  • Yan duvar dolapları (cam kapaklı)                             ║
║  • Sedye platformu (boş — hasta yok)                             ║
║  • Arka çift kapı (animasyonlu)                                  ║
║  • Ön bölme penceresi                                            ║
║  • Kapı keypad'i (interactive mesh)                              ║
║                                                                  ║
║  Materyaller:                                                    ║
║  • Beyaz fırınlanmış metal (yan duvarlar)                        ║
║  • Kauçuk paspas (zemin)                                         ║
║  • Krom detaylar (raf çerçeveleri)                               ║
║  • Yarı mat plastik (paneller)                                   ║
║                                                                  ║
║  Çıktı: Boş ama sinematik ambulans gövdesi                       ║
║  Süre: 3 gün                                                     ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  AGENT 04 — MEDICAL EQUIPMENT (Ekipman Yerleştiricisi)           ║
║  ───────────────────────────────────────────────                 ║
║  Sorumluluk:                                                     ║
║  • 25+ tıbbi ekipmanın 3D yerleşimi                              ║
║  • GLTF modelleri yüklemek (Sketchfab/CGTrader)                  ║
║  • Pozisyon, rotasyon, scale'leri ince ayar                      ║
║  • Ekipman üstü etiketler (sticker'lar)                          ║
║  • Cam vitrinler, raf düzeni                                     ║
║  • Hasta monitörü (mesh + ekran texture)                         ║
║  • İlaç dolabı (cam kapak şeffaf)                                ║
║  • Defibrilatör + AED                                            ║
║  • Oksijen tankları                                              ║
║  • Aspiratör cihazı                                              ║
║  • İnstance mesh'lerle performans optimize                       ║
║                                                                  ║
║  Çıktı: Ekipmanı tıka basa dolu, gerçekçi ambulans               ║
║  Süre: 3 gün                                                     ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  AGENT 05 — LIGHTING & ATMOSPHERE (Atmosfer Sanatçısı)           ║
║  ─────────────────────────────────────────────                   ║
║  Sorumluluk:                                                     ║
║  • Tavan LED şerit (sıcak beyaz, hafif kırılgan)                 ║
║  • Hasta monitörü emisyonu (yeşil, dans eden)                    ║
║  • Acil durum kırmızı ışık (gizli switch tetikleyebilir)         ║
║  • Window'dan giren mavi gece ışığı                              ║
║  • HDR environment map                                           ║
║  • Ambient occlusion (SSAO)                                      ║
║  • Bloom (post-processing)                                       ║
║  • Vignette (köşe karartma)                                      ║
║  • Volumetric fog (ince, gerçekçi)                               ║
║  • Dust particles (havada uçan toz)                              ║
║  • Ekran flicker efekti (tip TV bozulma)                         ║
║                                                                  ║
║  Çıktı: Sinematik atmosfer, hissedilen derinlik                  ║
║  Süre: 2 gün                                                     ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  AGENT 06 — PLAYER CONTROLLER (Hareket & Etkileşim)              ║
║  ─────────────────────────────────────────────                   ║
║  Sorumluluk:                                                     ║
║  • Web FPS kontrol:                                              ║
║    - WASD hareket                                                ║
║    - Mouse look (PointerLockControls)                            ║
║    - Shift = sprint, Space = crouch                              ║
║    - Çarpışma algılama (bounding box)                            ║
║    - Yumuşak head bob (yürürken kafa salınımı)                   ║
║  • VR kontrol (Meta Quest 2):                                    ║
║    - Sol joystick = teleport / smooth move                       ║
║    - Sağ joystick = snap turn                                    ║
║    - Trigger = etkileşim                                         ║
║    - Grip = nesne tutma (opsiyonel)                              ║
║  • Raycast etkileşim sistemi:                                    ║
║    - Mesafe: 2.5m                                                ║
║    - Hover'da hotspot parlar                                     ║
║    - "E" / Trigger ile aktivasyon                                ║
║  • Crosshair / pointer tasarımı                                  ║
║                                                                  ║
║  Çıktı: Akıcı, gerçekçi FPS + VR kontrolü                        ║
║  Süre: 2 gün                                                     ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  AGENT 07 — GAME LOGIC (Soru & Kod Sistemi)                      ║
║  ──────────────────────────────────────                          ║
║  Sorumluluk:                                                     ║
║  • 10 hotspot pozisyonlandırması (ambulans içinde)               ║
║  • Soru havuzu (bu .md'deki 10 placeholder)                      ║
║  • Soru gösterim akışı                                           ║
║  • Doğru/yanlış değerlendirme                                    ║
║  • Hatırlatma videosu sistemi                                    ║
║  • Kod parçası kazanma → HUD update                              ║
║  • Süre takibi (her soru + total)                                ║
║  • Hata sayacı                                                   ║
║  • Kapı keypad mantığı                                           ║
║  • Kapı açılış tetikleyici                                       ║
║  • Tüm verileri Zustand'a yaz                                    ║
║                                                                  ║
║  Çıktı: Çalışan oyun döngüsü                                     ║
║  Süre: 2 gün                                                     ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  AGENT 08 — AUDIO & NARRATIVE (Ses & Atmosfer)                   ║
║  ──────────────────────────────────────                          ║
║  Sorumluluk:                                                     ║
║  • Ambient ambulans sesi (motor, klima)                          ║
║  • Hasta monitörü beep (subtle, ritmik)                          ║
║  • Yürüme ayak sesi (4 varyasyon, randomize)                     ║
║  • Hotspot hover sesi                                            ║
║  • Doğru cevap chime                                             ║
║  • Yanlış cevap buzzer                                           ║
║  • Kapı kilit açılma sesi                                        ║
║  • Kapı açılış sinematik ses                                     ║
║  • UI tıklama sesleri (hap dilbilgisinde)                        ║
║  • Cinematic music intro/outro (1 pasaj her biri)                ║
║  • 3D pozisyonel ses (Howler 3D)                                 ║
║                                                                  ║
║  Çıktı: Tam atmosferik ses tasarımı                              ║
║  Süre: 1.5 gün                                                   ║
╚══════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════╗
║  AGENT 09 — POLISH & VR-WEB OPTIMIZATION                         ║
║  ───────────────────────────────────────                         ║
║  Sorumluluk:                                                     ║
║  • Performans profilleme (Chrome DevTools, Stats.js)             ║
║  • LOD (Level of Detail) sistemi                                 ║
║  • Texture compression (basis universal / KTX2)                  ║
║  • GLTF Draco compression                                        ║
║  • Quest 2 frame rate hedefi: 72 FPS sabit                       ║
║  • Web hedefi: 60 FPS (orta tier laptop)                         ║
║  • Lighthouse audit (90+ skor)                                   ║
║  • Mobile fallback (basitleştirilmiş 3D)                         ║
║  • Loading screen optimization (asset preload)                   ║
║  • Lider tablosu CSV export                                      ║
║  • Bug hunt + final polish                                       ║
║                                                                  ║
║  Çıktı: Production-ready build                                   ║
║  Süre: 2 gün                                                     ║
╚══════════════════════════════════════════════════════════════════╝
```

### 🔄 Ajan Bağımlılık Diyagramı

```
                    ┌─────────────┐
                    │  AGENT 01   │
                    │ FOUNDATION  │
                    └──────┬──────┘
                           │
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
    ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
    │  AGENT 02   │ │  AGENT 03   │ │  AGENT 06   │
    │  UI/UX      │ │ 3D WORLD    │ │  CONTROLS   │
    └──────┬──────┘ └──────┬──────┘ └──────┬──────┘
           │               ▼               │
           │       ┌─────────────┐         │
           │       │  AGENT 04   │         │
           │       │ EQUIPMENT   │         │
           │       └──────┬──────┘         │
           │              ▼                │
           │       ┌─────────────┐         │
           │       │  AGENT 05   │         │
           │       │  LIGHTING   │         │
           │       └──────┬──────┘         │
           │              │                │
           └──────────────┼────────────────┘
                          ▼
                  ┌─────────────┐
                  │  AGENT 07   │
                  │ GAME LOGIC  │
                  └──────┬──────┘
                         ▼
                  ┌─────────────┐
                  │  AGENT 08   │
                  │   AUDIO     │
                  └──────┬──────┘
                         ▼
                  ┌─────────────┐
                  │  AGENT 09   │
                  │   POLISH    │
                  └─────────────┘
```

### 📋 Toplam Süre Tahmini

| Faz | Ajan | Gün |
|---|---|---|
| Faz 1 (Setup) | 01 | 0.5 |
| Faz 2 (Paralel) | 02, 03, 06 | 3 |
| Faz 3 (3D detay) | 04, 05 | 5 (paralel) |
| Faz 4 (Logic) | 07 | 2 |
| Faz 5 (Audio) | 08 | 1.5 |
| Faz 6 (Polish) | 09 | 2 |
| **TOPLAM** | — | **~14 iş günü** |

---

## 6. PROJE KLASÖR YAPISI

```
neorescue/
│
├── app/
│   ├── layout.tsx                    # Root layout (font + meta)
│   ├── page.tsx                      # Landing / açılış
│   ├── globals.css                   # Tailwind + CSS değişkenleri
│   ├── story/page.tsx                # Hikaye intro
│   ├── play/page.tsx                 # Ana oyun (3D canvas)
│   ├── results/page.tsx              # Sonuç ekranı
│   └── leaderboard/page.tsx          # Lider tablosu
│
├── components/
│   │
│   ├── three/                        # 🎮 3D bileşenler
│   │   ├── Scene.tsx                 # Ana <Canvas> wrapper
│   │   ├── ambulance/
│   │   │   ├── AmbulanceShell.tsx    # Iç gövde
│   │   │   ├── Floor.tsx
│   │   │   ├── Walls.tsx
│   │   │   ├── Ceiling.tsx
│   │   │   ├── Stretcher.tsx         # Boş sedye
│   │   │   └── Door.tsx              # Animasyonlu arka kapı
│   │   ├── equipment/
│   │   │   ├── PatientMonitor.tsx
│   │   │   ├── Defibrillator.tsx
│   │   │   ├── OxygenSystem.tsx
│   │   │   ├── DrugCabinet.tsx
│   │   │   ├── Incubator.tsx
│   │   │   ├── BVMSet.tsx
│   │   │   ├── Laryngoscope.tsx
│   │   │   ├── SyringeRack.tsx
│   │   │   ├── IVPole.tsx
│   │   │   ├── Stethoscope.tsx
│   │   │   ├── PulseOximeter.tsx
│   │   │   ├── SuctionDevice.tsx
│   │   │   ├── ETTubeCase.tsx
│   │   │   ├── WarmingBlanket.tsx
│   │   │   ├── EmergencyKit.tsx
│   │   │   ├── Stopwatch.tsx
│   │   │   └── ResuscitationBoard.tsx
│   │   ├── lighting/
│   │   │   ├── CeilingLEDs.tsx
│   │   │   ├── EmergencyRedLight.tsx
│   │   │   ├── MonitorGlow.tsx
│   │   │   └── EnvironmentSetup.tsx
│   │   ├── effects/
│   │   │   ├── PostProcessing.tsx
│   │   │   ├── DustParticles.tsx
│   │   │   ├── VolumetricFog.tsx
│   │   │   └── ScreenFlicker.tsx
│   │   ├── interaction/
│   │   │   ├── Hotspot.tsx           # Soru hotspot mesh
│   │   │   ├── HotspotHalo.tsx       # Parlak halo efekti
│   │   │   ├── DoorKeypad.tsx        # Etkileşimli keypad
│   │   │   └── InteractionRaycast.tsx
│   │   └── player/
│   │       ├── FPSController.tsx     # Web kontrol
│   │       ├── VRController.tsx      # Quest 2 kontrol
│   │       ├── Crosshair.tsx
│   │       └── HeadBob.tsx
│   │
│   ├── ui/                           # 🎨 2D arayüzler
│   │   ├── landing/
│   │   │   ├── LandingScreen.tsx
│   │   │   ├── FBULogoMark.tsx       # Animasyonlu logo
│   │   │   └── BackgroundLoop.tsx
│   │   ├── story/
│   │   │   ├── StoryIntro.tsx
│   │   │   ├── TypewriterText.tsx
│   │   │   └── SkipButton.tsx
│   │   ├── name/
│   │   │   ├── NameEntry.tsx
│   │   │   └── PlatformSelector.tsx
│   │   ├── tutorial/
│   │   │   ├── ControlsTutorial.tsx
│   │   │   └── KeyboardDiagram.tsx
│   │   ├── hud/
│   │   │   ├── HUD.tsx               # Ana HUD wrapper
│   │   │   ├── Timer.tsx
│   │   │   ├── CodeCollector.tsx     # Toplanan rakamlar
│   │   │   ├── CaseCounter.tsx       # 3/10
│   │   │   ├── InteractionPrompt.tsx # "E ile etkileşim"
│   │   │   └── ErrorCounter.tsx
│   │   ├── question/
│   │   │   ├── QuestionModal.tsx
│   │   │   ├── ScenarioCard.tsx
│   │   │   ├── OptionButton.tsx
│   │   │   ├── CorrectFeedback.tsx
│   │   │   ├── WrongFeedback.tsx
│   │   │   ├── HintVideoPlayer.tsx
│   │   │   └── CodeRevealAnimation.tsx
│   │   ├── door/
│   │   │   ├── KeypadModal.tsx
│   │   │   └── KeypadButton.tsx
│   │   ├── results/
│   │   │   ├── ResultsScreen.tsx
│   │   │   ├── StatsCard.tsx
│   │   │   ├── RankingPlace.tsx      # Sıralamadaki yer
│   │   │   └── CinematicReveal.tsx
│   │   └── leaderboard/
│   │       ├── LeaderboardTable.tsx
│   │       ├── LeaderboardRow.tsx
│   │       ├── TopThreeBadges.tsx    # 🥇🥈🥉 special design
│   │       └── ExportCSVButton.tsx
│   │
│   └── shared/
│       ├── Button.tsx                # Premium button
│       ├── GlassPanel.tsx            # Glass morphism panel
│       └── PageTransition.tsx
│
├── lib/
│   ├── store/
│   │   ├── gameStore.ts              # Zustand main
│   │   ├── leaderboardStore.ts       # Zustand persist
│   │   └── settingsStore.ts          # Hassasiyet, ses
│   │
│   ├── data/
│   │   ├── questions.ts              # 10 placeholder soru
│   │   ├── hotspotPositions.ts       # 3D pozisyonlar
│   │   ├── equipmentConfig.ts        # Tüm ekipman pozisyonları
│   │   └── storyText.ts              # Hikaye metni
│   │
│   ├── hooks/
│   │   ├── useTimer.ts
│   │   ├── useFPSControls.ts
│   │   ├── useVRControls.ts
│   │   ├── useRaycast.ts
│   │   ├── useAudio.ts
│   │   └── useLeaderboard.ts
│   │
│   ├── utils/
│   │   ├── codeGenerator.ts          # 10 haneli rastgele kod
│   │   ├── timeFormat.ts             # mm:ss formatı
│   │   ├── csvExport.ts              # Lider tablosu Excel
│   │   └── deviceDetect.ts           # Quest 2 detection
│   │
│   └── three/
│       ├── materials.ts              # PBR material presets
│       ├── loaders.ts                # GLTF loaders
│       └── helpers.ts
│
├── public/
│   ├── models/                       # GLTF/GLB dosyalar
│   │   ├── ambulance/
│   │   │   ├── interior_shell.glb
│   │   │   ├── stretcher.glb
│   │   │   └── door.glb
│   │   └── equipment/
│   │       ├── monitor.glb
│   │       ├── defibrillator.glb
│   │       ├── ... (25 model)
│   ├── textures/
│   │   ├── metal_panel/
│   │   ├── rubber_floor/
│   │   ├── medical_white/
│   │   └── env_hdr/
│   ├── sounds/
│   │   ├── ambient/
│   │   │   ├── ambulance_idle.mp3
│   │   │   └── monitor_beep.mp3
│   │   ├── ui/
│   │   │   ├── click.mp3
│   │   │   ├── hover.mp3
│   │   │   ├── correct.mp3
│   │   │   └── wrong.mp3
│   │   ├── footsteps/
│   │   │   ├── step_01.mp3
│   │   │   ├── step_02.mp3
│   │   │   ├── step_03.mp3
│   │   │   └── step_04.mp3
│   │   ├── door/
│   │   │   ├── unlock.mp3
│   │   │   └── open_cinematic.mp3
│   │   └── music/
│   │       ├── intro_theme.mp3
│   │       └── outro_theme.mp3
│   ├── videos/                       # Hatırlatma videoları (kullanıcı verecek)
│   │   └── hints/
│   │       ├── case-01-hint.mp4
│   │       └── ... (10 video)
│   ├── images/
│   │   ├── fbu_logo.svg              # Fenerbahçe Üniversitesi logo
│   │   ├── fbu_logo_white.svg
│   │   ├── ambulance_silhouette.png
│   │   └── og_preview.jpg
│   └── fonts/
│       ├── Geist-Variable.woff2
│       └── Inter-Variable.woff2
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 7. 3D AMBULANS TASARIMI — PREMIUM & SİNEMATİK

### Gerçekçi Ambulans Referansı

Modelleme, **Türkiye'de standart 112 acil ambulansı** referans alınacak (Mercedes Sprinter / Ford Transit tipi yoğun bakım donanımlı versiyon). Gerçek ölçüler:

```
İç Boyut:
├── Uzunluk: 4.0 m
├── Genişlik: 2.2 m
└── Yükseklik: 2.1 m

Bölüm Düzeni:
┌────────────────────────────────────────────────┐
│  ←  ÖN BÖLME (sürücü tarafı, cam pencere)     │ 
│ ┌────────────┐                                 │
│ │ Sol duvar  │   SEDYE (boş)         [Sağ duv] │
│ │ - Monitör  │   ┌──────────┐        - Dolap  │
│ │ - Defib    │   │          │        - IV     │
│ │ - O₂       │   └──────────┘        - İlaç   │
│ │ - Aspir.   │                       - İnküv. │
│ └────────────┘                       └─────────┘
│                                                │
│              ARKA ÇİFT KAPI →                  │
│              [KEYPAD]                          │
└────────────────────────────────────────────────┘
```

### Materyal Bütçesi (Premium Hissiyat)

| Yüzey | Materyal | PBR Özellikleri |
|---|---|---|
| Yan duvarlar | Beyaz fırınlanmış metal | metalness: 0.6, roughness: 0.35 |
| Tavan | Mat plastik panel | metalness: 0.0, roughness: 0.7 |
| Zemin | Antibakteriyel kauçuk | metalness: 0.0, roughness: 0.85 |
| Kapı kasası | Krom çelik | metalness: 0.95, roughness: 0.15 |
| Cam dolaplar | Şeffaf akrilik | transparent: true, ior: 1.5 |
| Sedye yüzeyi | Tıbbi vinil | metalness: 0.0, roughness: 0.5 |
| Detaylar | Mavi kauçuk şerit | (DGS mavisi - FBÜ navy yakın) |

### Detay Seviyeleri (LOD)

```
LOD 0 (yakın, < 3m)   → Tam detay, normal map dahil
LOD 1 (orta, 3-6m)    → %50 poly count
LOD 2 (uzak, > 6m)    → %20 poly count, basit material
```

### Ambulans Aksesuarları (Gerçekçilik İçin)

- **Acil durum kelebek anahtarı** (tavanda, kırmızı)
- **First aid kit** (yan duvarda asılı, beyaz haç)
- **Yangın söndürücü** (köşe, kırmızı)
- **Hijyen istasyonu** (el dezenfektanı)
- **Atık kutusu** (sarı tıbbi atık)
- **Çöp poşeti tutacağı** (siyah)
- **Ambulans iç telefon** (eski tarz, krem rengi)
- **Saat** (analog, sessizce tıkırdıyor)
- **GPS ekranı** (sürücüye bakan, statik harita gösterimi)
- **İçeride asılı stetoskop** (ekstra, dekoratif)
- **Eldiven kutusu** (mavi nitril)
- **Maske paketi** (cerrahi)
- **Bandaj paketleri** (kutuda)

---

## 8. TIBBİ EKİPMAN YERLEŞİM ATLASI

> Toplam **27 ekipman** + **13 dekoratif öge**.  
> Pozisyonlar (x, y, z) — origin: ambulans merkezi, zemin = y=0.

```typescript
// lib/data/equipmentConfig.ts

export const EQUIPMENT_LAYOUT = [
  // ━━━━━━━━━━ SOL DUVAR ━━━━━━━━━━
  {
    id: 'patient_monitor',
    label: 'Hasta Monitörü (Philips IntelliVue MX800)',
    model: '/models/equipment/monitor.glb',
    position: [-1.05, 1.45, -0.4],
    rotation: [0, Math.PI / 5, 0],
    isHotspot: false,                    // Dekoratif
    glow: { color: '#00ff88', intensity: 0.4 }
  },
  {
    id: 'defibrillator',
    label: 'Defibrilatör (Zoll X Series)',
    model: '/models/equipment/defibrillator.glb',
    position: [-1.05, 0.95, -1.0],
    rotation: [0, Math.PI / 6, 0],
    isHotspot: true,                     // Soru #5 burada
    questionId: 5
  },
  {
    id: 'oxygen_wall',
    label: 'Oksijen Duvar Sistemi',
    model: '/models/equipment/oxygen_wall.glb',
    position: [-1.08, 1.6, 0.2],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    id: 'suction_device',
    label: 'Aspiratör (Laerdal LSU)',
    model: '/models/equipment/suction.glb',
    position: [-1.0, 0.7, -1.6],
    isHotspot: true,                     // Soru #2
    questionId: 2
  },
  
  // ━━━━━━━━━━ SAĞ DUVAR ━━━━━━━━━━
  {
    id: 'drug_cabinet',
    label: 'Cam İlaç Dolabı',
    model: '/models/equipment/drug_cabinet.glb',
    position: [1.05, 1.2, -0.5],
    rotation: [0, -Math.PI / 2, 0],
    isHotspot: true,                     // Soru #7 (epinefrin)
    questionId: 7
  },
  {
    id: 'iv_pole',
    label: 'IV Sehpası + SF',
    model: '/models/equipment/iv_pole.glb',
    position: [1.0, 1.7, 0.4]
  },
  {
    id: 'transport_incubator',
    label: 'Transport İnküvatörü',
    model: '/models/equipment/incubator.glb',
    position: [0.6, 0.55, -1.0],
    isHotspot: true,                     // Soru #1 (warming)
    questionId: 1
  },
  
  // ━━━━━━━━━━ EKİPMAN TEPSİSİ (yan raf) ━━━━━━━━━━
  {
    id: 'bvm_set',
    label: 'BVM (Laerdal Resusci-Baby)',
    model: '/models/equipment/bvm.glb',
    position: [-0.4, 0.85, 0.95],
    isHotspot: true,                     // Soru #3 (ventilation)
    questionId: 3
  },
  {
    id: 'laryngoscope',
    label: 'Laringoskop Miller 0-1',
    model: '/models/equipment/laryngoscope.glb',
    position: [-0.15, 0.85, 0.95],
    isHotspot: true,                     // Soru #9 (intubation)
    questionId: 9
  },
  {
    id: 'et_tube_case',
    label: 'Endotrakeal Tüp Seti (2.5-4.0)',
    model: '/models/equipment/et_tubes.glb',
    position: [0.05, 0.85, 0.95]
  },
  {
    id: 'syringe_rack',
    label: 'Şırınga Standı (1-3-5-10ml)',
    model: '/models/equipment/syringes.glb',
    position: [0.3, 0.85, 0.95]
  },
  {
    id: 'umbilical_catheter',
    label: 'Umbilikal Kateter Seti',
    model: '/models/equipment/umbilical.glb',
    position: [0.5, 0.85, 0.95],
    isHotspot: true,                     // Soru #8 (volume expansion)
    questionId: 8
  },
  
  // ━━━━━━━━━━ SEDYE ÜZERİ ━━━━━━━━━━
  {
    id: 'stretcher',
    label: 'Boş Acil Sedye',
    model: '/models/ambulance/stretcher.glb',
    position: [0.0, 0.0, 0.0]
  },
  {
    id: 'resuscitation_board',
    label: 'Resüsitasyon Tahtası',
    model: '/models/equipment/resus_board.glb',
    position: [0.1, 0.78, 0.0]
  },
  {
    id: 'pulse_oximeter',
    label: 'Pulse Oksimetre Probu',
    model: '/models/equipment/pulse_ox.glb',
    position: [0.4, 0.85, -0.3],
    isHotspot: true,                     // Soru #4 (assessment)
    questionId: 4
  },
  {
    id: 'apgar_clock',
    label: 'APGAR Saati (1-5-10 dk)',
    model: '/models/equipment/apgar_clock.glb',
    position: [-0.5, 0.85, -0.3],
    isHotspot: true,                     // Soru #6 (compression ratio)
    questionId: 6
  },
  
  // ━━━━━━━━━━ ARKA DUVAR — KAPI ━━━━━━━━━━
  {
    id: 'door_keypad',
    label: 'Kilit Kontrol Paneli',
    model: '/models/equipment/keypad.glb',
    position: [0.4, 1.1, 1.85],
    isHotspot: true,
    isFinalGate: true                    // 10 kod tamamlanmadan etkin değil
  },
  {
    id: 'emergency_kit',
    label: 'Acil Durum Çantası',
    model: '/models/equipment/emergency_kit.glb',
    position: [-0.6, 0.6, 1.7],
    isHotspot: true,                     // Soru #10 (post-resuscitation)
    questionId: 10
  },
  
  // ━━━━━━━━━━ DEKORATİF ━━━━━━━━━━
  { id: 'fire_extinguisher', model: '/models/decor/fire_ext.glb', position: [-1.05, 0.3, 1.5] },
  { id: 'first_aid_kit', model: '/models/decor/first_aid.glb', position: [1.05, 1.6, 0.9] },
  { id: 'sanitizer', model: '/models/decor/sanitizer.glb', position: [1.0, 1.4, -1.2] },
  { id: 'glove_box', model: '/models/decor/glove_box.glb', position: [-0.9, 1.6, 0.7] },
  { id: 'mask_pack', model: '/models/decor/mask_pack.glb', position: [0.9, 1.6, -0.7] },
  { id: 'biohazard_bin', model: '/models/decor/biohazard.glb', position: [0.95, 0.3, 1.5] },
  { id: 'wall_clock', model: '/models/decor/clock.glb', position: [0, 1.95, -1.85] },
  { id: 'ambulance_phone', model: '/models/decor/phone.glb', position: [-1.05, 1.3, 1.2] },
  { id: 'gps_screen', model: '/models/decor/gps.glb', position: [0, 1.7, -1.95] }
];
```

### Hotspot Eşleştirmesi (10 Soru → 10 Konum)

| Soru # | Konu | Yerleştirildiği Ekipman | Ambulanstaki Konum |
|---|---|---|---|
| 1 | Termoregülasyon | Transport İnküvatörü | Sağ ön |
| 2 | Hava yolu açıklığı | Aspiratör | Sol arka |
| 3 | Pozitif basınçlı ventilasyon | BVM Maskesi | Yan tepsi |
| 4 | İlk değerlendirme (APGAR) | Pulse Oksimetre | Sedye sağ |
| 5 | Kalp masajı endikasyonu | Defibrilatör | Sol orta |
| 6 | Kompresyon-ventilasyon oranı | APGAR Saati | Sedye sol |
| 7 | İlaç dozajı (Epinefrin) | İlaç Dolabı | Sağ orta |
| 8 | Volüm genişletici | Umbilikal Kateter Seti | Yan tepsi sağ |
| 9 | İleri hava yolu | Laringoskop | Yan tepsi sol |
| 10 | Post-resüsitasyon bakımı | Acil Durum Çantası | Arka kapı yanı |

> **Önemli**: Hotspot'lar dağıtıldı. Oyuncu doğal olarak ambulans içinde gezmek zorunda — sol → sağ → arka şeklinde rotalar oluşur.

---

## 9. SORU İSTASYONLARI (HOTSPOT SİSTEMİ)

### Hotspot Görsel Tasarımı

Her hotspot, ekipmanın etrafında **üç katmanlı** bir görsel ipucu sunar:

```
KATMAN 1 — Sürekli yumuşak parıltı (idle)
├── Renk: FBÜ sarı (#FFD700) %15 opaklık
├── Animasyon: 2 saniyelik nefes alış-verişi
└── Mesafe: Her zaman görünür

KATMAN 2 — Yakınlık halo (3m mesafede)
├── Renk: FBÜ sarı %40 opaklık
├── Animasyon: Yumuşak rotate + scale pulse
└── Tetik: Oyuncu 3m içinde

KATMAN 3 — Etkileşim çağrısı (1.5m mesafede)
├── Renk: Parlak sarı %80 opaklık
├── 2D ipucu: "[E] tuşuna bas — VAKA İNCELE"
├── Mikro ses: Hover chime
└── Tetik: Oyuncu 1.5m içinde + raycast hit
```

### Hotspot Mesh Yapısı

```typescript
// components/three/interaction/Hotspot.tsx

<group position={position}>
  {/* Ekipman GLTF modeli */}
  <Equipment />
  
  {/* Halo ring (yere paralel) */}
  <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.02, 0]}>
    <ringGeometry args={[0.5, 0.6, 32]} />
    <meshBasicMaterial 
      color="#FFD700" 
      transparent 
      opacity={proximityOpacity}  // mesafeye göre
    />
  </mesh>
  
  {/* Vertical light pillar (uzaktan görünür) */}
  <mesh position={[0, 1.5, 0]}>
    <cylinderGeometry args={[0.05, 0.05, 3, 16]} />
    <meshBasicMaterial 
      color="#FFD700" 
      transparent 
      opacity={0.15} 
      depthWrite={false}
    />
  </mesh>
  
  {/* Üst nokta (firefly tarzı) */}
  <Sparkle position={[0, 1.6, 0]} count={5} scale={0.3} color="#FFD700" />
  
  {/* "E ile etkileşim" 3D yazı (yakında) */}
  {isClose && (
    <Billboard position={[0, 1.9, 0]}>
      <Text 
        font="/fonts/Geist-Variable.woff2"
        fontSize={0.08}
        color="#FFFFFF"
        outlineColor="#1B2545"
        outlineWidth={0.005}
      >
        [E] VAKA İNCELE
      </Text>
    </Billboard>
  )}
</group>
```

### Hotspot Erişilebilirlik İlkesi

Oyuncu hotspot'ları **kolayca bulabilmeli**. Bunun için:

- ✅ Sarı dikey ışık sütunu (her zaman görünür)
- ✅ Yere yansıyan halo
- ✅ Mini-map alternatifi: Pusula/HUD'da yön ipucu
- ✅ "X / 10 vaka çözüldü" sayacı her zaman ekranda
- ✅ Çözülmüş hotspot'lar yeşile döner ve sönükleşir

---

## 10. OYUNCU KONTROLLERİ (WEB + VR)

### 🖥️ Web (Desktop FPS)

```
HAREKET
═══════════════════════════════════════
W ─ Öne                    Mouse ─ Bakış (look)
A ─ Sola                   Sol Click ─ (kullanılmaz)
S ─ Geriye                 Sağ Click ─ (kullanılmaz)
D ─ Sağa                   E ─ Etkileşim
Shift ─ Hızlı yürü         ESC ─ Pause / Menü
Space ─ Eğil (crouch)
```

### Hareket Detayları

```typescript
// lib/hooks/useFPSControls.ts

const MOVEMENT = {
  walkSpeed: 1.4,          // m/s (gerçekçi)
  runSpeed: 2.6,           // m/s (shift)
  acceleration: 12,        // smooth start
  deceleration: 14,        // smooth stop
  
  // Mouse
  mouseSensitivity: 0.002,
  invertY: false,          // ayarlanabilir
  
  // Camera
  cameraHeight: 1.65,      // göz hizası (m)
  crouchHeight: 1.1,
  
  // Head bob
  bobAmplitude: 0.015,     // kafa salınımı
  bobFrequency: 8,         // hız
};

// Çarpışma detection
const COLLISION = {
  playerRadius: 0.3,       // bounding circle
  ambulanceWalls: BoxCollider[],  // ambulansın iç duvarları
  equipment: SphereCollider[]
};
```

### Mobile Web Fallback

```
Sol joystick (sanal) ─ Hareket
Sağ ekran sürükleme ─ Bakış
Sağ alt buton "E" ─ Etkileşim
```

### 🥽 Meta Quest 2 (WebXR)

```
SOL KONTROL                 SAĞ KONTROL
═══════════════════════════════════════
Joystick ─ Smooth move      Joystick ─ Snap turn (45°)
Trigger ─ (kullanılmaz)     Trigger ─ Etkileşim
Grip ─ Eğil                 Grip ─ Nesne tutma (gelecek)
A ─ Pause                   B ─ Sıfırla görüş
                            X ─ Menü                  
                            Y ─ Tutorial tekrar
```

### VR Konfor Ayarları

```typescript
// lib/store/settingsStore.ts

interface VRSettings {
  movementType: 'smooth' | 'teleport';     // default: smooth
  turnType: 'snap' | 'smooth';             // default: snap
  snapTurnDegrees: 30 | 45 | 60;           // default: 45
  vignetteOnMove: boolean;                  // motion sickness için
  comfortMode: boolean;                     // hız azalt + vignette
  controllerHandedness: 'right' | 'left';
}
```

### Quest 2 Tarayıcısından Giriş

Öğrenci Quest 2'sini takıp şu adımları izler:

```
1. Quest 2 → Browser'ı aç
2. URL: https://neorescue.fbu.edu.tr/  (veya verilen link)
3. "Meta Quest 2 ile Gir" butonuna bas
4. Browser VR izni ister → "İzin ver"
5. Otomatik immersive mode başlar
6. Kontrolleri kullanarak ambulansa gir
```

### Web ↔ VR Otomatik Algılama

```typescript
// lib/utils/deviceDetect.ts

export function detectPlatform(): 'desktop' | 'mobile' | 'vr-quest' | 'vr-other' {
  const ua = navigator.userAgent;
  
  if (ua.includes('OculusBrowser') || ua.includes('Quest')) {
    return 'vr-quest';
  }
  if ('xr' in navigator) {
    return navigator.xr.isSessionSupported('immersive-vr') 
      ? 'vr-other' 
      : 'desktop';
  }
  return /Mobi|Android/i.test(ua) ? 'mobile' : 'desktop';
}
```

---

## 11. SORU HAVUZU (10 PLACEHOLDER VAKA)

> **NOT**: Bu sorular *placeholder* niteliğindedir. Gerçek sorular kullanıcı tarafından sonradan sağlanacak ve buradakilerin yerine eklenecektir. Format hazır.

```typescript
// lib/data/questions.ts

export interface Question {
  id: number;
  hotspotEquipment: string;        // Hangi ekipmanın yanında
  category: string;
  scenario: string;                // Klinik vaka
  question: string;                // Soru
  options: { id: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctOptionId: 'A' | 'B' | 'C' | 'D';
  digit: string;                   // 0-9 arası, kapı kodunda yer alır
  explanation: string;             // Doğru cevap sonrası
  hintVideoUrl: string;            // Yanlış cevap sonrası video
  difficulty: 'kolay' | 'orta' | 'zor';
}

export const QUESTIONS: Question[] = [
  // ━━━━━━━━━━━━━ VAKA 1 ━━━━━━━━━━━━━
  {
    id: 1,
    hotspotEquipment: 'transport_incubator',
    category: 'Termoregülasyon',
    scenario: '34 haftalık prematür bir bebek doğum salonunda doğdu. Doğum ağırlığı 1850g. Bebek hipotonik ve siyanotik görünüyor. Ortam sıcaklığı 22°C.',
    question: 'Yenidoğan resüsitasyonunda termoregülasyon için ilk yapılacak işlem hangisidir?',
    options: [
      { id: 'A', text: 'Hemen entübe et' },
      { id: 'B', text: 'Bebeği kurula, ısıt ve plastik torbaya al (<32 hafta için)' },
      { id: 'C', text: 'Direkt göğüs masajına başla' },
      { id: 'D', text: 'IV sıvı resüsitasyonu başlat' }
    ],
    correctOptionId: 'B',
    digit: '7',
    explanation: 'NRP rehberine göre <32 hafta prematürlerde plastik örtü/torba kullanımı termoregülasyon için kritiktir. Kurutma + radyant ısıtıcı + ortam sıcaklığı 23-25°C hedeflenir.',
    hintVideoUrl: '/videos/hints/case-01-hint.mp4',
    difficulty: 'orta'
  },

  // ━━━━━━━━━━━━━ VAKA 2 ━━━━━━━━━━━━━
  {
    id: 2,
    hotspotEquipment: 'suction_device',
    category: 'Hava Yolu Açıklığı',
    scenario: 'Term yenidoğan, mekonyumlu amniyotik sıvı ile doğdu. Bebek ağlamıyor, kas tonusu zayıf, solunum çabası yetersiz.',
    question: 'Mekonyumlu amniyotik sıvı varlığında, depresif yenidoğanda ilk müdahale ne olmalıdır?',
    options: [
      { id: 'A', text: 'Rutin trakeal aspirasyon zorunludur' },
      { id: 'B', text: 'Pozitif basınçlı ventilasyona başla, gerekirse aspire et' },
      { id: 'C', text: 'Dakikalarca beklemek' },
      { id: 'D', text: 'Ağız ve burunu hiç aspire etme' }
    ],
    correctOptionId: 'B',
    digit: '3',
    explanation: '2015 sonrası NRP rehberi: Depresif yenidoğanda mekonyum varlığında rutin trakeal aspirasyon önerilmez. Standart resüsitasyon basamakları izlenir, ventilasyon önceliklidir.',
    hintVideoUrl: '/videos/hints/case-02-hint.mp4',
    difficulty: 'orta'
  },

  // ━━━━━━━━━━━━━ VAKA 3 ━━━━━━━━━━━━━
  {
    id: 3,
    hotspotEquipment: 'bvm_set',
    category: 'Pozitif Basınçlı Ventilasyon',
    scenario: 'Yenidoğan, ilk değerlendirme sonrası halen apneik. Kalp hızı 80/dk. PPV başlatılmasına karar verildi.',
    question: 'Term yenidoğanda PPV başlangıç ayarları nasıl olmalıdır?',
    options: [
      { id: 'A', text: 'Hız 30/dk, basınç 40-50 cmH₂O' },
      { id: 'B', text: 'Hız 40-60/dk, basınç 20-25 cmH₂O' },
      { id: 'C', text: 'Hız 100/dk, basınç 10 cmH₂O' },
      { id: 'D', text: 'Hız 20/dk, basınç 60 cmH₂O' }
    ],
    correctOptionId: 'B',
    digit: '1',
    explanation: 'PPV: Hız 40-60/dk, başlangıç basıncı term için 20-25 cmH₂O, prematür için 20-25 cmH₂O. Göğüs hareketi gözlenmeli, gerekirse basınç artırılır.',
    hintVideoUrl: '/videos/hints/case-03-hint.mp4',
    difficulty: 'orta'
  },

  // ━━━━━━━━━━━━━ VAKA 4 ━━━━━━━━━━━━━
  {
    id: 4,
    hotspotEquipment: 'pulse_oximeter',
    category: 'İlk Değerlendirme',
    scenario: 'Yenidoğan, 1. dakika değerlendirmesi: Cilt kısmen pembe, kalp hızı 110/dk, hafif yüz buruşturma, aktif ekstremite hareketi, zayıf ağlama.',
    question: 'Bu yenidoğanın 1. dakika APGAR skoru kaçtır?',
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '7' },
      { id: 'C', text: '9' },
      { id: 'D', text: '10' }
    ],
    correctOptionId: 'B',
    digit: '4',
    explanation: 'Renk: 1, KH: 2, Refleks (yüz buruşturma): 1, Tonus (aktif): 2, Solunum (zayıf ağlama): 1. Toplam: 7. Hafif depresyon var, izlem gerekli.',
    hintVideoUrl: '/videos/hints/case-04-hint.mp4',
    difficulty: 'kolay'
  },

  // ━━━━━━━━━━━━━ VAKA 5 ━━━━━━━━━━━━━
  {
    id: 5,
    hotspotEquipment: 'defibrillator',
    category: 'Kalp Masajı',
    scenario: 'Yenidoğan PPV ile 30 saniye etkili ventile edildi. Kalp hızı halen 50/dk. Cilt soluk.',
    question: 'Yenidoğanda göğüs kompresyonuna başlama endikasyonu nedir?',
    options: [
      { id: 'A', text: 'KH < 100/dk' },
      { id: 'B', text: 'KH < 80/dk' },
      { id: 'C', text: 'Etkili PPV\'ye rağmen 30 saniye sonunda KH < 60/dk' },
      { id: 'D', text: 'Doğum sonrası refleks olarak hemen başlanır' }
    ],
    correctOptionId: 'C',
    digit: '9',
    explanation: 'NRP: 30 saniye etkili PPV (göğüs kalkışı görülen) sonrası KH < 60/dk ise göğüs kompresyonuna başlanır. Bu hayat kurtarıcıdır.',
    hintVideoUrl: '/videos/hints/case-05-hint.mp4',
    difficulty: 'orta'
  },

  // ━━━━━━━━━━━━━ VAKA 6 ━━━━━━━━━━━━━
  {
    id: 6,
    hotspotEquipment: 'apgar_clock',
    category: 'Kompresyon-Ventilasyon Oranı',
    scenario: 'Göğüs kompresyonuna başlandı. Tek kurtarıcı durumda yenidoğan resüsitasyonu uygulanıyor.',
    question: 'Yenidoğan resüsitasyonunda kompresyon:ventilasyon oranı nedir?',
    options: [
      { id: 'A', text: '15:2' },
      { id: 'B', text: '30:2' },
      { id: 'C', text: '3:1 (90 kompresyon + 30 ventilasyon = 120/dk)' },
      { id: 'D', text: '5:1' }
    ],
    correctOptionId: 'C',
    digit: '2',
    explanation: 'Yenidoğanda kompresyon:ventilasyon oranı 3:1\'dir. Dakikada 90 kompresyon + 30 ventilasyon = toplam 120 olay/dk. Erişkinden farklı.',
    hintVideoUrl: '/videos/hints/case-06-hint.mp4',
    difficulty: 'kolay'
  },

  // ━━━━━━━━━━━━━ VAKA 7 ━━━━━━━━━━━━━
  {
    id: 7,
    hotspotEquipment: 'drug_cabinet',
    category: 'İlaç Uygulaması',
    scenario: 'Term yenidoğan (3.2 kg), 60 saniye etkili PPV + 30 saniye göğüs kompresyonu sonrası KH halen 40/dk.',
    question: 'Bu yenidoğan için epinefrin (1:10.000) IV dozajı nedir?',
    options: [
      { id: 'A', text: '0.01-0.03 mg/kg = 0.1-0.3 mL/kg IV' },
      { id: 'B', text: '0.1 mg/kg IV' },
      { id: 'C', text: '1 mg sabit doz IV' },
      { id: 'D', text: '0.5 mg/kg IM' }
    ],
    correctOptionId: 'A',
    digit: '5',
    explanation: 'Epinefrin yenidoğan dozu: 1:10.000 solüsyonda 0.01-0.03 mg/kg = 0.1-0.3 mL/kg IV (umbilikal venöz kateter ile). Endotrakeal yolda 0.05-0.1 mg/kg.',
    hintVideoUrl: '/videos/hints/case-07-hint.mp4',
    difficulty: 'zor'
  },

  // ━━━━━━━━━━━━━ VAKA 8 ━━━━━━━━━━━━━
  {
    id: 8,
    hotspotEquipment: 'umbilical_catheter',
    category: 'Volüm Genişletici',
    scenario: 'Term yenidoğan (3 kg), şok bulguları mevcut. Cilt soluk, nabız zayıf, kapiller geri dolum > 3 saniye. Hipovolemi şüphesi.',
    question: 'Hipovolemiye yönelik volüm genişletici dozu nedir?',
    options: [
      { id: 'A', text: '5 mL/kg %5 dekstroz IV bolus' },
      { id: 'B', text: '10 mL/kg %0.9 NaCl veya kan, 5-10 dk içinde IV' },
      { id: 'C', text: '20 mL/kg %0.9 NaCl, hızla IV puşe' },
      { id: 'D', text: '50 mL/kg ringer laktat IV' }
    ],
    correctOptionId: 'B',
    digit: '8',
    explanation: 'Volüm genişletici: %0.9 NaCl veya O Rh(-) eritrosit süspansiyonu, 10 mL/kg, 5-10 dakika içinde IV. Tekrarlanabilir.',
    hintVideoUrl: '/videos/hints/case-08-hint.mp4',
    difficulty: 'orta'
  },

  // ━━━━━━━━━━━━━ VAKA 9 ━━━━━━━━━━━━━
  {
    id: 9,
    hotspotEquipment: 'laryngoscope',
    category: 'İleri Hava Yolu',
    scenario: 'Term yenidoğan (3.5 kg), uzun süreli PPV gereksinimi mevcut. Endotrakeal entübasyon kararı alındı.',
    question: 'Bu term yenidoğan için uygun ETT çapı ve laringoskop bleyti hangisidir?',
    options: [
      { id: 'A', text: 'ETT 2.5 mm + Miller 0' },
      { id: 'B', text: 'ETT 3.5 mm + Miller 1' },
      { id: 'C', text: 'ETT 4.5 mm + Macintosh 2' },
      { id: 'D', text: 'ETT 5.0 mm + Miller 2' }
    ],
    correctOptionId: 'B',
    digit: '6',
    explanation: 'Term yenidoğan (>3 kg): ETT iç çapı 3.5 mm, Miller 1 düz bleyt. <1 kg için 2.5, 1-2 kg için 3.0, 2-3 kg için 3.5 mm. Tüp derinliği: kilo+6 cm.',
    hintVideoUrl: '/videos/hints/case-09-hint.mp4',
    difficulty: 'zor'
  },

  // ━━━━━━━━━━━━━ VAKA 10 ━━━━━━━━━━━━━
  {
    id: 10,
    hotspotEquipment: 'emergency_kit',
    category: 'Post-Resüsitasyon Bakım',
    scenario: 'Başarılı resüsitasyon sonrası yenidoğan stabilize oldu. KH 140/dk, SpO₂ %92, term ve gestasyonel yaş ≥36 hafta. Ensefalopati bulguları mevcut.',
    question: 'Hipoksik-iskemik ensefalopati riski olan term yenidoğanda nörolojik koruma için ne yapılmalıdır?',
    options: [
      { id: 'A', text: 'Hipertermi ve hızla normotermi sağlamak' },
      { id: 'B', text: 'Terapötik hipotermi (33-34°C, 72 saat)' },
      { id: 'C', text: 'Hiç ısıtmamak, oda sıcaklığında bırakmak' },
      { id: 'D', text: 'Yüksek doz steroid başlamak' }
    ],
    correctOptionId: 'B',
    digit: '0',
    explanation: 'Orta-ağır HIE\'de term/near-term yenidoğanda terapötik hipotermi (33-34°C, 72 saat) standart bakımdır. İlk 6 saat içinde başlanmalı, yenidoğan yoğun bakımda uygulanır.',
    hintVideoUrl: '/videos/hints/case-10-hint.mp4',
    difficulty: 'zor'
  }
];

// 10 sorudan oluşan kapı kodu örneği (sıralı):
// 7-3-1-4-9-2-5-8-6-0  →  KAPI KODU: 7314925860
// Sıra: oyuncunun sorulara çözdüğü sırayla değil,
//       soru ID'sine göre sabit. (1, 2, 3, ..., 10)
```

### Soru Tetikleme Akışı

```
Oyuncu hotspot'a yaklaşır (≤1.5m)
    ▼
"E" basar (web) / Trigger çeker (VR)
    ▼
Ekran cinematic blur'a geçer (filmsi)
    ▼
QuestionModal açılır:
├── Sol: Klinik senaryo (vaka açıklaması)
├── Sağ: Soru + 4 seçenek
└── Alt: Vaka kategorisi + zorluk
    ▼
Oyuncu seçer
    ├── DOĞRU
    │   ├── Yeşil glow + chime sesi
    │   ├── "+ Kod parçası kazandın: 7" animasyonu
    │   ├── HUD'daki kod slot'u dolar
    │   ├── Hotspot yeşile döner (çözüldü)
    │   └── Modal kapanır, oyuncu serbest
    │
    └── YANLIŞ
        ├── Kırmızı flash + buzzer + screen shake
        ├── "Tekrar dene, bu konuyu hatırlayalım"
        ├── HintVideoPlayer otomatik açılır
        ├── Video bittikten sonra aynı soru tekrar
        ├── error_count++
        └── Süre durdurulmuyor (önemli!)
```

---

## 12. KAPI KODU SİSTEMİ

### Mantık

```
10 SORU = 10 RAKAM = 10 HANELİ KOD

Her doğru cevap → o sorunun digit'i toplanır
Sıralama: Soru ID'sine göre (1→10)

Örnek:
Soru 1 cevap: 7
Soru 2 cevap: 3  
Soru 3 cevap: 1
...
Soru 10 cevap: 0

KAPI KODU: 7 3 1 4 9 2 5 8 6 0
```

### HUD'da Kod Gösterimi

```
┌──────────────────────────────────────────┐
│  KOD PARÇALARI                           │
│  ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐│
│  │7│ │3│ │1│ │_│ │_│ │_│ │_│ │_│ │_│ │_││
│  └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘│
│   1   2   3   4   5   6   7   8   9   10 │
└──────────────────────────────────────────┘
```

- Boş slot'lar: Karanlık çerçeve
- Dolu slot'lar: FBÜ sarısı, hafif glow, slide-in animasyon
- Hover'da slot tooltip: "Vaka 1 — Termoregülasyon"

### Kapı Keypad UI (Modal)

```
┌──────────────────────────────────────────┐
│      ✶ ACİL DURUM KİLİT KONTROLÜ ✶       │
│                                          │
│      ┌──────────────────────────┐        │
│      │  _ _ _ _ _ _ _ _ _ _    │        │
│      └──────────────────────────┘        │
│                                          │
│           ┌───┐ ┌───┐ ┌───┐              │
│           │ 1 │ │ 2 │ │ 3 │              │
│           ├───┤ ├───┤ ├───┤              │
│           │ 4 │ │ 5 │ │ 6 │              │
│           ├───┤ ├───┤ ├───┤              │
│           │ 7 │ │ 8 │ │ 9 │              │
│           ├───┤ ├───┤ ├───┤              │
│           │ ← │ │ 0 │ │ ✓ │              │
│           └───┘ └───┘ └───┘              │
│                                          │
│       ⚠️ 3 deneme hakkı kaldı              │
└──────────────────────────────────────────┘
```

- Her tuş klik sesi (mekanik)
- Yanlış kod: Kırmızı flash + buzzer + 3 deneme limiti
- Doğru kod: Yeşil onay + sinematik kapı açılışı

### Kapı Açılış Sinematiği

```
1. Keypad doğru kod → 1 saniye yeşil hold
2. Kapı kilit motoru sesi (servomotor click)
3. Kamera otomatik kapıya doğru yumuşak pan
4. Kapı animasyonu: Yavaş açılış (3 saniye)
5. Dış aydınlık doldurur (parlak overexposed beyaz)
6. Bloom efekti maksimuma çıkar
7. Cinematic outro müziği başlar
8. Fade to white → Sonuç ekranına geçiş
```

---

## 13. PREMIUM UI EKRANLARI

### 13.1 — Landing / Açılış Ekranı

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [FBU LOGO — sol üst, küçük]                                 │
│                                                              │
│                                                              │
│              ┌─────────────────────────┐                     │
│              │                         │                     │
│              │      N E O R E S C U E  │                     │
│              │                         │                     │
│              │   Kilitli Ambulans      │                     │
│              │   Yenidoğan Resüsitasyonu                     │
│              │                         │                     │
│              │   ──────────────────    │                     │
│              │                         │                     │
│              │       [  BAŞLA  ]       │                     │
│              │                         │                     │
│              │   Lider Tablosu →       │                     │
│              └─────────────────────────┘                     │
│                                                              │
│                                                              │
│  Fenerbahçe Üniversitesi Tıp Fakültesi  •  v1.0              │
└──────────────────────────────────────────────────────────────┘

Arka plan: Loop video (ambulansın iç döngüsü, soft fokus)
Üstüne: Hafif vignette + film grain
Animasyon: Logo fade-in, başlık typewriter, butonlar yumuşak slide-up
```

### 13.2 — Hikaye Intro

```
Karanlık ekran. Sadece typewriter metin akıyor.

> Saat 03:47.
> İstanbul. Fenerbahçe Üniversitesi Tıp Fakültesi.
>
> Yenidoğan rotasyonun son gecesi.
> Profesörün, bahçedeki eğitim ambulansına seni alıyor.
>
> "İçeri gir, doktor."
>
> Kapı kapanıyor. Klik. Kilit devreye giriyor.
>
> Önünde 10 vaka var. Her doğru cevap, bir rakam.
> 10 rakam, kapıyı açacak kod.
>
> Saat işliyor. Her hata, geri sayımı uzatıyor.
>
> Hazır mısın?

[ DEVAM ET ]      [ ATLA → ]

Ses: Hafif kalp atışı + uzaktaki ambulans sireni
Geçiş: Fade to next screen
```

### 13.3 — İsim Giriş

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│                                                              │
│                  Adın doktor?                                │
│                                                              │
│      ┌────────────────────────────────────────┐              │
│      │  Dr.  ___________________________      │              │
│      └────────────────────────────────────────┘              │
│                                                              │
│                                                              │
│      Platform:                                               │
│      ┌─────────────┐    ┌─────────────┐                      │
│      │  🖥️         │    │  🥽         │                      │
│      │   Web       │    │ Quest 2     │                      │
│      │   FPS       │    │   VR        │                      │
│      └─────────────┘    └─────────────┘                      │
│                                                              │
│                                                              │
│              [ AMBULANSA GİR → ]                             │
│                                                              │
└──────────────────────────────────────────────────────────────┘

- Input minimum 2, maksimum 30 karakter, harf+rakam
- Platform otomatik algılanır, kullanıcı override edebilir
- "AMBULANSA GİR" hover'da glow yapar, click'te door open ses
```

### 13.4 — Tutorial Overlay

```
3D sahne yüklendi, oyuncu hareket edemiyor (frozen)
Üstüne semi-transparent overlay:

┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                  KONTROLLER                                  │
│                                                              │
│   ┌─────────┐                                                │
│   │ W A S D │   Hareket et                                   │
│   └─────────┘                                                │
│                                                              │
│   🖱️ Mouse      Etrafına bak                                 │
│                                                              │
│   ⌨️ Shift      Hızlı yürü                                   │
│                                                              │
│   ⌨️ E          Etkileşim (vaka aç, kapı kontrol)            │
│                                                              │
│   ⌨️ ESC        Menü                                         │
│                                                              │
│                                                              │
│   📍 İPUCU: Sarı ışıkları takip et — sorular oradadır.        │
│                                                              │
│              [ ANLADIM, BAŞLA ]                              │
│                                                              │
└──────────────────────────────────────────────────────────────┘

VR'da: Kontrol diyagramı 3D olarak göz önünde uçar
```

### 13.5 — In-Game HUD

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ⏱️ 03:42   3/10 VAKA                              ✕ HATA: 1  │
│                                                              │
│                                                              │
│                                                              │
│                                                              │
│                       [ + ] crosshair                        │
│                                                              │
│                                                              │
│                                                              │
│                                                              │
│   KOD PARÇALARI:                                             │
│   ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐                    │
│   │7│ │3│ │1│ │·│ │·│ │·│ │·│ │·│ │·│ │·│                    │
│   └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘                    │
└──────────────────────────────────────────────────────────────┘

- HUD opaklığı: %85 (saydam ama okunaklı)
- Tipografi: JetBrains Mono (monospace) + ince ışıklı sarı
- Hotspot yakınlığında: Alt orta'da "[ E ] VAKA İNCELE" prompt
```

### 13.6 — Soru Modal'ı

```
Oyun blur'a geçer. Modal cinematicly açılır:

┌──────────────────────────────────────────────────────────────┐
│  ✕                                                           │
│                                                              │
│  VAKA 03 / 10                          KATEGORİ: VENTİLASYON │
│  ─────────────────────────────────────────────────────────   │
│                                                              │
│  📋 KLİNİK SENARYO                                           │
│                                                              │
│  Yenidoğan, ilk değerlendirme sonrası halen apneik. Kalp     │
│  hızı 80/dk. PPV başlatılmasına karar verildi.               │
│                                                              │
│  ─────────────────────────────────────────────────────────   │
│                                                              │
│  ❓ Term yenidoğanda PPV başlangıç ayarları nasıl olmalıdır? │
│                                                              │
│   ┌──────────────────────────────────────────────────────┐   │
│   │ A   Hız 30/dk, basınç 40-50 cmH₂O                    │   │
│   └──────────────────────────────────────────────────────┘   │
│   ┌──────────────────────────────────────────────────────┐   │
│   │ B   Hız 40-60/dk, basınç 20-25 cmH₂O                 │   │
│   └──────────────────────────────────────────────────────┘   │
│   ┌──────────────────────────────────────────────────────┐   │
│   │ C   Hız 100/dk, basınç 10 cmH₂O                      │   │
│   └──────────────────────────────────────────────────────┘   │
│   ┌──────────────────────────────────────────────────────┐   │
│   │ D   Hız 20/dk, basınç 60 cmH₂O                       │   │
│   └──────────────────────────────────────────────────────┘   │
│                                                              │
│                                            ⏱️ Bu soru: 00:23 │
└──────────────────────────────────────────────────────────────┘

- Glass morphism panel (blur arka plan)
- Cinematic dark gradient
- Seçenekler hover'da hafif sarı glow
- Klavye: 1-2-3-4 ile de seçilebilir
- ESC ile geri çık (cevap kaydedilmez)
```

### 13.7 — Doğru Cevap Feedback

```
Modal yeşil glow ile parlar
Ses: Yumuşak chime (success)

┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                          ✓                                   │
│                                                              │
│                  D O Ğ R U   C E V A P                       │
│                                                              │
│                                                              │
│              ┌─────────────────────────┐                     │
│              │   KOD PARÇASI KAZANIN    │                    │
│              │                          │                    │
│              │           1              │                    │
│              │                          │                    │
│              └─────────────────────────┘                     │
│                                                              │
│                                                              │
│   PPV: Hız 40-60/dk, başlangıç basıncı term için             │
│   20-25 cmH₂O. Göğüs hareketi gözlenmeli.                    │
│                                                              │
│                  [ DEVAM → ]                                 │
└──────────────────────────────────────────────────────────────┘

3 saniye otomatik kapanma, oyuncu hızlanmak isterse "DEVAM"
```

### 13.8 — Yanlış Cevap & Hint Video

```
Ekran kırmızı flash, screen shake (2 frame)
Ses: Düşük buzzer

┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                          ✕                                   │
│                                                              │
│                  Y A N L I Ş                                 │
│                                                              │
│      Endişelenme, şu videoda doğru yaklaşımı izleyelim.      │
│                                                              │
│      ┌───────────────────────────────────────────────┐       │
│      │  📺 HATIRLATMA VİDEOSU                          │      │
│      │                                                │       │
│      │                                                │       │
│      │           ▶  Video oynatılıyor...              │       │
│      │                                                │       │
│      │                                                │       │
│      │                                    01:23/02:45 │      │
│      └───────────────────────────────────────────────┘       │
│                                                              │
│                                                              │
│              Video bitince soru tekrar sorulacak             │
└──────────────────────────────────────────────────────────────┘

Video skip edilemez (öğrenme amaçlı)
Video bitince → Soru modal'ı tekrar açılır
```

### 13.9 — Sonuç Ekranı

```
Beyaza fade'den çıktıktan sonra:

┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                    ✶  TEBRİKLER  ✶                          │
│                                                              │
│                  D R .  K U T L U H A N G I L                │
│                                                              │
│         Yenidoğan resüsitasyonunda ustalığını kanıtladın.    │
│                                                              │
│                                                              │
│   ┌──────────────────────────────────────────────────┐       │
│   │                                                  │       │
│   │   ⏱️ TOPLAM SÜRE          18:42                   │      │
│   │                                                  │       │
│   │   ✓ DOĞRU CEVAP            8 / 10                │       │
│   │                                                  │       │
│   │   ✕ HATA SAYISI            3                     │       │
│   │                                                  │       │
│   │   📊 SIRALAMA              # 12 / 47              │      │
│   │                                                  │       │
│   │   🏆 SKOR                  724 puan               │      │
│   │                                                  │       │
│   └──────────────────────────────────────────────────┘       │
│                                                              │
│                                                              │
│         [ LİDER TABLOSU ]    [ TEKRAR OYNA ]                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘

Arka plan: Yumuşak sarı parçacıklar (FBÜ sarısı confetti)
Müzik: Cinematic outro theme
```

### 13.10 — Lider Tablosu

```
┌──────────────────────────────────────────────────────────────┐
│   ←                                              📥 CSV İndir │
│                                                              │
│                       LİDER TABLOSU                          │
│            Fenerbahçe Üniversitesi Tıp Fakültesi             │
│                                                              │
│  ─────────────────────────────────────────────────────────   │
│                                                              │
│  🥇  1.  Dr. Ayşe Kaya          10/10   12:34   1240 puan    │
│  🥈  2.  Dr. Mehmet Yılmaz      10/10   13:02   1198 puan    │
│  🥉  3.  Dr. Zeynep Demir        9/10   11:45   1124 puan    │
│      4.  Dr. Ahmet Çelik         9/10   14:20   1056 puan    │
│      5.  Dr. Fatma Şahin         9/10   15:18    998 puan    │
│      ...                                                     │
│                                                              │
│  ▶  12.  Dr. Kutluhangil         8/10   18:42    724 puan ◀  │ ← highlight
│                                                              │
│      ...                                                     │
│      47. Dr. Ali Veli             3/10   25:11    142 puan   │
│                                                              │
└──────────────────────────────────────────────────────────────┘

- Top 3 özel altın/gümüş/bronz badge
- Mevcut oyuncu satırı sarı highlight + ok işaretleri
- Tablo sıralaması: Önce doğru sayısı, sonra süre (az olan üstte)
- "CSV İndir" → Excel'de açılabilir öğretmen raporu
- Tabloyu temizleme butonu (admin için, gizli)
```

---

## 14. TASARIM SİSTEMİ (FBÜ TEMALI)

### 14.1 — Renk Paleti

```css
:root {
  /* === PRİMARY (Fenerbahçe Üniversitesi inspired) === */
  --fbu-navy:        #1B2545;     /* Lacivert (ana) */
  --fbu-navy-deep:   #0F1730;     /* Derin lacivert */
  --fbu-yellow:      #FFD700;     /* Sarı (aksent) */
  --fbu-yellow-warm: #FFC72C;     /* Sıcak sarı */
  
  /* === BACKGROUND === */
  --bg-primary:      #0A0E1A;     /* Ambulans gece */
  --bg-secondary:    #0F141F;     /* Panel */
  --bg-tertiary:     #161C2A;     /* Card */
  --bg-glass:        rgba(15, 20, 31, 0.7);
  
  /* === TEXT === */
  --text-primary:    #F5F7FA;     /* Beyaz */
  --text-secondary:  #B8C0D0;     /* Açık gri */
  --text-tertiary:   #6B7488;     /* Soluk gri */
  --text-accent:     #FFD700;     /* Vurgu */
  
  /* === SEMANTIK === */
  --success:         #00E676;     /* Doğru */
  --success-glow:    rgba(0, 230, 118, 0.4);
  --error:           #FF1744;     /* Yanlış */
  --error-glow:      rgba(255, 23, 68, 0.4);
  --warning:         #FFA726;     /* Uyarı */
  --info:            #4FC3F7;     /* Bilgi */
  
  /* === MEDIKAL === */
  --medical-green:   #00FF88;     /* Monitör yeşili */
  --medical-blue:    #00BFFF;     /* SpO₂ */
  --medical-red:     #FF2D2D;     /* Critical */
  
  /* === BORDER & STROKE === */
  --border-subtle:   rgba(255, 215, 0, 0.08);
  --border-medium:   rgba(255, 215, 0, 0.25);
  --border-strong:   rgba(255, 215, 0, 0.6);
  
  /* === SHADOWS === */
  --shadow-glow-yellow: 0 0 24px rgba(255, 215, 0, 0.3);
  --shadow-glow-green:  0 0 24px rgba(0, 230, 118, 0.3);
  --shadow-card:        0 8px 32px rgba(0, 0, 0, 0.6);
  --shadow-modal:       0 24px 64px rgba(0, 0, 0, 0.8);
  
  /* === SPACING === */
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  40px;
  --space-2xl: 64px;
}
```

### 14.2 — Tipografi

```css
/* Display — Başlıklar, vurgu */
@font-face {
  font-family: 'Geist';
  src: url('/fonts/Geist-Variable.woff2') format('woff2-variations');
  font-weight: 100 900;
}

/* Body — UI metinleri */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Variable.woff2') format('woff2-variations');
  font-weight: 100 900;
}

/* Mono — HUD, kod, sayılar */
@font-face {
  font-family: 'JetBrains Mono';
  src: url('/fonts/JetBrainsMono-Variable.woff2') format('woff2-variations');
  font-weight: 100 800;
}

:root {
  --font-display: 'Geist', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Geist Mono', monospace;
}

/* Type scale */
.text-hero      { font-family: var(--font-display); font-size: clamp(3rem, 6vw, 5rem); font-weight: 800; letter-spacing: -0.04em; }
.text-display   { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; letter-spacing: -0.03em; }
.text-h1        { font-family: var(--font-display); font-size: 2rem; font-weight: 600; letter-spacing: -0.02em; }
.text-h2        { font-family: var(--font-display); font-size: 1.5rem; font-weight: 600; letter-spacing: -0.01em; }
.text-body      { font-family: var(--font-body); font-size: 1rem; font-weight: 400; line-height: 1.6; }
.text-mono      { font-family: var(--font-mono); font-size: 0.875rem; font-weight: 500; }
.text-mono-hud  { font-family: var(--font-mono); font-size: 1.125rem; font-weight: 600; letter-spacing: 0.05em; }
```

### 14.3 — Bileşen Stilleri

```css
/* === GLASS PANEL === */
.glass-panel {
  background: var(--bg-glass);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  box-shadow: var(--shadow-card);
}

/* === PREMIUM BUTTON === */
.btn-primary {
  background: linear-gradient(135deg, var(--fbu-yellow) 0%, var(--fbu-yellow-warm) 100%);
  color: var(--fbu-navy-deep);
  font-family: var(--font-display);
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 12px;
  letter-spacing: 0.02em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(255, 215, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 215, 0, 0.4), var(--shadow-glow-yellow);
}

/* === HUD CODE SLOT === */
.code-slot {
  width: 40px;
  height: 56px;
  border: 1px solid var(--border-medium);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-tertiary);
}

.code-slot.filled {
  border-color: var(--fbu-yellow);
  color: var(--fbu-yellow);
  box-shadow: var(--shadow-glow-yellow);
  animation: codeFillPulse 0.6s ease-out;
}

/* === HOTSPOT GLOW === */
.hotspot-vertical-pillar {
  /* Three.js'de mesh, CSS kavram için referans */
  /* Yumuşak yukarı doğru ışık sütunu */
}
```

### 14.4 — Logo Entegrasyonu

```
FENERBAHÇE ÜNİVERSİTESİ LOGO
├── Pozisyon: Sol üst (oyun dışı ekranlarda)
├── Boyut: 48px height
├── Renk: Tek renk beyaz veya tam logo
├── Animasyon: Sayfa girişlerinde 0→1 fade-in (400ms)
├── Hover: Hafif glow (subtle)
└── Link: fbu.edu.tr (yeni sekme)

OYUN İÇİNDE
├── HUD'da görünmez (oyun deneyimini bozmaz)
├── Pause menüde alt orta
└── Lider tablosunda büyük watermark (alt sağ)

3D SAHNEDE
└── Ambulans yan duvarına FBÜ etiketi/sticker (ince detay)
```

---

## 15. SES TASARIMI & ATMOSFER

### 15.1 — Ses Kategorileri ve Listesi

```
┌─ AMBIENT (sürekli, 3D pozisyonel) ────────────────────────────┐
│ • ambulance_idle.mp3   Motor + klima fonu (-24dB, loop)       │
│ • monitor_beep.mp3     Hasta monitörü beep (her 2sn, -30dB)   │
│ • hum_lights.mp3       Florasan vızıltısı (subtle)            │
│ • radio_chatter.mp3    Telsiz mırıldanması (uzakta, rare)     │
└───────────────────────────────────────────────────────────────┘

┌─ HAREKET ─────────────────────────────────────────────────────┐
│ • step_01-04.mp3       Ayak sesleri (4 varyasyon, randomize)   │
│ • sprint_breath.mp3    Hızlı yürürken nefes (subtle)          │
│ • cloth_movement.mp3   Önlük/kıyafet hareketi                 │
└───────────────────────────────────────────────────────────────┘

┌─ ETKİLEŞİM ───────────────────────────────────────────────────┐
│ • hotspot_hover.mp3    Soft chime (yakına gelince)            │
│ • interact_click.mp3   E basıldığında tık                     │
│ • ui_button.mp3        Buton tıklama                          │
│ • ui_hover.mp3         UI hover                               │
│ • modal_open.mp3       Modal açılma whoosh                    │
│ • modal_close.mp3      Modal kapama                           │
└───────────────────────────────────────────────────────────────┘

┌─ FEEDBACK ────────────────────────────────────────────────────┐
│ • correct_chime.mp3    Yumuşak başarı sesi (3 ton ascending)  │
│ • wrong_buzz.mp3       Düşük buzzer (rahatsız etmesin)        │
│ • code_collected.mp3   Rakam toplandığında (kristal sesi)     │
│ • error_warning.mp3    Hata sayacı arttığında                 │
└───────────────────────────────────────────────────────────────┘

┌─ KAPI / KİLİT ────────────────────────────────────────────────┐
│ • keypad_click.mp3     Her tuş basışı                         │
│ • lock_unlock.mp3      Kilit açılma servomotor sesi           │
│ • door_open_slow.mp3   Kapı açılış sinematik (3 sn)           │
│ • outside_ambience.mp3 Dış dünya ambient (gece şehri)         │
└───────────────────────────────────────────────────────────────┘

┌─ MÜZİK ───────────────────────────────────────────────────────┐
│ • intro_theme.mp3      Hikaye intro (45 sn, atmosferik)       │
│ • tension_loop.mp3     Oyun içi alt katman (loop, çok hafif)  │
│ • outro_theme.mp3      Sonuç ekranı (60 sn, sinematik)        │
│ • leaderboard_amb.mp3  Lider tablosu fon (ince)               │
└───────────────────────────────────────────────────────────────┘
```

### 15.2 — Ses Kaynakları (Royalty-Free)

- **Freesound.org** (Creative Commons)
- **Zapsplat** (ücretsiz hesap, kredi gerekli)
- **Mixkit** (ücretsiz)
- **Soundsnap** (premium ama kalite)
- **Pixabay Music** (ücretsiz, intro/outro)

### 15.3 — 3D Pozisyonel Ses

```typescript
// Howler 3D ile her ekipmana ses ataması
import { Howl, Howler } from 'howler';

const monitorBeep = new Howl({
  src: ['/sounds/ambient/monitor_beep.mp3'],
  volume: 0.15,
  loop: true,
  spatial: true,
  pos: [-1.05, 1.45, -0.4],     // Hasta monitörü konumu
  refDistance: 1,
  rolloffFactor: 2,
  distanceModel: 'inverse'
});

// Oyuncu hareket ettiğinde Howler.pos güncellenir
// Monitör'e yaklaştıkça ses yükselir
```

### 15.4 — Ses Akış Senaryosu

```
Oyun başlıyor:
  ↓
[intro_theme] başlar
[ambulance_idle] %0 → %100 (5 sn fade in)
  ↓
Tutorial bitiyor:
  ↓
[intro_theme] fade out
[tension_loop] başlar (-30dB, çok hafif)
  ↓
Hotspot'a yaklaşma:
  ↓
[hotspot_hover] tetiklenir (0.3 sn)
  ↓
"E" basılır:
  ↓
[interact_click] + [modal_open] (350ms)
  ↓
Doğru cevap:
  ↓
[correct_chime] + [code_collected] (1.2 sn)
  ↓
Yanlış cevap:
  ↓
[wrong_buzz] + screen shake
  ↓
10. doğru cevap kazanılınca:
  ↓
[tension_loop] sönmeye başlar
[lock_unlock] (1 sn)
  ↓
Kapıya yaklaş + keypad doğru:
  ↓
[door_open_slow] (3 sn)
[outside_ambience] yumuşak girer
  ↓
Sonuç ekranı:
  ↓
[outro_theme] çalar (60 sn)
```

---

## 16. AYDINLATMA & POST-PROCESSING

### 16.1 — Üç Katmanlı Aydınlatma

```
KATMAN 1 — AMBIENT (Genel)
├── HDR environment map (warehouse veya night-city preset)
├── Hemisphere light: gök=#1B2545, zemin=#0A0E1A, intensity=0.3
└── Tüm sahneye %15 baz aydınlatma

KATMAN 2 — PRIMARY (Tavan LED)
├── 4 adet RectAreaLight (tavan boyunca)
├── Renk: #FFF8E7 (sıcak beyaz)
├── Intensity: 8 (HDR scale)
├── Boyut: 2m x 0.3m her biri
└── Hafif flicker animasyonu (3% varyasyon)

KATMAN 3 — ACCENT (Ekipman aydınlatması)
├── Hasta monitörü emisyon (yeşil glow)
├── Hotspot'lar (sarı dikey ışık sütunları)
├── Defibrilatör hazır LED (kırmızı, statik)
├── İlaç dolabı backlight (mavi, soft)
└── Acil durum kelebek anahtarı (kırmızı, idle pulse)
```

### 16.2 — Post-Processing Pipeline

```typescript
// components/three/effects/PostProcessing.tsx

<EffectComposer multisampling={4}>
  {/* 1. Bloom — Parlak yerleri yumuşat */}
  <Bloom
    intensity={0.6}
    luminanceThreshold={0.85}
    luminanceSmoothing={0.4}
    mipmapBlur
  />
  
  {/* 2. SSAO — Gölge derinliği */}
  <SSAO
    samples={16}
    radius={0.3}
    intensity={20}
    luminanceInfluence={0.5}
  />
  
  {/* 3. ChromaticAberration — Hafif lens distortion */}
  <ChromaticAberration offset={[0.0008, 0.0008]} />
  
  {/* 4. Vignette — Köşe karartma */}
  <Vignette offset={0.3} darkness={0.6} eskil={false} />
  
  {/* 5. Noise — Film grain */}
  <Noise opacity={0.03} premultiply />
  
  {/* 6. ToneMapping — ACES Filmic */}
  <ToneMapping mode={ACESFilmicToneMapping} />
</EffectComposer>
```

### 16.3 — Atmosfer Katmanları

```
DUST PARTICLES (havada uçan toz)
├── 200 partikül, ambulans hacminde dağıtılmış
├── Yavaş aşağı doğru hareket + hafif sürüklenme
├── Boyut: 0.005-0.015 m (random)
├── Opaklık: 0.15-0.4
└── Sadece ışık sütunlarına denk geldiklerinde belirginleşir

VOLUMETRIC FOG (ince sis)
├── Düşük yoğunluk (density: 0.04)
├── Renk: #1B2545 (lacivert)
├── Aşağı katmanlarda daha yoğun
└── Işık sütunlarını volumetric yapar (god rays)

SCREEN FLICKER (tip TV bozulma — opsiyonel)
├── Hasta monitöründe rare (her 30sn'de 1)
├── 50ms süreli, %5 saturasyon kaybı
└── Atmosfer için, dikkat dağıtmaz
```

---

## 17. ANİMASYONLAR & SİNEMATİK ANLAR

### 17.1 — Mikro Animasyonlar (Daima Aktif)

```
KAFA SALINIMI (Head Bob)
├── Yürürken: 0.015m amplitude, 8Hz
├── Sprint'te: 0.025m, 12Hz
└── Durunca: 0.005m, 0.5Hz (nefes)

EKİPMAN SUBTLE
├── Monitör ekran flicker (%5)
├── İnküvatör fan dönmesi (sürekli)
├── İlaç dolabı LED breathing (2sn döngü)
└── Acil ışık idle pulse (3sn döngü)

HOTSPOT
├── Yere halo ring rotate (8sn/devir)
├── Dikey sütun breathe (2sn)
├── Sparkle pozisyon değişimi (random)
└── "E" prompt y-axis float (2sn)
```

### 17.2 — Geçiş Animasyonları

```
LANDING → STORY
├── 600ms cross-fade
├── BG video → siyah arka plan
└── Logo → metin

STORY → NAME
├── 400ms fade out
└── 600ms slide-up + fade in

NAME → TUTORIAL → GAME
├── 800ms fade to black
├── 1200ms 3D sahne yüklenmesi
├── Tutorial overlay 400ms fade-in
└── "Anladım" → 600ms fade-out, oyun başlar

GAME → RESULTS
├── Kapı açıldığında 1500ms beyaza fade
├── 3 saniye beyaz hold (cinematic)
├── 800ms beyazdan sonuç ekranına fade
└── İstatistikler tek tek count-up (1500ms)

RESULTS → LEADERBOARD
├── Slide-left 600ms
└── Mevcut oyuncu satırı 200ms gecikmeli highlight pulse
```

### 17.3 — Sinematik "Wow" Anlar

```
1️⃣ İLK GİRİŞ
   Kapı kapandığında kamera otomatik 90° döner
   (oyuncu ambulansın derinliklerine bakar)
   2 saniyelik kontrol kaybı + cinematic bar (üst+alt siyah şerit)

2️⃣ İLK DOĞRU CEVAP
   Kod parçası slot'u büyük scale-in
   Tüm HUD 200ms karartılır, sonra normal
   Hafif kamera shake (joy)

3️⃣ 5. DOĞRU CEVAP (Yarı yol)
   Ekran kenarlarında ince sarı parıltı
   "YARI YOL!" yazısı 1 saniye
   Tension loop müziği hafif yükselir

4️⃣ 10. DOĞRU CEVAP (Tüm kodlar tamamlandı)
   Tüm hotspot'lar yeşile döner
   Kapı keypad'i parlamaya başlar
   "KAPIYA GİT" ipucu sağ alt'ta 2 saniye flash
   Müzik dramatik küçük bir crescendo

5️⃣ KAPI AÇILIŞI
   Kamera otomatik kapıya pan (1.5 sn)
   Keypad doğru → 1 sn yeşil hold
   Servomotor sesi
   Kapı YAVAŞ açılır (3 sn)
   Dış ışık ambulansı doldurur (overexposed)
   Müzik patlama
   1.5 sn beyaza fade
   Sonuç ekranı

6️⃣ SONUÇ EKRANI
   "TEBRİKLER" tek tek harf reveal (200ms gap)
   İsim italik fade-in
   İstatistikler count-up (her satır 500ms gecikmeli)
   Sıralama "drum roll" stili (rakamlar shuffle eder, durur)
   Confetti FBÜ sarısı (subtle)
```

---

## 18. LOCALSTORAGE ŞEMASI

```typescript
// lib/store/leaderboardStore.ts

interface LeaderboardEntry {
  id: string;                  // UUID v4
  playerName: string;          // "Dr. Kutluhangil"
  platform: 'web' | 'vr';
  
  // Performans
  correctAnswers: number;       // 0-10
  totalErrors: number;
  totalDurationSec: number;     // Saniye
  
  // Detay
  perQuestionTime: number[];    // Her soru için süre
  perQuestionAttempts: number[]; // Her soru için deneme sayısı
  
  // Hesaplanmış skor
  score: number;                // 0-1500 arası
  rank: 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
  
  // Meta
  completedAt: string;          // ISO datetime
  doorCode: string;             // "7314925860"
}

// Zustand persist ile localStorage'a otomatik
const useLeaderboardStore = create(
  persist<LeaderboardState>(
    (set) => ({
      entries: [],
      addEntry: (entry) => set(state => ({
        entries: [...state.entries, entry]
          .sort(sortByPerformance)
          .slice(0, 200)         // Max 200 kayıt
      })),
      clearAll: () => set({ entries: [] })
    }),
    {
      name: 'neorescue-leaderboard',  // localStorage key
      version: 1
    }
  )
);
```

### LocalStorage Anahtarları

```
neorescue-leaderboard           Lider tablosu (en kritik)
neorescue-current-session       Aktif oyun (refresh dayanıklılık)
neorescue-settings              VR/ses ayarları
neorescue-tutorial-seen         Tutorial gösterilsin mi
```

### Veri Boyut Tahmini

```
1 oyuncu kaydı   ≈ 800 byte
200 oyuncu       ≈ 160 KB     (LocalStorage 5MB limit içinde rahat)
```

### Skor Hesaplama Formülü

```typescript
function calculateScore(entry: LeaderboardEntry): number {
  const BASE = 100;
  
  // Her doğru cevap: +100 puan
  const correctScore = entry.correctAnswers * BASE;
  
  // Hız bonusu: 30sn altı her saniye için +2 puan
  const avgTime = entry.totalDurationSec / entry.correctAnswers;
  const speedBonus = avgTime < 30 ? (30 - avgTime) * 2 : 0;
  
  // Hata cezası: Her hata -10 puan
  const errorPenalty = entry.totalErrors * 10;
  
  // İlk denemede tüm doğrular: +200 bonus
  const firstTryBonus = entry.totalErrors === 0 && entry.correctAnswers === 10 
    ? 200 
    : 0;
  
  return Math.max(0, correctScore + speedBonus - errorPenalty + firstTryBonus);
}

// Rank
function getRank(score: number): string {
  if (score >= 1300) return 'S';
  if (score >= 1100) return 'A';
  if (score >= 900)  return 'B';
  if (score >= 700)  return 'C';
  if (score >= 500)  return 'D';
  return 'F';
}
```

---

## 19. LİDER TABLOSU SİSTEMİ

### 19.1 — Sıralama Kuralları

```
1. Önce: Doğru cevap sayısı (yüksekten düşüğe)
2. Sonra: Toplam süre (kısa olan yukarı)
3. Eşit süre: Hata sayısı (az olan yukarı)
4. En son: Tarih (yeni olan yukarı)
```

### 19.2 — CSV Export Formatı

```csv
Sıra,Doktor Adı,Doğru,Hata,Süre,Skor,Tarih
1,Dr. Ayşe Kaya,10,0,12:34,1240,2026-04-28T14:32:00Z
2,Dr. Mehmet Yılmaz,10,1,13:02,1198,2026-04-28T15:01:00Z
3,Dr. Zeynep Demir,9,2,11:45,1124,2026-04-28T15:48:00Z
```

### 19.3 — Hoca Modu (Gizli Kısayol)

```
Lider tablosu sayfasında Ctrl+Shift+R
   ↓
Şifre soran modal: "fbu-tip-2026"
   ↓
Doğru → Şu seçenekler:
  ├── Tüm verileri sıfırla
  ├── Tek oyuncu sil
  ├── Top N filtrele
  └── Detaylı analitik (her sorudaki başarı %)
```

---

## 20. PERFORMANS OPTİMİZASYONU

### 20.1 — Quest 2 Hedefleri

```
TARGET FPS:        72 (sabit)
PIXEL DENSITY:     1.0 (Quest 2 native)
DRAW CALLS:        < 100
TRIANGLES:         < 250.000 (sahne toplamı)
TEXTURE MEMORY:    < 256 MB
INITIAL LOAD:      < 8 saniye
```

### 20.2 — Optimizasyon Teknikleri

```
3D MODELLER
├── Draco compression (.glb)
├── KTX2 / Basis texture compression
├── LOD (3 seviye)
├── Instance mesh (tekrar eden parçalar)
├── Frustum culling (drei default)
└── Occlusion culling (manual)

TEXTURES
├── 2K max (yakın objeler)
├── 1K standart
├── 512 dekoratif
├── Mipmaps zorunlu
└── Texture atlas (UI ikonları)

SHADERS
├── PBR materyal sayısı kısıtlı (<10 unique)
├── Material reuse
└── Shader compile cache

JAVASCRIPT
├── Code splitting (Next.js dynamic import)
├── Tree shaking
├── Three.js bundle: tree-shaken (sadece kullanılan)
└── React.memo + useMemo agressive

ASSET LOADING
├── Critical path: Landing/UI önce
├── 3D modeller paralel preload
├── Suspense + Fallback (loading screen)
└── Service Worker (offline play)
```

### 20.3 — Mobile Web Fallback

```typescript
// lib/utils/deviceDetect.ts
const isLowEnd = navigator.hardwareConcurrency < 4 || 
                 navigator.deviceMemory < 4;

if (isLowEnd) {
  // Disable: Bloom, SSAO, ChromaticAberration
  // Reduce: Particle count, light count
  // Use: Lower res textures
}
```

---

## 21. ASSET LİSTESİ & KAYNAKLAR

### 21.1 — 3D Modeller

| Asset | Kaynak Önerileri |
|---|---|
| Ambulans iç gövdesi | **Sketchfab** (CC license), **TurboSquid**, custom Blender |
| Hasta monitörü | **CGTrader** "Patient Monitor", Sketchfab |
| Defibrilatör (AED) | Sketchfab "Defibrillator" |
| Tıbbi ekipman setleri | **Quaternius** (free), **Kenney.nl** |
| Sedye | TurboSquid, free 3D models |
| Şırınga, ilaç ampulleri | Custom Blender (basit modeller) |
| İlaç dolabı (cam) | Custom |

### 21.2 — Textures

| Asset | Kaynak |
|---|---|
| PBR metal panel | **AmbientCG** (CC0), **Poly Haven** |
| Kauçuk zemin | Poly Haven |
| Cam/akrilik | Custom + IOR shaders |
| HDR environment | **Poly Haven** "warehouse_indoor", "studio_small" |

### 21.3 — Sesler

| Kategori | Kaynak |
|---|---|
| Ambient | Freesound.org, Zapsplat |
| UI sesleri | Mixkit, Pixabay |
| Müzik | **Pixabay Music**, Bensound (CC) |
| Tıbbi cihaz sesleri | Custom synthesis (tone generator) |

### 21.4 — Fontlar

```
Geist (variable)        — Vercel, free
Inter (variable)        — Rasmus Andersson, OFL
JetBrains Mono          — JetBrains, OFL
```

### 21.5 — Ikonlar

```
lucide-react            — Ana icon set
custom SVG              — FBÜ logo, ambulans silueti
```

---

## 22. KURULUM & DEPLOYMENT

### 22.1 — Geliştirme Ortamı

```bash
# Node 20+ gerekli
node --version  # v20.x

# Projeyi başlat
npx create-next-app@latest neorescue --typescript --tailwind --app --no-src-dir
cd neorescue

# Bağımlılıklar
pnpm add three @react-three/fiber @react-three/drei @react-three/xr \
  @react-three/postprocessing three-stdlib \
  framer-motion zustand howler localforage \
  lucide-react react-typed clsx tailwind-merge

pnpm add -D @types/three @types/howler

# Çalıştır
pnpm dev
# → http://localhost:3000

# Quest 2 lokal test (HTTPS gerekli)
npx ngrok http 3000
# Quest 2'de: https://xxx.ngrok.io
```

### 22.2 — Build & Export

```bash
# Static export
pnpm build

# Çıktı: /out klasörü
# Bu klasör herhangi bir static host'a yüklenebilir
```

```javascript
// next.config.js
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['three', 'lucide-react']
  }
};
```

### 22.3 — Deployment Seçenekleri

```
SEÇENEK 1 — VERCEL (önerilir)
├── git push → otomatik deploy
├── HTTPS otomatik
├── CDN
└── Custom domain: neorescue.fbu.edu.tr

SEÇENEK 2 — NETLIFY
├── Drag-drop /out klasörü
└── HTTPS otomatik

SEÇENEK 3 — KENDİ SUNUCUSUN
├── /out klasörünü Apache/Nginx ile serve et
├── HTTPS sertifikası gerekli (Let's Encrypt)
└── Quest 2 kesinlikle HTTPS gerektirir!

SEÇENEK 4 — UNIVERSITE SERVER (FBÜ)
├── /out klasörünü FBÜ web sunucusuna yükle
├── Yöneticiyle koordineli
└── Subdomain talep et
```

---

## 23. AJAN YÜRÜTME SIRASI (EXECUTION ORDER)

### Sprint Planı (14 İş Günü)

```
GÜN 1 — SPRINT 0 (KICKOFF)
├── AGENT 01 (Foundation) ← Sabah
└── Klasör yapısı, store iskeleti, routing

GÜN 2-3 — SPRINT 1 (PARALEL BAŞLANGIÇ)
├── AGENT 02 (UI/UX) → Landing, Story, Name, Tutorial
├── AGENT 03 (3D World) → Ambulans iç gövdesi
└── AGENT 06 (Controls) → FPS controls iskeleti

GÜN 4-6 — SPRINT 2 (3D DETAY)
├── AGENT 04 (Equipment) → 27 ekipman yerleşimi
└── AGENT 05 (Lighting) → Atmosfer + post-processing

GÜN 7-8 — SPRINT 3 (LOGIC)
├── AGENT 07 (Game Logic) → Soru akışı, kod toplama, kapı
└── AGENT 06 devam → Raycast etkileşim

GÜN 9-10 — SPRINT 4 (UI ENTEGRASYONU)
├── AGENT 02 devam → HUD, soru modalı, sonuç, lider tablosu
└── AGENT 07 devam → Tüm akışı bağla

GÜN 11 — SPRINT 5 (VR)
├── AGENT 06 → Quest 2 controllers, WebXR
└── Quest 2 lokal test

GÜN 12 — SPRINT 6 (AUDIO)
├── AGENT 08 → Tüm ses dosyalarını entegre et
└── 3D pozisyonel ses kalibrasyonu

GÜN 13-14 — SPRINT 7 (POLISH)
├── AGENT 09 → Performans, bug fix, mobile, lighthouse
├── Build & deploy
└── Final QA pass
```

### Gün Sonu Demo Kontrolleri

```
✓ Gün 1 — Boş Next.js projesi açılıyor
✓ Gün 3 — Landing + Story + Name akışı çalışıyor + 3D boş ambulans yükleniyor
✓ Gün 6 — Tam donanımlı ambulans, ışıklandırma, atmosfer hazır
✓ Gün 8 — 1 hotspot çalışıyor (proof of concept)
✓ Gün 10 — 10 hotspot + tüm akış uçtan uca çalışıyor (Web)
✓ Gün 11 — Quest 2'de test edildi, akıcı 72 FPS
✓ Gün 12 — Sesler entegre, atmosfer mükemmel
✓ Gün 14 — Production build, Vercel'de canlı, tüm öğrenciler kullanabilir
```

---

## 🏁 SONUÇ & SONRAKİ ADIMLAR

### Tamamlanması Gerekenler (Sen Vereceksin)

1. **10 gerçek soru** — Bu .md'deki placeholder'ların yerine konacak
2. **10 hatırlatma videosu** — Her soru için 1-3 dakika eğitim videosu
3. **FBÜ logo dosyası** — SVG format (vektörel)
4. **Onay** — Hikaye narratifinin tıbbi etiğe uygunluğu

### Ben Hallederim (Ajan Sistemi)

- ✅ Tüm 3D ortam (ambulans + 27 ekipman)
- ✅ Premium UI (10 ekran)
- ✅ Web FPS + Quest 2 VR kontrolleri
- ✅ Soru sistemi (placeholder ile)
- ✅ Lider tablosu + LocalStorage
- ✅ Atmosfer (ses, ışık, animasyon)
- ✅ Build & deployment

### Başarı Ölçütleri

```
✓ Quest 2'de sabit 72 FPS
✓ Web'de orta laptop'ta 60 FPS
✓ Lighthouse skoru > 90
✓ İlk yükleme < 8 saniye
✓ Ortalama oyun süresi 15-25 dk
✓ FBÜ Tıp Fakültesi öğrencileri pozitif geri bildirim
```

---

```
                    ╔═══════════════════════════╗
                    ║                           ║
                    ║    NEORESCUE v1.0         ║
                    ║                           ║
                    ║    Master Ultra           ║
                    ║    Blueprint              ║
                    ║                           ║
                    ║    Fenerbahçe             ║
                    ║    Üniversitesi           ║
                    ║    Tıp Fakültesi          ║
                    ║                           ║
                    ║    Nisan 2026             ║
                    ║                           ║
                    ╚═══════════════════════════╝

         "Sınav koridorda değil. Ambulansın içinde."
```
