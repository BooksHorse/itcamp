import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

function ListBox({ id, name, score, index }) {

  useEffect(() => {
    console.log(index)
  }, [])

  const colorCode = ["#F1C54E", "#276D48", "#9B59B6"] //
  const marginSize = [45, 45, 45, 45]
  const colorTextMain = ["#BB7542", "#8BEAB8", "#F6B4FF"]

  const colorStyles = StyleSheet.create({
    rankingColor: {
      backgroundColor: index > 2 ? "#969696" : colorCode[index],
       marginTop: index > 3 ? 25 : marginSize[index],
    }
  })
  
  const colorStylesTwo = StyleSheet.create({
    rankingColorMain: {
      color: index > 2 ? "#1C1C1C" : colorTextMain[index],
    }
  })

  return (
    <ScrollView style={{ borderRadius:25 }}>
      <View style={{...style.boxMain, ...colorStyles.rankingColor}}>
        <View
          style={{
            
            position: "absolute",

            transform: [{ translateX: 4 }, { translateY: -20 }],
          }}>
          <Text style={{ ...colorStylesTwo.rankingColorMain, fontSize: 35 }}>{index+1}</Text>
        </View>

        <View style={style.textInside}>
          <Text style={style.textInsideTwo} >{`Name : ${name} Score : ${score}`}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
    boxMain: {
      width: 300,
      position: "relative",
      height: 50,
      marginTop: 15,
      paddingBottom:15,
      

      flex: 0,
      flexDirection: "column",
      alignSelf:"center",
      borderRadius: 10,
      // zIndex:-1,
      shadowColor: "#000",
      shadowOffset:{
      width: 0,
      height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
    },
    centerAuto: {
      flex: 1,
      alignSelf: "center",
      marginTop: 25,
      borderRadius:25,
    },
    textInside: {
      fontSize: 25,
      // fontFamily:,
      marginLeft: 25,
      color:"#ffffff",
    },

    textInsideTwo:{
      textAlign:"center",
      color:"white",
      textTransform: 'capitalize'
      
    },

    marginRanks:{
      marginTop:15,
    },
  });

export default ListBox;