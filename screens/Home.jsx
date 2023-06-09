import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  return (
    <SafeAreaView className="flex-1 relative bg-white">
        <View className="flex-row px-5 mt-5 items-center justify-between shadow-lg">
            <TouchableOpacity className="rounded-md w-10 h-10 items-center justify-center bg-white shadow-sm">
                <Image
                    source={require('../assets/menu.png')}
                    style={{ width: 25, height: 25, color: '#08c1ff' }}
                />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-md w-10 h-10 items-center justify-center bg-white shadow-sm">
                <Ionicons name="notifications" size={25} color="#08c1ff" />
            </TouchableOpacity>
        </View>
        <View className="flex-row px-6 mt-10 items-center space-x-2 ">
            <Text className="font-semibold text-2xl text-red-400">Hi,</Text>
            <Text className="font-semibold text-2xl">User</Text>
        </View>
        <View className="px-6 mt-1">
            <Text className="font-bold text-3xl">Welcome Back</Text>
        </View>
        <View className='flex-row pl-7 pr-7 pt-3 pb-3 mt-3 ml-2 mr-2 shadow-xl justify-between items-center bg-white rounded-lg'>
            <TextInput className='text-lg' placeholder='Find Your Course...'/>
            <Feather name="search" size={28} color="grey" onPress={() => {}} />
        </View>
        <ScrollView className='w-full h-full'>
            <View className='flex-row items-center justify-between px-5 pt-10 mb-0'>
                <Text className='text-2xl font-bold border-b-4 border-b-orange-500 '>Activities</Text>
                <TouchableOpacity><Text className='font-semibold'>View All</Text></TouchableOpacity>
            </View>
            <Text className='px-6 mt-4 text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. sakdjfbkas jkasf aasrf asfdas.
            </Text>
            <View className='flex-row'>
                <View className='flex-1 ml-3 mr-3 mb-5 mt-5'>
                    <Card className='items-center'>
                        <Card.Title title="test" />
                        <Card.Cover source={{ uri: 'https://media.istockphoto.com/id/1334419989/photo/3d-red-question-mark.jpg?s=612x612&w=0&k=20&c=bpaGVuyt_ACui3xK8CvkeoVQC-jczxANZTMXGKAE11E=' }} style={{width: 150, height: 150}} />
                        <Card.Content>
                            <Text variant="titleLarge">Card title</Text>
                            <Text variant="bodyMedium">Card title</Text>
                        </Card.Content>
                    </Card>
                </View>
                <View className='flex-1 pl-3 pr-3 pb-5 pt-5'>
                    <Card className='items-center'>
                        <Card.Title title="test" />
                        <Card.Cover source={{ uri: 'https://media.istockphoto.com/id/1334419989/photo/3d-red-question-mark.jpg?s=612x612&w=0&k=20&c=bpaGVuyt_ACui3xK8CvkeoVQC-jczxANZTMXGKAE11E=' }} style={{width: 150, height: 150}} />
                        <Card.Content>
                            <Text variant="titleLarge">Card title</Text>
                            <Text variant="bodyMedium">Card title</Text>
                        </Card.Content>
                    </Card>
                </View>
            </View>
            <View className='flex-row'>
                <View className='flex-1 pl-3 pr-3 pb-5 pt-5'>
                    <Card className='items-center'>
                        <Card.Title title="test" />
                        <Card.Cover source={{ uri: 'https://media.istockphoto.com/id/1334419989/photo/3d-red-question-mark.jpg?s=612x612&w=0&k=20&c=bpaGVuyt_ACui3xK8CvkeoVQC-jczxANZTMXGKAE11E=' }} style={{width: 150, height: 150}} />
                        <Card.Content>
                            <Text variant="titleLarge">Card title</Text>
                            <Text variant="bodyMedium">Card title</Text>
                        </Card.Content>
                    </Card>
                </View>
                <View className='flex-1 pl-3 pr-3 pb-5 pt-5'>
                    <Card className='items-center'>
                        <Card.Title title="test" />
                        <Card.Cover source={{ uri: 'https://media.istockphoto.com/id/1334419989/photo/3d-red-question-mark.jpg?s=612x612&w=0&k=20&c=bpaGVuyt_ACui3xK8CvkeoVQC-jczxANZTMXGKAE11E=' }} style={{width: 150, height: 150}} />
                        <Card.Content>
                            <Text variant="titleLarge">Card title</Text>
                            <Text variant="bodyMedium">Card title</Text>
                        </Card.Content>
                    </Card>
                </View>
            </View>
            <View className='flex-row items-center justify-between px-5 pt-10 mb-0'>
                <Text className='text-2xl font-bold border-4 border-b-orange-500'>Your Category</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home