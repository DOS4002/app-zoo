import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Modal} from "react-native";
import { ModalText } from "../../../components/modal";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import modal from '../../../components/modal';
import styles from "./styles";
  
export default function CatalogPage({ navigation }) {
    
  const [modalVisible, setModalVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleCadastro = () => {
    // Lógica para direcionar para a página de cadastro
    navigation.navigate("Cadastro");
  };

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Catalogo");
    },2000)}

  return (
    <View style={styles.container}>
  
      <Text style={styles.title}>Conecte sua conta para ver o catálogo!</Text>
      
      <Text style={styles.subtitle}>Você já é um dos nossos usuários do AppZoo? deseja entrar para ver o catálogo de animais que teremos neste final de semana?</Text>
      <Animatable.View animation="bounceIn" style={styles.button1}>
        <Text style={styles.label}>Email</Text>
        <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setNome(text);
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
          setNome(text);
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

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalText handleClose={() => setModalVisible(false)}/>
      </Modal>
    </View>
  );
}