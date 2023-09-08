import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import styles from "./styles";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [animalPreferido, setAnimalPreferido] = useState("");

  const handleSubmit = () => {
    // Aqui você pode processar os dados do formulário
    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Telefone:", telefone);
    console.log("Email:", email);
    console.log("Animal Preferido:", animalPreferido);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/zooApp.png")}
        style={styles.image}
      />
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNome(text)}
        value={nome}
        placeholder="Digite o seu nome"
      />

      <Text style={styles.label}>Idade</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setIdade(text)}
        value={idade}
        keyboardType="numeric"
        placeholder="Digite a sua idade"
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTelefone(text)}
        value={telefone}
        keyboardType="phone-pad"
        placeholder="Digite o seu telefone"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        placeholder="Digite o seu email"
      />

      <Text style={styles.label5}>Qual animal preferido?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAnimalPreferido(text)}
        value={animalPreferido}
        placeholder="Digite o seu animal preferido"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
