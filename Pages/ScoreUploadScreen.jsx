import * as React from 'react';
import { Button , View,Text,StyleSheet, TouchableOpacity,TextInput} from 'react-native';
import { scoreContext } from "../App";
import {pb} from "../Plugins/pocketbase"

export function ScoreUploadScreen({navigation}) {
    const [name,setName] = React.useState("");
    let score = React.useContext(scoreContext);
    async function uploadScore() {

        const data = {
            name,
            score
        };
        
        const record = await pb.collection('leaderboard').create(data);
        navigation.goBack();
        navigation.goBack();
        
    }
    return (
        <View >
        <Text >Your Score: {score}</Text>
        <TextInput value={name} onChangeText={setName} placeholder="Your username">
        </TextInput>
        <Button title='Finish' onPress={uploadScore}>
        
        </Button>
        </View>
    
    );
}
