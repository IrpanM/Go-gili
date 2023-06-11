import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CardContentGiliFood from './CardContentGiliFood';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Sate Mas Gunjay',
    img: require('../../../assets/static/samples/sate.png'),
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

const ContentGiliFood = () => {
  return (
    <View>
      <Text className="text-base font-semibold px-5 mb-1">Promo hari ini</Text>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          <CardContentGiliFood
            img={item.img}
            title={item.title}
          />
        }
        keyExtractor={item => item.id}
        ListFooterComponent={
          <View className=" ml-5" />
        }
      />

      <Text className="text-base font-semibold px-5 mt-5 mb-1">Resto sekitar</Text>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          <CardContentGiliFood
            img={item.img}
            title={item.title}
          />
        }
        keyExtractor={item => item.id}
        ListFooterComponent={
          <View className=" ml-5" />
        }
      />
    </View>
  )
}

export default ContentGiliFood