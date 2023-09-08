import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#73ac31",
    },

        button: {
            backgroundColor: "#785533",
            padding: 10,
            borderRadius: 10,
            textAlign: "center",
            borderBottomColor: "000",
            width: 170,
            shadowColor: "#000", // Cor da sombra
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25, // Opacidade da sombra
            shadowRadius: 3.84, // Raio da sombra
            elevation: 5, // Elevação para Android (tem suporte limitado)
          },

          button1: {
            backgroundColor: "#785533",
            padding: 10,
            borderRadius: 10,
            textAlign: "center",
            borderBottomColor: "000",
            marginTop: 20,
            width: 170,
            shadowColor: "#000", // Cor da sombra
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25, // Opacidade da sombra
            shadowRadius: 3.84, // Raio da sombra
            elevation: 5, // Elevação para Android (tem suporte limitado)
          },

          title: {
            
            marginTop: "10%",
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 16,
            color: "#fff",
          },
          subtitle: {
            marginTop: "10%",
            fontSize: 18,
            marginBottom: 16,
            color: "#fff",
          },
      
      buttonPressed: {
        backgroundColor: "#5bcdf7",
      },
      buttonText: {
        fontWeight: "bold",
        color: "#73ac31",
        fontSize: 16,
      },

     
})