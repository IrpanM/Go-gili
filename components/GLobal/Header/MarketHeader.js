import { AntDesign, Feather } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const MarketHeader = ({ navigation }) => {
  return (
    <View className="flex flex-row justify-between items-center w-full">
      <TouchableOpacity className="ml-4" onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={32} color="white" />
      </TouchableOpacity>

      <View className="flex flex-row mr-2">
        <TouchableOpacity className="mx-4">
          <AntDesign name="sharealt" size={25} color="white" />
        </TouchableOpacity>

        <TouchableOpacity className="mx-4">
          <AntDesign name="hearto" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MarketHeader