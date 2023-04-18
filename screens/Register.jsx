import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="font-bold text-2xl">Register</Text>
      <Button 
                title="Verify Using OTP"
                color="black"
                fontWeight="bold"
                onPress={() => {
                    navigation.navigate('OtpVerify');
                }}
        />
      <Button 
                title="Back to Login"
                color="black"
                fontWeight="bold"
                onPress={() => {
                    navigation.navigate('Login');
                }}
        />
    </SafeAreaView>
  )
}

export default Register