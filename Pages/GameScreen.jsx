import * as React from "react";
import { Button, View, StyleSheet,Text } from "react-native";
import { ButtonsChoice } from "../Components/Buttons";
import {pb} from '../Plugins/pocketbase'

export function GameScreen() {
    /**
 * @type {name:string,content:{choices:string[4],correct:number}}
 */
    const [questions,setquestions] = React.useState([]);
    const [title,setTitle] = React.useState("");
    const [currentQuestionNo,setcurrentQuestionNo] = React.useState(0);
    const [choice,setChoice] = React.useState([]);
    let a = false;
React.useEffect(async () => {
    let questionss = await pb.collection('question').getFullList();
    setquestions(questionss);
    console.log(questionss);
    setTitle(questionss[currentQuestionNo].title);
    setChoice(questionss[currentQuestionNo].content);
    console.log("sdad",questionss[currentQuestionNo].content);
    a=true;
},[])
   

 

     const [selectedChoice,setselectedChoice] = React.useState(-1);
    
     function onPress(choice,correct) {
        setTitle(questions[currentQuestionNo].title);
        setselectedChoice(choice);
        console.log(choice);
         if (choice === correct) {
            console.log("correct");
            
             if (currentQuestionNo+1 !== questions.length) {
             setcurrentQuestionNo(currentQuestionNo+1)
             
             }
             else {
                 //finish game
             }
             setTitle(questions[currentQuestionNo].title);
         }
     }

     function changequestion() {
        setTitle(questions[currentQuestionNo].title);
     }


  return (
    <View>
        <Text>current choice :{selectedChoice}</Text>

        <Text>q no :{currentQuestionNo}</Text>

        <Text>{title}</Text>

{ a==true && <ButtonsChoice choices={{choice}} press={onPress}></ButtonsChoice>
}


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
