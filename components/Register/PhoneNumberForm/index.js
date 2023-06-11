import { View, Text } from 'react-native'
import React from 'react'
import { Input } from 'react-native-magnus'

export default function PhoneNumberRegister() {
  return (
    <View className="w-full mb-3">
      <Text className="text-black text-base font-bold">Phone Number</Text>
      <Input
        maxH={40}
        p={0}
        borderTopWidth={0}
        borderRightWidth={0}
        borderLeftWidth={0}
        focusBorderColor="#84DFFF"
        keyboardType='numeric'
      />
    </View>
  )
}