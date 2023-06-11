// import { View, Text, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef } from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button, Icon } from 'react-native-magnus';

import EmailRegister from '../../components/Register/EmailForm';
import NameRegister from '../../components/Register/NameForm';
import PasswordRegister from '../../components/Register/PasswordForm';
import PhoneNumberRegister from '../../components/Register/PhoneNumberForm';

export default function Register() {
  const navigation = useNavigation();

  const click = useRef(null)

  const animateClick = () => {
    click.current.animate("bounceIn")
  }

  return (
    <LinearGradient
      colors={['#84DFFF', '#0F2E68']}
      end={{ x: 0.9, y: 0.3 }}
      style={{
        flex: 1
      }}
    >
      <SafeAreaView className="flex-1">
        <View className="flex py-5 justify-center items-center">
          <Image
            className="w-[285px] h-[211px]"
            source={require('../../assets/static/bg-icon.png')}
          />
          <View className="absolute top-14 left-7">
            <Pressable onPress={() => navigation.goBack()}>
              <Icon
                name="arrowleft"
                color="white"
                fontSize={33}
              />
            </Pressable>
          </View>
          <View className="absolute bottom-7 left-7">
            <Text className="text-white text-[22px] font-bold">Sign Up</Text>
            <Text className="text-white text-[13px] font-bold">Create new account</Text>
          </View>
        </View>

        <View className="bg-white px-6 h-screen rounded-t-2xl py-10">

          <NameRegister />

          <EmailRegister />

          <PhoneNumberRegister />

          <PasswordRegister />

          <Animatable.View ref={click} className="w-full">
            <Button
              loading={false}
              block
              bg="#004AAD"
              rounded={15}
              color="white"
              mt="xl"
              mb={'md'}
              onPress={animateClick}
              alignSelf="center"
              alignItems='center'
              py={7}
            >
              <Text className="text-white font-bold text-[22px]">Send</Text>
            </Button>
          </Animatable.View>

          <View className="mt-2">
            <Text className="text-[#BCBCBC] text-xs text-center">
              Have a account? Login {''}
              <Text onPress={() => navigation.navigate('Login')} className="text-[#84DFFF]">here</Text>
            </Text>
          </View>
        </View>
      </SafeAreaView >
    </LinearGradient>
  )
}