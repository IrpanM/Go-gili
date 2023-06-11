import { AntDesign, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-magnus'
import HeroProfile from '../../../components/Profile/HeroProfile'
import MenuProfile from '../../../components/Profile/MenuProfile'

export default function Profile() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#84DFFF', '#0F2E68']}
      end={{ x: 0.9, y: 0.3 }}
      style={{
        flex: 1
      }}
    >
      <ScrollView className="flex-1">
        <View className="absolute top-8 left-5">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View className="flex-1 bg-white rounded-t-[60px] items-center mt-28 pb-16">
          <HeroProfile />

          <MenuProfile />

          <View className="flex justify-center items-center pt-4 pb-10">
            <Button
              px={19}
              mx={'lg'}
              bg="#FBEBEA"
              borderWidth={1}
              borderColor="#E94E2B"
              color="#E94E2B"
              rounded={'2xl'}
              prefix={<AntDesign name="logout" size={18} color="#E94E2B" />}
            >
              <Text className="text-[#E94E2B] ml-2 font-bold">LOGOUT</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}