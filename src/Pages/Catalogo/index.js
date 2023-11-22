import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Modal} from "react-native";
import { ModalText } from "../../../components/Modal";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import modal from '../../../components/Modal';
import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import styles from "./styles";
export default function CatalogPage({ navigation }) {
  
  const [modalVisible, setModalVisible] = useState(true);
  
  const CatalogCard = ({ imageSource, title }) => {
    return (
      <TouchableOpacity style={styles.cardContainer}>
        <Image source={imageSource} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const catalogData = [
    {
      id: 1,
      title: "Território 1",
      imageSource: require("./assets/images/panda.jpg"),
    },
    {
      id: 2,
      title: "Território 2",
      imageSource: require("./assets/images/tiger.jpg"),
    },
    {
      id: 3,
      title: "Território 3",
      imageSource: require("./assets/images/exposição.jpg"),
    },
    {
      id: 4,
      title: "Território 4",
      imageSource: require("./assets/images/panda.jpg"),
    },
    // Adicione mais itens conforme necessário
  ];
  
  return (
    <View style={styles.container}>
       {catalogData.map((item) => (
        <CatalogCard
          key={item.id}
          title={item.title}
          imageSource={item.imageSource}
          animationType="fade"
        />
      ))}
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalText handleClose={() => setModalVisible(false)}/>
      </Modal>
    </View>
  );
}