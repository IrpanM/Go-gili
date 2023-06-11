import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { Button } from 'react-native-magnus'

export default function FavoriteHorseCart() {
  return (
    <View className="flex justify-center items-center">
      <View className="mt-16 mb-7 flex justify-center items-center">
        <View className="relative mb-5">
          <Image
            className="w-[56px] h-[80px]"
            source={require('../../../assets/static/icons/favorite.png')}
          />
          <Image
            className="w-[28px] h-[30px] absolute top-0 -right-3"
            source={require('../../../assets/static/icons/plus-blue.png')}
          />
        </View>
        <Text className="text-base font-semibold">Save you’re favourite destination</Text>
      </View>

      <View className="flex flex-row mb-7">
        <Button
          px={19}
          mx={'lg'}
          bg="#84DFFF"
          color="#004AAD"
          rounded={'2xl'}
          prefix={<FontAwesome name="hotel" size={14} color="white" />}
        >
          <Text className="text-white ml-2 font-bold">Hotel</Text>
        </Button>
        <Button
          px={19}
          mx={'lg'}
          bg="#84DFFF"
          color="#004AAD"
          rounded={'2xl'}
          prefix={<MaterialCommunityIcons name="silverware-fork-knife" size={14} color="white" />}
        >
          <Text className="text-white ml-2 font-bold">Resto</Text>
        </Button>
      </View>

      <Text className="text-[13px] text-[#71706F] text-center">Do you have a favourite destination? Lest save it.</Text>
      <Text className="text-[13px] text-[#71706F] text-center">So we don’t bother in the address again.</Text>
    </View>
  )
}