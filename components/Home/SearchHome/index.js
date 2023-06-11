import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-magnus'

export default function SearchHome() {
  return (
    <View className="flex justify-center items-center w-full py-3 ">
      <Input
        placeholder="produk, store, etc"
        // p={10}
        maxW={184}
        h={40}
        borderColor="#BCBCBC"
        borderWidth={1}
        rounded={999}
        focusBorderColor="#0F2E68"
        prefix={<Ionicons name="search" style={{ marginTop: -3 }} size={18} color="#BCBCBC" />}
      />
      <View className="absolute right-0">
        <Ionicons name="ios-notifications" size={30} color="#BCBCBC" />
      </View>
    </View>
  )
}