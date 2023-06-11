import { View, Text } from 'react-native'
import React from 'react'
import { Input } from 'react-native-magnus'

export default function PasswordLogin() {
  return (
    <View className="w-full">
      <Text className="text-black text-[20px] font-bold mb-1">Password</Text>
      <Input
        placeholder="Enter your password"
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