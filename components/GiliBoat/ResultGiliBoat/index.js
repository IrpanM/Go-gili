import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-magnus'

export default function ResultGiliBoat() {
  return (
    <View className="px-5">
      <View className="border border-[#bcbcbc] rounded-2xl px-[18px] py-3">
        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-row items-center">
            <Image
              source={require('../../../assets/static/home/fast-boat.png')}
              className="w-[34px] h-[19px]"
            />
            <Text className="text-[13px] ml-1">Fast Boat</Text>
          </View>

          <Text className="text-[13px]">Rp <Text className="font-bold">100.000</Text>/pax</Text>
        </View>

        <View className="flex flex-row justify-between mt-3">
          <View className="flex flex-col">
            <View className="flex flex-row">
              <Text className="font-bold">10.30</Text>
              <Text className="ml-2">Harbour</Text>
            </View>

            <View className="flex flex-row items-center my-1">
              <Image
                source={require('../../../assets/static/icons/line.png')}
                className="h-[29px] w-[1.5px] ml-2"
              />
              <Text className="text-[9px] text-[#adadad] ml-1">30 Menit</Text>
            </View>

            <View className="flex flex-row">
              <Text className="font-bold">11.00</Text>
              <Text className="ml-2">Gili Trawangan</Text>
            </View>
          </View>

          <Button
            loading={false}
            bg="#004AAD"
            rounded={15}
            color="white"
            alignSelf="flex-end"
            py={5}
          >
            <Text className="text-white font-bold px-3">Buy</Text>
          </Button>
        </View>
      </View>
    </View>
  )
}