import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { Input } from 'react-native-magnus'
import Header from '../../GLobal/Header'

export default function HeroHorseCart() {
  const navigation = useNavigation();

  return (
    <View className="relative flex justify-center items-center">
      <Image
        className="w-[308px] h-[308px]"
        source={require('../../../assets/static/images/bg-horse-cart.png')}
      />
      <Header
        type={'absolute'}
        title={'Mau pergi kemana?'}
      />

      <View className="px-4 mt-12 absolute bottom-0">
        <View className="rounded-2xl bg-[#004AAD] py-4 px-12 flex justify-center items-center">
          <Text className="font-bold text-[22px] text-white">Good Morning, Irvan</Text>
          <Text className="text-[9px] text-white mb-3">kidomo is ready to take you anywhere</Text>

          <Input
            placeholder="produk, store, etc"
            // p={10}
            maxW={184}
            maxH={37}
            borderColor="#BCBCBC"
            borderWidth={1}
            rounded={999}
            focusBorderColor="#0F2E68"
            fontSize={12}
            prefix={<Ionicons name="search" style={{ marginTop: -3 }} size={14} color="#BCBCBC" />}
          />
        </View>
      </View>
    </View>
  )
}