import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import ContentGiliFood from '../../components/GiliFood/Content'
import HeroGiliFood from '../../components/GiliFood/HeroGiliFood'
import MenuGiliFood from '../../components/GiliFood/MenuGiliFood'

const GiliFood = () => {
  return (
    <SafeAreaView className="pb-6">
      <ScrollView>
        <HeroGiliFood />
        <MenuGiliFood />
        <ContentGiliFood />
      </ScrollView>
    </SafeAreaView>
  )
}

export default GiliFood