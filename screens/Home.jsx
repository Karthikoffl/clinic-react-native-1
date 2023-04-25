import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  return (
    <SafeAreaView className="flex-1 relative bg-white">
        <View className="flex-row px-5 mt-2 items-center justify-between shadow-lg">
            <TouchableOpacity className="bg-grey-400 rounded-md w-12 h-12 items-center justify-center border">
                <Image
                    source={require('../assets/menu.png')}
                    style={{ width: 30, height: 30, color: '#08c1ff' }}
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-grey-400 rounded-md w-12 h-12 items-center justify-center border">
                <Ionicons name="notifications" size={30} color="#08c1ff" />
            </TouchableOpacity>
        </View>
        <View className="flex-row px-6 mt-10 items-center space-x-2 ">
            <Text className="font-semibold text-2xl text-red-400">Hi,</Text>
            <Text className="font-semibold text-2xl">Mohammed</Text>
        </View>
        <View className="px-6 mt-4">
            <Text className="font-bold text-3xl">Welcome Back</Text>
        </View>
        <View>
            
        </View>
    
    </SafeAreaView>
  )
}

export default Home