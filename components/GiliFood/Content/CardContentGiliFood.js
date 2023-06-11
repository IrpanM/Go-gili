import { View, Text, Image, TouchableWithoutFeedback, Pressable } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-magnus'
import { useNavigation } from '@react-navigation/native'

const CardContentGiliFood = ({ img, title }) => {
  const navigation = useNavigation();

  const linkTo = () => {
    navigation.navigate('MarketDetail', {
      title: title
    })
  }

  return (
    <Pressable onPress={linkTo} className="rounded-xl ml-5">
      <Image
        className="w-[141px] h-[100px]"
        source={img}
      />
      <View className="border border-t-0 border-[#DADADA] rounded-b-xl px-3 py-2">
        <View className="mb-12">
          <Text className="font-semibold mb-1">{title}</Text>
          <View className="flex flex-row">
            <Icon
              name="star"
              color="yellow500"
              fontSize="xl"
              ml={2}
              fontFamily="FontAwesome"
            />
          </View>
        </View>

        <Text>Read More</Text>
      </View>
    </Pressable>
  )
}

export default CardContentGiliFood