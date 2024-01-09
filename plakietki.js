import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function Card({city,refresh,timeZone}){
    return(
        <View style={styles.card}>
            <Text style={{color:'#b7e4c7'}}>{city}</Text>
            <Text style={{color:'#b7e4c7'}}>{refresh.toLocaleTimeString("pl-PL", {timeZone: timeZone})}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderColor: '#2d6a4f',
        borderRadius: 5,
        backgroundColor: '#081c15',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 111,
        margin:3,
    },
})