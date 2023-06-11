import { View, Text, Dimensions, Image, Pressable } from 'react-native'
import React from 'react'
import Header from '../../GLobal/Header'
import Carousel from 'react-native-reanimated-carousel';

const WIDTH = Dimensions.get('window').width;

const FAKE = [
  {
    name: 'test',
    urlImg: require('../../../assets/static/samples/banner-gilifood.png')
  },
  {
    name: 'test',
    urlImg: require('../../../assets/static/samples/banner-gilifood.png')
  },
  {
    name: 'test',
    urlImg: require('../../../assets/static/samples/banner-gilifood.png')
  }
]

const HeroGiliFood = () => {
  return (
    <View className="flex flex-col pt-10 bg-[#004AAD]">
      <Header
        type={'white'}
        title={"GiliFood"}
      />

      <Carousel
        style={{ marginTop: 8 }}
        loop
        width={WIDTH}
        height={WIDTH / 2}
        autoPlay={true}
        autoPlayInterval={5000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={FAKE}
        scrollAnimationDuration={1000}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => console.log(index)}>
            <Image
              className="w-full h-[200px]"
              source={item.urlImg}
            />
          </Pressable>
        )}
      />
    </View>
  )
}

export default HeroGiliFood