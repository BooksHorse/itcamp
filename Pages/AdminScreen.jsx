import * as React from 'react';
import { Button , View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { Card } from '@rneui/themed';
import {pb} from "../Plugins/pocketbase"


export function AdminScreen({navigation}) {
    const [load,setLoad] = React.useState(false);
    const [board,setBoard] = React.useState([]);
    React.useEffect(() => {
        pb.collection('leaderboard').getFullList({
            sort: '-score',
        })
        .then(setBoard).finally( () =>setLoad(true));
    });
    return (
        <View >
            
            {load && board.map((bo) =>boardentry(bo), key={id} )  }
        </View>

    );
}


function boardentry(entry) {


    return (

        <><Button style={style.delbutton} title="X" onPress={() => {pb.collection('leaderboard').delete(entry.id) } }></Button><Text>{entry.name} {entry.score}</Text></>
    )
}

const style= StyleSheet.create({
    delbutton:{
        width:30
    }
})