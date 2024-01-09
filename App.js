import { StyleSheet, Text, View, Button, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';
import Card from './plakietki';
import { WorldTimeZones } from './strefyCzasowe';

export default function App() {

  function roulette() {
    const rndm = Math.floor(Math.random() * WorldTimeZones.length);

      return(
       setCards([...cards, {city: WorldTimeZones[rndm].split("/").pop().replaceAll("_", " ").replaceAll('-',' '), timeZone: WorldTimeZones[rndm]}])
      )
  }

  const plakietka = [
    {city:'Londyn', timeZone: 'Europe/London'},
    {city:'Nowy Jork', timeZone:'America/New_York'},
    {city:'Tokio', timeZone:'Asia/Tokyo'},
    {city:'Nairobi', timeZone:'Africa/Nairobi'},
    {city:'Troll', timeZone:'Antarctica/Troll'},
  ]

  const [cards , setCards] = useState(plakietka)
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
      {
        cards.map( change => {
          return(
        <View>
              <Card city={change.city} refresh={refresh} timeZone={change.timeZone} />
        </View>
        )})
      }
    
   
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