import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Pages/Login";
import Cadastro from './src/Pages/Cadastro';
import User from './src/Pages/User';
import Catalogo from "./src/Pages/Catalogo";
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();  
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} 
          options={{
            title: "Cadastre-se",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "bold",
            },
              
            headerStyle: {
              backgroundColor: "#73ac31",
    
              borderBottomColor: "#73ac31",
            },
          }}
        />
        <Stack.Screen name="User" component={User}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Catalogo" component={Catalogo}
            options={({ navigation }) => ({
              title: "Catalogo",
              headerTintColor: "#000",
              headerTitleStyle: {
                fontSize: 16,
                fontFamily: "Poppins",
                fontWeight: "bold",
              },
              headerStyle: {
                backgroundColor: "#f9f9f9",
                borderBottomColor: "#f9f9f9",
              },
            })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 