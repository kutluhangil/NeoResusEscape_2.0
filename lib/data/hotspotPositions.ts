export interface HotspotConfig {
  id: string
  questionId: number
  position: [number, number, number]
  label: string
  equipment: string
}

export const HOTSPOT_POSITIONS: HotspotConfig[] = [
  {
    id: 'hotspot_1',
    questionId: 1,
    position: [0.6, 0.55, -1.0],
    label: 'Transport İnküvatörü',
    equipment: 'transport_incubator',
  },
  {
    id: 'hotspot_2',
    questionId: 2,
    position: [-1.0, 0.7, -1.6],
    label: 'Aspiratör',
    equipment: 'suction_device',
  },
  {
    id: 'hotspot_3',
    questionId: 3,
    position: [-0.4, 0.85, 0.95],
    label: 'BVM Maskesi',
    equipment: 'bvm_set',
  },
  {
    id: 'hotspot_4',
    questionId: 4,
    position: [0.4, 0.85, -0.3],
    label: 'Pulse Oksimetre',
    equipment: 'pulse_oximeter',
  },
  {
    id: 'hotspot_5',
    questionId: 5,
    position: [-1.05, 0.95, -1.0],
    label: 'Defibrilatör',
    equipment: 'defibrillator',
  },
  {
    id: 'hotspot_6',
    questionId: 6,
    position: [-0.5, 0.85, -0.3],
    label: 'APGAR Saati',
    equipment: 'apgar_clock',
  },
  {
    id: 'hotspot_7',
    questionId: 7,
    position: [1.05, 1.2, -0.5],
    label: 'İlaç Dolabı',
    equipment: 'drug_cabinet',
  },
  {
    id: 'hotspot_8',
    questionId: 8,
    position: [0.5, 0.85, 0.95],
    label: 'Umbilikal Kateter',
    equipment: 'umbilical_catheter',
  },
  {
    id: 'hotspot_9',
    questionId: 9,
    position: [-0.15, 0.85, 0.95],
    label: 'Laringoskop',
    equipment: 'laryngoscope',
  },
  {
    id: 'hotspot_10',
    questionId: 10,
    position: [-0.6, 0.6, 1.7],
    label: 'Acil Çanta',
    equipment: 'emergency_kit',
  },
]

export const DOOR_KEYPAD_POSITION: [number, number, number] = [0.4, 1.1, 1.85]
