import moment from 'moment/moment';
import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { Button, Toggle } from 'react-native-magnus';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from '../../GLobal/Header';

export default function HeroGiliBoat() {
  const [ppActive, setPpActive] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleConfirm = (selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDate(moment(currentDate).format('dddd DD MMM YYYY'))
    hideDatePicker();
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <View className="relative flex justify-center items-center py-4">
      <Header
        title={'Mau pergi kemana?'}
      />

      <View className="px-5 w-full flex mt-6">
        <View className="rounded-2xl border border-[#BCBCBC] px-3 py-1 bg-white flex w-full">
          <View className="relative border-b border-[#BCBCBC] py-1">
            <Text className="text-[9px] text-[#BCBCBC]">From</Text>
            <TextInput
              cursorColor={'#BCBCBC'}
              defaultValue={'Harbour'}
              className="text-black text-[13px] px-5 pb-1 pt-1"
            />
          </View>

          <View className="relative pt-2 pb-1">
            <Text className="text-[9px] text-[#BCBCBC]">Destination</Text>
            <TextInput
              cursorColor={'#BCBCBC'}
              defaultValue={'Gili Trawangan'}
              className="text-black text-[13px] px-5 pb-1 pt-1"
            />
          </View>

          <View className="absolute flex justify-center -right-56 w-full h-full">
            <View className="bg-white p-2 w-[47px] h-[47px] flex justify-center items-center rounded-full">
              <Pressable>
                {({ pressed }) => (
                  <Image
                    className={`${pressed ? 'scale-90' : ''} w-[32px] h-[32px]`}
                    source={require('../../../assets/static/icons/reverse.png')}
                  />
                )}
              </Pressable>
            </View>
          </View>
        </View>

        <View className="flex flex-row justify-between w-full items-center mt-3">
          <View className="flex flex-row items-center">
            <Text className="font-semibold mr-2">Passenger</Text>
            <View className="flex flex-row items-center">
              <Pressable>
                {({ pressed }) => (
                  <Image
                    className={`${pressed ? 'scale-90' : ''} w-[18px] h-[19px]`}
                    source={require('../../../assets/static/icons/minus.png')}
                  />
                )}
              </Pressable>
              <Text className="text-[13px] mx-2">1</Text>
              <Pressable>
                {({ pressed }) => (
                  <Image
                    className={`${pressed ? 'scale-90' : ''} w-[18px] h-[19px]`}
                    source={require('../../../assets/static/icons/plus-blue.png')}
                  />
                )}
              </Pressable>
            </View>
          </View>

          <View className="flex flex-row items-center">
            <Text className="font-semibold mr-2">pulang pergi</Text>

            <Toggle
              on={ppActive}
              onPress={() => setPpActive(prev => !prev)}
              bg="#BCBCBC"
              circleBg="#84DFFF"
              activeBg="#84DFFF"
              h={15}
              w={30}
            />
          </View>
        </View>

        <View className="flex flex-col justify-start mt-4">
          <Pressable onPress={showDatePicker}>
            <Text className="font-semibold mr-2">Date</Text>
            <View className="flex justify-center items-start">
              <Text className="text-[13px] border-b py-1">{showDate}</Text>
            </View>
          </Pressable>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <Button
          loading={false}
          block
          bg="#004AAD"
          rounded={15}
          color="white"
          mt="xl"
          mb={'md'}
          alignSelf="center"
          alignItems='center'
          py={7}
        >
          <Text className="text-white font-bold text-[22px]">Searching</Text>
        </Button>

        <View className="border-b border-[#BCBCBC] mt-3" />
      </View>
    </View>
  )
}