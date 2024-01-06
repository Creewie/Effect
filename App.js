import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import Card from './plakietki';

export default function App() {

  const [refresh, setRefresh] = useState(new Date())

  function showTime(){
    const now = new Date();
    var currentTime = now.toLocaleTimeString();
    setRefresh(new Date())
  }
  setInterval(showTime, 1000);

  return (
    <View style={styles.container}>
    <ScrollView>

      <View>
        <Text style={styles.font}>Aktualny czas: {refresh.toLocaleTimeString()}</Text>
      </View>
      
    <Card refresh={refresh} timeZone='America/New_York'/>
    <Card refresh={refresh} timeZone='Asia/Tokyo' />
    <Card refresh={refresh} timeZone='Europe/London' />
    <Card refresh={refresh} timeZone='Africa/Nairobi' />
    <Card refresh={refresh} timeZone='Antarctica/Troll' />

    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    color: 'white',
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center'
  },
  font: {
    color:'white',
    fontSize: 35,
  }
});
