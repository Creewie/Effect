import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function Card({city,refresh,timeZone}){
    return(
        <View style={styles.card}>
            <Text style={{color:'#77b6ea'}}>{city}</Text>
            <Text style={{color:'#77b6ea'}}>{refresh.toLocaleTimeString("pl-PL", {timeZone: timeZone})}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderColor: '#1a659e',
        borderRadius: 5,
        backgroundColor: '#001d3d',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 111,
        margin:3,
    },
})