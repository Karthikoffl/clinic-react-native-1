import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const OtpVerify = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="font-bold text-2xl">OtpVerify</Text>
      <Button 
                title="Back To Login"
                color="black"
                fontWeight="bold"
                onPress={() => {
                    navigation.navigate('Login');
                }}
        />
    </SafeAreaView>
  )
}

export default OtpVerify