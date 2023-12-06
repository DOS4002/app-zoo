import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import styles from "./styles";

export default function LoginPage({ navigation }) {

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleCadastro = () => {
    // Lógica para direcionar para a página de cadastro
    navigation.navigate("Cadastro");
  };

  useEffect(() => {
    checkUserRegistered(); // Verifica se o usuário já passou pela página de cadastro
  }, []);

  const checkUserRegistered = async () => {
    try {
      const value = await AsyncStorage.getItem('isUserRegistered');
      if (value !== null) {
        // Se o usuário já passou pela página de cadastro, redirecione-o para a página de usuário
        navigation.navigate('Catalogo');
      } else if (value === null){
        navigation.navigate('Cadastro');
      }
    } catch (error) {
      console.error("Erro ao verificar o cadastro do usuário: ", error);
    }
  };
  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Catalogo");
    },2000)}

  return (
    <View style={styles.container}>
        
      <Image
        source={require("./assets/images/monkey.png")}
        style={styles.logo}
      />  
      <Text style={styles.title}>Conecte sua conta para ver o catálogo!</Text>
      
      <Animatable.View animation="bounceIn" style={styles.button1}>
        <Text style={styles.label}>Seja parte da nossa comunidade! Cadastre-se agora para desbloquear todo o potencial de nossa plataforma. Junte-se a milhares de usuários que já estão aproveitando os benefícios exclusivos de ser membro.</Text>
      
         <Text style={styles.noAccount}>Não tem uma conta? <TouchableOpacity onPress={handleCadastro}><Text style={styles.link}>Cadastre-se</Text></TouchableOpacity></Text>

       </Animatable.View>
      <Animatable.View animation="bounceIn" style={styles.buttons}>
          <TouchableOpacity style={styles.btYes}>
            {isLoading ? (
              <Text style={styles.buttonText}> Entrando... </Text>
            ) : (
              <Animatable.Text
                animation="bounceIn"
                style={styles.buttonText}
                onPress={handleLogin}
              >
                Sim
              </Animatable.Text>
            )}
         </TouchableOpacity>
          <TouchableOpacity style={styles.btNo}>
            {isLoading ? (
              <Text style={styles.buttonText}> Entrando... </Text>
            ) : (
              <Animatable.Text
                animation="bounceIn"
                style={styles.buttonText}
                onPress={handleLogin}
              >
                Não
              </Animatable.Text>
            )}
         </TouchableOpacity>
       </Animatable.View>
      
      
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Termos de uso</Text>
      </View>
    </View>
  );
}

// Certifique-se de ajustar os estilos em seu arquivo de estilos (styles.js) de acordo com suas preferências
