export interface Question {
  id: number
  hotspotEquipment: string
  category: string
  scenario: string
  question: string
  options: { id: 'A' | 'B' | 'C' | 'D'; text: string }[]
  correctOptionId: 'A' | 'B' | 'C' | 'D'
  digit: string
  explanation: string
  hintVideoUrl: string
  difficulty: 'kolay' | 'orta' | 'zor'
}

export const QUESTIONS: Question[] = [
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
      { id: 'D', text: 'IV sıvı resüsitasyonu başlat' },
    ],
    correctOptionId: 'B',
    digit: '7',
    explanation: 'NRP rehberine göre <32 hafta prematürlerde plastik örtü/torba kullanımı termoregülasyon için kritiktir. Kurutma + radyant ısıtıcı + ortam sıcaklığı 23-25°C hedeflenir.',
    hintVideoUrl: '/videos/hints/case-01-hint.mp4',
    difficulty: 'orta',
  },
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
      { id: 'D', text: 'Ağız ve burunu hiç aspire etme' },
    ],
    correctOptionId: 'B',
    digit: '3',
    explanation: '2015 sonrası NRP rehberi: Depresif yenidoğanda mekonyum varlığında rutin trakeal aspirasyon önerilmez. Standart resüsitasyon basamakları izlenir, ventilasyon önceliklidir.',
    hintVideoUrl: '/videos/hints/case-02-hint.mp4',
    difficulty: 'orta',
  },
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
      { id: 'D', text: 'Hız 20/dk, basınç 60 cmH₂O' },
    ],
    correctOptionId: 'B',
    digit: '1',
    explanation: 'PPV: Hız 40-60/dk, başlangıç basıncı term için 20-25 cmH₂O, prematür için 20-25 cmH₂O. Göğüs hareketi gözlenmeli, gerekirse basınç artırılır.',
    hintVideoUrl: '/videos/hints/case-03-hint.mp4',
    difficulty: 'orta',
  },
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
      { id: 'D', text: '10' },
    ],
    correctOptionId: 'B',
    digit: '4',
    explanation: 'Renk: 1, KH: 2, Refleks (yüz buruşturma): 1, Tonus (aktif): 2, Solunum (zayıf ağlama): 1. Toplam: 7. Hafif depresyon var, izlem gerekli.',
    hintVideoUrl: '/videos/hints/case-04-hint.mp4',
    difficulty: 'kolay',
  },
  {
    id: 5,
    hotspotEquipment: 'defibrillator',
    category: 'Kalp Masajı',
    scenario: 'Yenidoğan PPV ile 30 saniye etkili ventile edildi. Kalp hızı halen 50/dk. Cilt soluk.',
    question: 'Yenidoğanda göğüs kompresyonuna başlama endikasyonu nedir?',
    options: [
      { id: 'A', text: 'KH < 100/dk' },
      { id: 'B', text: 'KH < 80/dk' },
      { id: 'C', text: "Etkili PPV'ye rağmen 30 saniye sonunda KH < 60/dk" },
      { id: 'D', text: 'Doğum sonrası refleks olarak hemen başlanır' },
    ],
    correctOptionId: 'C',
    digit: '9',
    explanation: 'NRP: 30 saniye etkili PPV (göğüs kalkışı görülen) sonrası KH < 60/dk ise göğüs kompresyonuna başlanır. Bu hayat kurtarıcıdır.',
    hintVideoUrl: '/videos/hints/case-05-hint.mp4',
    difficulty: 'orta',
  },
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
      { id: 'D', text: '5:1' },
    ],
    correctOptionId: 'C',
    digit: '2',
    explanation: "Yenidoğanda kompresyon:ventilasyon oranı 3:1'dir. Dakikada 90 kompresyon + 30 ventilasyon = toplam 120 olay/dk. Erişkinden farklı.",
    hintVideoUrl: '/videos/hints/case-06-hint.mp4',
    difficulty: 'kolay',
  },
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
      { id: 'D', text: '0.5 mg/kg IM' },
    ],
    correctOptionId: 'A',
    digit: '5',
    explanation: 'Epinefrin yenidoğan dozu: 1:10.000 solüsyonda 0.01-0.03 mg/kg = 0.1-0.3 mL/kg IV (umbilikal venöz kateter ile). Endotrakeal yolda 0.05-0.1 mg/kg.',
    hintVideoUrl: '/videos/hints/case-07-hint.mp4',
    difficulty: 'zor',
  },
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
      { id: 'D', text: '50 mL/kg ringer laktat IV' },
    ],
    correctOptionId: 'B',
    digit: '8',
    explanation: 'Volüm genişletici: %0.9 NaCl veya O Rh(-) eritrosit süspansiyonu, 10 mL/kg, 5-10 dakika içinde IV. Tekrarlanabilir.',
    hintVideoUrl: '/videos/hints/case-08-hint.mp4',
    difficulty: 'orta',
  },
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
      { id: 'D', text: 'ETT 5.0 mm + Miller 2' },
    ],
    correctOptionId: 'B',
    digit: '6',
    explanation: 'Term yenidoğan (>3 kg): ETT iç çapı 3.5 mm, Miller 1 düz bleyt. <1 kg için 2.5, 1-2 kg için 3.0, 2-3 kg için 3.5 mm. Tüp derinliği: kilo+6 cm.',
    hintVideoUrl: '/videos/hints/case-09-hint.mp4',
    difficulty: 'zor',
  },
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
      { id: 'D', text: 'Yüksek doz steroid başlamak' },
    ],
    correctOptionId: 'B',
    digit: '0',
    explanation: "Orta-ağır HIE'de term/near-term yenidoğanda terapötik hipotermi (33-34°C, 72 saat) standart bakımdır. İlk 6 saat içinde başlanmalı, yenidoğan yoğun bakımda uygulanır.",
    hintVideoUrl: '/videos/hints/case-10-hint.mp4',
    difficulty: 'zor',
  },
]

export const DOOR_CODE = QUESTIONS.map((q) => q.digit).join('')
// → "7314925860"
