import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MarketHeader from './MarketHeader';

export default function Header({ type, title }) {
  const navigation = useNavigation();

  switch (type) {
    case 'market':
      return (
        <MarketHeader navigation={navigation} />
      )

    case 'white':
      return (
        <View className="flex flex-row justify-center items-center w-full">
          <TouchableOpacity className="absolute left-4" onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={32} color="white" />
          </TouchableOpacity>

          <Text className="text-[22px] font-bold text-white">{title}</Text>
        </View>
      )

    case 'absolute':
      return (
        <View className="absolute top-5 flex flex-row justify-center items-center w-full">
          <TouchableOpacity className="absolute left-4" onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={32} color="black" />
          </TouchableOpacity>

          <Text className="text-[22px] font-bold">{title}</Text>
        </View>
      )

    default:
      return (
        <View className="flex flex-row justify-center items-center w-full">
          <TouchableOpacity className="absolute left-4" onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={32} color="black" />
          </TouchableOpacity>

          <Text className="text-[22px] font-bold">{title}</Text>
        </View>
      )
  }

}