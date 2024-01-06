import { StyleSheet, Text, View, Button, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';
import Card from './plakietki';
import { WorldTimeZones } from './strefyCzasowe';

export default function App() {

  function roulette() {
      return(
        console.log('klikniete')
      )
  }

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

      <View style={styles.button}>
        <Text style={styles.font}>Polska: {refresh.toLocaleTimeString()}</Text>
      </View>
    
    <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
    <Card city='Londyn' refresh={refresh} timeZone='Europe/London' />
    <Card city='Nowy Jork' refresh={refresh} timeZone='America/New_York'/>
    <Card city='Tokio' refresh={refresh} timeZone='Asia/Tokyo' />
    <Card city='Nairobi' refresh={refresh} timeZone='Africa/Nairobi' />
    <Card city='Troll' refresh={refresh} timeZone='Antarctica/Troll' />
    </View>
    <Pressable style={styles.button} onPress={roulette}><Text style={{color:'#d8f3dc'}}>Losuj!</Text></Pressable>
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
    fontSize: 45,
    padding:5,
  },

  button: {
    borderWidth: 1,
    borderColor: '#2d6a4f',
    borderRadius: 5,
    backgroundColor: '#081c15',
    color: '#d8f3dc',
    padding: 5.5,
    marginTop:10,
  }
});
