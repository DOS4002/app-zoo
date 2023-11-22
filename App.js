import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Pages/Home";
import Cadastro from './src/Pages/cadastro';
import User from './src/Pages/User';
import Animals from './src/Pages/Animals';
import Catalogo from "./src/Pages/Catalogo";
import { Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();  

const LogoTitle = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require('./assets/icons8-cardápio-50.png')} // Substitua pelo caminho da sua imagem
        style={{ width: 30, height: 30, marginRight: 10 }}
      />
    </TouchableOpacity>
  );
};

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro} 
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
            }, // Aqui adicionamos a imagem no lado direito do cabeçalho
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Catalogo"
          component={Catalogo}
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
            headerRight: () => <LogoTitle  />, // Adicione a imagem ao cabeçalho
          })}
        />
        <Stack.Screen
          name="Animais"
          component={Animals}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
