import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import * as Animatable from 'react-native-animatable';


import styles from "./styles";

export default function LoginPage({ navigation}) {

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  
  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Catalogo");
    }, 1000)}

  const handleHome = () => {
    setIsLoading2(true);
      setTimeout(() => {
        setIsLoading2(false);
        navigation.navigate('Home');
    },1000)}

  return (
    <View style={styles.container}>
        
      <Image
        source={require("./assets/images/monkey.png")}
        style={styles.logo}
      />  
      <Text style={styles.title}>Conecte sua conta para ver o catálogo!</Text>
      
      <Animatable.View animation="bounceIn" style={styles.button1}>
        <Text style={styles.label}>Seja parte da nossa comunidade! Cadastre-se agora para desbloquear todo o potencial de nossa plataforma. Junte-se a milhares de usuários que já estão aproveitando os benefícios exclusivos de ser membro.</Text>
      
         <Text style={styles.noAccount}>Vamos para a página de catálogo?</Text>

       </Animatable.View>
      <Animatable.View animation="bounceIn" style={styles.buttons}>
          <TouchableOpacity style={styles.btYes}onPress={handleLogin}>
            {isLoading ? (
              <Text style={styles.buttonText}> Entrando... </Text>
            ) : (
              <Animatable.Text
                animation="bounceIn"
                style={styles.buttonText}
              >
                Sim
              </Animatable.Text>
            )}
         </TouchableOpacity>
          <TouchableOpacity style={styles.btNo}>
            {isLoading2 ? (
              <Text style={styles.buttonText}> Voltando... </Text>
            ) : (
              <Animatable.Text
                animation="bounceIn"
                style={styles.buttonText}
                onPress={handleHome}
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

