import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FavoriteHorseCart from '../components/GiliHorseCart/FavoriteDestination'
import HeroHorseCart from '../components/GiliHorseCart/HeroHorseCart'

export default function GiliHorseCart() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeroHorseCart />
      <FavoriteHorseCart />
    </SafeAreaView>
  )
}