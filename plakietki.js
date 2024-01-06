import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function Card({refresh,timeZone}){
    return(
        <View>
        <Text style={{color:'white'}}>
            {refresh.toLocaleTimeString("pl-PL", {timeZone: timeZone})}
        </Text>
      </View>
    )
}