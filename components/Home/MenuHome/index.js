import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const DATA_MENU = [
  {
    name: 'Info Desa',
    icon: require('../../../assets/static/home/info-desa.png')
  },
  {
    name: 'Gili Karya Bahari',
    icon: require('../../../assets/static/home/gili-karya-bahari.png')
  },
  {
    name: 'Gili Boat',
    icon: require('../../../assets/static/home/gili-boat.png')
  },
  {
    name: 'Gili Horse Cart',
    icon: require('../../../assets/static/home/gili-horse-cart.png')
  },
  {
    name: 'Gili Hotel',
    icon: require('../../../assets/static/home/gili-hotel.png')
  },
  {
    name: 'Gili Food',
    icon: require('../../../assets/static/home/gili-food.png')
  },
  {
    name: 'Gili Lang-lang',
    icon: require('../../../assets/static/home/gili-lang-lang.png')
  },
  {
    name: 'Other',
    icon: require('../../../assets/static/home/other.png')
  }
]

export default function MenuHome({ refKaryaBahari, refOther }) {
  const navigation = useNavigation();

  const onOpenOther = () => {
    refOther.current?.open();
  };

  const onOpenKaryaBahari = () => {
    refKaryaBahari.current?.open();
  };

  const onPress = (index) => {
    if (index === 7) {
      onOpenOther()
    } else if (index === 1) {
      onOpenKaryaBahari()
    } else if (index === 3) {
      navigation.navigate('GiliHorseCart')
    } else if (index === 2) {
      navigation.navigate('GiliBoat')
    } else if (index === 5) {
      navigation.navigate('GiliFood')
    } else console.log(null)
  }

  return (
    <View className="flex flex-row flex-wrap ">
      {
        DATA_MENU.map((item, index) =>
          <TouchableOpacity
            key={index}
            className="basis-1/4 mb-3"
            onPress={() => onPress(index)}
          >
            <View className="flex flex-col items-center">
              <Image
                className="w-[72px] h-[72px]"
                source={item.icon}
              />
              <Text className="text-[9px]">{item.name}</Text>
            </View>
          </TouchableOpacity>
        )
      }
    </View>
  )
}