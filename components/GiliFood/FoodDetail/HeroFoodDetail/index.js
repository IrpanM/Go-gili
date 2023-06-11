import React from 'react'
import { Image, View } from 'react-native'
import Header from '../../../GLobal/Header'

const HeroFoodDetail = () => {
  return (
    <View className="flex flex-col bg-white">
      <Image
        className="w-full h-[165px]"
        source={require('../../../../assets/static/samples/sate.png')}
      />
      <View className="absolute top-10 w-full">
        <Header
          type={'market'}
        />
      </View>
    </View>
  )
}

export default HeroFoodDetail