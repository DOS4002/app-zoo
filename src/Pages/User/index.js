import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import styles from "./styles";
import database from "../../config/firebaseconfig";

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
      
      <Text style={styles.subtitle}>Você já é um dos nossos usuários do AppZoo? deseja entrar para ver o catálogo de animais que teremos neste final de semana?</Text>
      <Animatable.View animation="bounceIn" style={styles.button1}>
        <Text style={styles.label}>Email</Text>
        <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setEmail(text);
          checkIfReady();
        }}
        value={email}
        placeholder="Digite o seu email"
        placeholderTextColor="#A9A9A9"
        placeholderStyle={{ fontSize: 16 }}
        
         />
          <Text style={styles.label}>Senha</Text>
        <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setSenha(text);
          checkIfReady();
        }}
        value={senha}
        placeholder="Digite a sua senha"
        placeholderTextColor="#A9A9A9"
        placeholderStyle={{ fontSize: 16 }}
        
         />
         <Text style={styles.noAccount}>Não tem uma conta? <TouchableOpacity onPress={handleCadastro}><Text style={styles.link}>Cadastre-se</Text></TouchableOpacity></Text>

       </Animatable.View>
      <Animatable.View animation="bounceIn" style={styles.button}>
          <TouchableOpacity >
            {isLoading ? (
              <Text style={styles.buttonText}> Entrando... </Text>
            ) : (
              <Animatable.Text
                animation="bounceIn"
                style={styles.buttonText}
                onPress={handleLogin}
              >
                Entrar
              </Animatable.Text>
            )}
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
