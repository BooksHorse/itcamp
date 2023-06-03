import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Leaderboard} from './Pages/Leaderboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Leaderboard'>
        <Stack.Screen name='Leaderboard' component={Leaderboard} />
        {/* options={{ title: "Home | MobileAnt App", headerBackVisible: false }} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

