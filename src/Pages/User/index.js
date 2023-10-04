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
      <Text style={styles.title}>Seja bem-vindo ao AppZoo!</Text>
      
      <Text style={styles.subtitle}>Como você já é um dos nossos usuários do AppZoo, deseja entrar para ver o catálogo de animais   que teremos neste final de semana?</Text>
      
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sim</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.buttonText}>Não</Text>
      </TouchableOpacity>
    </View>
  );
}

// Certifique-se de ajustar os estilos em seu arquivo de estilos (styles.js) de acordo com suas preferências
