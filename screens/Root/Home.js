import { LinearGradient } from 'expo-linear-gradient'
import React, { useRef } from 'react'
import { ScrollView, View } from 'react-native'

import CarouselHome from '../../components/Home/CarouselHome'
import GPay from '../../components/Home/GPay'
import MenuHome from '../../components/Home/MenuHome'
import ModalMenu from '../../components/Home/ModalMenu'
import PopulerDestination from '../../components/Home/PopulerDestination'
import SearchHome from '../../components/Home/SearchHome'
import SuggestDestinasi from '../../components/Home/SuggestDestinasi'

export default function Home() {
  const refOther = useRef(null);

  const refKaryaBahari = useRef(null);

  return (
    <LinearGradient
      colors={['#84DFFF', '#0F2E68']}
      end={{ x: 0.9, y: 0.3 }}
      style={{
        flex: 1
      }}
    >
      <ScrollView>
        <SuggestDestinasi />
        <View className="flex-1 bg-white rounded-t-xl items-center mt-1 pb-16">
          <View className="w-full px-7">
            <SearchHome />

            <GPay />
          </View>

          <CarouselHome />

          <MenuHome
            refOther={refOther}
            refKaryaBahari={refKaryaBahari}
          />

          <PopulerDestination />
        </View>
      </ScrollView>

      <ModalMenu
        type={'karya-bahari'}
        refKaryaBahari={refKaryaBahari}
      />

      <ModalMenu
        type={'other'}
        refOther={refOther}
      />
    </LinearGradient>
  )
}