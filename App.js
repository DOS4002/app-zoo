import React from 'react';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Pages/Home";
import Cadastro from './src/pages/Cadastro';
import User from './src/Pages/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Catalogo from "./src/pages/Catalogo";
import Terrritorio1 from "./src/pages/Areas/Territorio1";
import Terrritorio2 from "./src/pages/Areas/Territorio2";
import Terrritorio3 from "./src/pages/Areas/Territorio3";
import Terrritorio4 from "./src/pages/Areas/Territorio4";
import { Image, TouchableOpacity, Modal } from 'react-native';
import 'react-native-gesture-handler';

const [modalVisible, setModalVisible] = useState(false);

<<<<<<< HEAD
const toggleModal = () => {
  setModalVisible(!modalVisible);
}

const LogoTitle = ({onPress}) => {
=======
const [menuVisible, setMenuVisible] = useState(false); 
const LogoTitle = () => {
  const openModal = () => {
       setMenuVisible(true);
  };
>>>>>>> 15531651c138e817889a04844ce363f13a5c74f7
  return (
    <TouchableOpacity onPress={openModal}>
      <Image
        source={require('./assets/settings.png')}
        style={{ width: 30, height: 30, marginRight: 10 }}
        onPress={onPress}

      />
    </TouchableOpacity>
  );
};

const LogoTitle2 = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('./assets/home.png')}
        style={{ width: 30, height: 30, marginLeft: 10 }}
        onPress={() => navigation.navigate('Catalogo')}
      />
    </TouchableOpacity>
  );  
}

export default function App(){

<<<<<<< HEAD
 const Stack = createNativeStackNavigator();
=======
  useEffect(() => {
    checkFirstTimeUser();
  }, []); 

  const checkFirstTimeUser = async () => {
    try {
      const userAlreadyEntered = await AsyncStorage.getItem('@user_entered');
      
      if (!userAlreadyEntered) {
        await AsyncStorage.setItem('@user_entered', 'true');
        navigateToCadastro(); // Redireciona para a página de cadastro
      } else {
        navigateToUser(); // Redireciona para a página de usuário
      }
    } catch (error) {
      console.error('Erro ao verificar o usuário:', error);
    }
  };

  const Stack = createNativeStackNavigator();

  const navigateToCadastro = () => {
    navigation.navigate('Cadastro');
  };

  const navigateToUser = () => {
    navigation.navigate('User');
  };
>>>>>>> 15531651c138e817889a04844ce363f13a5c74f7
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro} 
          options={{
            title: "Cadastre-se",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#73ac31",
              borderBottomColor: "#73ac31",
            },
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Catalogo"
          component={Catalogo}
          options={({ navigation }) => ({
            title: "Menu",
            headerTintColor: "#73ac31",
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#1D1D1D",
              borderBottomColor: "#1D1D1D",
            },
            headerRight: () => <LogoTitle  />,
          })}
        />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Seu conteúdo de menu/modal aqui...</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <Stack.Screen
          name="Territorio1"
          component={Terrritorio1}
          options={({ navigation }) => ({
            title: "Territorio 1",
            headerTintColor: "#73ac31",
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#1D1D1D",
              borderBottomColor: "#1D1D1D",
            },
            headerLeft: () => <LogoTitle2 navigation={navigation} />,
<<<<<<< HEAD
          })}
        />
        <Stack.Screen
          name="Territorio2"
          component={Terrritorio2}
          options={({ navigation }) => ({
            title: "Territorio 2",
            headerTintColor: "#73ac31",
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#1D1D1D",
              borderBottomColor: "#1D1D1D",
            },
            headerLeft: () => <LogoTitle2 navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Territorio3"
          component={Terrritorio3}
          options={({ navigation }) => ({
            title: "Territorio 3",
            headerTintColor: "#73ac31",
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#1D1D1D",
              borderBottomColor: "#1D1D1D",
            },
            headerLeft: () => <LogoTitle2 navigation={navigation} />
          })}
        />
        <Stack.Screen
          name="Territorio4"
          component={Terrritorio4}
          options={({ navigation }) => ({
            title: "Territorio 4",
            headerTintColor: "#73ac31",
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#1D1D1D",
              borderBottomColor: "#1D1D1D",
            },
            headerLeft: () => <LogoTitle2 navigation={navigation} />,
=======
>>>>>>> 15531651c138e817889a04844ce363f13a5c74f7
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
