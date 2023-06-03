import * as React from "react";
import { Button, View, StyleSheet ,Text} from "react-native";
import {pb} from '../Plugins/pocketbase'

export function ButtonsChoice({choices,press}) {
  console.log("fdasfsfffff",choices);
  return (
    <View>
      <View style={style.row}>
          <View style={style.gridContainer}>
            <Button onPress={() =>press(0,choices.correct)} title={choices.choice[0]|| "null0" }></Button>
            <Button onPress={() => press(1,choices.correct)} title={choices.choice[1] || "null1"}></Button>
          </View>
      </View>
      <View style={style.row}>
          <View style={style.gridContainer}>
            <Button onPress={() => press(2,choices.correct)} title={choices.choice[2]  || "null2"}></Button>
            <Button onPress={() =>press(3,choices.correct)} title={choices.choice[3] || "null3"}></Button>
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
