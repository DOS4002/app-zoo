import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, ImageBackground, Modal, Button } from 'react-native';
import 'react-native-gesture-handler';
import styles from "./styles";
export default function TerritorioPage(navigation) {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState({});


    const animalsDescription = [
        {
          id: 1,
          title: 'Gorila',
          description: 'O Urso Polar é um mamífero carnívoro encontrado principalmente no Ártico. Adaptado ao frio extremo, possui uma camada de gordura e uma pelagem densa que o protegem das baixas temperaturas. É um excelente nadador e se alimenta principalmente de focas. Sua reprodução ocorre geralmente em tocas no gelo.',
        },
        
        {
          id: 2,
          title: 'Puma',
          description: 'O Leão é um felino majestoso, conhecido por sua juba e força impressionante. Vive em grupos chamados de "coalizões" ou "orgulhos", liderados por fêmeas. Caçam em equipe e são predadores de topo na savana africana. A reprodução é um papel vital dos leões, com machos protegendo territórios e fêmeas cuidando dos filhotes.',
        },
        {
          id: 3,
          title: 'Girafa',
          description: 'Os Elefantes são os maiores mamíferos terrestres, conhecidos por suas trombas distintas e enormes presas. Vivem em grupos familiares liderados por fêmeas. São herbívoros e têm um papel crucial na manutenção dos ecossistemas. Sua reprodução é lenta, com gestações longas e cuidado parental prolongado.',
        },
        {
          id: 4,
          title: 'Leopardo',
          description: 'O Tigre é um grande felino encontrado principalmente em florestas e habitats densos na Ásia. Solitários e territoriais, caçam principalmente à noite. Sua reprodução é delicada devido à perda de habitat e caça ilegal. Os tigres estão ameaçados e são alvo de conservação.',
        },
        {
          id: 5,
          title: 'Guepardo',
          description: 'Os Rinocerontes são mamíferos herbívoros com pele espessa e chifres distintivos. São encontrados em várias partes da África e Ásia. São animais solitários e territorialistas. Sua reprodução é lenta, com baixas taxas de reprodução. Estão ameaçados principalmente devido à caça furtiva.',
        },
        {
          id: 6,
          title: 'Castor',
          description: 'O Hipopótamo é um animal semiaquático encontrado principalmente em rios e lagos da África. Apesar de seu tamanho e aparência pacífica, são conhecidos por serem agressivos e territorialistas. São herbívoros e se reproduzem em áreas aquáticas, com as fêmeas protegendo os filhotes.',
        },
        
      ];
    const cardsGrid = [
        {
          id: 1,
          url: 'https://cdn.pixabay.com/photo/2020/09/12/09/26/gorilla-5565295_1280.jpg',
          title: 'Gorila',
        },
        {
          id: 2,
          url: 'https://cdn.pixabay.com/photo/2017/01/15/19/07/puma-1982452_1280.jpg',
          title: 'Puma',
        },
        {
          id: 3,
          url: 'https://cdn.pixabay.com/photo/2017/04/15/20/14/giraffe-2233366_1280.jpg',
          title: 'Girafa',
        },
        {
          id: 4,
          url: 'https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515508_1280.jpg',
          title: 'Leopardo',
        },
        {
          id: 5,
          url: 'https://cdn.pixabay.com/photo/2022/06/22/10/47/cheetah-7277665_1280.jpg',
          title: 'Guepardo',
        },
        {
          id: 6,
          url: ('https://cdn.pixabay.com/photo/2016/06/10/16/23/beaver-1448389_1280.jpg'),
          title: 'Castor',
        },
    ];

    const handleTerritorio = (animal) => {
        setSelectedAnimal(animal);
        setModalVisible(true);
      };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.cardContainerGrid}>
      {cardsGrid.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => handleTerritorio(item)}
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

    
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedAnimal.title}</Text>
            <Text style={styles.modalText}>{animalsDescription.find(animal => animal.title === selectedAnimal.title)?.description}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  </ScrollView>
  );
}

