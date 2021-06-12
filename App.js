import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './components/questao1/Tela1';
import Tela2 from './components/questao1/Tela2';
import Tela3 from './components/questao1/Tela3';


const Stack = createStackNavigator();
export default function App() {
  return (  
        
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
                name="Tela1"
                component={Tela1}
            />            
            <Stack.Screen
                name="Tela2"
                component={Tela2}
            />            
            <Stack.Screen
                name="Tela3"
                component={Tela3}
            />
            
          </Stack.Navigator>
        </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
