  import React, { useState, useEffect } from "react";
  import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, FlatList, Dimensions, ImageBackground} from "react-native";
  import { ModalText } from "../../../components/Modal";
  import Icon from 'react-native-vector-icons/FontAwesome';
  import * as Animatable from 'react-native-animatable';
  import modal from '../../../components/Modal';
  import 'react-native-gesture-handler';
  import styles from "./styles";
  export default function CatalogPage({ navigation }) {
    
    const {width} = Dimensions.get("window");

    const [modalVisible, setModalVisible] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    
    /*const catalogData = [
      {
        id: 1,
        url: 'https://c0.wallpaperflare.com/preview/206/737/155/zoo-italy-bologna-olhos.jpg'
      },
      {
        id: 2,
        url: 'https://c0.wallpaperflare.com/preview/22/58/365/zoo-italy-bologna-zoologico.jpg'
      },
      {
        id: 3,
        url: 'https://c0.wallpaperflare.com/preview/24/675/688/japan-tokyo-animais-bird.jpg'
      },
      {
        id: 4,
        url: 'https://c0.wallpaperflare.com/preview/880/585/91/zoo-italy-bologna-safari.jpg'
      },
    ];*/

    const cardsGrid = [
      {
        id: 1,
        url: 'https://cdn.pixabay.com/photo/2014/12/12/19/45/lion-565820_1280.jpg',
        title: 'Território 1',
      },
      {
        id: 2,
        url: 'https://cdn.pixabay.com/photo/2017/03/31/15/41/giraffe-2191662_1280.jpg',
        title: 'Território 2',
      },
      {
        id: 3,
        url: 'https://cdn.pixabay.com/photo/2020/04/22/20/05/wadi-rum-5079834_1280.jpg',
        title: 'Território 3',
      },
      {
        id: 4,
        url: 'https://cdn.pixabay.com/photo/2023/05/30/21/03/grey-heron-8030000_1280.jpg',
        title: 'Território 4',
      },
      {
        id: 5,
        url: 'https://cdn.pixabay.com/photo/2022/05/21/21/47/river-7212351_1280.jpg',
        title: 'Território 5',
      },
      {
        id: 6,
        url: ('https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg'),
        title: 'Território 6',
      },
    ];


    const handleTerritorio = () => {
      navigation.navigate("Territorio");
    };
    return (
      <View style={styles.container}>
        <View style={styles.cardContainerGrid}>
      {cardsGrid.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => handleTerritorio()}
        >
          <View style={styles.cardImageContainer}>
            <ImageBackground
              source={{ uri: item.url }}
              style={styles.cardImage}
              blurRadius={0.5}
            >
              <View style={styles.imageOverlay} />
            </ImageBackground>
          </View>
          <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>

        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <ModalText handleClose={() => setModalVisible(false)}/>
        </Modal>
      </View>
    );
  }