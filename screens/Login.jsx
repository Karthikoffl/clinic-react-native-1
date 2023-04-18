import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="font-bold text-2xl">Login</Text>
      <Button 
                title="Login"
                color="black"
                fontWeight="bold"
                onPress={() => {
                    navigation.navigate('Home');
                }}
        />
        <Button 
                title="Sign Up"
                color="black"
                fontWeight="bold"
                onPress={() => {
                    navigation.navigate('Register');
                }}
        /> 
    </SafeAreaView>
  )
}

export default Login