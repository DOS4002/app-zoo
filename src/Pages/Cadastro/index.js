import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";
import * as Animatable from 'react-native-animatable';
import { isLoading } from "expo-font";

export default function App({ navigation }) {
  const [isLoading, setIsLoading] = useState(false); 
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [isReady, setIsReady] = useState(false); // Estado para controlar se o formulário está pronto para ser enviado

  const handleSubmit = async () => {
     
    try {
      // Aqui você pode processar os dados do formulário e armazená-los no AsyncStorage
      const userData = {
        nome: nome,
        idade: idade,
        telefone: telefone,
        email: email,
        senha: senha
      };

      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log("Dados do usuário armazenados com sucesso!");

      setIsLoading(true); // Define isLoading como true ao iniciar o carregamento

    // Simulando uma chamada assíncrona, por exemplo, uma chamada de API
    setTimeout(() => {
      // Após a lógica de login, redefine isLoading como false
      setIsLoading(false);
  
        navigation.navigate("User");
    
      
    }, 2000); //
    } catch (error) {
      console.error("Erro ao armazenar os dados do usuário: ", error);
    }

    

    
  };

  // Função para verificar se todos os campos obrigatórios estão preenchidos
  const checkIfReady = () => {
    if (nome && idade && telefone && email && senha && senha === confirmarSenha) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceInLeft" style={styles.containerHeader}>
        <Text style={styles.title}>Cadastre-se</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setNome(text);
            checkIfReady();
          }}
          value={nome}
          placeholder="Digite o seu nome"
          placeholderTextColor="#A9A9A9"
          placeholderStyle={{ fontSize: 16 }}
          
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setTelefone(text);
            checkIfReady();
          }}
          value={telefone}
          keyboardType="phone-pad"
          placeholder="Digite o seu telefone"
          placeholderTextColor="#A9A9A9"
          placeholderStyle={{ fontSize: 16 }}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setEmail(text);
            checkIfReady();
          }}
          value={email}
          keyboardType="email-address"
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
          secureTextEntry={true}
          placeholder="Digite a sua senha"
          placeholderTextColor="#A9A9A9"
          placeholderStyle={{ fontSize: 16 }}
        />

        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setConfirmarSenha(text);
            checkIfReady();
          }}
          value={confirmarSenha}
          secureTextEntry={true}
          placeholder="Confirme a sua senha"
          placeholderTextColor="#A9A9A9"
          placeholderStyle={{ fontSize: 16 }}
        />
         <Animatable.View animation="bounceIn" style={styles.button}>
          
           
          <TouchableOpacity >
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Animatable.Text
                animation="bounceIn"
                style={styles.buttonText}
                onPress={handleSubmit}
                disabled={!isReady}
              >
                Enviar
              </Animatable.Text>
            )}
         </TouchableOpacity>
          
       </Animatable.View>
      </Animatable.View>

   
    </View>
  );
}
 