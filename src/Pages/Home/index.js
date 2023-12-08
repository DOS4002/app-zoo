import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

import styles from "./styles";


export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(false); 

  const handleLogin = () => {
    setIsLoading(true); 
    setTimeout(() => {
      setIsLoading(false);
        navigation.navigate("User");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("./assets/images/zooApp.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Animatable.View delay={500} animation="fadeInUp" style={styles.containerText}>
        <Text style={styles.title}>Bem-vindo ao ZooApp!</Text>

        <Text style={styles.subtitle}>Faça login para explorar o catálogo de animais.</Text>

        {isLoading ? ( 
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
          </>
        )}
      </Animatable.View>
    </View>
   
  );
}
