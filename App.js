import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StartScreen } from "./Pages/StartScreen";
import { GameScreen } from "./Pages/GameScreen";
//import {StartScreen} from './Pages/StartScreen';
import { DeviceEventEmitter } from "react-native";
import { ScoreUploadScreen } from "./Pages/ScoreUploadScreen";
const Stack = createNativeStackNavigator();
export const scoreContext = React.createContext(0);
export default function App() {
  let [currentScore, setCurrentScore] = React.useState(0);

  function setScore(score) {
    setCurrentScore(score);
  }

  DeviceEventEmitter.addListener("event.scored", (eventData) => {
    setCurrentScore(currentScore + 1);
    console.log("Score:", currentScore);
  });
  return (
    <scoreContext.Provider value={currentScore}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartScreen">
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen
            name="ScoreUploadScreen"
            component={ScoreUploadScreen}
          />
          <Stack.Screen
            name="GameScreen"
            component={GameScreen}
          />

          {/* <Stack.Screen name='StartScreen' component={StartScreen}  />  */}
          {/* options={{ title: "Home | MobileAnt App", headerBackVisible: false }} */}
        </Stack.Navigator>
      </NavigationContainer>
    </scoreContext.Provider>
  );
}
