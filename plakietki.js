import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function Card({city,refresh,timeZone}){
    return(
        <View style={styles.card}>
            <Text style={{color:'#d8f3dc'}}>{city}</Text>
            <Text style={{color:'#d8f3dc'}}>{refresh.toLocaleTimeString("pl-PL", {timeZone: timeZone})}</Text>
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
        width: 90,
        margin:3
    },
})