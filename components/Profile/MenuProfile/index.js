import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'

const DATA_MENU = [
  {
    name: 'Email'
  },
  {
    name: 'Pin Setting'
  },
  {
    name: 'Language'
  },
  {
    name: 'Quick Login'
  },
  {
    name: 'Voucher'
  },
  {
    name: 'Term of Services'
  },
  {
    name: 'Privacy Policy'
  },
]

export default function MenuProfile() {
  return (
    <View className="flex-1 w-full pt-10 px-5">
      {
        DATA_MENU.map((item, index) =>
          <Pressable key={index} onPress={() => console.log(index)}>
            {({ pressed }) => (
              <View className={`${pressed ? 'bg-slate-100' : ''} border-b border-[#BCBCBC] flex flex-row justify-between items-center py-3 pl-1 pr-3 mb-2`}>
                <Text className="font-semibold">{item.name}</Text>
                <SimpleLineIcons name="arrow-right" size={20} color="#BCBCBC" />
              </View>
            )}
          </Pressable>
        )
      }
    </View>
  )
}