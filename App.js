import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from "react-native-web";
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from "./src/Pages/Login";
import Cadastro from './src/Pages/Cadastro';
import User from './src/Pages/User';
const Stack = createNativeStackNavigator();


export default function App() { 

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="User" component={User}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
