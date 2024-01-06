import { StyleSheet, Text, View } from 'react-native';

export default function showTime(){
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    // console.clear();
    // console.log(`Aktualny czas: ${currentTime}`);
    <View>
        <Text>Aktualny czas:{currentTime}</Text>
    </View>
}

setInterval(showTime, 1000);