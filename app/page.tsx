'use client'

import { useGameStore } from '@/lib/store/gameStore'
import { LandingScreen } from '@/components/ui/landing/LandingScreen'
import { StoryIntro } from '@/components/ui/story/StoryIntro'
import { NameEntry } from '@/components/ui/name/NameEntry'
import { ControlsTutorial } from '@/components/ui/tutorial/ControlsTutorial'
import { GameView } from '@/components/GameView'
import { ResultsScreen } from '@/components/ui/results/ResultsScreen'
import { LeaderboardTable } from '@/components/ui/leaderboard/LeaderboardTable'

export default function Home() {
  const { phase } = useGameStore()

  if (phase === 'landing') return <LandingScreen />
  if (phase === 'story') return <StoryIntro />
  if (phase === 'name_entry') return <NameEntry />
  if (phase === 'tutorial') return <ControlsTutorial />
  if (phase === 'results') return <ResultsScreen />
  if (phase === 'leaderboard') return <LeaderboardTable />

  // playing, question, correct_feedback, wrong_feedback, hint_video, keypad, door_opening
  return <GameView />
}
