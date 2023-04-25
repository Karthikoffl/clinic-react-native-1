import { View, Text, SafeAreaView, Image, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';

const Welcome = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-col items-center">
        <View className="flex-row container">
            <Image source={{ uri : "https://previews.123rf.com/images/irfanfirdaus/irfanfirdaus2003/irfanfirdaus200300016/143492365-vector-illustration-mobile-online-shopping-women-shop-online-with-smartphone-mobile-shopping-concept.jpg" }} className="items-center justify-center w-full h-60" />
        </View>
        <View className="flex-1 items-center pt-5 mb-10">
            <Text className="font-bold text-2xl pt-3">Welcome to IDEAS BOX</Text>
            <Text className="pt-3 text-[#999594]">Select your language</Text>
        </View>

        <View className="flex-row content-start px-5 py-1 w-[320px] border-2 border-sky-300 rounded-md">
            {/* <CheckBox/> */}
            <Button
                title="English"
                color="black"
                fontWeight="bold"
                onPress={() => {
                    navigation.navigate('OnBoardingScreen');
                }}
                />
        </View>
        <View className="flex-row items-center justify-start px-5 py-1 w-[320px] bg-white-600">
            {/* <CheckBox/> */}
            <Button 
                title="Arabic"
                color="black"
                fontWeight="bold"
                onPress={() => {}}
            />
        </View>

    </SafeAreaView>
  )
}

export default Welcome