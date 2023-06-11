import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { Modalize } from 'react-native-modalize'

const DATA_OTHER = [
  {
    name: 'Gili Digital',
    icon: require('../../../assets/static/home/gili-digital.png')
  },
  {
    name: 'Gili Kurir',
    icon: require('../../../assets/static/home/gili-kurir.png')
  },
  {
    name: 'Gili Mart',
    icon: require('../../../assets/static/home/gili-mart.png')
  },
  {
    name: 'Gili Rent Bike',
    icon: require('../../../assets/static/home/gili-rent-bike.png')
  },
  {
    name: 'Gili Laundry',
    icon: require('../../../assets/static/home/gili-laundry.png')
  },
  {
    name: 'Gili Trash',
    icon: require('../../../assets/static/home/gili-massage.png')
  },
  {
    name: 'Gili Service',
    icon: require('../../../assets/static/home/gili-service.png')
  },
  {
    name: 'Gili Medical',
    icon: require('../../../assets/static/home/gili-medical.png')
  },
  {
    name: 'Gili Dongol',
    icon: require('../../../assets/static/home/gili-dongol.png')
  }
]

const DATA_KARYA_BAHARI = [
  {
    name: 'Fast Boat',
    icon: require('../../../assets/static/home/fast-boat.png')
  },
  {
    name: 'Public Boat',
    icon: require('../../../assets/static/home/public-boat.png')
  }
]

const HEIGHT = Dimensions.get('window').height;

export default function ModalMenu({ type, refOther, refKaryaBahari }) {
  switch (type) {
    case 'other':
      return (
        <Modalize ref={refOther} modalHeight={HEIGHT / 2}>
          <View className="flex flex-row flex-wrap pt-8">
            {
              DATA_OTHER.map((item, index) =>
                <TouchableOpacity key={index} className="basis-1/4 mb-3">
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
        </Modalize>
      )

    case 'karya-bahari':
      return (
        <Modalize ref={refKaryaBahari} modalHeight={HEIGHT / 3.2}>
          <View className="flex flex-row flex-wrap pt-8">
            {
              DATA_KARYA_BAHARI.map((item, index) =>
                <TouchableOpacity key={index} className="basis-1/2 mb-3">
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
        </Modalize>
      )

    default:
      return (
        <Modalize ref={modalRef}>
          <Text>Test Modal</Text>
        </Modalize>
      )

  }
}