import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import Card from './plakietki';
import { WorldTimeZones } from './strefyCzasowe';

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
    <ScrollView contentContainerStyle={{alignItems:'center', margin:'auto'}}>

      <View>
        <Text style={styles.font}>Polska: {refresh.toLocaleTimeString()}</Text>
      </View>
    
    <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
    <Card city='Londyn' refresh={refresh} timeZone='Europe/London' />
    <Card city='Nowy Jork' refresh={refresh} timeZone='America/New_York'/>
    <Card city='Tokio' refresh={refresh} timeZone='Asia/Tokyo' />
    <Card city='Nairobi' refresh={refresh} timeZone='Africa/Nairobi' />
    <Card city='Troll' refresh={refresh} timeZone='Antarctica/Troll' />
    </View>

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
    justifyContent: 'center',
  },
  font: {
    color:'#b7e4c7',
    fontSize: 35,
  }
});
