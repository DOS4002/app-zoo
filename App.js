import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Pages/Home";
import Cadastro from './src/pages/Cadastro';
import User from './src/Pages/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Catalogo from "./src/pages/Catalogo";
import Terrritorio from "./src/pages/Territorio";
import { Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';


const [menuVisible, setMenuVisible] = useState(false); 
const LogoTitle = () => {
  const openModal = () => {
       setMenuVisible(true);
  };
  return (
    <TouchableOpacity onPress={openModal}>
      <Image
        source={require('./assets/settings.png')}
        style={{ width: 30, height: 30, marginRight: 10 }}
      />
    </TouchableOpacity>
  );
};

const LogoTitle2 = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('./assets/house.png')}
        style={{ width: 30, height: 30, marginLeft: 10 }}
        onPress={() => navigation.navigate('Catalogo')}
      />
    </TouchableOpacity>
  );  
}

export default function App(){

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
            }, // Aqui adicionamos a imagem no lado direito do cabeçalho
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
            title: "AppZoo",
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
            headerRight: () => <LogoTitle  />, // Adicione a imagem ao cabeçalho
          })}
        />
        <Stack.Screen
          name="Territorio"
          component={Terrritorio}
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
            headerLeft: () => <LogoTitle2 navigation={navigation} />, // Adicione a imagem ao cabeçalho
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
