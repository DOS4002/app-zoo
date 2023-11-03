import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles'
export function ModalText({ handleClose }){
    return(
        <View style={styles.container}> 
            <View style={styles.content}>
                <Text style={styles.title}>Apenas aproveite!</Text>

                <Text style={styles.subtitile}>Aqui você pode observar os animais que estarão na exposição neste mês. Fique a vontade para visualizar e já comprar o seu ingresso para nos visitar!</Text>

                <TouchableOpacity style={styles.buttom} onPress={handleClose}>
                    <Text style={styles.buttonText}>Entendi</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}