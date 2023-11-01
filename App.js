import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from "react-native-web";
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from "./src/Pages/Login";
import Cadastro from "./src/Pages/Cadastro";
import User from "./src/Pages/User";
const Stack = createNativeStackNavigator();


export default function App() { 

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login}
        options={{
          title: "AppZoo",
          headerStyle: {backgroundColor: '#73ac31',
          shadowOffset: { width: 0, height: 2 }, 
          shadowColor: 'black', 
          shadowOpacity: 0.5,
          shadowRadius: 4,  },
          headerTintColor: "#fff",
        }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} 
          options={{
            title: "Faça o seu Cadastro",
            headerStyle: {backgroundColor: '#73ac31',
            shadowOffset: { width: 0, height: 2 }, 
            shadowColor: 'black', 
            shadowOpacity: 0.5,
            shadowRadius: 4,  },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen name="User" component={User}
          options={{
            title: "Login",
            headerStyle: {backgroundColor: '#73ac31',
            shadowOffset: { width: 0, height: 2 }, 
            shadowColor: 'black', 
            shadowOpacity: 0.5,
            shadowRadius: 4,  },
            headerTintColor: "#fff",
          }}
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
