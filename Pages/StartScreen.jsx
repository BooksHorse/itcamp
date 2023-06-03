import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card } from "@rneui/themed";
import { pb } from "../Plugins/pocketbase";
import ListBox from "../Components/ListBox";

export function StartScreen({ navigation }) {
  const [load, setLoad] = React.useState(false);
  const [board, setBoard] = React.useState([]);
  const [scoreboardData, setScoreBoardData] = React.useState([]);
  React.useEffect(() => {
    const getScoreBoardData =  () => {
        pb.collection("leaderboard")
        .getFullList()
        .then((result) => {
            setBoard(result);
        })
        .finally(() => setLoad(false))
        .catch((error) => console.log(error));

        pb.collection("leaderboard")
        .getFullList({ sort: "-score" })
        .then((result) => {
            setScoreBoardData(result);
            console.log(result)
        })
        .finally(() => setLoad(false))
        .catch((error) => console.log(error));
    }
    getScoreBoardData()
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>

      <View
        style={{
          position: "relative",
          
        }}
      >
        <Text style={style.textMain}>LeaderBoard</Text>
      </View>

      <Card containerStyle={style.main}>
        <ScrollView style={style.centerAuto}>
          <View style={{ borderRadius: 10, marginTop:25 }}>
            {scoreboardData.map(({ id, name, score }, index) => {
              return (
                <ListBox
                  style={style.main}
                  id={id}
                  name={name}
                  score={score}
                  key={id}
                  index={index}
                />
              );
            })}
          </View>
        </ScrollView>
      </Card>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  main: {
    position: "relative",
    borderRadius: 15,
    zIndex:-1,
  },

  boxTwo: {
    borderWidth: 2,
    borderColor: "#ffffff",
    width: 300,
    height: 20,
  },

  CardTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    margin: 10,
  },

  Button: {
    backgroundColor: "#1111",
    borderRadius: 5,
    alignItems: "center",
    margin: 10,
    padding: 10,
  },
  textMain: {
    fontSize: 32,
    textAlign: "center",
    color: "#8000FF",
    transform: [{translateY: 35}],
    zIndex:10,
    position:"relative",
    
    

    // fontFamily: "Chakra Petch",
  },
});

function buttonyes(text, func) {
  return (
    <TouchableOpacity style={style.Button} onPress={func}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
// export function StartScreen({navigation}) {
//     return (
//         <View style = {style.container}>

//             {/* <View style={style.container}> */}
//                 <Card>
//                     <Card.Title>Genius</Card.Title>

//                     <TouchableOpacity style = {style.Button}
//                         onPress={() => navigation.navigate('GameScreen')}>
//                         <Text>START</Text>
//                     </TouchableOpacity>
//                 </Card>
//             {/* </View> */}

//         </View>

//     );
// }

// const style =StyleSheet.create({
//     Title:{
//         textAlign: "center",
//         fontSize: 70,
//         fontWeight: "bold",
//         marginBottom: 20,
//     },

//     container:{
//         alignContent: "center",
//         flex: 1,

//     },

//     Button:{
//         alignItems: "center",
//         backgroundColor: '#1111',
//         padding: 10,
//         borderRadius: 30,
//     },

// });
