import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

import styles from "./styles";

export default function LoginPage({ navigation }) {
  const [isLoading, setIsLoading] = useState(false); // Define o estado inicial como falso

  useEffect(() => {
    checkUserRegistered(); // Verifica se o usuário já passou pela página de cadastro
  }, []);

  const checkUserRegistered = async () => {
    try {
      const value = await AsyncStorage.getItem('isUserRegistered');
      if (value !== null) {
        // Se o usuário já passou pela página de cadastro, redirecione-o para a página de usuário
        navigation.navigate('Login');
      } 
    } catch (error) {
      console.error("Erro ao verificar o cadastro do usuário: ", error);
    }
  };

  const handleLogin = () => {
    setIsLoading(true); // Define isLoading como true ao iniciar o carregamento

    // Simulando uma chamada assíncrona, por exemplo, uma chamada de API
    setTimeout(() => {
      // Após a lógica de login, redefine isLoading como false
      setIsLoading(false);
  
        navigation.navigate("User");
    
      
    }, 2000); // Simulando o tempo de resposta de 2 segundos
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("./assets/images/zooApp.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Animatable.View delay={500} animation="fadeInUp" style={styles.containerText}>
        <Text style={styles.title}>Bem-vindo ao ZooApp!</Text>

        <Text style={styles.subtitle}>Faça login para explorar o catálogo de animais.</Text>

        {isLoading ? ( // Renderiza o ActivityIndicator se isLoading for true
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
          </>
        )}
      </Animatable.View>
    </View>
   
  );
}
