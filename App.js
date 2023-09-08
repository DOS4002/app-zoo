import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/Pages/Home';
import Login from "./src/Pages/Login";
import Cadastro from "./src/Pages/Cadastro";

const Stack = createNativeStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{
            title: "CD ZOO",
            headerStyle: { 
              backgroundColor: '#785533',
              shadowOffset: { width: 0, height: 2 }, 
              shadowColor: 'black', 
              shadowOpacity: 0.5,
              shadowRadius: 4, 
             },
            headerTintColor: "#73ac31",
          }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{
            title: "LOGIN",
            headerStyle: {
              backgroundColor: '#785533',
              shadowOffset: { width: 0, height: 2 }, 
              shadowColor: 'black', 
              shadowOpacity: 0.5,
              shadowRadius: 4, 
            },
            headerTintColor: "#73ac31",    
          }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} 
          options={{
            title: "Faça o seu Cadastro",
            headerStyle: {backgroundColor: '#785533',
            shadowOffset: { width: 0, height: 2 }, 
            shadowColor: 'black', 
            shadowOpacity: 0.5,
            shadowRadius: 4,  },
            headerTintColor: "#73ac31",
          }}
        />
        <Stack.Screen name="Entrar" component={Entrar}
          options={{
            title: "Entre",
            headerStyle: {backgroundColor: '#785533',
            shadowOffset: { width: 0, height: 2 }, 
            shadowColor: 'black', 
            shadowOpacity: 0.5,
            shadowRadius: 4,  },
            headerTintColor: "#73ac31",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
