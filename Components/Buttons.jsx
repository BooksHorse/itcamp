import * as React from "react";
import { View, StyleSheet } from "react-native";
import {Button,Text} from  'react-native-paper';
import {pb} from '../Plugins/pocketbase'
import { useTheme } from 'react-native-paper';

export function ButtonsChoice({choices,press}) {
  
  const theme = useTheme();
  console.log("fdasfsfffff",choices);
  return (
    <View >
      <View style={style.row}>
          <View style={style.gridContainer}>
            <Button contentStyle={{margin:5,height:80}} style={{margin:5}}  mode="contained" onPress={() =>press(0,choices.correct)} title={choices.choice[0]|| "null0" }>{choices.choice[0]|| "null0" }</Button>
            <Button contentStyle={{margin:5,height:80}} style={{margin:5}} mode="contained" onPress={() => press(1,choices.correct)} title={choices.choice[1] || "null1"}>{choices.choice[1] || "null1"}</Button>
          </View>
      </View>
      <View style={style.row}>
          <View style={style.gridContainer}>
            <Button contentStyle={{margin:5,height:80}}style={{margin:5}} mode="contained" onPress={() => press(2,choices.correct)} title={choices.choice[2]  || "null2"}>{choices.choice[2]  || "null2"}</Button>
            <Button contentStyle={{margin:5,height:80}} style={{margin:5}} mode="contained" onPress={() =>press(3,choices.correct)} title={choices.choice[3] || "null3"}>{choices.choice[3] || "null3"}</Button>
          </View>
      </View>
    </View>

    
  );
}

const style = StyleSheet.create({
  gridContainer: {
    flex: 2,
    marginHorizontal: "auto",
    width: 400,
  },
  row: {
    flexDirection: "row",
  },
});
