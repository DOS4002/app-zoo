import React, { useEffect, useState } from "react";
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
  const [isReady, setIsReady] = useState(false);


  AsyncStorage.setItem('Diego', nome);
  const handleSubmit = async () => {
    if (nome && email && senha) {
      if (senha === confirmarSenha) {
        try {
          await AsyncStorage.setItem('nome', nome);
          navigation.navigate('Cadastro', { nome });
        } catch (error) {
          console.error("Erro ao salvar os dados:", error);
        }
      } else {
        alert("A senha e a confirmação de senha devem ser iguais.");
      }
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  };
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setNome(text);
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
            secureTextEntry;
          }}
          value={senha}
          placeholder="Digite a sua senha"
          placeholderTextColor="#A9A9A9"
          placeholderStyle={{ fontSize: 16 }}
        />

        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setConfirmarSenha(text);
          }}
          value={confirmarSenha}
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
 