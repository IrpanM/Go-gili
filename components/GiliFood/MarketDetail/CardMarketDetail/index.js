import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const CardMarketDetail = ({ navigation }) => {
  const linkTo = () => {
    navigation.navigate('FoodDetail')
  }

  return (
    <Pressable onPress={linkTo} className="flex flex-row border-b border-[#BCBCBC] py-3">
      <View className="flex flex-col basis-3/4">
        <Text className="font-semibold">Sate Ayam</Text>
        <Text className="text-[13px]">15 tusuk sate ayam dengan bumbu kacang</Text>
        <Text className="text-[13px]">Rp 12.000</Text>
      </View>

      <View className="basis-1/4">
        <Image
          className="rounded-2xl w-[75px] h-[70px]"
          source={require('../../../../assets/static/samples/sate.png')}
        />
      </View>
    </Pressable>
  )
}

export default CardMarketDetail