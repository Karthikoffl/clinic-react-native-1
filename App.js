import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, OnBoardingScreen, Welcome, Login, Register, OtpVerify } from './screens';
import { TailwindProvider } from 'tailwindcss-react-native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Welcome" component={ Welcome } />
          <Stack.Screen options={{ headerShown: false }} name="OnBoardingScreen" component={ OnBoardingScreen } />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={ Login } />
          <Stack.Screen options={{ headerShown: false }} name="Register" component={ Register } />
          <Stack.Screen options={{ headerShown: false }} name="OtpVerify" component={ OtpVerify } />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={ Home } />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
