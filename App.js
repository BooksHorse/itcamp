import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {GameScreen} from './Pages/GameScreen';
//import {StartScreen} from './Pages/StartScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GameScreen'>
        <Stack.Screen name='GameScreen' component={GameScreen} />
        {/* <Stack.Screen name='StartScreen' component={StartScreen}  />  */}
        {/* options={{ title: "Home | MobileAnt App", headerBackVisible: false }} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

