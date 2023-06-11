import { AntDesign, Feather } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button } from 'react-native-magnus'
import DescriptionFoodDetail from '../../components/GiliFood/FoodDetail/DescriptionFoodDetail'
import HeroFoodDetail from '../../components/GiliFood/FoodDetail/HeroFoodDetail'

const FoodDetail = () => {
  return (
    <View className="flex-1 bg-white">
      <HeroFoodDetail />
      <DescriptionFoodDetail />

      <View className="px-4 flex flex-row items-center absolute bottom-5">
        <View className="basis-1/4">
          <Button
            rounded={13}
            bg="white"
            borderWidth={1}
            borderColor="#004AAD"
            color="#004AAD"
          >
            <Feather name="shopping-cart" style={{ marginLeft: -1 }} size={24} color="#004AAD" />
          </Button>
        </View>

        <View className="basis-3/4">
          <Button
            block
            rounded={13}
            bg="#004AAD"
            color="white"
            underlayColor="#004AAD"
          >
            Pesan Sekarang
          </Button>
        </View>
      </View>
    </View>
  )
}

export default FoodDetail