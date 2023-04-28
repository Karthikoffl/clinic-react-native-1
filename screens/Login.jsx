import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'react-native-check-box';
import { TextInput } from 'react-native-paper';


const Login = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View className='flex-1 container relative items-center'>
        <Image source={{ uri : "https://previews.123rf.com/images/irfanfirdaus/irfanfirdaus2003/irfanfirdaus200300016/143492365-vector-illustration-mobile-online-shopping-women-shop-online-with-smartphone-mobile-shopping-concept.jpg" }} className="items-center justify-center w-full h-60" />
      </View>
      <View className='w-full pt-10'>
          <View className='mt-40 flex'>
            <Text className='pl-10 font-semibold text-2xl'>Welcome Back!</Text>
            <Text className='pl-10 text-[#848181]'>Login to continue</Text>
          </View>
            <TextInput mode='outlined' activeOutlineColor='#00b3ff' className='h-12 pl-5 mt-10 ml-10 mr-10 rounded-sm' label='User Name'/>
            <TextInput mode='outlined' activeOutlineColor='#00b3ff' className='h-12 pl-5 mt-5 ml-10 mr-10 rounded-sm' label='Password'/>
          <View className='flex-row p-3 mb-0 w-full items-center justify-center'>
            <CheckBox className='pl-5 pr-2' isChecked = {isChecked} onClick={ () => setIsChecked(!isChecked) } checkedCheckBoxColor='#05b3f7'/>
            <Text className='items-center justify-center'>Remember me</Text>
            <TouchableOpacity>
              <Text className='text-red-300 pl-20 pr-5'>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View className='pl-10 pr-10'>
            <TouchableOpacity className='bg-sky-400 h-10 items-center justify-center rounded-sm' onPress={() => {
              navigation.navigate('Home');
            }}>
              <Text className='text-white font-semibold text-md'>Login</Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row items-center justify-center mt-3'>
          <Text className='p-1'>Don't have an account?</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Register');
            }}>
              <Text className='p-1 text-sky-500 font-semibold'>Sign Up</Text>
            </TouchableOpacity>
            </View>
            <View className='items-center justify-center p-5'>
              <Text>or</Text>
            </View>
            <View className='pl-10 pr-10 pb-20'>
              <TouchableOpacity className='border-2 border-green-500 rounded-sm items-center justify-center h-10 w-100%' onPress={() => {
              navigation.navigate('Home');
            }}>
                <Text className='text-green-600'>Continue as guest</Text>
              </TouchableOpacity>
            </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;