import React from 'react';
import {View, Text, Button} from 'react-native';

const Tela3 = ({navigation,route}) => {
    return(
        <View>
            <Text>{route.params.texto}</Text>
            <Button
                title="clicar"
                onPress={() => {navigation.navigate("Tela1")}}
            />
        </View>
    )
}

export default Tela3;