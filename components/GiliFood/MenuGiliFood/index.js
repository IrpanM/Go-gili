import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const MENU = [
  {
    name: 'Makanan',
    urlImg: require('../../../assets/static/giliFood/makanan.png')
  },
  {
    name: 'Minuman',
    urlImg: require('../../../assets/static/giliFood/minuman.png')
  },
  {
    name: 'Tradisional',
    urlImg: require('../../../assets/static/giliFood/tradisional.png')
  },
  {
    name: 'Rekomendasi Sekitar',
    urlImg: require('../../../assets/static/giliFood/rekomendasi.png')
  },
  {
    name: 'Buah Buahan',
    urlImg: require('../../../assets/static/giliFood/buahbuahan.png')
  }
]

const MenuGiliFood = () => {
  return (
    <View horizontal className="flex flex-row justify-between px-5 py-6">
      {
        MENU.map((item, index) =>
          <View key={index} className={`flex flex-col items-center w-[59px] ${index === 0 ? '' : 'ml-3'}`}>
            <Image
              className="w-[35px] h-[35px]"
              source={item.urlImg}
            />
            <Text className="text-[9px] text-center">{item.name}</Text>
          </View>
        )
      }
    </View>
  )
}

export default MenuGiliFood