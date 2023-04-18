import { View, Text, Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';


const OnBoardingScreen = () => {
    const navigation = useNavigation();
  return (
    <Onboarding
    onSkip={() => navigation.navigate('Login')}
    onDone={() => navigation.navigate('Login')}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={{ uri : "https://previews.123rf.com/images/irfanfirdaus/irfanfirdaus2003/irfanfirdaus200300016/143492365-vector-illustration-mobile-online-shopping-women-shop-online-with-smartphone-mobile-shopping-concept.jpg" }} className="w-60 h-60 object-contain" />,
      title: 'Screen 1',
      subtitle: 'Done with React Native Onboarding Swiper',
      bottomBarColor: '#fff',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={{ uri : "https://cdn.dribbble.com/users/1458982/screenshots/4291206/sign-in-dribble.png?compress=1&resize=400x300&vertical=top" }} className="w-60 h-60 object-contain" />,
        title: 'Screen 2',
        subtitle: 'Done with React Native Onboarding Swiper',
        bottomBarColor: '#fff',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={{ uri : "https://thumbs.dreamstime.com/b/woman-shopping-sales-happy-young-holding-paper-bags-enjoying-126694001.jpg" }} className="w-60 h-60 object-contain" />,
        title: 'Screen 3',
        subtitle: 'Done with React Native Onboarding Swiper',
        bottomBarColor: '#fff',
    },
  ]}
/>
  )
}

export default OnBoardingScreen