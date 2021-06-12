import React from 'react';
import {View, Text, Button} from 'react-native';

const Tela2 = ({navigation, route}) => {
    return(
        <View>            
            <Text>{route.params.texto}</Text>
            <Button
                title="Clicar"
                onPress={() => {navigation.navigate("Tela3",{texto: "Tava na Tela 2"})}}
            />
        </View>
    )
}

export default Tela2;