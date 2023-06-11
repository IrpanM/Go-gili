// import { View, Text, StatusBar } from 'react-native'
import React, { useRef } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button, Checkbox } from 'react-native-magnus';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import EmailLogin from '../../components/Login/EmailForm';
import PasswordLogin from '../../components/Login/PasswordForm';

export default function Login() {
  const navigation = useNavigation();

  const error = useRef(null)

  const animateError = () => {
    error.current.animate("shake")
    navigation.navigate('Root')
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
          <View className="absolute bottom-7 left-7">
            <Text className="text-white text-[22px] font-bold">Sign In</Text>
            <Text className="text-white text-[13px] font-bold">Sign in to continue</Text>
          </View>
        </View>

        <View className="bg-white px-6 h-screen rounded-t-2xl py-10">

          <EmailLogin />

          <PasswordLogin />

          <View className="flex flex-row justify-between items-center mt-3 mb-6">
            <View className="flex flex-row">
              <Checkbox
                activeColor="#004AAD"
                fontSize="2xl"
              />
              <Text className="ml-2 text-[#BCBCBC] text-sm">Remember me</Text>
            </View>
            <Text onPress={() => navigation.navigate('ForgotPass')} className="text-[#BCBCBC] text-sm">Forgot Password</Text>
          </View>

          <Animatable.View ref={error} className="w-full">
            <Button
              loading={false}
              block
              bg="#004AAD"
              rounded={15}
              color="white"
              mt="xl"
              mb={'md'}
              onPress={animateError}
              alignSelf="center"
              alignItems='center'
              py={7}
            >
              <Text className="text-white font-bold text-[22px]">Login</Text>
            </Button>
          </Animatable.View>

          <View className="mt-2">
            <Text className="text-[#BCBCBC] text-xs text-center">
              Don't have account yet? Register {''}
              <Text onPress={() => navigation.navigate('Register')} className="text-[#84DFFF]">here</Text>
            </Text>
          </View>
        </View>
      </SafeAreaView >
    </LinearGradient>
  )
}