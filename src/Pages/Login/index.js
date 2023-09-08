import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import styles from "./styles";

export default function LoginPage({ navigation }) {
  const handleLogin = () => {
    // Lógica de login para usuários cadastrados
    console.log("Usuário já cadastrado");
  };

  const handleCadastro = () => {
    // Lógica para direcionar para a página de cadastro
    navigation.navigate("Cadastro");
  };

  return (
    <View style={styles.container}>
        
        <Image
        source={require("./assets/images/zooApp.png")}
        style={{ width: 200, height: 200 }}
      />  
      <Text style={styles.title}>Bem-vindo!</Text>
      
      <Text style={styles.subtitle}>Entre para ver </Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Entrar')}
      >
        <Text style={styles.buttonText}>Já sou cadastrado</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.buttonText}>Novo usuário</Text>
      </TouchableOpacity>
    </View>
  );
}

// Certifique-se de ajustar os estilos em seu arquivo de estilos (styles.js) de acordo com suas preferências
