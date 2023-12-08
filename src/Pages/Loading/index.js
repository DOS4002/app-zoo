import React,  { useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";

export default function ({ navigation, route }) {
    const { nome } = route.params || {};

  useEffect(() => {
    checkUserRegistered();
  }, []);

  const checkUserRegistered = async () => {
    try {
      const value = await AsyncStorage.getItem('nome');
      if (value !== null) {
        navigation.navigate('User', {nome: value });
      } else {
        navigation.navigate('Catalogo');
      }
    } catch (error) {
      console.error("Erro ao verificar o cadastro do usuário: ", error);
    }
  };
  const handleLogin = () => {
    AsyncStorage.setItem('nome', 'setNome'); 
    navigation.navigate('User');
  };

 

  return (
    <View style={styles.container}>
    </View>
   
  );
}
