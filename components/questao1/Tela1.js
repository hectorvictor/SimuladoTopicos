import React from 'react';
import {View, Text, Button} from 'react-native';


export default function Tela1({navigation}) {    
    return(
        <View>
            <Text>Ola Mundo !!!</Text>
            <Button title="clicar" 
            onPress={() => navigation.navigate('Tela2', {texto: 'Tava na tela 1'})
            }/>            
        </View>
    )
}
