import { View, Text, Dimensions, Pressable, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';

const WIDTH = Dimensions.get('window').width;

const FAKE = [
  {
    name: 'test',
    urlImg: require('../../../assets/static/samples/banner.png')
  },
  {
    name: 'test',
    urlImg: require('../../../assets/static/samples/banner.png')
  },
  {
    name: 'test',
    urlImg: require('../../../assets/static/samples/banner.png')
  }
]

export default function CarouselHome() {

  return (
    <View className="py-3">
      <Carousel
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
        // onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => console.log(index)}>
            <Image
              className="w-full h-[200px] rounded-[10px]"
              source={item.urlImg}
            />
          </Pressable>
        )}
      />
    </View>
  )
}