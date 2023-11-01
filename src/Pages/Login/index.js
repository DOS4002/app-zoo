import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";

export default function LoginPage({ navigation }) {
  const [isLoading, setIsLoading] = useState(false); // Define o estado inicial como falso

  useEffect(() => {
    checkUserRegistered(); // Verifica se o usuário já passou pela página de cadastro
  }, []);

  const checkUserRegistered = async () => {
    try {
      const value = await AsyncStorage.getItem('isUserRegistered');
      if (value == null) {
        // Se o usuário já passou pela página de cadastro, redirecione-o para a página de usuário
        navigation.navigate('Cadastro');
      } else {
        navigation.navigate('User');
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
      if (value == null){
        navigation.navigate("Cadastro");
      } else {
        navigation.navigate("User");
      }
      
    }, 2000); // Simulando o tempo de resposta de 2 segundos
  };

  const handleCadastro = async () => {
    try {
      // Define o AsyncStorage para indicar que o usuário já passou pela página de cadastro
      await AsyncStorage.setItem('isUserRegistered', 'true');
      setIsLoading(true); // Define isLoading como true ao iniciar o carregamento

      // Simulando uma chamada assíncrona, por exemplo, uma chamada de API
      setTimeout(() => {
        // Após a lógica de login, redefine isLoading como false
        setIsLoading(false);
        navigation.navigate("Login");
      }, 2000);
    } catch (error) {
      console.error("Erro ao definir o usuário como registrado: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/zooApp.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo ao AppZoo!</Text>

      <Text style={styles.subtitle}>Faça login para explorar o catálogo de animais.</Text>

      {isLoading ? ( // Renderiza o ActivityIndicator se isLoading for true
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
