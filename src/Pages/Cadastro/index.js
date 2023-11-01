import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";
import * as Animatable from 'react-native-animatable';

export default function App({ navigation }) {
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

      // Navegar para a página de usuários após o cadastro
      navigation.navigate("User");
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
      <Image
        source={require("./assets/images/happymk.png")}
        style={styles.image}
      />
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
            <Animatable.Text
              animation="bounceIn"
              style={styles.buttonText}
              onPress={handleSubmit}
              disabled={!isReady}
            >
              Enviar
            </Animatable.Text>
         </TouchableOpacity>
       </Animatable.View>
    </View>
  );
}
 