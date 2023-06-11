import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeroGiliBoat from '../components/GiliBoat/HeroGiliBoat'
import ResultGiliBoat from '../components/GiliBoat/ResultGiliBoat'

export default function GiliBoat() {
  return (
    <SafeAreaView>
      <HeroGiliBoat />
      <ResultGiliBoat />
    </SafeAreaView>
  )
}