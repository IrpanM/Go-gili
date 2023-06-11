import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SectionList, Text, View } from 'react-native'
import CardMarketDetail from '../../components/GiliFood/MarketDetail/CardMarketDetail'
import HeroMarketDetail from '../../components/GiliFood/MarketDetail/HeroMarketDetail'

const DATA = [
  {
    title: "Menu sate",
    data: ["Pizza", "Burger"]
  },
  {
    title: "Menu Minuman",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Menu Tambahan",
    data: ["Water", "Coke"]
  }
];

const MarketDetail = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={
          <HeroMarketDetail />
        }
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-base font-medium px-4 mt-7">{title}</Text>
        )}
        renderItem={({ item }) =>
          <View className="px-4">
            <CardMarketDetail navigation={navigation} />
          </View>
        }
      />
    </View>
  )
}

export default MarketDetail