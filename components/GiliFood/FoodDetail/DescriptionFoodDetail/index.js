import { View, Text } from 'react-native'
import React from 'react'

const DescriptionFoodDetail = () => {
  return (
    <View className="px-4 py-3">
      <View className="flex flex-col border-b border-[#bcbcbc] pb-4">
        <Text className="font-bold text-[22px]">Sate ayam</Text>
        <Text className="font-semibold text-[#71706f]">Sate Mas Gunjay</Text>
      </View>

      <View className="flex flex-col py-4">
      <Text className="font-bold text-base">Deskripsi</Text>
      <Text className="text-[13px] text-[#71706f]">15 tusuk sate ayam dengan bumbu kacang</Text>
      </View>
    </View>
  )
}

export default DescriptionFoodDetail