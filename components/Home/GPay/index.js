import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { Feather, FontAwesome5, Octicons } from '@expo/vector-icons'

export default function GPay() {
  const fiturGpay = [
    {
      name: 'Isi Saldo',
      icon: <Feather name="upload" size={20} color="#004AAD" />
    },
    {
      name: 'Transfer',
      icon: <View className="rotate-90"><Octicons name="arrow-switch" size={20} color="#004AAD" /></View>
    },
    {
      name: 'Tarik Saldo',
      icon: <Feather name="download" size={20} color="#004AAD" />
    },
    {
      name: 'History',
      icon: <FontAwesome5 name="history" size={20} color="#004AAD" />
    }
  ]

  return (
    <View
      className="flex flex-row justify-between w-full rounded-2xl bg-white border border-[#BCBCBC] pt-6 pb-3 px-3"
      style={shadowStyle.commonProp}
    >
      <View className="absolute top-2 left-2">
        <Image
          className="w-[36px] h-[15px]"
          source={require('../../../assets/static/icons/gpay.png')}
        />
      </View>

      <View className="flex">
        <Text className="font-semibold">Rp 100.000.000</Text>
        <Text className="text-[9px] text-[#71706F]">Coins 100.000</Text>
      </View>

      <View className="flex flex-row">
        {
          fiturGpay.map((item, index) =>
            <TouchableOpacity key={index} className="flex items-center ml-2">
              {item.icon}
              <Text className="text-[9px] text-[#004AAD]">{item.name}</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  )
}

const shadowStyle = StyleSheet.create({
  ...Platform.select({
    ios: {
      commonProp: {
        shadowColor: 'gray',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.26,
        shadowRadius: 3
      }
    },
    android: {
      commonProp: {
        elevation: 20,
        shadowColor: 'gray'
      }
    }
  })
})