import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import styles from "./styles";

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de login
    // Verifique se o email e a senha correspondem a um usuário cadastrado
    // Se corresponderem, você pode navegar para a página principal ou fazer outra ação
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/zooApp.png")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.title}>Bem-vindo!</Text>
      
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSenha(text)}
        value={senha}
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />
    </View>
    );
}