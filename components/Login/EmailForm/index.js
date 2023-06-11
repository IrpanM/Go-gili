import React from 'react'
import { Text, View } from 'react-native'
import { Input } from 'react-native-magnus'

export default function EmailLogin() {
  return (
    <View className="w-full mb-3">
      <Text className="text-black text-[20px] font-bold mb-1">Email</Text>
      <Input
        placeholder="Enter your email"
        maxH={40}
        p={0}
        borderTopWidth={0}
        borderRightWidth={0}
        borderLeftWidth={0}
        focusBorderColor="#84DFFF"
      />
    </View>
  )
}