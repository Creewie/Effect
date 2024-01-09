import { StyleSheet, Text, View, Button, ScrollView, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import Card from './plakietki';
import { WorldTimeZones } from './strefyCzasowe';

export default function App() {
  function roulette() {
    if (WorldTimeZones.length <= 0) {
      alert("To już wszystkie strefy czasowe!")
      return
      }
    const rndm = Math.floor(Math.random() * WorldTimeZones.length);
    setCards([...cards, {city: WorldTimeZones[rndm].split("/").pop().replaceAll("_", " ").replaceAll('-',' '), timeZone: WorldTimeZones[rndm]}])
    WorldTimeZones.splice(rndm, 1)
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

  function czas(){
      new Date().toLocaleString("pl-PL", {timeZone: "Europe/Warsaw"})
    setRefresh(new Date())
  }
  
  useEffect(()=>{
    const tick = setInterval(czas, 1000);
    return()=>clearInterval(tick)
  },[])


  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={{alignItems:'center', justifyContent:'center', margin:'auto'}}>

      <View style={[styles.button,{margin:5}]}>
        <Text style={styles.font}>Polska: {refresh.toLocaleTimeString()}</Text>
      </View>
    
    <View style={{flex:1, flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
      {
        cards.map( change => {
          return(
        <View key={change.timeZone}>
              <Card city={change.city} refresh={refresh} timeZone={change.timeZone} />
        </View>
        )})
      }
    
    </View>
    <Pressable style={styles.button} onPress={roulette}><Text style={{color:'#d8f3dc'}}>Losuj strefę czasową!</Text></Pressable>
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
    color:'#d8f3dc',
    fontSize: 45,
    padding:5,
  },

  button: {
    borderWidth: 1,
    borderColor: '#2d6a4f',
    borderRadius: 5,
    backgroundColor: '#081c15',
    color: '#95d5b2',
    padding: 5.5,
    marginTop:10,
  }
});