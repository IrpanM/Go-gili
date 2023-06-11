import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button, Icon } from 'react-native-magnus';

export default function ForgotPass() {
  const navigation = useNavigation();

  const click = useRef(null)

  const animateClick = () => {
    click.current.animate("bounceIn")
  }

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center px-12">
      <View className="absolute top-14 left-7">
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            name="arrowleft"
            color="#004AAD"
            fontSize={33}
          />
        </Pressable>
      </View>
      <View className="absolute top-28 left-12">
        <Text className="text-black font-bold text-[22px]">Forgot</Text>
        <Text className="text-black font-bold text-[22px]">Password</Text>
        <Text className="text-black text-[13px]">New Password</Text>
      </View>

      <View className="flex relative max-w-fit items-center justify-center mb-10">
        <Image
          className="w-[123px] h-[140px]"
          source={require('../../assets/static/shield.png')}
        />
        <View className="absolute">
          <Image
            className="w-[39px] h-[49px]"
            source={require('../../assets/static/lock.png')}
          />
        </View>
        <View className="absolute -bottom-4">
          <Image
            className="w-[100px] h-[20px]"
            source={require('../../assets/static/shadow-shield.png')}
          />
        </View>
      </View>

      <Text className="text-center leading-5">
        Enter your email, phone or username and we’ll send you a link to change a new password
      </Text>

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
    </SafeAreaView>
  )
}