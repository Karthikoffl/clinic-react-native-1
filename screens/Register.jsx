import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'react-native-check-box';

const Register = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <ScrollView className='w-full'>
        <View className='flex-1 container relative items-center'>
          <Image source={{ uri : "https://previews.123rf.com/images/irfanfirdaus/irfanfirdaus2003/irfanfirdaus200300016/143492365-vector-illustration-mobile-online-shopping-women-shop-online-with-smartphone-mobile-shopping-concept.jpg" }} className="items-center justify-center w-full h-60" />
        </View>
        <View className='w-full pt-10 mb-10'>
          <View className='flex'>
            <Text className='pl-10 font-semibold text-2xl'>Sign Up</Text>
            <Text className='pl-10 text-[#848181]'>Create a new account</Text>
          </View>
            <TextInput className='h-12 pl-5 border-2 mt-10 ml-10 mr-10 border-gray-300 rounded-sm' placeholder='User Name'/>
            <TextInput className='h-12 pl-5 border-2 mt-5 ml-10 mr-10 border-gray-300 rounded-sm' keyboardType="numeric" placeholder='Age'/>
            <TextInput className='h-12 pl-5 border-2 mt-5 ml-10 mr-10 border-gray-300 rounded-sm' keyboardType="numeric" placeholder='Mobile No'/>
            <TextInput className='h-12 pl-5 border-2 mt-5 ml-10 mr-10 border-gray-300 rounded-sm' placeholder='Email ID'/>
            <TextInput className='h-12 pl-5 border-2 mt-5 ml-10 mr-10 border-gray-300 rounded-sm' placeholder='Password'/>
            <TextInput className='h-12 pl-5 border-2 mt-5 ml-10 mr-10 border-gray-300 rounded-sm' placeholder='Country'/>
          <View className='flex-row p-3 mb-0 w-full items-center justify-center'>
            <CheckBox className='pl-5 pr-2' isChecked = {isChecked} onClick={ () => setIsChecked(!isChecked) } checkedCheckBoxColor='#05b3f7' uncheckedCheckBoxColor='grey'/>
            <Text className='items-center justify-center'>I agree all Terms & Conditions</Text>
          </View>
          <View className='pl-10 pr-10'>
            <TouchableOpacity className='bg-sky-400 h-10 items-center justify-center rounded-sm' onPress={() => {
              navigation.navigate('Home');
            }}>
              <Text className='text-white font-semibold text-md'>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row items-center justify-center mt-3'>
          <Text className='p-1'>Already have an account?</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Login');
            }}>
              <Text className='p-1 text-sky-500 font-semibold'>Login</Text>
            </TouchableOpacity>
            </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;