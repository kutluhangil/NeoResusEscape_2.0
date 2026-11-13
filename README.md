<div align="center">

<img src="docs/media/hero.svg" alt="NeoRescue — first-person inside an ambulance, the crosshair lands on the pulse oximeter, its NRP case is answered and a door code digit unlocks" width="100%">

<p>
  <a href="https://neo-resus-escape-2-0.vercel.app"><img alt="Live" src="https://img.shields.io/badge/live-get%20out%20of%20the%20ambulance-ff4d5e?style=for-the-badge&labelColor=4a2230"></a>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js%2014-React%20Three%20Fiber-3ad1c4?style=for-the-badge&labelColor=4a2230">
  <img alt="Audience" src="https://img.shields.io/badge/for-medical%20students-ffd166?style=for-the-badge&labelColor=4a2230">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-ff4d5e?style=for-the-badge&labelColor=4a2230">
</p>

<p><em>A 3D first-person escape room for medical students: locked in an ambulance, you solve<br>
ten neonatal resuscitation (NRP) cases, one per piece of equipment, to collect the door code.</em></p>

</div>

<img src="docs/media/divider.svg" width="100%" alt="">

## The idea

Neonatal resuscitation is learned from algorithms and flowcharts, then needed in a cramped vehicle under pressure. NeoRescue (*Kilitli Ambulans*, the locked ambulance) puts the questions where they belong: inside the cabin, attached to the equipment you would actually reach for, with a clock running. Answer a case correctly and the device gives you a digit; ten digits open the door.

> **A score that rewards calm, not guessing.** Each solved case is worth 100 points, the clock adds a time bonus of up to 1,000 that shrinks by 2 points a second, and every wrong answer costs 30. Speed helps, but careless clicking does not pay.

<img src="docs/media/divider.svg" width="100%" alt="">

## How it plays

| | |
|---|---|
| **Story and name** | A cinematic camera tour and a typewriter intro, then you enter your name for the leaderboard. |
| **Tutorial** | How to move, look and interact, on desktop or phone. |
| **Explore** | First-person movement in a procedurally built cabin with PBR materials and flickering ceiling LEDs. |
| **Ten stations** | Transport incubator, suction, BVM mask, pulse oximeter, defibrillator, APGAR timer, medicine cabinet, umbilical catheter, laryngoscope and the emergency bag. |
| **Cases** | Each station opens a clinical scenario with four options (in Turkish); right answers show feedback and a code digit, wrong ones explain why. |
| **Hint videos** | Every case has a hint video slot (`/videos/hints/case-NN-hint.mp4`); the clips are added separately. |
| **The door** | Enter the collected code on the keypad and watch the door open. |
| **Leaderboard** | Scores persist in the browser and can be exported as CSV. |
| **Sound** | A procedural Web Audio engine: no audio files. |
| **Mobile** | A virtual joystick on the left, an action button on the right. |
| **Post-processing** | Bloom, vignette and chromatic aberration. |

<img src="docs/media/divider.svg" width="100%" alt="">

## Game flow

```mermaid
flowchart LR
  L[Landing] --> S[Story · camera tour] --> N[Name] --> T[Tutorial] --> P[Explore the cabin]
  P --> Q[Station → NRP case]
  Q -- correct --> D[Code digit] --> P
  Q -- wrong --> W[Feedback · −30] --> P
  Q -. stuck .-> H[Hint video]
  D --> K{10 digits?}
  K -- yes --> KP[Keypad] --> O[Door opens · score · leaderboard]
```

| Score part | Value |
|---|---|
| Solved case | +100 each |
| Time bonus | 1,000 − 2 × seconds, never below 0 |
| Wrong answer | −30 each |

<img src="docs/media/divider.svg" width="100%" alt="">

## Türkçe özet

**NeoRescue (Kilitli Ambulans)**, tıp öğrencilerini bir ambulansın içinde yenidoğan resüsitasyonu (NRP) senaryolarıyla sınayan 3B birinci şahıs kaçış odası oyunu. Kabindeki on ekipmanın (transport inkübatörü, aspiratör, BVM, pulse oksimetre, defibrilatör, APGAR saati, ilaç dolabı, umbilikal kateter, laringoskop, acil çanta) her biri bir klinik vaka açıyor; doğru cevap kapı şifresinin bir rakamını veriyor. Puan doğru sayısı, süre bonusu ve hata cezasıyla hesaplanıyor. Sinematik açılış, dosyasız prosedürel ses, mobil joystick ve CSV dışa aktarılabilen sıralama tablosu var.

<img src="docs/media/divider.svg" width="100%" alt="">

## Development

```sh
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

No environment variables are needed. Put the hint clips in `public/videos/hints/` with the names used in `lib/data/questions.ts`.

```
app/                     the single page
components/three/        ambulance, equipment, lighting, player, interaction, effects, audio
components/ui/           landing, HUD, question cards, door keypad, leaderboard, mobile controls
lib/data/                questions (10 NRP cases), story text, hotspot positions
lib/store/               game state (phases, score) and the persisted leaderboard
lib/hooks/               procedural audio
NEORESCUE_MASTER_BLUEPRINT.md  the design document
```

<div align="center">
<br>
<a href="https://github.com/kutluhangil"><img src="docs/media/signature.svg" width="100%" alt="Built by kutluhangil"></a>
<sub>MIT licensed · an educational game, not clinical guidance · the case text in the banner is paraphrased and the cabin is drawn.</sub>
</div>
