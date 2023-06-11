import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, View } from 'react-native'
import Header from '../../../GLobal/Header'

const HeroMarketDetail = () => {
  return (
    <View className="flex flex-col bg-white">
      <Image
        className="w-full h-[165px]"
        source={require('../../../../assets/static/samples/market.png')}
      />
      <View className="absolute top-10 w-full">
        <Header
          type={'market'}
        />
      </View>

      <View className="w-full px-5 -mt-10">
        <View className=" flex flex-col bg-white border border-[#C4C4C4] rounded-2xl py-2">
          <Text className="text-center font-bold text-[22px] mb-2">Sate Mas Gunjay</Text>

          <View className="flex flex-row items-center px-3">
            <View className="flex flex-row basis-1/2">
              <Text className="text-[13px] text-[#BCBCBC]">Rating:</Text>
            </View>

            <View className="bg-[#bcbcbc] w-[1.5px] h-[26px]" />

            <View className="flex flex-row basis-1/2 px-3">
              <Entypo name="location-pin" size={19} color="#c4c4c4" />
              <Text className="text-[13px] text-[#bcbcbc] mr-1">Jarak:</Text>
              <Text className="text-[13px]">11.1KM</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HeroMarketDetail