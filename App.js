
import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Pages/Login";
import Cadastro from './src/Pages/Cadastro';
import User from './src/Pages/User';
import Catalogo from "./src/Pages/Catalogo";
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
        <Stack.Screen name="Catalogo" component={Catalogo}
            options={{
              title: "Catalogo",
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
