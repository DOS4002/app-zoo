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
          title: 'Urso Pardo',
          description: 'O Urso Polar é um mamífero carnívoro encontrado principalmente no Ártico. Adaptado ao frio extremo, possui uma camada de gordura e uma pelagem densa que o protegem das baixas temperaturas. É um excelente nadador e se alimenta principalmente de focas. Sua reprodução ocorre geralmente em tocas no gelo.',
        },
        
        {
          id: 2,
          title: 'Coala',
          description: 'O Leão é um felino majestoso, conhecido por sua juba e força impressionante. Vive em grupos chamados de "coalizões" ou "orgulhos", liderados por fêmeas. Caçam em equipe e são predadores de topo na savana africana. A reprodução é um papel vital dos leões, com machos protegendo territórios e fêmeas cuidando dos filhotes.',
        },
        {
          id: 3,
          title: 'Papagaio',
          description: 'Os Elefantes são os maiores mamíferos terrestres, conhecidos por suas trombas distintas e enormes presas. Vivem em grupos familiares liderados por fêmeas. São herbívoros e têm um papel crucial na manutenção dos ecossistemas. Sua reprodução é lenta, com gestações longas e cuidado parental prolongado.',
        },
        {
          id: 4,
          title: 'Tucano',
          description: 'O Tigre é um grande felino encontrado principalmente em florestas e habitats densos na Ásia. Solitários e territoriais, caçam principalmente à noite. Sua reprodução é delicada devido à perda de habitat e caça ilegal. Os tigres estão ameaçados e são alvo de conservação.',
        },
        {
          id: 5,
          title: 'Pinguim',
          description: 'Os Rinocerontes são mamíferos herbívoros com pele espessa e chifres distintivos. São encontrados em várias partes da África e Ásia. São animais solitários e territorialistas. Sua reprodução é lenta, com baixas taxas de reprodução. Estão ameaçados principalmente devido à caça furtiva.',
        },
        {
          id: 6,
          title: 'Cobra',
          description: 'O Hipopótamo é um animal semiaquático encontrado principalmente em rios e lagos da África. Apesar de seu tamanho e aparência pacífica, são conhecidos por serem agressivos e territorialistas. São herbívoros e se reproduzem em áreas aquáticas, com as fêmeas protegendo os filhotes.',
        },
        
      ];
    const cardsGrid = [
        {
          id: 1,
          url: 'https://cdn.pixabay.com/photo/2014/08/20/17/21/bear-422682_1280.jpg',
          title: 'Urso Pardo',
        },
        {
          id: 2,
          url: 'https://cdn.pixabay.com/photo/2011/09/28/23/19/koala-9960_1280.jpg',
          title: 'Coala',
        },
        {
          id: 3,
          url: 'https://cdn.pixabay.com/photo/2019/04/16/21/25/parrot-4132823_1280.jpg',
          title: 'Papagaio',
        },
        {
          id: 4,
          url: 'https://cdn.pixabay.com/photo/2018/10/14/16/58/toucan-3746909_1280.jpg',
          title: 'Tucano',
        },
        {
          id: 5,
          url: 'https://cdn.pixabay.com/photo/2021/12/31/11/51/penguin-6905568_1280.jpg',
          title: 'Pinguim',
        },
        {
          id: 6,
          url: ('https://cdn.pixabay.com/photo/2015/02/28/15/25/snakes-653639_1280.jpg'),
          title: 'cobra',
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

