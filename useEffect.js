import { View, Text, Button } from 'react-native';
import { useEffect, useState } from 'react';

const UseEffectComponent = () => {
    
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log(`Komponent został zamontowany ${counter}`)
        return(console.log('Komponent został odmontowany'))

    }, [counter])

    return(
        <View>
            <Text>Licznik: {counter}</Text>
            <Button onPress={()=>setCounter(counter+1)} title='Stuart' />
        </View>
    )

}
export default UseEffectComponent;