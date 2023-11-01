import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import styles from "./styles";

export default function LoginPage({ navigation }) {


  const handleCadastro = () => {
    // Lógica para direcionar para a página de cadastro
    navigation.navigate("Cadastro");
  };

  return (
    <View style={styles.container}>
        
      <Image
        source={require("./assets/images/monkey.png")}
        style={styles.logo}
      />  
      <Text style={styles.title}>Seja bem-vindo ao AppZoo!</Text>
      
      <Text style={styles.subtitle}>Como você já é um dos nossos usuários do AppZoo, deseja entrar para ver o catálogo de animais que teremos neste final de semana?</Text>
      
      <Animatable.View animation="bounceIn" style={styles.button}>
          <TouchableOpacity >
            <Animatable.Text
              animation="bounceIn"
              style={styles.buttonText}
            >
              Sim
            </Animatable.Text>
         </TouchableOpacity>
       </Animatable.View>
      
      
        <Animatable.View animation="bounceIn" style={styles.button1}>
          <TouchableOpacity >
            <Animatable.Text
              animation="bounceIn"
              style={styles.buttonText}
              onPress={handleCadastro}
            >
              Não
            </Animatable.Text>
         </TouchableOpacity>
       </Animatable.View>
      
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Esqueceu a senha?</Text>
        <Text style={styles.footerText}>Termos de uso</Text>
      </View>
    </View>
  );
}

// Certifique-se de ajustar os estilos em seu arquivo de estilos (styles.js) de acordo com suas preferências
