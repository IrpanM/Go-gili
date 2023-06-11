import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function SuggestDestinasi() {
  return (
    <View className="flex flex-row items-center justify-center pt-10">
      <Ionicons name="ios-location-sharp" size={20} color="#004AAD" />
      <Text className="text-[#004AAD] text-[9px]">Antar ke:</Text>
      <Text className="text-white text-[9px] ml-1">jl. Cisaat, Kabupaten Sukabumi</Text>
    </View>
  )
}