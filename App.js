import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {StartScreen} from './Pages/StartScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartScreen'>
        <Stack.Screen name='StartScreen' 
          options={{ title: 'START',
            headerStyle:{
              backgroundColor: ""
            },
            headerTitleAlign: "center",
            headerTitleStyle:{
              fontSize: 15,
              fontWeight: "bold",
              color: "black"

            }
         }} 
          component={StartScreen}  />
        <Stack.Screen
          name="Profile"
          component={StartScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        {/* options={{ title: "Home | MobileAnt App", headerBackVisible: false }} */}
      </Stack.Navigator>
    </NavigationContainer>
  );

  
}

