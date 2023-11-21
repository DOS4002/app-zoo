import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'
import Catalogo from '../../src/Pages/Catalogo'; 


const Drawer = createDrawerNavigator();
export function Drawer() {
    return(
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Catalogo}/>
          <Drawer.Screen name="Configurações" component={Catalogo}/>
          <Drawer.Screen name="Animais" component={Catalogo}/>
          
        </Drawer.Navigator>
      ) 
}