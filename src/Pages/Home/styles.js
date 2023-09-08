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
            elevation: 5,
          },
      
      buttonPressed: {
        backgroundColor: "#5bcdf7",
      },
      buttonText: {
        fontWeight: "bold",
        color: "#73ac31",
        fontSize: 16,
            },

      welcomeText: {
        fontSize: 24, // Tamanho da fonte desejado
        fontWeight: "bold", // Peso da fonte (por exemplo, bold para negrito)
        marginBottom: 16, // Espaçamento inferior
      },

     
})