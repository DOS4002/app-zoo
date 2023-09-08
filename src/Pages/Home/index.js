import React, { useState } from "react";
import { StatusBar, Text, View, Image, TouchableOpacity, StyleSheet } from "react-native"; // Adicionei Image aqui
import styles from "./styles";


export default function Login({ navigation }) {


  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/zooApp.png")}
        style={{ width: 400, height: 400 }}
      />    
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
