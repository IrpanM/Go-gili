import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button, Icon } from 'react-native-magnus'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'

export default function HeroProfile() {
  return (
    <View className="-mt-12 flex justify-center items-center">
      <View className="rounded-full border border-[#004AAD] bg-[#A7A7A7] w-[100px] h-[100px] flex justify-center items-center">
        <Icon name="user" color="white" fontFamily="Feather" fontSize={40} />
      </View>

      <View className="flex flex-col justify-center items-center">
        <Text className="font-semibold text-base py-1">Irvan Maulana</Text>

        <View className="flex flex-row">
          <Text className="font-normal text-[13px] pr-2 border-r border-black">irvan.maualan@gmail.com</Text>
          <Text className="font-normal text-[13px] pl-2">+62857128100</Text>
        </View>

      </View>

      <View className="flex flex-row py-3">
        <Image
          className="w-[18px] h-[22px]"
          source={require('../../../assets/static/icons/verified.png')}
        />
        <Text className="font-semibold text-[#004AAD] ml-2">Account Verified</Text>
      </View>

      <View className="flex flex-row">
        <Button
          px={19}
          mx={'lg'}
          bg="#84DFFF"
          color="#004AAD"
          rounded={'2xl'}
          prefix={<FontAwesome5 name="pen" size={14} color="#004AAD" />}
        >
          <Text className="text-[#004AAD] ml-2 font-bold">Edit Profil</Text>
        </Button>
        <Button
          px={19}
          mx={'lg'}
          bg="#84DFFF"
          color="#004AAD"
          rounded={'2xl'}
          prefix={<Ionicons name="qr-code" size={14} color="#004AAD" />}
        >
          <Text className="text-[#004AAD] ml-2 font-bold">QR saya</Text>
        </Button>
      </View>
    </View>
  )
}