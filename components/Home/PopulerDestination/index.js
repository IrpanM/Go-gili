import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-magnus';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Desa Sade',
    img: require('../../../assets/static/samples/banner-destinasi.png'),
    star: 3
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: require('../../../assets/static/samples/banner-destinasi.png'),
    star: 4
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img: require('../../../assets/static/samples/banner-destinasi.png'),
    star: 5
  },
];

const Card = ({ item }) => (
  <View className="rounded-xl ml-5">
    <Image
      className="w-[141px] h-[100px]"
      source={item.img}
    />
    <View className="border border-t-0 border-[#DADADA] rounded-b-xl px-3 py-2">
      <View className="mb-12">
        <Text className="font-semibold mb-1">{item.title}</Text>
        <View className="flex flex-row">
          {/* {item.star} */}
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
  </View>
)

export default function PopulerDestination() {
  return (
    <View className="flex w-full">
      <Text className="font-semibold text-base ml-7 mb-2">Populer Destination</Text>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={Card}
        keyExtractor={item => item.id}
      />
    </View>
  )
}