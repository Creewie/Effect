import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [refresh, setRefresh] = useState()

  function showTime(){
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    setRefresh(currentTime)
  }
  setInterval(showTime, 1000);

  return (
    <View style={styles.container}>
      <Text style={styles.font}>Aktualny czas: {refresh}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  font: {
    fontSize: 35,
  }
});
